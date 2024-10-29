import React from 'react'
import Match_home from './Match_home';
import { Link } from 'react-router-dom';

const League_home = ({data, league_id}) => {
  return (
    <div>
      {data.length > 0 && (
        <>
          <Link to={`/league/${league_id}`}>
            <h4>{data[0]['league']['name']}</h4>
          </Link>
          
          {data.map(match => (
            <Match_home key={match['fixture']['id']} teams={match['teams']} goals={match['goals']} fixture={match['fixture']}/>
          ))}
        </>
      )}
    </div>
  )
}

export default League_home