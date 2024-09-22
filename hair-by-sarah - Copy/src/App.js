import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home.js"; 



// This applies bootstraps css to react-bootstrap components
import "bootstrap/dist/css/bootstrap.min.css"; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
