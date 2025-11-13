import {Router} from 'express';
import {generateToken} from '../utils/jwt.js'
import { inserirUsuario,VerificarUsuario,inserirAdmin,VerificarAdmin } from '../repository/loginRepository.js';

const endpoints = Router();

endpoints.post("/usuario", async (req,resp) => {
    try {
        const novoUsuario = req.body;
        console.log('Novo usuário recebido:', novoUsuario); 

            if (!novoUsuario.nome || novoUsuario.nome == null) return resp.status(400).send({ erro: "Preencha o campo nome." });
            if(!novoUsuario.email || novoUsuario.email == null)return resp.status(404).send({erro:"Preencha o campo email."}) 
            if(!novoUsuario.senha || novoUsuario == null)return resp.status(404).send({erro:"Preencha o campo senha"})

            let id
        if (novoUsuario.email === "adm@gmail.com" && novoUsuario.senha === "adm") {
          id = await inserirAdmin(novoUsuario);
          resp.send({ mensagem: "Administrador cadastrado com sucesso", NovoID: id });
        } else {
          id = await inserirUsuario(novoUsuario);
          resp.send({ mensagem: "Usuário cadastrado com sucesso", NovoID: id });
        }
    } catch (err) {
        console.error('Erro ao cadastrar:', err);
        resp.status(500).send({ erro: "Erro ao cadastrar usuário: " + err.message });
    }
});



endpoints.post('/logar', async (req, resp) => {
    try {
      const { email, senha } = req.body;

      if(!email || email==null)return resp.status(404).send({erro:"Preencha o campo email."})
      if(!senha || senha == null)return resp.status(404).send({erro:"Preencha o campo senha."})  
  
      let registros = await VerificarAdmin(email, senha);
      if (registros) {
        const token = generateToken(registros);
        return resp.send({
          tipo: 'adm',
          id_admin: registros.id_admin,
          email: registros.email,
          token: token
        });
      }
  
      registros = await VerificarUsuario(email, senha);
      if (!registros) {
        return resp.status(401).send({ erro: 'Credenciais inválidas' });
      }
  
      const token = generateToken(registros);
      resp.send({
        tipo: 'usuario',
        id_user: registros.id_user,
        email: registros.email,
        token: token
      });
  
    } catch (err) {
      console.error('Erro no login:', err);
      resp.status(500).send({ erro: "Erro no login: " + err.message });
    }
  });



export default endpoints;