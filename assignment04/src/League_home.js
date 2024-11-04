import React from 'react'
import Match_home from './Match_home';

const League_home = ({data}) => {
  return (
    <div className='home-league-container'>
      {data.length > 0 && (
        <>
          <h3>{data[0]['league']['name']}</h3>
          
          
          {data.map(match => (
            <Match_home key={match['fixture']['id']} teams={match['teams']} goals={match['goals']} fixture={match['fixture']}/>
          ))}
        </>
      )}
    </div>
  )
}

export default League_home