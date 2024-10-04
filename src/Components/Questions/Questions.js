import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Questions.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Questions = ({
  currQues,
  setCurrQues,
  options,
  correct,
  score,
  questions,
  setQuestions,
  setScore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const history=useNavigate()
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  

  const handleNext = () => {
    if(currQues > 8){
      history('/result')
    }else if(selected){
      setCurrQues(currQues + 1);
      setSelected();
    }else{
      setError("Please select an option first"); 
    }
  }
const handleQuit=()=>{
  setCurrQues(0);
  setQuestions();
  setScore(0);
}

  return (
    <div className="question">
      <h1>Question {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                key={i}
                className={`singleOption ${selected && handleSelect(i)}`}
                disabled={selected}
                onClick={() => handleCheck(i)}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button variant="contained" color="secondary" size="large" styles={{width:185}} href="/" onClick={()=>handleQuit()}>Quit</Button>
          <Button variant="contained" color="primary" size="large" styles={{width:185}} onClick={handleNext} >{currQues > 20 ? "Submit" : "Next Question"}</Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
