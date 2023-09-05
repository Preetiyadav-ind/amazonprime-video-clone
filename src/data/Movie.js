import React from 'react';
import './Movie.css';

const Movie = ({ title, imageUrl }) => {
  return (
    <div className="movie">
      <img src={imageUrl} alt={title} />
      
    </div>
  );
};
export default Movie;
