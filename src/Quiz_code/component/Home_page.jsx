import { useNavigate } from "react-router-dom";
import "./Home_page.css";
import start from "../../img/btn Start.png";
const Home_page = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="Container">
        <div className="container_all">
          <div className="header_first"></div>
          <div className="footer_first">
            <div className="footer_first_content">
              <p>
                Chào mừng bạn đến với{" "}
                <strong>Công Cụ Kiểm Tra Triệu Chứng</strong>. Bạn đang cảm thấy
                ngứa ngáy, khó chịu hay đau rát? Bạn băn khoăn không biết nguyên
                nhân do đâu, hoặc cần thêm thông tin về các lựa chọn điều trị?
                <br />
                <br />
                <strong>Công Cụ Kiểm Tra Triệu Chứng</strong> sẽ giúp bạn nhận
                diện tình trạng của mình và đưa ra gợi ý phù hợp, để bạn lấy lại
                sự thoải mái vốn có. <br /> <br />
                Nếu bạn dưới 18 tuổi hoặc trên 60 tuổi, hãy trao đổi với nhân
                viên y tế trước khi tiếp tục sử dụng công cụ này.
                <br />
                <br />
              </p>
            </div>
            <div className="footer_first_button">
              <img
                src={start}
                alt="symptom checker"
                onClick={() => navigate("/Option")}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_page;
