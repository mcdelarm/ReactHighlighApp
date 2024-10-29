import Header from './Header.js';
import './App.css';
import Nav from './Nav.js';
import LeagueGames from './LeagueGames.js';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Fixture from './Fixture.js';
import Team from './Team.js';
import League from './League.js';

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="App">
      <Header title="SoccerHub"/>
      <Routes>
        <Route path='/' element={
          <>
            <Nav date={date} setDate={setDate}/>
            <LeagueGames date={date}/>
          </>
        }></Route>
        <Route path='/fixture/:id' element={<Fixture/>}></Route>
        <Route path='/team/:id' element={<Team/>}></Route>
        <Route path='/league/:id' element={<League/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
