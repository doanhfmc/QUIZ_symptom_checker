import React, { useState } from "react";
import { useBearStore } from "../../store/app.js";
import "./ResultOp.css";
import CTA from "../../../img/Gyne/CTA 1.png";
import img from "../../../img/Gyne/thumb nhiem nam am dao.png";
import arrow from "../../../img/Button_img/mui ten.png";
import icon_center from "../../../img/Gyne/icon ban co biet - nhiem nam am dao.png";
const Result1Op = () => {
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
            <span className="text_result_123">
              Dựa trên triệu chứng bạn mô tả, bạn có thể đang bị{" "}
            </span>
            <p className="text3_result1">NHIỄM NẤM ÂM ĐẠO</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={CTA} alt="" />
            </a>
          </div>
        </div>
        <div className="center_container">
          <p className="text1_center">BẠN CÓ BIẾT?</p>
          <img src={icon_center} alt="" />
          <p className="text2_center">
            <span style={{ fontWeight: 600 }}>
              70-75% phụ nữ trong độ tuổi sinh sản bị nhiễm nấm âm đạo ít nhất
              một lần trong đời.
            </span>{" "}
            Việc điều trị có thể khó khăn vì 40-45% bệnh nhân bị tái phát ít
            nhất 1 lần/năm và 5-8% phát triển thành viêm âm đạo dai dẳng (≥ 4
            lần/năm). <sup>2</sup>
          </p>
          <p className="text3_center">
            2. Zeng et al. Biomed Research International. 2018; 9703754
          </p>
        </div>
        <div className="Dropdown_result_total">
          <div onClick={toggleDropdown} className="Info1">
            {isOpen ? (
              <div className="Dropdown_result3">
                <p style={{ background: "#172bc1" }}>
                  XEM LẠI CÂU TRẢ LỜI <img src={arrow} alt="" />{" "}
                </p>
              </div>
            ) : (
              <div className="Dropdown_result4">
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
              marginBottom: 40,
              transition: "max-height 1.5s ease",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
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
                      <div className="Drop_As" style={{ paddingTop: 10 }}>
                        <div className="question_Drop">
                          <span className="Queston_Drop" style={{}}>
                            Câu hỏi {index + 1}:{" "}
                          </span>
                          <span className="Queston_Drop_Title2" style={{}}>
                            {item.questionText || "Không có dữ liệu"}
                          </span>
                        </div>
                        <div className="Answer_Drop2" style={{}}>
                          <span style={{ fontWeight: "normal" }}>
                            <strong>Bạn trả lời: </strong>
                            {item.selectedAnswers2.join(". ") ||
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

export default Result1Op;
