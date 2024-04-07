import React, { useState } from 'react';
import './Quiz.css';

import { data } from '../../constants/quizdata';

const Quiz = () => {
  
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);

  const chooseAnswer = (element, answer) => {
    if (question.answer === answer) {
      element.target.classList.add("correct");
    } else {
      element.target.classList.add("incorrect");

    }
  }

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li onClick={(e) => {chooseAnswer(e, 1)}}>{question.option1}</li>
        <li onClick={(e) => {chooseAnswer(e, 2)}}>{question.option2}</li>
        <li onClick={(e) => {chooseAnswer(e, 3)}}>{question.option3}</li>
        <li onClick={(e) => {chooseAnswer(e, 4)}}>{question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
};

export default Quiz;