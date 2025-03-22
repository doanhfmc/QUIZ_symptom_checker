import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionsData } from "../Data.js";
import "./Question.css";
import { useBearStore } from "../store/app.js";
import Next from "../../img/Gyne/Tiep tuc xanh.png";
import DisabledNext from "../../img/Gyne/Tiep tuc xam.png";
import "./Question2.css";
import Yes_sel from "../../img/03 _ Co.png";
import No_sel from "../../img/03 _ Khong.png";
function Question2({ condition }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [answers, setAnswers] = useState([]);
  const [answers_select, setAnswers_select] = useState([]);
  const [answersid, setAnswerid] = useState([]);

  const [type, setType] = useState("single");
  const { increasePopulation, dataSelect } = useBearStore();
  const navigate = useNavigate();
  console.log(dataSelect);

  const question = questionsData[condition][currentQuestion - 1];
  useEffect(() => {
    if (question?.id === 1 || question?.id === 8) {
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
      //
      questionId: question.id,
      questionText: question.text,
      questionDetail: question.text_1,
      [`answer${currentQuestion}`]: [...new Set(answersid)],
      selectedAnswers2: [...new Set(answers_select)],
    });
    setCurrentQuestion(currentQuestion + 1);
    setAnswers_select([]);
    console.log(answersid);
  };

  useEffect(() => {
    if (dataSelect.length >= 5) {
      if (!dataSelect[1]?.answer1?.includes(16)) {
        if (
          dataSelect[2]?.answer2?.includes(20) &&
          dataSelect[4]?.answer4?.includes(43)
        ) {
          navigate("/Result1Op");
          return;
        }
        if (
          dataSelect[2]?.answer2?.includes(21) &&
          dataSelect[4]?.answer4?.includes(42)
        ) {
          navigate("/Result2Op");
          return;
        }
        navigate("/Result4Op");
        return;
      } else {
        if (
          dataSelect[2]?.answer2?.includes(20) &&
          dataSelect[4]?.answer4?.includes(43) &&
          dataSelect.length === 9
        ) {
          navigate("/Result4Op");
          return;
        }
        if (
          dataSelect[2]?.answer2?.includes(21) &&
          dataSelect[4]?.answer4?.includes(42) &&
          dataSelect.length === 9
        ) {
          navigate("/Result4Op");
          return;
        }
      }

      if (!dataSelect[7]?.answer7?.includes(70) && dataSelect.length === 8) {
        navigate("/Result4Op");
        return;
      }
    }
    if (dataSelect.length === 9) {
      navigate("/Result3Op");
    }
    if (dataSelect.length === 9 && dataSelect[8]?.answer8?.includes(83)) {
      navigate("/Result4Op");
    }
  }, [dataSelect.length]);
  const columnClass =
    question?.options.length === 4
      ? "two2-columns"
      : question?.options.length === 3
      ? "four-columns"
      : question?.options.length === 2
      ? "one2-columns"
      : "three2-columns";
  return (
    <div className="background_question2">
      <div className="question2_2">
        <div className="title_question2">
          <p className="number_question">
            {questionsData[condition][currentQuestion - 1]?.text_1}
          </p>
          <div className="center_q">
            {" "}
            <p className="option_question">
              {questionsData[condition][currentQuestion - 1]?.text}
            </p>
          </div>

          <p className="type_question">
            {questionsData[condition][currentQuestion - 1]?.type}
          </p>
        </div>
        <div></div>
        <div className={`option-container2 ${columnClass} `}>
          {questionsData[condition][currentQuestion - 1]?.options.map(
            (option, index) =>
              questionsData[condition][currentQuestion - 1]?.id !== 5 &&
              questionsData[condition][currentQuestion - 1]?.id !== 6 &&
              questionsData[condition][currentQuestion - 1]?.id !== 7 ? (
                <div className="option2" onClick={() => handleAnswer(option)}>
                  <div>
                    <div
                      className={` ${
                        answers_select.filter((item) => item === option?.text)
                          ?.length !== 0
                          ? "img_red"
                          : "img_blue"
                      }`}
                    ></div>
                    {/* {question.id !== 5 && question.id !== 2 && ( */}
                    <img
                      className="img_as2"
                      key={index}
                      src={option?.img}
                      alt={option?.text}
                    />
                  </div>
                  <div className="text2_as">{option?.text}</div>
                  <div className="ref2_as">{option?.ref}</div>
                </div>
              ) : (
                <div className="Q3">
                  <div
                    className="Container_Q3 "
                    onClick={() => handleAnswer(option)}
                  >
                    <div>
                      <div
                        className={` ${
                          answers_select.filter((item) => item === option?.text)
                            ?.length !== 0
                            ? "img_red"
                            : "img_blue"
                        }`}
                      ></div>
                      {/* {question.id !== 5 && question.id !== 2 && ( */}
                      <img
                        className="img_as2"
                        key={index}
                        src={option?.img}
                        alt={option?.text}
                      />
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="Next_2">
          <div className="disclaimer_footer">
            <p>
              Am Fam Physician. 2018 Mar 1;97(5):321-329; Sobel JD. Lancet
              2007;369:1961-71; Farr A et al. Mycoses 2021;64:583-602; CDC 2022.
              Vaginal candidiasis.
              <a
                style={{}}
                href="https://www.cdc.gov/fungal/diseases/candidiasis/genital/index.html;"
                target="blank"
              >
                https://www.cdc.gov/fungal/diseases/candidiasis/genital/index.html;
              </a>
              Nasir R et al. Europasian J Med Sci 2023;5(1):1-10
            </p>
          </div>
          <div>
            <button
              className="Btn_Next"
              onClick={nextPage}
              disabled={answers_select.length === 0}
            >
              <img
                src={answers_select.length === 0 ? DisabledNext : Next}
                alt="Next Button"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question2;
