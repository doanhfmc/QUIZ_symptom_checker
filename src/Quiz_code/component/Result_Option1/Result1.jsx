import icon from "../../../img/1.6.jpeg";
// import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";
import "./Result_1.css";
import { useLocation } from "react-router-dom";
import { useBearStore } from "../../store/app.js";

const sliderData = [
  {
    title: "Eczema",
    description:
      "Red coin-shaped plaques. Most lack central clearing. Consistency pigmentation. Commonly appears on lower legs, hands, extensor surface of arms.",
    img: icon,
  },
  {
    title: "Psoriasis",
    description:
      "Erythematous plaques. Silvery scales. Lesions may have pus in severe cases. Typically on elbows, knees, scalp, and lumbosacral region.",
    img: icon,
  },
];

function Result_1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dataSelect = useBearStore((state) => state.dataSelect);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="symptom-checker">
      {/* Result Section */}
      <section className="result">
        <p>Based on the symptoms you described, you may have</p>
        <h2>RINGWORM1</h2>
        <img src={icon} alt="Ringworm" />
        <button className="find-out-button">
          FIND OUT ABOUT CAUSE & TREATMENT
        </button>
      </section>

      {/* Slider Section */}
      <section className="slider">
        <h3>DO YOU KNOW?</h3>
        <p>{`Difference between Ringworm & "lookalike" conditions`}</p>
        <div className="slider-container">
          <button className="prev-button" onClick={handlePrev}>
            &#8592;
          </button>
          <div className="slide">
            <img
              src={sliderData[currentSlide].img}
              alt={sliderData[currentSlide].title}
            />
            <h4>{sliderData[currentSlide].title}</h4>
            <p>{sliderData[currentSlide].description}</p>
          </div>
          <button className="next-button" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </section>

      {/* Dropdown Section with animation */}
      <div className="Dropdown_result">
        <div onClick={toggleDropdown} className="Dropdown_title">
          YOUR INFORMATION <span>{isOpen ? "▲" : "▼"}</span>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "0",
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 1.5s ease",
          }}
        >
          {isOpen && (
            <div>
              {dataSelect && dataSelect.length > 1 ? (
                dataSelect.slice(1).map((item, index) => (
                  <div
                    key={index}
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      padding: "0",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "0",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#b93b3b",
                          marginBottom: "10px",
                        }}
                      >
                        Câu hỏi {index + 1}:{" "}
                        {item.questionText || "Không có dữ liệu"}
                      </p>
                      <div
                        style={{
                          backgroundColor: "#e6e6e6",
                          padding: "15px",
                          borderRadius: "5px",
                          display: "block",
                          fontWeight: "bold",
                          color: "#333",
                          width: "100%",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          Đáp án của bạn:
                        </span>
                        <span
                          style={{ fontWeight: "normal", marginLeft: "10px" }}
                        >
                          {item.selectedAnswers.join(", ") ||
                            "Chưa chọn đáp án"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center", padding: "20px" }}>
                  Không có dữ liệu để hiển thị.
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          This is a guide on conditions you may have and recommendations for
          suitable treatments. For more accurate diagnosis, please seek advice
          from your healthcare professional.
        </p>
      </footer>
    </div>
  );
}

export default Result_1;
