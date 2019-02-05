import React from 'react';

import './index.css';

import About from './components/About';
import CurrentlyWorking from './components/CurrentlyWorking';

const Home = () => {
  return (
    <div className="home">
      <div className="home-about">
        <div className="home-on-picture">
          <div className="home-row">
            <img className="ui-container" src="tempPic.jpg" alt="profile" />
          </div>
          <div className="home-row">
            <About />
          </div>
        </div>
      </div>
      <div className="home-currently-working">
        <CurrentlyWorking />
      </div>
    </div>
  );
};

export default Home;
