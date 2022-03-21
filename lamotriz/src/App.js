import './App.css';
import {React, useState} from "react";
import HomePage from './components/Pages/HomePage';
import BannerPage from './components/Pages/BannerPage';
import ControlePage from "./components/Pages/ControlePage";
import EficienciaPage from "./components/Pages/EficienciaPage";
import PublicacoesPage from "./components/Pages/PublicacoesPage";
import QuemSomosPage from "./components/Pages/QuemSomosPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import {data as dataC} from "./components/ControleSection/Data"
import {data as dataE} from "./components/EficienciaSection/Data"

function App() {
  const [stateC, setStateC] = useState({
    controle_automacao: dataC
  });

  const [stateE, setStateE] = useState({
    eficiencia_energetica: dataE
  });

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quem_somos" component={QuemSomosPage} />
          <Route exact path="/automacao_controle" component={ControlePage} />
          <Route exact path="/eficiencia_energetica" component={EficienciaPage} />
          <Route exact path="/publicacoes" component={PublicacoesPage} />
          {stateC.controle_automacao.map(item => (
            <Route exact path={item.url} render={() => <BannerPage item={item}/>}/>
          ))}
          {stateE.eficiencia_energetica.map(item => (
          <Route exact path={item.url} render={() => <BannerPage item={item}/>}/>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
