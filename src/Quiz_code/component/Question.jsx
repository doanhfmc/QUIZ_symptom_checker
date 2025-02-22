/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionsData } from "../Data.js";
import "./Question.css";
import { useBearStore } from "../store/app.js";
import ReactGA from "react-ga4";
function Question({ condition }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [answers, setAnswers] = useState([]);
  const [answers_select, setAnswers_select] = useState([]);
  const [answersid, setAnswerid] = useState([]);
  const [type, setType] = useState("multi");
  const { increasePopulation } = useBearStore();
  const navigate = useNavigate();
  //console.log(type);

  const handleAnswer = (answer) => {
    switch (type) {
      case "multi":
        if (answers_select.includes(answer.text)) {
          setAnswers_select(
            answers_select.filter((item) => item !== answer.text)
          );
          setAnswerid(answer._id);
        } else {
          setAnswers_select([...answers_select, answer.text]);
          setAnswerid(answer._id);
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
    if (answersid === 10) {
      setAnswers_select([answers_select[answers_select.length - 1]]);
      setType("single");
    } else {
      setType("multi");
    }
  }, [question?.id, answersid]);

  const nextPage = () => {
    ReactGA.event({
      event: "next_button_click",
      category: "User Interaction",
      action: `ID  ${answersid} của câu ${question?.id} `,
      label: `câu trả lời ${answersid}`,
    });
    console.log(answersid);

    increasePopulation({
      //
      questionId: question.id,
      questionText: question.text,
      questionDetail: question.text_1,
      selectedAnswers: [...new Set(answers_select)],
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
        navigate("/result1");
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
  //console.log(question);

  return (
    <div>
      <div className="question_2">
        <h3>{questionsData[condition][currentQuestion - 1]?.text_1}</h3>
        <h2 className="question-option">
          {questionsData[condition][currentQuestion - 1]?.text}
        </h2>
        <h3>{questionsData[condition][currentQuestion - 1]?.type}</h3>
        <div
          className={`option-container ${
            question?.options.length === 4 ? "two-columns" : "three-columns"
          } `}
        >
          {questionsData[condition][currentQuestion - 1]?.options.map(
            (option, index) => (
              <button
                className={`container1 `}
                key={index}
                onClick={() => handleAnswer(option)} // Thêm logic sự kiện click
              >
                <img
                  className="circle-img"
                  src={option?.img}
                  alt={option?.text}
                />
                <div
                  className={` ${
                    answers_select?.filter((item) => item === option?.text)
                      ?.length !== 0
                      ? "activeBG"
                      : "content-box"
                  }`}
                >
                  {" "}
                  {question.id !== 3 && option?.text}
                </div>
              </button>
            )
          )}
        </div>
        <button onClick={nextPage} disabled={answers_select.length === 0}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Question;
