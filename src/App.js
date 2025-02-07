import React, { useState } from "react";
import Start_tool from "./Quiz_code/QuestionAnswer/start"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result1 from "./Quiz_code/Result/result1";
import Quiz from "./Quiz_code/QuestionAnswer/quiz_code";
import Question_1 from "./Quiz_code/QuestionAnswer/question_1";
function App() {

  return (
    
    <div className="app">
    <h1>Symptom Checker</h1>
    <Router>
      <Routes>
      <Route path="/skin" element={<Quiz condition="skin" />} />
      <Route path="/intimate" element={<Quiz condition="intimate" />} />
        <Route path="/result1" element={<Result1 />} />
        <Route path="/Question_1" element={<Question_1 />} />
        <Route path="/" element={<Start_tool />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
