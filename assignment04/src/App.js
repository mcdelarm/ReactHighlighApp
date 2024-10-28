import Header from './Header.js';
import './App.css';
import Nav from './Nav.js';
import LeagueGames from './LeagueGames.js';
import { useState } from 'react'


function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="App">
      <Header title="SoccerHub"/>
      <Nav date={date} setDate={setDate}/>
      <LeagueGames date={date}/>
    </div>
  );
}

export default App;
