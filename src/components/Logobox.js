import React from 'react';
import './Logobox.css';

function Logoboxr() {
  return (
    <div className="Logobox">
     <img
        className="Logobox_logo"
        src="https://www.pngmart.com/files/23/Prime-Video-Logo-PNG.png"
        alt="Amazon Prime Video"
      />
      <p className="Logobox_text1">WELCOME TO PRIME VIDEO</p>
     
     <div className="container">
     <button className="Logobox_button">
      JOIN NOW
    </button>
    <div className="Logobox_text2"> 
           for only  <sup> &#8377;</sup><b className='ptext'>1,499</b>/year
      </div>
    </div>
    
    </div>
  );
}

export default Logoboxr;