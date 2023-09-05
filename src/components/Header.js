import React from 'react';
import './Header.css';


function HeaderPV() {
  return(
<header className='header'>
    <div className='len_hed'>
    
    <p className="textnav"><b>prime video</b> </p>
    <div className="navbar">
   
    <div className="dropdown">
    <button className="dropbtn">Home <i className="fa fa-caret-down"></i></button>
    <div className="dropdown-content">
      <a href="#c">All</a>
      <a href="#team">Movies</a>
      <a href="#careers">TV Shows </a>
    </div>
  </div> 

  <div className="dropdown">
    <button className="dropbtn">Store <i className="fa fa-caret-down"></i></button>
    <div className="dropdown-content">
      <a href="#company">All</a>
      <a href="#team">Rent</a>
      <a href="#careers">Channels</a>
    </div>
  </div> 
  <div className="dropdown">
    <button className="dropbtn">Live TV </button>
  </div> 
  <div className="dropdown">
    <button className="dropbtn">Categories<i className="fa fa-caret-down"></i></button>
    <div className="dropdown-content">
      <a><b>Genres</b></a>
      <a href="#link1">Action and adventure</a>
      
      <a href="#link1">	Comedy </a>
      <a href="#link1">	Documentary </a>
      <a href="#link1">	Drama </a>
      <a href="#link1">	Fantasy </a>
      <div >
      <a href="#link1">	Horror </a>
      <a href="#link1">	International </a>
      
      <a href="#link1">	Music videos and concerts </a>
      <a href="#link1">	Mystery and thrillers </a>
      <a href="#link1">	Romance </a>
      </div>
      
      <div className='d1' >
      <a href="#link1"><b>Featured collections</b> </a>
      <a href="#link1">	Hindi </a>
      <a href="#link1">	English </a>
      <a href="#link1">	Telugu </a>
      <a href="#link1">	Tamil </a>
      <a href="#link1">	Malayalam </a>
      <a href="#link1">	Kannada </a>
      <a href="#link1">	Marathi </a>
      <a href="#link1">	Punjabi </a>
      <a href="#link1">	Gujarati </a>
      <a href="#link1">	Bengali </a>
      </div>
      
    </div>
  </div>
    <div className='len_right'>
      <div className="search">
        <button className="searchButton">Search </button>
      </div>

  <div className="dropdown">
    <button className="dropbtn">Try for free </button>
  </div> 

          <div className="dropdown">
              <button className="dropbtn">EN<i className="fa fa-caret-down"></i></button>
              <div className="dropdown-content">
                <a href="#b">Bahasa Indonesia</a>
                <a href="#d">Dansk</a>
                <a href="#c">Deutsch</a>
                <a href="#c">English</a>
                <a href="#s">Espanol</a>
                <a href="#a">Francais</a>
                <a href="#a">Italiano</a>
                <a href="#d">Nederlands</a>
                
                <div className='d2'>
                  <a href="#bn">Norsk</a>
                  <a href="#bpl">Polski</a>
                  <a href="#bpo">Portuhues/Brasil</a>
                  <a href="#bsu">Suomi</a>
                  <a href="#bs">Svenska</a>
                  <a href="#bt">Turkce</a>
                  <a href="#bp">Pyccknn</a>
                  <a href="#bh">हिन्दी</a>
                  </div>
              </div> 
           </div>
              <div className="dropdown">
               <button className="dropbtn">Sign In </button>
               <div className="dropdown-content">
                     <a href="#company">Sign In</a>
                     <a href="#team">Help</a>
                     <a href="#careers">Watch Anywhere</a>
                </div>
             </div>
</div>
</div>

    
    </div>

</header>
 );
}

export default HeaderPV;