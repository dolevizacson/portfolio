import styled from 'styled-components';

export const AboutStyle = styled.div`
  ${({ theme: { div } }) => div}

  padding-top: 10vh;
  padding-bottom: 5vh;

  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    padding: 2vh 0;
  `}
`;
