/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionsData } from "../Data.js";
import "./Question.css";
import { useBearStore } from "../store/app.js";
function Question2({ condition }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [answers, setAnswers] = useState([]);
  const [answers_select, setAnswers_select] = useState([]);
  const [answersid, setAnswerid] = useState();

  const [type, setType] = useState("single");
  const { increasePopulation, dataSelect } = useBearStore();
  const navigate = useNavigate();
  console.log(dataSelect);
  const Navifunction = (value) => {
    switch (value) {
      // case 36:
      //   setFlag(false);
      //   break;
      case 41:
        navigate("/result3");
        return true;
      case 51:
        navigate("/result5");
        return true;
      case 60:
        navigate("/result1");
        return true;
      case 61:
        navigate("/result1");
        return true;
      case 62:
        navigate("/result1");
        return true;
      case 70:
        navigate("/result4");
        return true;
      default:
        return false;
    }
  };
  const question = questionsData[condition][currentQuestion - 1];
  useEffect(() => {
    if (question?.id === 3 || question?.id === 8) {
      setType("multi");
    } else setType("single");
  }, [question?.id]);

  useEffect(() => {
    if (question.id > 6) {
      const shouldStop = dataSelect.some((element, index) =>
        element[`answer${index + 1}`]?.some((item) => {
          console.log(item);
          if (item === 36) {
            return true; // Dừng ngay khi gặp 36
          }
          return Navifunction(item);
        })
      );

      if (shouldStop) {
        return; // Dừng toàn bộ process nếu có 36
      }
    }
  }, [dataSelect]);

  const handleAnswer = (answer) => {
    switch (type) {
      case "multi":
        if (answers_select.includes(answer.text)) {
          setAnswers_select(
            answers_select.filter((item) => item !== answer.text)
          );
          setAnswerid(answersid.filter((item) => item !== answer._id));
        } else {
          setAnswers_select([...answers_select, answer.text]);
          setAnswerid([...answersid, answer._id]);
        }
        break;
      case "single":
        if (answers_select.includes(answer.text)) {
          setAnswers_select(
            answers_select.filter((item) => item !== answer.text)
          );
          setAnswerid([]);
        } else {
          setAnswers_select([answer.text]);
          setAnswerid([answer._id]);
        }
        break;

      default:
        break;
    }

    // setAnswers([...answers, answer]);
  };

  const nextPage = () => {
    increasePopulation({
      [`answer${currentQuestion}`]: [...new Set(answersid)],
    });
    setCurrentQuestion(currentQuestion + 1);
    setAnswers_select([]);
  };

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
                {question.id !== 1 && option?.text}
              </button>
            )
          )}
        </div>
        <button onClick={nextPage}>NEXT</button>
      </div>
    </div>
  );
}

export default Question2;
