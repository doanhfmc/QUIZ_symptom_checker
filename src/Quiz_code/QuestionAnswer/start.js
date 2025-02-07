import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../App.css";


function App() {

  const navigate = useNavigate();
  const handleConditionSelect = () => {
    navigate("/Question_1")
  };

  return (
    
    <div className="app">
     
      <div className="Container">
          <>
            <div className="header_first">
              <p>Symptom Checker</p>
            </div>
            <div className="footer_first">
              <div className="footer_first_content">
                <p>
                  Welcome to your personal Canesten® Symptom Checker <br /><br />
                  Experiencing itching, discomfort and soreness? Wondering what
                  it might be, or just want some information and treatment
                  options?
                  <br /><br />
                  The Canesten® Symptom Checker will help you better understand
                  your symptoms and help guide you on a treatment to help get
                  you back to you.
                  <br /><br />
                  If you are under 18 or over 60, it is recommended you speak to
                  your healthcare professional before continuing.
                  <br /><br />
                </p>
              </div>
              <div className="footer_first_button">
                <button onClick={handleConditionSelect}>
                  LET'S GET STARTED
                </button>
              </div>
            </div>
          </>
        
      </div>
    </div>
  );
}

export default App;
