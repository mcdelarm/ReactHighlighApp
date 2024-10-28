import React from 'react'

const Match_home = ({teams, goals, key, status}) => {
  const homeTeam = teams['home'];
  const homeGoals = goals['home'];
  const awayTeam = teams['away'];
  const awayGoals = goals['away'];
  return (
    <div>
      <p>
        {status['short']}
        <img src={homeTeam['logo']} alt="Logo for home team"/>
        {homeTeam['name']} {homeGoals} - {awayGoals} {awayTeam['name']}
        <img src={awayTeam['logo']} alt="Logo for away team"/>
      </p>
    </div>
  )
}

export default Match_home