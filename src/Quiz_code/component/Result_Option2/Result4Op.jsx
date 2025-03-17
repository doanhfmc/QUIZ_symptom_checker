import React, { useState } from "react";
import { useBearStore } from "../../store/app.js";
import "./ResultOp.css";
import img from "../../../img/Gyne/thumb viem am dao 960x560.png";
import arrow from "../../../img/Button_img/mui ten.png";

const Result4Op = () => {
  const dataSelect = useBearStore((state) => state.dataSelect);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="background_Result">
      <div className="Result_container">
        <div className="Sick_result">
          <div className="img_result">
            <img className="" src={img} alt="Uterus Illustration" />
          </div>
          <div className="text_result_container">
            {" "}
            <p className="text_result">
              Triệu chứng của bạn không giống với 2 loại viêm âm đạo phổ biến
              nhất
            </p>
            <p className="text2_result">
              Viêm âm đạo do vi khuẩn và nhiễm nấm âm đạo
            </p>
            <img src="" alt="" />
          </div>
        </div>

        <div className="Dropdown_result">
          <div onClick={toggleDropdown} className="Info">
            {isOpen ? (
              <div className="Dropdown_result1">
                <p style={{ background: "#172bc1" }}>
                  XEM LẠI CÂU TRẢ LỜI <img src={arrow} alt="" />{" "}
                </p>
              </div>
            ) : (
              <div className="Dropdown_result2">
                <p style={{ background: "#172bc1" }}>
                  XEM LẠI CÂU TRẢ LỜI <img src={arrow} alt="" />{" "}
                </p>
              </div>
            )}
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "0",
              maxHeight: isOpen ? "1200px" : "0",
              marginBottom: 60,
              transition: "max-height 1.5s ease",
            }}
          >
            {isOpen && (
              <div className="expand_result">
                {dataSelect && dataSelect.length > 1 ? (
                  dataSelect.slice(1).map((item, index) => (
                    <div
                      key={index}
                      style={{
                        borderBottom: "1px solid #e0e0e0",
                        padding: "0",
                      }}
                    >
                      <div className="Drop_As" style={{}}>
                        <span className="Queston_Drop" style={{}}>
                          Câu hỏi {index + 1}:
                          <span className="Queston_Drop_Title" style={{}}>
                            {item.questionText || "Không có dữ liệu"}
                          </span>
                        </span>

                        <div className="Answer_Drop" style={{}}>
                          <span style={{ fontWeight: "normal" }}>
                            <strong>Bạn trả lời: </strong>
                            {item.selectedAnswers2.join(",") ||
                              "Chưa chọn đáp án"}

                            {/* {questionsData.skin
                            .filter((item_) => item_.id === index + 1)[0]
                            .options.filter(
                              (op) => op._id === item.selectedAnswers.join(",")
                            )[0]?.text || "Chưa chọn đáp án"} */}
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
      </div>
    </div>
  );
};

export default Result4Op;
