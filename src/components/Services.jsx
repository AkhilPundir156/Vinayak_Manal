import React, { useState } from "react";

import { useLocation } from "react-router-dom";

const Services = (props) => {
  const { img,txt,link, heading,  maintext, mp, company, saved } = useLocation().state;
  const shorttext = maintext.slice(0, 100);
  const [Istoggle, setIstoggle] = useState(false)
  return (
    <>
      <div className="services-details">
        <div className="services-details-main">
          <div className="services-details-item">
            <img src={img} alt="" srcset="" />
          </div>
          <div className="services-details-item">
            <div className="services-item-heading">
              <h1>{heading}</h1>
              <p>
                {shorttext}.... <button onClick={()=>{setIstoggle(()=>!Istoggle)}} >Read More</button>
              </p>
              <p>Rating : 4.53 {"(153 Review)"}</p>
            </div>
            <div className="services-item-main">
              Market Price : ₹<span>{mp}</span>
              <br />
              {/* <br />/ */}
              Company : ₹{company}
              <br />
              {/* <br /> */}
              You Save : ₹{saved} <br />
              <h2>TOTAL : ₹{company}</h2>
              <p className="services-item-p">Government Fee Included</p>
            </div>
          </div>
          <div className="services-details-item services-item1">
            <div className="services-input">
              <form action="" className="services-input-sec">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="mob">Mobile</label>
                <input type="text" name="mob" id="mob" />
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="services-details-bottom">
        <button onClick={()=>{setIstoggle(()=>!Istoggle)}}> Load More  </button>
        {
           Istoggle && (<div className="maintext">{maintext}</div>)
        }
      </div>
    </>
  );
};

export default Services;
