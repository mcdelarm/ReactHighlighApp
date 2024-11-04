import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { options } from './apiConfig';
import Highlights from './Highlights'

const Fixture = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [fixtureData, setFixtureData] = useState({});

  useEffect(() => {
    const fetchFixture = async () => {
      const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}&timezone=America%2FNew_York`;
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        setFixtureData(result['response'][0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFixture()
  }, [id]);

  return (
    <div>
      {loading ? (<p>Loading...</p>) : (
        <div className='fixture-container'>
          <p>
            {fixtureData['teams']['home']['name']}
            <img src={fixtureData['teams']['home']['logo']} alt="Logo for home team" />
            {fixtureData['goals']['home']} - {fixtureData['goals']['away']}
            <img src={fixtureData['teams']['away']['logo']} alt="Logo for away team" />
            {fixtureData['teams']['away']['name']}
          </p>
          <Highlights homeTeam={fixtureData['teams']['home']['name']} awayTeam={fixtureData['teams']['away']['name']} date={fixtureData['fixture']['date']}/>
        </div>
      )}
    </div>
  )
}

export default Fixture