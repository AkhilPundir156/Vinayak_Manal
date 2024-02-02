import React, { useState } from 'react';
import "../styles/contact.scss"
import { CgHome, CgMail, CgPhone } from 'react-icons/cg';


const ContactForm = () => {
  // State variables for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);

  // Handler functions for the form fields
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCaptchaChange = (e) => {
    setCaptcha(e.target.checked);
  };

  // Handler function for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields and the captcha
    if (
      name &&
      email &&
      mobile &&
      subject &&
      message &&
      captcha
    ) {
      // Send the form data to the backend or an API
      console.log("Form submitted successfully");
    } else {
      // Display an error message
      console.log("Please fill all the fields and verify the captcha");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="contact_inner">
            <div className="row">
              <div className="col-md-10">
                <div className="contact_form_inner">
                  <div className="contact_field">
                    <h3>Contact Us</h3>
                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                    <form id="contactForm" action="https://bharatbizs.com/company-contact-us-submit" method="post" noValidate>
                      <input type="hidden" name="_token" value="NynmNiOl9tFudd9XBtLoxOhJFICl0JeCCDUy8ilz" autoComplete="off" />
                      <div className="mb-3">
                        <input type="text" name="name" className="form-control" placeholder="Enter Your Name" required />
                      </div>
                      <div className="mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Enter Your Email" required />
                      </div>
                      <div className="mb-3">
                        <input type="number" name="mobile_no" className="form-control" placeholder="Enter Your Mobile" required />
                      </div>
                      <div className="mb-3">
                        <input type="text" name="subject" className="form-control" placeholder="Enter Subject" required />
                      </div>
                      <div className="mb-3">
                        <textarea name="message" className="form-control" rows="5" placeholder="Enter Your Message" required></textarea>
                      </div>
                      <div className="g-recaptcha form-group add_bottom_15" data-sitekey="6Ld1ZlMpAAAAAEwL92ivErZr0Sxe6BrBQO6Jmet5">
                        {/* Insert reCAPTCHA code here */}
                      </div>
                      <div className="my-3">
                        <input type="submit" className="btn btn-primary w-100" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="right_conatct_social_icon d-flex align-items-end">
                  {/* Add social icons or any other content here if needed */}
                </div>
              </div>
            </div>
            <div className="contact_info_sec">
              <h4 className="text-white">Contact Info</h4>
              <div className="d-flex info_single align-items-center text-white">
                <i className="fas fa-headset text-white"><CgPhone /></i>
                <span>9827098270</span>
              </div>
              <div className="d-flex info_single align-items-center text-white">
                <i className="fas fa-envelope-open-text text-white"><CgMail /></i>
                <span>vinayak@gmail.com</span>
              </div>
              <div className="d-flex info_single align-items-center text-white">
                <i className="fas fa-map-marked-alt text-white"><CgHome /></i>
                <span>ujjain, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ContactForm;
