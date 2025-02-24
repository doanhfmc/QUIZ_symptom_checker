import icon from "../../../img/1.6.jpeg";
// import { useNavigate, useLocation } from "react-router-dom";
import { useBearStore } from "../../store/app.js";
import { useState } from "react";
import "./Result_1.css";
const sliderData = [
  {
    title: "Chàm (Eczema) ",
    description: (
      <ul>
        <li>Mảng da đỏ, hình tròn như đồng xu.</li>
        <li>Không có vùng da lành ở giữa.</li>
        <li> Da có thể sẫm màu hơn xung quanh vùng bị tổn thương.</li>

        <li>
          Vị trí thường gặp: cẳng chân, mu bàn tay và mặt ngoài của cánh tay.
        </li>
      </ul>
    ),
    img: icon,
    ref: (
      <>
        <p>
          1. Leung AKC, Lam JM, Leong KF, et al. Nummular Eczema: An Updated
          Review. Recent Pat Inflamm Allergy Drug Discov. 2020; 14(2):146–55.
          doi:10.2174/1872213X14666200810152246.
        </p>
        <p>
          2. Kellawan K, Andrasik W, Miller RA. Not All Round Rashes Are
          Ringworm: A Differential Diagnosis of Annular and Nummular Lesions.
          Emerg Med Rep. 2018 Nov 1; 39(21).
        </p>
        <p>
          3. Nair PA, Badri T. Psoriasis. In: StatPearls. Treasure Island (FL):
          StatPearls Publishing; 2022 Apr 6.
        </p>
        <p>
          4. Nair PA, Badri T. Psoriasis. In: StatPearls. Treasure Island (FL):
          StatPearls Publishing; 2022 Apr 6.
        </p>
      </>
    ),
  },
  {
    title: "Vảy nến",
    description: (
      <>
        - Mảng đỏ, có vảy trắng bạc phủ trên bề mặt.
        <br />- Trường hợp nặng có thể có mủ.
        <br />- Vị trí thường gặp: khuỷu tay, đầu gối, da đầu và vùng lưng dưới.
      </>
    ),
    ref: (
      <>
        <p>
          1. Leung AKC, Lam JM, Leong KF, et al. Nummular Eczema: An Updated
          Review. Recent Pat Inflamm Allergy Drug Discov. 2020; 14(2):146–55.
          doi:10.2174/1872213X14666200810152246.
        </p>
        <p>
          2. Kellawan K, Andrasik W, Miller RA. Not All Round Rashes Are
          Ringworm: A Differential Diagnosis of Annular and Nummular Lesions.
          Emerg Med Rep. 2018 Nov 1; 39(21).
        </p>
        <p>
          3. Nair PA, Badri T. Psoriasis. In: StatPearls. Treasure Island (FL):
          StatPearls Publishing; 2022 Apr 6.
        </p>
        <p>
          4. Nair PA, Badri T. Psoriasis. In: StatPearls. Treasure Island (FL):
          StatPearls Publishing; 2022 Apr 6.
        </p>
      </>
    ),
    img: icon,
  },
];

function Result2() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const dataSelect = useBearStore((state) => state.dataSelect);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
        {" "}
        <img src={icon} alt="Ringworm" />
        <p>Based on the symptoms you described, you may have</p>
        <h2 style={{ color: "blue" }}>RINGWORM2</h2>
        <button className="find-out-button">
          FIND OUT ABOUT CAUSE & TREATMENT
        </button>
      </section>

      {/* Slider Section */}
      <section className="slider">
        <h3>BẠN CÓ BIẾT?</h3>
        <p>{`Khác biệt giữa hắc lào và các bệnh tương tự:`}</p>
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
            <p className="slide_desc">{sliderData[currentSlide].description}</p>
            <p className="slide_ref">{sliderData[currentSlide].ref}</p>
          </div>
          <button className="next-button" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </section>
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

export default Result2;
