import Header from './Header.js';
import './App.css';
import Nav from './Nav.js';
import LeagueGames from './LeagueGames.js';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Fixture from './Fixture.js';

function getYesterdayDate() {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  return today;
}
function App() {
  const [date, setDate] = useState(getYesterdayDate);
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
      </Routes>
    </div>
  );
}

export default App;
