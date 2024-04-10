import React from 'react';

import logo from '../assets/icons/logo.svg';

const Home = () => {
  return (
    <div className='page home-page'>
      <img data-test='logo' src={logo} alt='logo' className='home-logo' />
      <div className='text-wrapper'>
        <h1 data-test='title' className='title'>Test your knowledge!</h1>
        <p data-test='description'>Challenge yourself with randomly generated quizzes</p>
      </div>

      <button data-test='btn' className='theme-btn'>Let's Get Started</button>
    </div>
  );
};

export default Home;
