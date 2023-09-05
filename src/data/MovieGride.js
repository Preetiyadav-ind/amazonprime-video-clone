// MovieGrid.js
import React from 'react';
import Movie from './Movie';
import movieData from './movieData';
import './MovieGrid.css'



const MovieGrid = () => {
  return (
 <div className="movie-grid">
      {movieData.map((movie, index) => (
        <Movie key={index} title={movie.title} imageUrl={movie.imageUrl} />
      ))}
    </div>
  );
};

export default MovieGrid;
