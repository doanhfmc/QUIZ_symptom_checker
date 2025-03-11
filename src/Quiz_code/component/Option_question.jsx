import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../img/0 thumb 1.png";
import img2 from "../../img/0 thumb 2.png";
import "./Option_question.css";
import { useBearStore } from "../store/app";
import footer from "../../img/footer curve-PC-crop.png";
const Option_question = () => {
  const { increasePopulation } = useBearStore();

  const navigate = useNavigate();
  const handleConditionSelect = (condition) => {
    increasePopulation({ condition });

    navigate(`/${condition}`);
  };
  return (
    <div
      className="quesiton_1"
      style={{
        flex: 1,

        display: "flex",
      }}
    >
      <div
        className="container_qs1"
        style={{
          flex: 1,
        }}
      >
        <div className="center-container" style={{}}>
          <div>
            <p className="title-container">
              Tình trạng của bạn liên quan đến vấn đề gì?
            </p>
          </div>
          <div className="card-container">
            <div
              className="card-wrapper"
              onClick={() => handleConditionSelect("skin")}
            >
              <div className="card">
                <img src={img1} alt="Skin & Foot Health" />
                <p>
                  {" "}
                  <strong> Nấm da </strong>
                </p>
              </div>
            </div>
            <div
              className="card-wrapper"
              onClick={() => handleConditionSelect("intimate")}
            >
              <div className="card">
                <img src={img2} alt="Women's Intimate Health" />
                <p>
                  <strong>Viêm nhiễm phụ khoa</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={footer}
          alt=""
          className="img_footer"
          style={{
            objectFit: "contain",
            width: "100vw",
          }}
        />
      </div>
    </div>
  );
};

export default Option_question;
