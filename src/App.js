import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './policies/PrivacyPolicy';
import TermsConditions from './policies/TermsConditions';

import Header from './components/Header';
import MainContent from './components/MainContent';
import CustomerServiceFloat from './components/CustomerServiceFloat';
import Footer from './components/Footer';
import './styles/App.css';

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-dark to-[#34495E] text-light min-h-screen flex flex-col font-sans hero-pattern">
      <Header />
      {children}
      <CustomerServiceFloat />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main route */}
        <Route
          path="/"
          element={
            <Layout>
              <MainContent />
            </Layout>
          }
        />

        {/* Privacy Policy route */}
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        {/* Terms & Conditions route */}
        <Route
          path="/terms-conditions"
          element={
            <Layout>
              <TermsConditions />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;