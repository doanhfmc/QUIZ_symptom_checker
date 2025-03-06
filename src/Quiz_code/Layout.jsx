import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useBearStore } from "./store/app";
import "./Layout.css";
const Layout = () => {
  const { increasePopulation } = useBearStore();
  const location = useLocation(); // ✅ Dùng useLocation thay vì location trực tiếp
  const id = location.pathname.split("/")[1];

  useEffect(() => {
    if (id === "skin" || id === "intimate") {
      increasePopulation({ condition: id });
    }
  }, []); // ✅ Thêm dependency để tránh warning React

  return (
    <div className="layout_wrapper">
      {/*Header */}
      <header className="banner">
        {/* Thanh điều hướng trên cùng */}
        <div className="top-nav">
          <div className="top-links">
            <a href="#">Về chúng tôi</a>
            <a href="#">Câu hỏi thường gặp</a>
          </div>
          <div className="search-icon">🔍</div>
        </div>

        {/* Nội dung chính của Banner */}
        <div className="main-nav">
          <img src="/logo-left.png" alt="Left Logo" className="left-logo" />

          <nav className="menu">
            <a href="#">Chăm sóc da thân mình ▼</a>
            <a href="#">Chăm sóc vùng kín ▼</a>
            <a href="#">Sản phẩm</a>
          </nav>

          <img src="/bayer-logo.png" alt="Bayer Logo" className="right-logo" />
        </div>
      </header>
      <p
        style={{
          color: "#c01b31",
          marginTop: "20px",
          marginLeft: "20px",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Symptom checker
      </p>
      <main>
        <Suspense fallback={<p></p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="footer_layout">
        <div className="line_layout"></div>
        <div className="footer_content">
          <p>
            Công cụ này cung cấp thông tin để bạn tham khảo và nhận diện tình
            trạng sức khỏe của mình, đồng thời đưa ra gợi ý về phương pháp phù
            hợp.
          </p>

          <p className="highlight_text">
            <strong>
              Tuy nhiên, chúng tôi khuyến nghị bạn nên tham khảo ý kiến của nhân
              viên y tế để đảm bảo chẩn đoán chính xác và điều trị hiệu quả.
            </strong>
          </p>

          <p>
            Vì độ chính xác trong việc nhận diện triệu chứng là ưu tiên hàng
            đầu, công cụ sử dụng hình ảnh thực tế. Chúng tôi hiểu rằng một số
            hình ảnh có thể khiến bạn không thoải mái, nhưng chúng được đưa vào
            để hỗ trợ bạn một cách tốt nhất.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
