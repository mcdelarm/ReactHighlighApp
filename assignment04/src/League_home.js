import React from 'react'
import Match_home from './Match_home';

const League_home = ({data}) => {
  return (
    <div>
      {data.length > 0 && (
        <>
          <h4>{data[0]['league']['name']}</h4>
          {data.map(match => (
            <Match_home key={match['fixture']['id']} teams={match['teams']} goals={match['goals']} status={match['fixture']['status']}/>
          ))}
        </>
      )}
    </div>
  )
}

export default League_home