import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare,FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer >
    <div className='top-footer'>
      <div>
        <h1>Vinayak</h1>
        <div className="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque voluptate distinctio officiis nostrum quasi.</p>
        </div>
      </div>
      <div >
        <h1>SERVICES</h1>
        <div className='services'>
        <div>
          <ul>
            <li><a><span>Startup</span></a></li>
            <li><a><span>Trademark</span></a></li>
            <li><a><span>Goods & Services</span></a></li>
            <li><a><span>Income Tax</span></a></li>
            <li><a><span>Compliance</span></a></li>
            <li><a><span>Loan</span></a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a><span>Import & Export</span></a></li>
            <li><a><span>Legal Documenaton</span></a></li>
            <li><a><span>Company Convet</span></a></li>
            <li><a><span>ISO</span></a></li>
            <li><a><span>Banking</span></a></li>
          </ul>
        </div>
        </div>
      </div>
      <div>
        <h1>USAGE</h1>
        <div>
          <ul>
            <li><a><span>Terms & Conditions</span></a></li>
            <li><a><span>Privacy Policy</span></a></li>
            <li><a><span>Refund Policy</span></a></li>
          </ul>
        </div>
      </div>
      <div>
        <h1>USAGE</h1>
        <div>
          <ul>
            <li><a><span>Confidentiality Policy</span></a></li>
            <li><a><span>Disclaimer Policy</span></a></li>
            <li><a><span>Vinayak Review</span></a> </li>
            <li><a><span>Online Payment</span></a> </li>
            <li><a><span>Careers</span></a> </li>
            <li><a><span>Contact Us</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="down-footer">
      <div>
      Copyright &copy; 2023 | Rizrv | Powered by Manal Softech Pvt Ltd | All rights reserved.
      </div>
      <div>
        <ul>
          <li><FaFacebookSquare /></li>
          <li><FaTwitterSquare /></li>
          <li><FaInstagramSquare /></li>
        </ul>
      </div>
      </div>
</footer>
  )
}

export default Footer
