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
  HashRouter,
  Switch,
  Route,
} from "react-router-dom"
import {dataControle} from "./components/ControleSection/Data"
import {dataEficiencia} from "./components/ControleSection/Data"

function App() {
  const [stateC, setStateC] = useState({
    controle_automacao: dataControle
  });

  const [stateE, setStateE] = useState({
    eficiencia_energetica: dataEficiencia
  });

  return (
    <div className='App'>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quem_somos" component={QuemSomosPage} />
          <Route exact path="/automacao_controle" component={ControlePage} />
          <Route exact path="/linhas_pesquisa" component={ControlePage} />
          <Route exact path="/eficiencia_energetica" component={EficienciaPage} />
          <Route exact path="/publicacoes" component={PublicacoesPage} />
          {stateC.controle_automacao.map(item => (
            <Route exact path={item.url} render={() => <BannerPage item={item}/>}/>
          ))}
          {stateE.eficiencia_energetica.map(item => (
          <Route exact path={item.url} render={() => <BannerPage item={item}/>}/>
          ))}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
