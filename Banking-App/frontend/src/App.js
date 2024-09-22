import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './components/login.js';
import Signup from './components/signup.js'; 
import BankingFunctions from './components/bankingfunctions.js';
import EmpBankingFunctinos from './components/empbankingfunctions.js';
import Home from "./components/home.js";
import ExternalTransfer from "./components/externaltransfer.js";
import CustomerLookup from "./components/customerlookup.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bankingfunctions" element={<BankingFunctions />} />
        <Route path="/empbankingfunctions/:uID"element={<EmpBankingFunctinos/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/externaltransfer" element={<ExternalTransfer />} />
        <Route path="/customerlookup" element={<CustomerLookup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
