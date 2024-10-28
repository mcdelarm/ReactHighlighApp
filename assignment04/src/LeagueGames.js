import React from 'react'
import { useState, useEffect } from 'react'
import League_home from './League_home';


const LeagueGames = ({date}) => {
  const [epl, setEpl] = useState([]);
  const [serieA, setSerieA] = useState([]);
  const [bundesliga, setBundesliga] = useState([]);
  const [ligue1, setLigue1] = useState([]);
  const [laliga, setLaliga] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${formattedDate}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f7cb245680mshcae480ffdf42dccp1f6380jsn713b2d42b6a6',
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
      };
  
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if (result['results'] == 0) {
          console.log("No matches for this date")
        }
        else {
          let eplArray = [];
          let serieArray = [];
          let bundesligaArray = [];
          let ligue1Array = [];
          let laligaArray = [];
          const arr = result['response'];
          for (let i = 0; i < arr.length; i++) {
            let league_id = arr[i]['league']['id']
            switch (league_id) {
              case 39:
                eplArray.push(arr[i]);
                break;
              case 140:
                laligaArray.push(arr[i]);
                break;
              case 135:
                serieArray.push(arr[i]);
                break;
              case 78:
                bundesligaArray.push(arr[i]);
                break;
              case 61:
                ligue1Array.push(arr[i]);
                break;
            }
        }
        setEpl(eplArray);
        setBundesliga(bundesligaArray);
        setLaliga(laligaArray);
        setLigue1(ligue1Array);
        setSerieA(serieArray);
  
      }} catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [date]);

function areGames() {
  if (epl.length == 0 && serieA.length == 0 && bundesliga.length == 0 && laliga.length == 0 && ligue1.length ==0) {
    return false;
  }
  return true;
}

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : areGames() ? (
        <>
          <League_home data={epl}/>
          <League_home data={laliga}/>
          <League_home data={bundesliga}/>
          <League_home data={serieA}/>
          <League_home data={ligue1}/>
        </>
      ) : (
        <p>No games in the top 5 leagues on selected date.</p>
      )}
    </div>
  );
}

export default LeagueGames