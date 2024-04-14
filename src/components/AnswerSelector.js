import React from 'react';

const AnswerSelector = ({
  handleSelectAnswer,
  selectedAnswer,
  answer,
  correctAnswer,
}) => {
  let answerClass = '';
  const isSelected = selectedAnswer === answer;

  if (isSelected && answer === correctAnswer) {
    answerClass = 'correct';
  } else if (isSelected && answer !== correctAnswer) {
    answerClass = 'wrong';
  }

  return (
    <div
      className={`answer ${answerClass}`}
      onClick={() => handleSelectAnswer(answer)}
    >
      <p className='answer-text'>{answer}</p>
    </div>
  );
};

export default AnswerSelector;
