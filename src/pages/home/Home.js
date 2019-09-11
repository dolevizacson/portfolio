import React from 'react';

// components
import About from './components/About/About';

// style
import { HomeStyle } from './HomeStyle';

const Home = () => {
  return (
    <HomeStyle>
      <About />
    </HomeStyle>
  );
};

export default Home;
