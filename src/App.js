import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardListPage from './components/card-list';

function App() {
  return (
    <div>
      <div className="header">
          <h1>Top Movies</h1>
      </div>
      <CardListPage/>
    </div>   
  );
}

export default App;
