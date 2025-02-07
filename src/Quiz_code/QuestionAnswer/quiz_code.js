
import React, { useState } from 'react';
import './quiz.css'
import img from '../../img/1.6.jpeg'
import { useNavigate } from "react-router-dom";
const questionsData = {
  skin: [
    {
      id: 1,
      text_1: "Question 1",
      text: "Which of the following symptoms are you experiencing?",
      options: [
        { text: "Feel nothing", img: img },
        { text: "Itchy", img: img },
        { text: "Irritate", img: img },
        { text: "Sore", img: img },
      ],
    },
    {
      id: 2,
      text_1: "Question 2",
      text: "Which is the most similar to describe your skin symptom?",
      options: [
        { text: "Red, scaly round patches with an outer clearing", img: img },
        { text: "Red itchy round plaques", img: img },
        { text: "Red or brown patches with scaling", img: img },
        { text: "Wide added, red patches", img: img },
        { text: "Red or brown spots with hair loss", img: img },
        { text: "Red or brown spots with hair loss", img: img },
      ],
    },
    {
      id: 3,
      text_1: "Question 3",
      text: "Do you have close contact with animals/pets (Cat,..) ?",
      options: [
        { img: img },
        { img: img },
      ],
    },
  ],
  intimate: [
    {
      id: 1,
      text_1: "Question 1",
      text: "Do you have fever?",
      options: [
        { text: "Yes", img: img },
        { text: "No", img: img },
      ],
    },
    {
      id: 2,
      text_1: "Question 2",
      text: "Which of the following symptoms are you experiencing in your intimate area?",
      options: [
        { text: "Feel nothing", img: img },
        { text: "Burning", img: img },
        { text: "Itchy", img: ".img" },
        { text: "Stinging", img: img },
        { text: "Soreness", img: img },
        { text: "Dysuria", img: img },
        { text: "Irritation", img: img },
      ],
    },
  ],
};


function Quiz({ condition }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  const navigate = useNavigate();
  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questionsData[condition].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result1", { state: { answers } });
    }
  };
  const question = questionsData[condition][currentQuestion];
  return (
    <div>
   
    <div className="question_2">
      <h3>{questionsData[condition][currentQuestion].text_1}</h3>
      <h2>{questionsData[condition][currentQuestion].text}</h2>
      <div   className={`option-container ${
          question.options.length === 4 ? "two-columns" : "three-columns"
        }`}>
        {questionsData[condition][currentQuestion].options.map((option, index) => (
          <button
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0",
              padding: "10px 20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "white",
              cursor: "pointer",
              fontSize: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s",
            }}
            onClick={() => handleAnswer(option.text)} // Thêm logic sự kiện click
          >
            <img
              src={option.img}
              alt={option.text}
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                borderRadius: "5px",
              }}
            />
            {option.text}
          </button>
    ))}
      </div>
    </div>
    
   
    </div>
  );

}

export default Quiz;
