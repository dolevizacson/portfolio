import React from 'react';
import styled from 'styled-components';

// components
import About from './components/About/About';

// style
export const HomeStyle = styled.div`
  display: grid;
  align-items: center;
  min-height: 100%;
`;

const Home = () => {
  return (
    <HomeStyle>
      <About />
    </HomeStyle>
  );
};

export default Home;
