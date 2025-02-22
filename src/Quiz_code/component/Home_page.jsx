import { useNavigate } from "react-router-dom";
import "./Home_page.css";
const Home_page = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="Container">
        <>
          <div className="header_first">
            <p>Symptom Checker</p>
          </div>
          <div className="footer_first">
            <div className="footer_first_content">
              <p>
                Welcome to your personal Canesten® Symptom Checker <br />
                <br />
                Experiencing itching, discomfort and soreness? Wondering what it
                might be, or just want some information and treatment options?
                <br />
                <br />
                The Canesten® Symptom Checker will help you better understand
                your symptoms and help guide you on a treatment to help get you
                back to you.
                <br />
                <br />
                If you are under 18 or over 60, it is recommended you speak to
                your healthcare professional before continuing.
                <br />
                <br />
              </p>
            </div>
            <div className="footer_first_button">
              <button
                onClick={() => navigate("/Option")}
              >{`LET'S GET STARTED`}</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Home_page;
