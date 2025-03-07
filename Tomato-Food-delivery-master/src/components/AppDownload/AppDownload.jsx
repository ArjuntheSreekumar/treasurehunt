import React from 'react';
import './AppDownload.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const AppDownload = () => {
  return (
    <div className="socials" id='socials'>
      <p>Follow us on <br />our socials</p>

      <div className="social-icons">
        <a href="https://www.instagram.com/dotslash.cet/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-img" />
        </a>
        <a href="https://www.linkedin.com/company/dotslash-cse-cet/about/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-img" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;