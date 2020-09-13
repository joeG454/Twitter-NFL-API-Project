import React from 'react';
import TeamList  from './components/teamList';
import './App.css';



class App extends React.Component {
  render() {
    console.log(this.props.teams);
    return (
      <div className="App">
        <header className=""></header>
        <TeamList teams={this.props.teams}></TeamList>
      </div>
    )
  }
}

export default App;