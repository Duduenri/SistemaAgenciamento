import { Link, useNavigate } from 'react-router-dom';
import './HomeStyle.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const redirecionarCorretor = (event) => {
    const corretor = event.target.value;
    console.log(`Redirecionando para o corretor: ${corretor}`);
    // Lógica para redirecionar para a página do corretor selecionado
  };

  return (
    <div className="container">
      <header className="fixed-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="header-container">
          <nav>
            <ul>
              <button className='Butoes'>
                <li><Link to="/perfil">Perfil corretores</Link></li>
              </button>
               <button className='Butoes'>
                <li className="submenu-parent">
                  <Link to="#">Cadastrar</Link>
                  <ul className="submenu">
                    <li><Link to="/Index">Corretores </Link></li>
                    <li><Link to="/Agenciamento">Agenciamentos</Link></li>
                  </ul>
                </li>
              </button>
              <button className='Butoes' onClick={handleLogout}>
              <li><Link to="/login">Sair</Link></li>
              </button>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className='Controle'>
          <div className="controle-container">
            <h1>Controle de Agenciamentos</h1>
            
            <div className="button-container">
              <button className='Butoes'>
               <Link to="/TabelMar">Controle Mensal</Link>
              </button>
              <button className='Butoes'>
                <Link to="/Trimestral">Controle Trimestral</Link>
              </button>
              <button className='Butoes'>
                <Link to="/controle-semestral">Controle Semestral</Link>
              </button>
              <button className='Butoes'>
                <Link to="/controle-anual">Controle Anual</Link>
              </button>
            </div>
            <div className="select-container">
              <select id="selecionarCorretor" onChange={redirecionarCorretor}>
                <option value="" disabled selected>Selecione um Corretor</option>
                {/* Adicione opções de corretores aqui */}
              </select>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
