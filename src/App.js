import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/primary.scss"
import "./styles/Home.scss"
import TermsAndConditions from './components/Termscond';
import Footer from "./components/Footer";
import "./styles/navbar.scss"
import "./styles/Footer.scss";

import Navbar1 from "./components/Navbar";
import Home from './components/Home';
import Services from './components/Services';
import "./styles/services-details.scss";
import "./styles/Latest.scss";
import "./styles/TermsAndConditions.scss";
import "./styles/MediaQuery.scss";
import PrivacyPolicy from './components/Privacypolicy';
import ContactUs from './components/Contact';
import Disclaimer from './components/Disclaimer';
import { useState } from 'react';
import Login from './components/Login';



function App() {
  const [sharedVariable, setSharedVariable] = useState('all');

  const updateSharedVariable = (newValue) => {
    setSharedVariable(newValue);
  };
  return (
    <>
    <Router>
      <Navbar1 sharedVariable={sharedVariable} updateSharedVariable={updateSharedVariable} />
      <Routes>
        <Route path="/" element ={<Home sharedVariable={sharedVariable} />} />
        <Route path="/services-details" element={<Services />} />
        <Route path="/companytc" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      {/* <ContactUs /> */}
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
