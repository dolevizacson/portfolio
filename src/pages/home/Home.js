import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

// components
import About from './components/About/About';
import CurrentlyWorking from './components/CurrentlyWorking/CurrentlyWorking';

// style
const HomeStyle = styled(Flex).attrs({ column: true })``;

const Home = () => {
  return (
    <HomeStyle>
      <About />
      <CurrentlyWorking />
    </HomeStyle>
  );
};

export default Home;
