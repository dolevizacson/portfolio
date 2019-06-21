import React from 'react';

// components
import About from './components/About/About';
import CurrentlyWorking from './components/CurrentlyWorking/CurrentlyWorking';

// style
import { HomeStyle } from './HomeStyle';

const Home = () => {
  return (
    <HomeStyle>
      <About />
      <CurrentlyWorking />
    </HomeStyle>
  );
};

export default Home;
