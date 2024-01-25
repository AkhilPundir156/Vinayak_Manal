import React from "react";
import { FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Vinimg from "../images/vinimg.png";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useState } from "react";

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle the form submission here
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group search-input">
          <input
            type="text"
            id="searchServices"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="form-control"
            name="search"
            placeholder="Search for services"
            autoFocus
          />
          <button className="btn" type="submit">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.0535" cy="10.5399" r="7.49047" stroke="#0D775E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
              <path d="M15.2632 16.1387L18.1999 19.0677" stroke="#0D775E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </form>
    );
  };
  

const Navbar = () => {
  return (
    <>
     
      {/* Top travling line */}
      <div
        className="tdm"
        style={{ fontFamily: "monospace", letterSpacing: "0.3px" }}
      >
        <marquee>Welcome to Bharatbizs.</marquee>
      </div>
      {/* Second line that contains some information regarding mobile no and other things */}
      <div className="second-line">
        <div className="second-line-first">
          <div className="flex">
            <i className="icons icon-phn" >
              <FaPhoneAlt />
            </i>
            <div className="mob">9827098270</div>
          </div>
          <div className="flex">
            <i className="icons">
              <CgMail />
            </i>
            vinayak@gmail.com
          </div>
        </div>

        <div className="second-line-second">
          <div className="flex">
            <i className="icons">
              <LiaFlagUsaSolid />
            </i>
            <div className="mob">English
            </div>
            
          </div>
          <div className="flex">
            <i className="icons icons1">
              <FaTwitter />
            </i>
            <i className="icons icons1">
              <FaInstagram />
            </i>
            <i className="icons icons1">
              <CgMail />
            </i>
          </div>
        </div>
      </div>

      {/* Third line which contains search bar and login button */}

      <div className="container clearfix">
      {/* Website Logo */}
      <div className="logo-header logo-dark">
        <a href="https://bharatbizs.com">
          <img src="https://apis.rizrv.in/company/config/1700462826-png" alt="" />
        </a>
      </div>
      {/* EXTRA NAV */}
      <div className="extra-nav d-md-flex d-none">
        <div className="extra-cell">
          <ul className="navbar-nav header-right">
            <li className="nav-link">
              <div className="info-content">
                <a href="https://bharatbizs.com/user/login">
                  <h6 className="title mb-0">LOGIN</h6>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* header search nav */}
      <div className="header-search-nav">
        <SearchForm />
        <div className="search-results" style={{ position: "absolute", marginTop: "70px", width: "70%", marginLeft: "77px" }}>
          <ul id="searchList" className="list-group bg-dark"></ul>
        </div>
      </div>
    </div>

      
    </>
  );
};

export default Navbar;
