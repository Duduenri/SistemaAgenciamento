// Login.jsx

import './loginStyle.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navegar = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui (pode ser simulada por enquanto)
    // Se o login for bem-sucedido, navega para a página Home
    navegar('/home');
  };

  return (
    <div className="login-body">
      <div className="center-container">
        <section className="login">
          <img src="/logo.png" alt="Logo" className="logoL" />
          
          <h1>Faça seu Login</h1>
          
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Login" className="input-field" />
            <input type="password" placeholder="Senha" className="input-field" />
            <input type="submit" value="Entrar" className="submit-button" />
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;