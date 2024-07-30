import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import ViewPolicies from './ViewPolicies.js';
import BuyInsurance from './BuyInsurance';
import ClaimStatus from './ClaimStatus';
import PremiumCalculator from './PremiumCalculator';
import ContactSupport from './ContactSupport';
import Logout from './Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view-policies" element={<ViewPolicies />} />
        <Route path="/buy-insurance" element={<BuyInsurance />} />
        <Route path="/claim-status" element={<ClaimStatus />} />
        <Route path="/premium-calculator" element={<PremiumCalculator />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
