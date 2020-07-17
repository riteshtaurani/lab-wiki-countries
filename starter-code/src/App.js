import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import { Link } from 'react-router-dom'



function App() {

  return (
    <div className="App">
      <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
            {data.map(c => {
                return (
                  <div className="list-group-item list-group-item-action" key={c.cca3}>
                    <Link to={`/${c.cca3}`}>{c.name.common} active</Link>
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
