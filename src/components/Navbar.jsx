import React from "react";
import { FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { CgClose, CgCross, CgMail, CgMenu, CgOptions, CgSearch } from "react-icons/cg";
import Vinimg from "../images/vinimg.png";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

import data from "../data/servicesdata.js";

// const SearchForm = () => {
//     // const [searchTerm, setSearchTerm] = useState("");

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // Handle the form submission here
//     };

//     const [searchTerm, setSearchTerm] = useState('');
//     const options = ["Option 1", "Option 2", "Option 3"]; // Add more options as needed

//     const handleInputChange = (event) => {
//       setSearchTerm(event.target.value);
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <div className="input-group search-input">
//           <input
//           onChange={handleInputChange}
//             type="text"
//             id="searchServices"
//             value={searchTerm}
//             // onChange={(event) => setSearchTerm(event.target.value)}
//             className="form-control"
//             name="search"
//             placeholder="Search for services"
//             autoFocus
//             list="searchOptions"
//           />
//           <datalist id="searchOptions">
//         {options
//           .filter(option => option.toLowerCase().includes(searchTerm.toLowerCase()))
//           .map((option, index) => (
//             <option key={index} value={option} />
//           ))}
//       </datalist>
//           <button className="btn" type="submit">
//             <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="10.0535" cy="10.5399" r="7.49047" stroke="#0D775E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
//               <path d="M15.2632 16.1387L18.1999 19.0677" stroke="#0D775E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//             </svg>
//           </button>
//         </div>
//       </form>
//     );
//   };

const Navbar1 = ({ sharedVariable, updateSharedVariable }) => {
  // const handleChange = () => {
  // Assume some event triggers the change
  // const newValue = 'New Shared Value';
  // updateSharedVariable(Item);
  // };
  const [Item, SetItem] = useState("all");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [Visible, setVisble] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const options = [
    "Proprietorship",
    " Limited Liability Partnership",
    "Startup India Registration",
  ];

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {/* Top travling line */}
      <div
        className="tdm"
        style={{ fontFamily: "monospace", letterSpacing: "0.3px" }}
      >
        <marquee>Welcome to Bharatbizs...</marquee>
      </div>
      {/* Second line that contains some information regarding mobile no and other things */}
      <div className="second-line">
        <div className="second-line-first">
          <div className="flex">
            <i className="icons icon-phn">
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
            <div className="mob">English</div>
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
      {/* Third line that contains search bar and login and logo */}
      <div className="third-line">
        <div className="third-line-first">
          <img src={Vinimg} alt="" srcset="" />
        </div>
        <form onSubmit={handleSubmit} className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search..."
            className="search-input"
            list="searchOptions"
          />
          <datalist id="searchOptions">
            {options
              .filter((option) =>
                option.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((option, index) => (
                <option key={index} value={option} />
              ))}
          </datalist>
          <button type="submit" className="search-button">
            
            Search
          </button>
        </form>

        <div className="third-line-third">
          <Link to="login" >LOGIN</Link>
        </div>
      </div>
      {/* Final line of nav bar that contains all the links */}

       
        <nav className={`navbar ${Visible ? 'open' : ''}`}>
          <div className="nav-item">
            <div>
              <Link className="Link" to="/">
                {" "}
                <span onClick={() => updateSharedVariable("startup")}>
                  Startup
                </span>
              </Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index < 5 &&
                        item.cat == "startup" && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index >= 5 &&
                        item.cat == "startup" && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Trademark")}>
                Trademark
              </span></Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index < 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index >= 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Goods & Services")}>
                Goods & Services
              </span></Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index < 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index >= 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Income Tax")}>
                Income Tax
              </span></Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index < 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index >= 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Compliance")}>
                Compliance
              </span></Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index < 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index >= 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Loan")}>Loan</span></Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index < 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index >= 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Import & Export")}>
                Import & Export
              </span></Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index < 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index >= 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Legal Documentation")}>
                Legal Documentation
              </span></Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index < 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                  <div className="nav-item-container-item-in">
                    {data.map(
                      (item, index) =>
                        index >= 5 && (
                          <div>
                            <Link
                              className="Link"
                              to="services-details"
                              state={item}
                            >
                              Proprietorship
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Company Covert")}>
                Company Covert
              </span></Link>
              <i>
                <MdArrowDropDown />
              </i>
              <div className="nav-item-container">
                <div className="nav-item-container-item">
                  <div className="nav-item-container-item-in">
                    <div>Change LLP Agreement</div>
                  </div>
                  <div className="nav-item-container-item-in">
                    <div>Change Partnership Deed</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span onClick={() => updateSharedVariable("ISO")}>ISO</span>
            </div>
            <div>
            <Link className="Link" to="/">
              <span onClick={() => updateSharedVariable("Banking")}>
                Banking
              </span>
              </Link>
            </div>
          </div>
        </nav>
      

      <nav className="navbar2 ">
        <div className="navbar2-item">
          <div className="nav2-img">
            <img src={Vinimg} alt="" />
          </div>
        </div>
      </nav>
      <div className="nav2-click">
        <button
          onClick={() => {
            setVisble(!Visible);
          }}
        >
          <i>{
            Visible &&
            <CgClose />
          }{
            !Visible && 
            <CgMenu />
          }
          </i>
        </button>
      </div>
    </>
  );
};

export default Navbar1;
