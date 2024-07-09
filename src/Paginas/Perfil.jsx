//Perfil.jsx

import './Perfil.css';

const Perfil = () => {
  return (
    <>
      <main className="principal">
        <div className="main">
          <img id="teucu" src="./FilhoEd.png" alt="" />

          <div className="dudu">
            <h1>Info</h1>
            <h3>Nome: João</h3>
            <h3>Creci:52771</h3>
            <h3>Contato:(55)999952104</h3>
          </div>

          <div id="churrasco">
            <p>
              <h1>Sobre</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              nesciunt, temporibus laborum, odio placeat facilis earum
              asperiores dolor tenetur omnis quae. Explicabo, praesentium.
              Exercitationem ipsum earum sapiente obcaecati. Itaque, dolores!
            </p>
          </div>
        </div>
        <div className="secundaria">
          <div className="agenciamento">
            <h2 className="conteudo">Agenciamentos</h2>
            </div>

          <div className="geral">
            <div className="Container-mes">
              <h3 className="mes">
                Janeiro <img className="ima" src="./checksf.png" alt="" />
              </h3>
              <h3 className="mes">
                Fevereiro <img className="ima" src="./checksf.png" alt="" />
              </h3>
              <h3 className="mes">
                Março <img className="ima" src="./xsf.png" alt="" />
              </h3>
              <h3 className="mes">
                Abril <img className="ima" src="./checksf.png" alt="" />
              </h3>
              <h3 className="mes">
                Maio <img className="ima" src="./xsf.png" alt="" />
              </h3>
              <h3 className="mes">
                Junho <img className="ima" src="./checksf.png" alt="" />
              </h3>
            </div>
            <div className="Container-mes">
              <h3 className="mes">
                Julho <img className="ret" src="./retsf.png" alt="" />
              </h3>
              <h3 className="mes">
                Agosto <img className="ret" src="./retsf.png" alt="" />
              </h3>
              <h3 className="mes">
                Setembro <img className="ret" src="./retsf.png" alt="" />
              </h3>
              <h3 className="mes">
                Outubro <img className="ret" src="./retsf.png" alt="" />
              </h3>
              <h3 className="mes">
                Novembro <img className="ret" src="./retsf.png" alt="" />
              </h3>
              <h3 className="mes">
                Dezembro <img className="ret" src="./retsf.png" alt="" />
              </h3>
            </div>
            
          </div>
          
          <a href="/home">
          <button className="butao">
            Voltar para a Home
          </button>
          </a>
        </div>
      </main>
    </>
  );
}

  
  export default Perfil;