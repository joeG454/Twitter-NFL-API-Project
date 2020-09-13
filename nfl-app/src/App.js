import React from 'react';
import logo from './logo.svg';
import { Team } from './components/team';
import Search from './components/searchTeams';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className=""></header>
      <Team></Team>
      
      <Search></Search>
    </div>
  );
}

export default App;