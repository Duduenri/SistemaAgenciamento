import './TabelMar.css';

const TabelMar = () => {
  return (
    <div className="container">
      <h1 className="texto">Planilha Mensal</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th className="table-cell">Corretor</th>
              <th className="table-cell">Age</th>
              <th className="table-cell">Personas</th>
              <th className="table-cell">Placa</th>
              <th className="table-cell">Placa P</th>
              <th className="table-cell">% Dos Ages</th>
              <th className="table-cell">% Das Placas P</th>
              <th className="table-cell">% Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="table-cell">Alexandre</td>
              <td className="table-cell">7</td>
              <td className="table-cell">6</td>
              <td className="table-cell">2</td>
              <td className="table-cell">6</td>
              <td className="table-cell">100%</td>
              <td className="table-cell">120%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Betriz</td>
              <td className="table-cell">5</td>
              <td className="table-cell">6</td>
              <td className="table-cell">0</td>
              <td className="table-cellV">6</td>
              <td className="table-cell">90%</td>
              <td className="table-cellV">100%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cellV">Claudio</td>
              <td className="table-cellV">8</td>
              <td className="table-cellV">6</td>
              <td className="table-cellV">0</td>
              <td className="table-cellV">6</td>
              <td className="table-cellV">100%</td>
              <td className="table-cellV">120%</td>
              <td className="table-cellV">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cellV">Fernando</td>
              <td className="table-cellV">8</td>
              <td className="table-cellV">5</td>
              <td className="table-cellV">0</td>
              <td className="table-cellV">5</td>
              <td className="table-cellV">100%</td>
              <td className="table-cellV">100%</td>
              <td className="table-cellV">100%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Carol</td>
              <td className="table-cell">8</td>
              <td className="table-cell">6</td>
              <td className="table-cell">0</td>
              <td className="table-cell">6</td>
              <td className="table-cell">100%</td>
              <td className="table-cell">120%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Carol</td>
              <td className="table-cell">8</td>
              <td className="table-cell">6</td>
              <td className="table-cell">0</td>
              <td className="table-cell">6</td>
              <td className="table-cell">100%</td>
              <td className="table-cell">120%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Carol</td>
              <td className="table-cell">8</td>
              <td className="table-cell">6</td>
              <td className="table-cell">0</td>
              <td className="table-cell">6</td>
              <td className="table-cell">100%</td>
              <td className="table-cell">120%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Carol</td>
              <td className="table-cell">8</td>
              <td className="table-cell">6</td>
              <td className="table-cell">0</td>
              <td className="table-cell">6</td>
              <td className="table-cell">100%</td>
              <td className="table-cell">120%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Carol</td>
              <td className="table-cell">8</td>
              <td className="table-cell">6</td>
              <td className="table-cell">0</td>
              <td className="table-cell">6</td>
              <td className="table-cell">100%</td>
              <td className="table-cell">120%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Carol</td>
              <td className="table-cell">8</td>
              <td className="table-cell">6</td>
              <td className="table-cell">0</td>
              <td className="table-cell">6</td>
              <td className="table-cell">100%</td>
              <td className="table-cell">120%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Carol</td>
              <td className="table-cell">8</td>
              <td className="table-cell">6</td>
              <td className="table-cell">0</td>
              <td className="table-cell">6</td>
              <td className="table-cell">100%</td>
              <td className="table-cell">120%</td>
              <td className="table-cell">110%</td>
            </tr>
            <tr className="table-header">
              <td className="table-cellN">Total</td>
              <td className="table-cellN">30</td>
              <td className="table-cellN">20</td>
              <td className="table-cellN">15</td>
              <td className="table-cellN">24</td>
              <td className="table-cellN">90%</td>
              <td className="table-cellN">80%</td>
              <td className="table-cellN">850%</td>
            </tr>
                      {/* Outras linhas da tabela */}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <a href="/home">
          <button className="button">
            Voltar para a Home
          </button>
        </a>
      </div>
    </div>
  );
}

export default TabelMar;
