import React from 'react';
import { useDispatch } from 'react-redux';
import { addQuestions } from '../redux/questions.slice';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../services/questions';
import logo from '../assets/icons/logo.svg';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    return getQuestions()
      .then((result) => {
        dispatch(addQuestions(result));
      })
      .then(() => {
        navigate('/quiz');
      });
  };

  return (
    <div className='page home-page'>
      <img data-test='logo' src={logo} alt='logo' className='home-logo' />
      <div className='text-wrapper'>
        <h1 data-test='title' className='title'>
          Test your knowledge!
        </h1>
        <p data-test='description'>
          Challenge yourself with randomly generated quizzes
        </p>
      </div>

      <button
        data-test='btn'
        className='theme-btn'
        onClick={() => handleClick()}
      >
        Let's Get Started
      </button>
    </div>
  );
};

export default Home;
