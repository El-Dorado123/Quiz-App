import React, { useState } from "react";
import "./Home.css";
import { Button, MenuItem, TextField } from "@mui/material";
import categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName,fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history=useNavigate()
  
  const handleSubmit = () => {
    if(!category || !difficulty || !name){
      setError(true)
      return;
    }else{
      setError(false)
      fetchQuestions(category,difficulty)
      history('/quiz')
    }
  }
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings_select">
          {error && <ErrorMessage>Please Fill all the Fields</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            variant="outlined"
            // color="warning"
            className="name__input"
            style={{ marginBottom: 30}}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            select
            className="name__input"
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            className="name__input"
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key={"Easy"} value="easy">
              Easy
            </MenuItem>
            <MenuItem key={"Medium"} value="medium">
              Medium
            </MenuItem>
            <MenuItem key={"Hard"} value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <div className="Image">
        <img src="/quiz.svg" className="banner" alt="Quiz Image" />
      </div>
    </div>
  );
};

export default Home;
