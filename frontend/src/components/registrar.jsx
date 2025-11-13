import './registrar.scss';
import { useState } from 'react';

export default function Registrar({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function tentarRegistrar(e) {
    e.preventDefault();
    onSubmit({ nome, email, senha }); 
  }


  return (
    <div className="auth-form container-registrar">
      <h1>Registre-se</h1>
      <h2>Use informações reais</h2>

      <form onSubmit={tentarRegistrar}>
        <label>Nome Completo</label>
        <input
          type="text"
          placeholder="Joaquim Rumão Clank"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="usuario@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder="Use números e letras"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="botao">
          <button type="submit">Criar Conta</button>
        </div>
      </form>
    </div>
  );
}
