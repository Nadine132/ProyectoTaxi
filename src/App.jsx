import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import styled from 'styled-components';
import Whatsapp from './components/Whatsapp'; 


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes up at least the full viewport height */
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const MainContent = styled.main`
  flex: 1; /* Allows the content to expand and push the footer down */
`;

const App = () => (
  <Router>
    <AppContainer>
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<About />} /> {/* Home page */}
        </Routes>
      </MainContent>
      <Whatsapp />
      <Footer />
    </AppContainer>
  </Router>
);

export default App;
