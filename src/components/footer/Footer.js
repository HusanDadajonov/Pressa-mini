import React from 'react';
import './footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';

const Footer = () => {
  return (
  <div className='footer'>
    <div className='container'>
        <div className='row'>

            <a className='footer-logo' href='#' >Pressa.</a>
            <span>  <a className='footer-link'  href='#'>Yordam</a>
            <a className='footer-link' href='#' >Loyiha haqida</a></span>
            <a className='footer-tel' href='tel:+998712001123'> +998 71 200 11 23 </a>


            <div className='socials'>
                <div className='fab-social fab-facebook'>
                <a href='' >
                  <FaFacebookF className='social-icon facebook '/>
                </a></div>
                <div className='fab-insta'> 
                <a href='https://www.instagram.com/najottalim/' target='_blank'>
                    <FaInstagram className='social-icon insta'/></a>
                </div>
                <div className=' fab-telegram'>
                     <a target='_blank' href='https://t.me/najottalim'><FaTelegramPlane className='social-icon telegram'/>  </a>
                </div>
               
            </div>
        </div>
    </div>

  </div>
  );
};

export default Footer;
