import "./index.css";
import Homepage from "./Quiz_code/component/Home_page.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Quiz_code/Layout.jsx";
import Optionquestion from "./Quiz_code/component/Option_question.jsx";
import Question from "./Quiz_code/component/Question.jsx";
import Result from "./Quiz_code/component/Result/Result1.jsx";
import React from "react";
import Result2 from "./Quiz_code/component/Result/Result2.jsx";
import Result3 from "./Quiz_code/component/Result/Result3.jsx";
import Result4 from "./Quiz_code/component/Result/Result4.jsx";
import Result5 from "./Quiz_code/component/Result/Result5.jsx";
import Result6 from "./Quiz_code/component/Result/Result6.jsx";
import Question2 from "./Quiz_code/component/Question2.jsx";
import ReactGA from "react-ga4";
ReactGA.initialize("G-FXKNQKBJYX");
const App = () => {
  return (
    <HashRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Option" element={<Optionquestion />} />
        <Route
          path="/skin"
          element={<Question condition="skin" key={"skin"} />}
        />
        <Route
          path="/intimate"
          element={<Question2 condition="intimate" key={"intimate"} />}
        />
        <Route path="/result1" element={<Result />} />
        <Route path="/result2" element={<Result2 />} />
        <Route path="/result3" element={<Result3 />} />
        <Route path="/result4" element={<Result4 />} />
        <Route path="/result5" element={<Result5 />} />
        <Route path="/result6" element={<Result6 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
