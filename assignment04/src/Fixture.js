import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { options } from './apiConfig';

const Fixture = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const fixtureData = {};

  useEffect(() => {
    const fetchFixture = async () => {
      const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`;
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        fixtureData = result['response'][0];

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFixture()
  }, []);
  return (
    <div>Fixture</div>
  )
}

export default Fixture