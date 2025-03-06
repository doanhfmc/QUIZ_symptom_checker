import { useBearStore } from "../../store/app.js";
import { useEffect, useState } from "react";
import "./Result_1.css";
import thumbmain from "../../../img/Result_img/langben-1080x630.jpg";
import thumbslide1 from "../../../img/Thumb_Slide/05 slider-vayphanhong.jpg";
import thumbslide2 from "../../../img/Thumb_Slide/05 slider-vaynenethegiot.jpg";
import thumbslide3 from "../../../img/Thumb_Slide/05 slider-bachbien.jpg";
import Arrow_prev from "../../../img/Button_img/slider icon 2.png";
import Arrow_next from "../../../img/Button_img/slider icon.png";
import Btn_Sol from "../../../img/Button_img/button tim hieu.png";
import Info_Open from "../../../img/Button_img/button xem lai.png";
import Info_Close from "../../../img/Button_img/button xem lai expand BG.png";
import arrow from "../../../img/Button_img/mui ten.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { questionsData } from "../../Data.js";

const sliderData = [
  {
    title: (
      <p>
        Vảy phấn hồng<sup style={{ fontSize: 12 }}>1,2</sup>
      </p>
    ),
    description: (
      <ul
        style={{
          margin: "20px",
        }}
      >
        <li>Da nổi các mảng hồng, có vảy nhẹ . </li>
        <li>
          Ban đầu xuất hiện mảng lớn rõ ràng, sau đó lan rộng thành nhiều mảng
          nhỏ.
        </li>
        <li> Thường tạo hình cây thông Noel trên thân mình.</li>
        <li>Vị trí thường gặp: thân, cổ và vùng gần các chi.</li>
      </ul>
    ),
    img: thumbslide1,
    ref: (
      <>
        1. Kellawan K, Andrasik W. Not All Round Rashes Are Ringworm: A
        Differential Diagnosis of Annular and Nummular Lesions. [internet].
        [cited April 22, 2022]. Available from:
        <a href="https://www.reliasmedia.com/articles/143473-not-all-round-rashes-are-ringworm-a-differential-diagnosis-of-annular-and-nummular-lesions">
          https://www.reliasmedia.com/articles/143473-not-all-round-rashes-are-ringworm-a-differential-diagnosis-of-annular-and-nummular-lesions.
        </a>{" "}
        2. Litchman G, Nair PA, Le JK. Pityriasis Rosea. [Updated 2022 May 8].
        In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing;
        2022 Jan-. Available from:{" "}
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK448091/">
          https://www.ncbi.nlm.nih.gov/books/NBK448091/
        </a>
        .
      </>
    ),
  },
  {
    title: (
      <p>
        Vảy nến thể giọt <sup style={{ fontSize: 12 }}>5</sup>
      </p>
    ),
    description: (
      <ul style={{ margin: "20px" }}>
        <li>Các nốt nhỏ hình giọt nước xuất hiện trên da.</li>
        <li>
          Kèm các dấu hiệu như: lớp biểu bì dày lên, mạch máu bề mặt giãn nở và
          vảy da.
        </li>
        <li>
          Thường có tiền sử nhiễm liên cầu khuẩn, như viêm họng hoặc nhiễm khuẩn
          quanh hậu môn.
        </li>
      </ul>
    ),
    ref: (
      <>
        5. Saleh D, Tanner LS. Guttate Psoriasis. [Updated 2021 Aug 3]. In:
        StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2022
        Jan-. Available from:{" "}
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK482498/">
          https://www.ncbi.nlm.nih.gov/books/NBK482498/
        </a>
        .
      </>
    ),
    img: thumbslide2,
  },
  {
    title: (
      <p>
        Bạch biến <sup style={{ fontSize: 12 }}>3,4</sup>
      </p>
    ),
    description: (
      <ul style={{ margin: "20px" }}>
        <li>
          Mất sắc tố da, tạo thành các đốm trắng nhạt, không có vảy, có viền rõ
          ràng so với vùng da thường<sup style={{ fontSize: 12 }}>3</sup>.
        </li>
        <li>
          Thường xuất hiện đầu tiên ở: ngón tay, khớp ngón, quanh mắt, miệng,
          bàn chân và vùng kín<sup style={{ fontSize: 12 }}>4</sup>.
        </li>
      </ul>
    ),
    ref: (
      <>
        3. Bergqvist C, Ezzedine K. Vitiligo: A Review. Dermatology.
        2020;236(6):571-592. doi:10.1159/000506103. <br />
        4. Nordlund JJ. Vitiligo: a review of some facts lesser known about
        depigmentation. Indian J Dermatol. 2011 Mar;56(2):180-9. doi:
        10.4103/0019-5154.80413. PMID: 21716544; PMCID: PMC3108518.
      </>
    ),
    img: thumbslide3,
  },
];

