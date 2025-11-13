import { useState } from 'react';
import './auth.scss';
import Login from '../components/login';
import Registrar from '../components/Registrar';
import api from '../api';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


export default function AuthContainer() {
  const [modo, setModo] = useState('registrar');
  const logado = modo === 'login';
  const navigate = useNavigate();


  async function uRegistrar(dados) {
    try {
      const response = await api.post('/usuario', dados);
      toast('Usuário cadastrado com sucesso! ID: ' + response.data.NovoID);
      setModo('login'); 
    } catch (err) {
      toast('Erro ao registrar: ' + err.response?.data?.erro || err.message);
    }
  }

  async function uLogin(dados) {
    try {
      const response = await api.post('/logar', dados);
      localStorage.setItem('token', response.data.token);
      toast('Login bem-sucedido!');

      if (response.data.tipo === 'adm') {
        navigate('/adm');
      } else {
        navigate('/inicio');
      }

    } catch (err) {
      toast('Erro no login: ' + err.response?.data?.erro || err.message);
    }
  }

  return (
    <div className={`auth-container ${logado ? 'modo-login' : 'modo-registrar'}`}>
      <div className="forms-area">
        {logado ? (<Login onSubmit ={uLogin} />) : (<Registrar onSubmit ={uRegistrar}/>)}
      </div>

      <div   className="painel-animado">
        <div className="painel-conteudo">
          <h1>Bem vindo ao Site</h1>
          <h2>{logado ? 'Não possui uma conta?' : 'Já possui uma conta?'}</h2>
          <button
            className="switch-btn"
            onClick={() => setModo(logado ? 'registrar' : 'login')}
          >
            {logado ? 'Registrar-se' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
