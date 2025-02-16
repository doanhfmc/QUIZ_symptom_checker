import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../../img/1.6.jpeg";
import "./Option_question.css";
import { useBearStore } from "../store/app";
const Option_question = () => {
  const { increasePopulation } = useBearStore();

  const navigate = useNavigate();
  const handleConditionSelect = (condition) => {
    increasePopulation({ condition });

    navigate(`/${condition}`);
  };
  return (
    <div className="quesiton_1">
      <div>
        <h1 className="title-container">WHAT IS YOUR CONDITION RELATED TO?</h1>
        <div className="card-container">
          <div
            className="card-wrapper"
            onClick={() => handleConditionSelect("skin")}
          >
            <div className="card-background-left"></div>
            <div className="card">
              <img src={img2} alt="Skin & Foot Health" />
              <p> Skin fungus</p>
            </div>
          </div>
          <div
            className="card-wrapper"
            onClick={() => handleConditionSelect("intimate")}
          >
            <div className="card-background-right"></div>
            <div className="card">
              <img src={img2} alt="Women's Intimate Health" />
              <p> Gynecological intections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option_question;
