import React from 'react';
import HeaderPV from './components/Header';
import Logobox from './components/Logobox';
import MovieGrid from './data/MovieGride';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="app">
      <HeaderPV/>
         
         <div>
        <Logobox/>
         </div>
        
         <div  className="app__movieContainer">
         <MovieGrid/>
         </div>
         <div className='app-container'>
         <Footer/>
         </div>
       
        {/* Add more MovieCard components */}
    
    </div>
  );
}

export default App;
