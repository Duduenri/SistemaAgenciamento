import './Banner.css';

const Banner = () => {
    return (
        <header className="banner">
            <img src="/public/banner.png" alt="O banner principal"/>
            <a href="/home">
          <button className="butao">
            Voltar para a Home
          </button>
          </a>
        </header>
    )
}

export default Banner;
