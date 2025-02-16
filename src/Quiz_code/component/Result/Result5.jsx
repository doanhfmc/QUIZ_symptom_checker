import icon from "../../../img/1.6.jpeg";
// import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";
import "./Result_1.css";
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

function Result5() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  //   const answers = location.state?.answers || [];
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
        <h2>RINGWORM6</h2>
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

      {/* Footer */}
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

export default Result5;
