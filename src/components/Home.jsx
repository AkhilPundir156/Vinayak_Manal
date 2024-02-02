import React, { useEffect, useRef, useState } from "react";

import Typewriter from "typewriter-effect";
import data from "../data/servicesdata.js"
import { Link } from "react-router-dom";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import Slider from "react-slick";


const testimonialData = [
  {
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis accusamus quisquam labore quibusdam explicabo deleniti nam at vel quo?',
    author: 'Jhon Doe',
    position: 'DIRECTOR',
  },
  // Add more testimonial data as needed
];



const Home = ({ sharedVariable }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartLeft = useRef(0);

  useEffect(() => {
    // AutoPlay
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000); // Change the interval as needed (milliseconds)
    setAutoPlayInterval(interval);

    return () => {
      clearInterval(autoPlayInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const handleMouseDown = (event) => {
    isDragging.current = true;
    dragStartX.current = event.clientX;
    dragStartLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (event) => {
    if (!isDragging.current) return;
    const delta = event.clientX - dragStartX.current;
    sliderRef.current.scrollLeft = dragStartLeft.current - delta;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };
  return (
    <>
      {/* First line completed for the home section */}
      <div className="home">
        <div className="homeitem">Facilitating Businesses</div>
        <Typewriter
          options={{
            strings: [
              " In Securing Payments!",
              " in Optimal Employee Management!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      {/* Second task to create a grid with 5 photos and text on them which appears on hover */}
      <div className="image-grid">
        <div className="side-image">
          <div className="side-image-1">
            <div className="side-image-te">Empowering aspiring entrepreneurs to embark on their startup journey!</div>
          </div>
        </div>
        <div className="full-width-image">
          <div className="side-image-2">
          <div className="side-image-text">Fueling the growth and success of businesses throughout India!</div>
          </div>
        </div>
        <div className="side-image">
          <div className="side-image-1">
          <div className="side-image-te">Facilitating businesses with smooth and effortless financial transactions!</div>
          </div>
        </div>
        <div className="side-image">
          <div className="side-image-1">
          <div className="side-image-te">Empowering businesses with effortless employee management for sustained growth!</div>
          </div>
        </div>
        <div className="side-image">
          <div className="side-image-1">
          <div className="side-image-te">Streamlining tax submissions to drive your business triumph!</div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="services">
        <div className="services-head">
            Our Services
        </div>
        <div className="services-item">
            {data.map((item,index)=>(
                sharedVariable != "all" && item.cat == sharedVariable &&
                <div className="services-card">
                    <img className="services-img" src={item.img} alt="" srcset="" />
                    <div className="services-card-text">{item.txt}</div>
                    <Link className="linkbtn" to="services-details" state={item}>
                    <div className="hover-btn">
                        Quick View
                        </div>
                        </Link>
                </div>
            ))}
            {data.map((item,index)=>(
                sharedVariable == "all" &&
                <div className="services-card">
                    <img className="services-img" src={item.img} alt="" srcset="" />
                    <div className="services-card-text">{item.txt}</div>
                    <Link className="linkbtn" to="services-details" state={item}>
                    <div className="hover-btn">
                        Quick View
                        </div>
                        </Link>
                </div>
            ))}
        </div>
      </div>

      {/* What's happening at the moment? Section */}
      <div className="latest">
        <div className="latest-heading">
        What's happening at the moment?
        </div>
        <div className="latest-items">
          <div className="latest-item-num">
            <img src="https://apis.rizrv.in/services_images/services/1702118318-image.jpg" alt="" srcset="" />
            <div className="latest-item-text">
              Dainik Bhaskar
            </div>
          </div>
          <div className="latest-item-num">
            <img src="https://apis.rizrv.in/services_images/services/1702118318-image.jpg" alt="" srcset="" />
            <div className="latest-item-text">
              Dainik Bhaskar
            </div>
          </div>
          <div className="latest-item-num">
            <img src="https://apis.rizrv.in/services_images/services/1702118318-image.jpg" alt="" srcset="" />
            <div className="latest-item-text">
              Dainik Bhaskar
            </div>
          </div>
          <div className="latest-item-num">
            <img src="https://apis.rizrv.in/services_images/services/1702118318-image.jpg" alt="" srcset="" />
            <div className="latest-item-text">
              Dainik Bhaskar
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <h2 className="test-head">
      What our client says
      </h2>
      <div className="testimonails">
       

        <div className="test-items">
              <div className="quote">

              <i ><RiDoubleQuotesL /></i>
              </div>
              <div className="test-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis accusamus quisquam labore quibusdam explicabo deleniti nam at vel quo?</div>
              <div className="face">

              <i ><FaRegUserCircle /></i>
              </div>
              <div className="test-name">Jhon Doe</div>
              <div className="test-name-des">DIRECTOR</div>

        </div>
        <div className="test-items">
              <div className="quote">

              <i ><RiDoubleQuotesL /></i>
              </div>
              <div className="test-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis accusamus quisquam labore quibusdam explicabo deleniti nam at vel quo?</div>
              <div className="face">

              <i ><FaRegUserCircle /></i>
              </div>
              <div className="test-name">Jhon Doe</div>
              <div className="test-name-des">DIRECTOR</div>

        </div>
        <div className="test-items">
              <div className="quote">

              <i ><RiDoubleQuotesL /></i>
              </div>
              <div className="test-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis accusamus quisquam labore quibusdam explicabo deleniti nam at vel quo?</div>
              <div className="face">

              <i ><FaRegUserCircle /></i>
              </div>
              <div className="test-name">Jhon Doe</div>
              <div className="test-name-des">DIRECTOR</div>

        </div>
        
        
      </div>


{/* <div className="testimonial">
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="cards" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
          {testimonialData.map((testimonial, index) => (
            <div className="test-items" key={index}>
              <div className="quote">
                <i><RiDoubleQuotesL /></i>
              </div>
              <div className="test-text">{testimonial.quote}</div>
              <div className="face">
                <i><FaRegUserCircle /></i>
              </div>
              <div className="test-name">{testimonial.author}</div>
              <div className="test-name-des">{testimonial.position}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide}>&#8249;</button>
      <button onClick={nextSlide}>&#8250;</button>
    </div> */}



      {/* last section for photo and text  */}
      <div className="last-sec">
        <div className="last-sec-item1">
          <img src="https://apis.rizrv.in/company/sliders/1700549560-mobile%20section.png" alt="" />
        </div>
        <div className="last-sec-item2">
          <h1>
          Effortless and Swift Business Operations
          </h1>
          <div className="last-div">
          {/* Connect effortlessly with Industry Experts, discover solutions to numerous queries,explore insightful business  <br />articles, 
          receive timely statutory deadline notifications, initiate company formations, <br /> or secure trademark registrations—all within 

          the Vinayak App. Experience the convenience of India's <br /> pioneering mobile application for commencing a business or trademark registration. 
          Download now!
          i am akhil */}
          Connect effortlessly with Industry Experts, discover solutions to numerous queries, explore insightful business articles, receive timely statutory deadline notifications, initiate company formations, or secure trademark registrations—all within the Vinayak App. Experience the convenience of India's pioneering mobile application for commencing a business or trademark registration. Download now!
          </div>
          <div className="smart">
            <br /><br /><br />
            <button>
              Play Store
              </button>
              <button>
              App Store
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
