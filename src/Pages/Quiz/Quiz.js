import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Questions from "../../Components/Questions/Questions";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    // console.log(questions);
    setOptions(questions&&handleShuffle([questions[currQues]?.correct_answer, ...questions[currQues]?.incorrect_answers]))
  }, [questions, currQues]);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="Quiz">
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <h3 style={{textTransform:"capitalize"}}>{questions[currQues]?.category}</h3> 
            <h3>Score&nbsp;&nbsp;:&nbsp;&nbsp;{score}</h3>
          </div> 
          <Questions 
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
    </div>
  );
};

export default Quiz;
