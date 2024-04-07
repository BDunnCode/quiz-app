import React, { useRef, useState } from 'react';
import './Quiz.css';

import { data } from '../../constants/quizdata';

const Quiz = () => {
  
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const option_array = [option1, option2, option3, option4];

  const chooseAnswer = (e, answer) => {
    if (!lock) {
      if (question.answer === answer) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((score+1));
      } else {
        e.target.classList.add("incorrect");
        setLock(true);
        option_array[question.answer-1].current.classList.add("correct");
      }
    }
  }

  const nextQuestion = () => {
    if (lock) {
      if (index < data.length -1) {
        setIndex(index+1);
        setQuestion(data[index+1]);
        setLock(false);
        option_array.map((option) => {
          option.current.classList.remove("correct");
          option.current.classList.remove("incorrect");
          return null;
        })
      } else {
        setResult(true);
        console.log(result);
        return
      }
    }
  }

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {!result ? (<>
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e) => {chooseAnswer(e, 1)}}>{question.option1}</li>
        <li ref={option2} onClick={(e) => {chooseAnswer(e, 2)}}>{question.option2}</li>
        <li ref={option3} onClick={(e) => {chooseAnswer(e, 3)}}>{question.option3}</li>
        <li ref={option4} onClick={(e) => {chooseAnswer(e, 4)}}>{question.option4}</li>
      </ul>
      <button onClick={nextQuestion}>Next</button>
      <div className="index">{index+1} of {data.length} questions</div>
      </> ) : (
        <>
          <h2>You Scored {score} out of {data.length}</h2>
          <button onClick={reset}>Reset</button>
        </>
      )
    
    }
    </div>
  )
};

export default Quiz;