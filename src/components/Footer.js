// Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-logo'>
        <img src='https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png' alt='logo' />
        </div>
      <div className="footer-content">
        <a href='google.com'>Terms and Privacy Notice</a> 
        <a href='google.com'>Send us feedback</a>
        <a href='google.com'>Help</a> <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
