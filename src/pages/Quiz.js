import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatQuestion } from '../helpers/formatQuestion';
import AnswerSelector from '../components/AnswerSelector';
import { nextQuestion } from '../redux/questions.slice';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);

  const { questions, questionIndex } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
const navigate = useNavigate()
  const handleSelectAnswer = (answer) => {
    if (userAnswer) return;
    setUserAnswer(answer);
  };

  useEffect(() => {
    let questionData = questions[questionIndex];

    let question = formatQuestion(questionData);

    setCurrentQuestion(question);
  }, [questionIndex, questions]);

  let questionAsked = '';

  if (currentQuestion && currentQuestion.question) {
    questionAsked = currentQuestion.question;
  }

  const handleSubmit = () => {
    setUserAnswer(null);
    dispatch(nextQuestion());
  };

  return (
    <div className='page quiz-page'>
      <div className='quiz-box'>
        <div className='question-wrapper'>
          <div className='question-count'>
            <p>Question {questionIndex + 1} of 10 </p>
          </div>
          <div className='question'>
            <h3 className='question-query'>{questionAsked}</h3>
          </div>
        </div>
        <div className='answer-wrapper'>
          {currentQuestion &&
            currentQuestion.answers &&
            currentQuestion.answers.length &&
            currentQuestion.answers.map((answer) => (
              <AnswerSelector
                key={answer}
                answer={answer}
                handleSelectAnswer={handleSelectAnswer}
                selectedAnswer={userAnswer}
                correctAnswer={currentQuestion.correctAnswer}
              />
            ))}
        </div>
        {userAnswer !== null &&
          userAnswer !== undefined &&
          questionIndex < 9 && (
            <button
              onClick={() => handleSubmit()}
              type='button'
              className='primary-btn'
            >
              <b className='button-txt'>Next Question</b>
            </button>
          )}
        {questionIndex === 9 && (
          <button
            onClick={() => navigate('/summary')}
            type='button'
            className='primary-btn'
          >
            <b className='button-txt'>Get Your Summary</b>
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
