import React, { useState } from "react";
import { useBearStore } from "../../store/app.js";
import "../Result_Option1/Result_1.css";
import img from "../../../img/1.jpg";
const Result4Op = () => {
  const dataSelect = useBearStore((state) => state.dataSelect);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        backgroundColor: "#FFD9EC",
        padding: "20px",
        borderRadius: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFF",
          borderRadius: "15px",
          overflow: "hidden",
          padding: "10px",
        }}
      >
        <img
          src={img}
          alt="Uterus Illustration"
          style={{ width: "100%", borderRadius: "15px" }}
        />
        <h3 style={{ color: "#333", marginTop: "15px" }}>
          Triệu chứng của bạn không giống với 2 loại viêm âm đạo phổ biến nhất
        </h3>
        <h1
          style={{
            color: "#0000FF",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Viêm âm đạo do vi khuẩn và nhiễm nấm âm đạo
        </h1>
        <button
          style={{
            backgroundColor: "#D62828",
            color: "#FFF",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            fontWeight: "bold",
            fontSize: "16px",
            marginTop: "15px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Tìm hiểu thêm về các loại viêm âm đạo phổ biến
        </button>
      </div>

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
                          {item.selectedAnswers2.join(", ")}
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
  );
};

export default Result4Op;
