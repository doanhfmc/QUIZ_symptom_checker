import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useBearStore } from "./store/app";

const Layout = () => {
  const { increasePopulation } = useBearStore();
  const location = useLocation(); // ✅ Dùng useLocation thay vì location trực tiếp
  const id = location.pathname.split("/")[1];

  useEffect(() => {
    if (id === "skin" || id === "m") {
      increasePopulation({ condition: id });
    }
  }, []); // ✅ Thêm dependency để tránh warning React

  return (
    <>
      <h1>Symptom checker</h1>
      <Suspense fallback={<p></p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
