import styled from 'styled-components';

export const MainStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 980px;
  justify-content: center;
  flex: 1 0;

  ${({
    theme: {
      media: { desktop },
    },
  }) => desktop`
    width:78%;
  `}
  ${({
    theme: {
      media: { tablet },
    },
  }) => tablet`
    width:90%;
  `}
  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    width:95%;
  `};
`;
