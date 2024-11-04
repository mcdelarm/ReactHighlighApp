import React from 'react'
import { Link } from 'react-router-dom';

const Match_home = ({teams, goals, fixture}) => {
  const homeTeam = teams['home'];
  const homeGoals = goals['home'];
  const awayTeam = teams['away'];
  const awayGoals = goals['away'];

  const renderStatus = () => {
    const status = fixture['status'];
    switch (status['short']) {
      case 'HT':
      case 'FT':
        return status['short'];
      case '1H':
      case '2H':
        return status['elapsed'] + "'"
    }
  }

  const renderScore = () => {
    const status = fixture['status'];
    switch (status['short']) {
      case 'NS':
        const time = fixture['date'].match(/T(\d{2}:\d{2}):/)[1];
        return time;
      case 'SUSP':
      case 'INT':
      case 'PST':
      case 'CANC':
      case 'ABD':
      case 'AWD':
      case 'TBD':
      case 'WO':
        return status['long'];
      case 'HT':
      case 'FT':
      case '1H':
      case '2H':
        return homeGoals + ' - ' + awayGoals;
    }
  }
  return (
    <div className='home-fixture-container'>
      <Link to={`/fixture/${fixture['id']}`}>
        <p>
          {homeTeam['name']}
          <img src={homeTeam['logo']} alt="Logo for home team" className='home-logo'/>
          {renderScore()} 
          <img src={awayTeam['logo']} alt="Logo for away team" className='home-logo'/>
          {awayTeam['name']}
        </p>
      </Link>
    </div>
  )
}

export default Match_home