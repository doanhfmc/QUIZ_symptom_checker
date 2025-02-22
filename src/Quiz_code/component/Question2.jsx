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

  const question = questionsData[condition][currentQuestion - 1];
  useEffect(() => {
    if (question?.id === 3 || question?.id === 8) {
      setType("multi");
    } else setType("single");
  }, [question?.id]);

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

  useEffect(() => {
    if (dataSelect.length >= 7) {
      if (!dataSelect[3]?.answer3?.includes(36)) {
        if (
          dataSelect[4]?.answer4?.includes(40) &&
          dataSelect[5]?.answer5?.includes(50)
        ) {
          navigate("/Result2");
          return;
        }
        if (
          dataSelect[4]?.answer4?.includes(41) &&
          dataSelect[5]?.answer5?.includes(51)
        ) {
          navigate("/Result3");
          return;
        }
        navigate("/Result1");
        return;
      } else {
        if (
          dataSelect[4]?.answer4?.includes(40) &&
          dataSelect[5]?.answer5?.includes(50) &&
          dataSelect.length === 9
        ) {
          navigate("/Result6");
          return;
        }
        if (
          dataSelect[4]?.answer4?.includes(41) &&
          dataSelect[5]?.answer5?.includes(51) &&
          dataSelect.length === 9
        ) {
          navigate("/Result7");
          return;
        }
      }

      if (!dataSelect[7]?.answer7?.includes(70) && dataSelect.length === 8) {
        navigate("/Result4");
        return;
      }
    }
    if (dataSelect.length === 9) {
      navigate("/Result5");
    }
  }, [dataSelect.length]);

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
                className={`container1`}
                key={index}
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
                <div
                  className={` ${
                    answers_select.filter((item) => item === option?.text)
                      ?.length !== 0
                      ? "activeBG"
                      : "content-box"
                  }`}
                >
                  {" "}
                  {question.id !== 1 && option?.text}
                </div>
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