function Result5() {
  const dataSelect = useBearStore((state) => state.dataSelect);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //   const answers = location.state?.answers || [];
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue =
        "Nếu bạn tiếp tục hành động này, tất cả dữ liệu hiện tại sẽ bị mất.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // ✅ Hiển thị 2 slide mỗi lần
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true, // ✅ Hiển thị nút điều hướng mặc định
    prevArrow: <img className="prev-button" src={Arrow_prev} alt="Prev" />,
    nextArrow: <img className="next-button" src={Arrow_next} alt="Next" />,
  };
  return (
    <div className="symptom-checker">
      {/* Result Section */}
      <section className="result">
        {" "}
        <div className="section_rìght">
          <img src={thumbmain} alt="Ringworm" />
        </div>
        <div className="section_left">
          {" "}
          <p
            style={{
              color: "#010101",
              fontSize: 30,
              fontWeight: 500,
              marginBottom: 30,
            }}
          >
            Có thể bạn đang gặp bệnh
          </p>
          <p
            style={{
              color: "#172bc1",
              fontSize: 45,
              fontWeight: 900,
              marginBottom: 30,
            }}
          >
            LANG BEN
          </p>
          <a href="#" target="blank">
            <img src={Btn_Sol} alt="" />{" "}
          </a>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider">
        <p style={{ fontSize: 45, marginTop: 20, fontWeight: 500 }}>
          BẠN CÓ BIẾT?
        </p>
        <p
          style={{
            fontSize: 40,
            fontWeight: 200,
            marginTop: 20,
            marginBottom: 60,
          }}
        >
          Sự khác biệt giữa Lang ben và các bệnh ngoài da tương tự:
        </p>

        {/* <img
            className="prev-button"
            src={Arrow_prev}
            alt=""
            onClick={handlePrev}
          /> */}
        <div className="slider-container_3">
          <Slider {...settings}>
            {sliderData.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.img} alt={slide.title} />
                <p style={{ fontSize: 24, fontWeight: 600, marginTop: 20 }}>
                  {slide.title}
                </p>
                <p
                  style={{ fontSize: 24, fontWeight: 300, width: "23vw" }}
                  className="slide_desc"
                >
                  {slide.description}
                </p>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 300,
                    position: "absolute",
                    bottom: 20,
                  }}
                  className="slide_ref"
                >
                  {slide.ref}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        {/* <img
            className="next-button"
            src={Arrow_next}
            alt=""
            onClick={handleNext}
          /> */}
      </section>
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
                    <div
                      style={{
                        backgroundColor: "#fff",
                        paddingTop: "20px",
                        paddingBottom: 20,
                        borderRadius: "0",
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#010101",
                          fontSize: 40,
                          paddingLeft: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        Câu hỏi {index + 1}:{" "}
                      </p>
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#172bc1",
                          fontSize: 40,
                          paddingLeft: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        {item.questionText || "Không có dữ liệu"}
                      </p>
                      <div
                        style={{
                          backgroundColor: "#e6e6e6",
                          padding: "15px",
                          display: "flex",

                          fontWeight: "bold",
                          fontSize: 40,
                          color: "#010101",
                          width: "100%",
                        }}
                      >
                        <span style={{ fontWeight: "normal" }}>
                          <strong>Bạn trả lời: </strong>
                          {index !== 1 &&
                            questionsData.skin
                              .filter((item_) => item_.id === index + 1)[0]
                              .options.filter((op) =>
                                item?.selectedAnswers.includes(op._id)
                              )
                              .map((item__) => item__?.text)
                              .join(". ")}
                          {index === 1 &&
                            questionsData.skin
                              .filter((item_) => item_.id === index + 1)[0]
                              .options.filter((op) =>
                                item?.selectedAnswers.includes(op._id)
                              )[0]?.text}

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
      {/* Footer */}
      {/* <footer className="footer">
        <p>
          This is a guide on conditions you may have and recommendations for
          suitable treatments. For more accurate diagnosis, please seek advice
          from your healthcare professional.
        </p>
      </footer> */}
    </div>
  );
}

export default Result5;
