import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './view/form';
import List from './view/list';
import Edit from './view/edit';

function App() {
  return (
    <Router>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-brand">
              <Link className="nav-link" style={{ color: 'red', fontWeight: 'bold' }} to="/"> Lista de Filmes </Link>
            </li>
            
          </ul>
          <button class="navbar-toggler" type="button" datatoggle="collapse" data-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" arialabel="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            </ul>
            <Link class="btn btn-success " to="/form">Novo Filme</Link>
          </div>
        </nav>
        <div class="container py-4">
          <div class="row">
            <Route path="/" exact component={List} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:employeeId" component={Edit} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
