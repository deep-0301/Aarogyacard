import React from "react";
import "../font/flaticon.css"
import "./Footer.css";

const Footer = () => {

  return (
    <>
      <footer className="footer">
        <div className="contact-details">
          <div className="left-footer">
            <h3>Health Card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem sint non. Sunt officia atque hic animi tenetur nam recusandae ut excepturi.</p>
            <div className='quick-links'>
              <h5>Quick Links</h5>
              <ul>
                <li><a href='/Aarogyacard/#FAQ'>FAQ</a></li>
                <li><a href='/Aarogyacard/#service'>Service</a></li>
                <li><a href='/Aarogyacard/Register'>Register</a></li>
                <li><a href='/Aarogyacard/Login'>Login</a></li>
                <li><a href='/Aarogyacard/Contact'>Contact</a></li>
              </ul>
            </div>
          </div>

          {/* contact-us */}
          <div className="middle-footer">
            <h3>Contact Us</h3>
            <div className="details">
              <h6>Location</h6>
              <div className="icon-info">
                <i className="flaticon-maps-and-flags"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, modi!</p>
              </div>

              <h6>Phone :</h6>
              <div className="icon-info">
                <i className="flaticon-phone-call"></i>
                <p>123456789</p>
              </div>

              <h6>Email :</h6>
              <div className="icon-info">
                <i className="flaticon-email"></i>
                <p>healthcard@gmail.com</p>
              </div>
            </div>
          </div>

          {/* sc-handels */}
          <div className="right-footer">
            <h3>Follow Us</h3>
            <div className='handles'>
              <a href='https://www.facebook.com/' ><i className="flaticon-facebook"></i></a>
              <a href='https://twitter.com/?lang=en' ><i className="flaticon-twitter"></i></a>
              <a href='https://www.instagram.com/' ><i className="flaticon-instagram"></i></a>
              <a href='https://www.linkedin.com/signup' ><i className="flaticon-linkedin"></i></a>
            </div>
          </div>

          {/* <div className='other-links'>
            <a onClick={scrollToTop} className='top-button'><i className="flaticon-up-arrow"></i></a>
          </div> */}

        </div>
        <div className="copy-right">
          &copy; 2021 <span>Health Card</span>. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
