/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionsData } from "../Data.js";
import "./Question.css";
import { useBearStore } from "../store/app.js";
function Question({ condition }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [answers, setAnswers] = useState([]);
  const [answers_select, setAnswers_select] = useState([]);
  const [answersid, setAnswerid] = useState();
  const [type, setType] = useState("multi");
  const { increasePopulation } = useBearStore();
  const navigate = useNavigate();
  console.log(type);

  const handleAnswer = (answer) => {
    switch (type) {
      case "multi":
        if (answers_select.includes(answer.text)) {
          setAnswers_select(
            answers_select.filter((item) => item !== answer.text)
          );
          setAnswerid(null);
        } else {
          setAnswers_select([...answers_select, answer.text]);
          setAnswerid(null);
        }
        break;
      case "single":
        if (answers_select.includes(answer.text)) {
          setAnswers_select(
            answers_select.filter((item) => item !== answer.text)
          );
          setAnswerid(null);
        } else {
          setAnswers_select([answer.text]);
          setAnswerid(answer._id);
        }
        break;

      default:
        break;
    }

    // setAnswers([...answers, answer]);
  };
  const question = questionsData[condition][currentQuestion - 1];
  useEffect(() => {
    if (question?.id === 2) {
      setType("single");
    }
  }, [question?.id]);

  const nextPage = () => {
    increasePopulation({
      [`answer${currentQuestion}`]: [...new Set(answers_select)],
    });
    setCurrentQuestion(currentQuestion + 1);
    setAnswers_select([]);
    switch (answersid) {
      case 20:
        break;
      case 21:
        break;
      case null:
        break;
      case 30:
        navigate("/result1");
        break;
      case 31:
        navigate("/result2");
        break;
      case 22:
        navigate("/result3");
        break;
      case 23:
        navigate("/result4");
        break;
      case 24:
        navigate("/result5");
        break;
      case 25:
        navigate("/result6");
        break;
      default:
        break;
    }
  };
  console.log(question);

  return (
    <div>
      <div className="question_2">
        <h3>{questionsData[condition][currentQuestion - 1]?.text_1}</h3>
        <h2>{questionsData[condition][currentQuestion - 1]?.text}</h2>
        <div
          className={`option-container ${
            question?.options.length === 4 ? "two-columns" : "three-columns"
          } `}
        >
          {questionsData[condition][currentQuestion - 1]?.options.map(
            (option, index) => (
              <button
                className={`${
                  answers_select.filter((item) => item === option?.text)
                    ?.length !== 0
                    ? "activeBG"
                    : ""
                }`}
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
                onClick={() => handleAnswer(option)} // Thêm logic sự kiện click
              >
                <img
                  src={option?.img}
                  alt={option?.text}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                    borderRadius: "5px",
                  }}
                />
                {question.id !== 3 && option?.text}
              </button>
            )
          )}
        </div>
        <button onClick={nextPage}>NEXT</button>
      </div>
    </div>
  );
}

export default Question;
