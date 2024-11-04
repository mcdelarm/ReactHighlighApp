import React from 'react'
import { useState, useEffect } from 'react'
import { youtube_api_key } from './apiConfig';

function getFutureDate(isoDateString, daysToAdd) {
  const date = new Date(isoDateString);
  date.setDate(date.getDate() + daysToAdd);
  return date.toISOString();
}

const Highlights = ({homeTeam, awayTeam, date}) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const query = `${homeTeam} vs ${awayTeam} highlights`;
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=1&order=relevance&publishedAfter=${getFutureDate(date, -3)}&publishedBefore=${getFutureDate(date, 3)}&regionCode=us&relevanceLanguage=en&videoEmbeddable=true&key=${youtube_api_key}`);
        const data = await response.json();
        if (data['items'] && data['items'].length > 0) {
          setVideoId(data['items'][0]['id']['videoId']);
        } else {
          console.log('No videos found');
        } 
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
  }, [homeTeam, awayTeam, date]);

  return (
    <div>
      {videoId ? (
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}`}
          title='Fixture Highlights'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          ></iframe>
      ) : (<p>No highlights to display</p>)}
    </div>
  )
}

export default Highlights