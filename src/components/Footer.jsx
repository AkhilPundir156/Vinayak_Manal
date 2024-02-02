import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare,FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        <div className='footer-services'>
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
            <li><Link  to="companytc" ><span>Terms & Conditions</span></Link></li>
            <li><Link  to="privacypolicy" ><span>Privacy Policy</span></Link></li>
            <li><a><span>Refund Policy</span></a></li>
          </ul>
        </div>
      </div>
      <div>
        <h1>USAGE</h1>
        <div>
          <ul>
            <li><span>Confidentiality Policy</span></li>
            <li><Link  to="disclaimer" ><span>Disclaimer Policy</span></Link></li>
            <li><a><span>Vinayak Review</span></a> </li>
            <li><a><span>Online Payment</span></a> </li>
            <li><a><span>Careers</span></a> </li>
            <li><Link to="contactus"><span>Contact Us</span></Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="down-footer">
      <div>
      Copyright &copy; 2023 | Rizrv | Powered by Manal Softech Pvt Ltd | All rights reserved.
      </div>
      <div className='footer-icon-div'>
        <ul className='footer-icons'>
          <li> <a href="" target="_blank" rel="noopener noreferrer"> <FaFacebookSquare /></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a></li>
        </ul>
      </div>
      </div>
</footer>
  )
}

export default Footer
