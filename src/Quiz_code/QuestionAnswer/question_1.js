
import React, { useState } from 'react';
import Quiz from './quiz_code.js';
import img from '../../img/1.jpg'
import img2 from '../../img/1.6.jpeg'
import './question_1.css'
import { useNavigate } from "react-router-dom";
function Question_1() {
  const [selectedCondition, setSelectedCondition] = useState(null);
  const navigate = useNavigate();
  const handleConditionSelect = (condition) => {
    setSelectedCondition(condition);
    navigate(`/${condition}`);
  };

  return (
    <div className="quesiton_1">
      
      {!selectedCondition ? (
        <div>
          <h1 className='title-container'>WHAT IS YOUR CONDITION RELATED TO?</h1>
          <div className="card-container">
            <div className="card-wrapper" onClick={() => handleConditionSelect('skin')}>
              <div className="card-background-left"></div>
              <div className="card">
                <img
                  src={img}
                  alt="Skin & Foot Health"
                />
                <p> Skin fungus</p>
              </div>
            </div>
            <div className="card-wrapper" onClick={() => handleConditionSelect('intimate')}>
              <div className="card-background-right"></div>
              <div className="card">
                <img
                  src={img2}
                  alt="Women's Intimate Health"
                />
                <p> Gynecological intections</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Quiz condition={selectedCondition} />
      )}
    </div>
  );
}

export default Question_1;