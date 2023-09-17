import React from 'react';
import defaultLogo from "../../public/images/logo2.png";
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className=""></i>
            <span className="logo_name">Horizon Acedmy</span>
          </div>
  
        </div>
        <div className="link-boxes">
          <ul className="box1">
            <li className="link_name">Nevigation link</li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Alumini</a></li>
            <li><a href="#">Faculty</a></li>
          </ul>
          <ul className="box1">
            <li className="link_name">Resources</li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">E-Books</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
          <ul className="box1">
            <li className="link_name">Contact us</li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
          </ul>
          <ul className="box1">
            <li className="link_name">Connect with us</li>
            <div className="media-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
           
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text"
            >Copyright <a href="#">.</a>All rights reserved</span
          >
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;