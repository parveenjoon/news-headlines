// src/components/Headlines.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=f3086529798d4415816356978761e593`
        );
        setHeadlines(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError('Error fetching headlines. Please try again later.');
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  if (loading) {
    return <p>Loading headlines...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Latest Headlines</h2>
      <ul>
        {headlines.map((headline, index) => (
          <li key={index}>
            <strong>{headline.title}</strong> - {headline.source.name} ({new Date(headline.publishedAt).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Headlines;
