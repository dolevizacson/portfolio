import React from 'react';
import styled from 'styled-components';

// components
import About from './components/About/About';
import CurrentlyWorking from './components/CurrentlyWorking/CurrentlyWorking';

// style
const HomeStyle = styled.div`
  ${({ theme: { div } }) => div};

  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  return (
    <HomeStyle>
      <About />
      <CurrentlyWorking />
    </HomeStyle>
  );
};

export default Home;
