import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              OlaLoja
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>gonnzDev © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              onClick={()=>{
                window.location.href = 'https://www.instagram.com/olaloja.cr/'; 
                return null;
              }}
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
           
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            
         
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
