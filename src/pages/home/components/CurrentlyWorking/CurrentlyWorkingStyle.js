import styled from 'styled-components';
import { Check } from 'styled-icons/fa-solid';

export const CurrentlyWorkingStyle = styled.div`
  ${({ theme: { div } }) => div}

  padding-top: 5vh;
  padding-bottom: 10vh;

  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    padding: 2vh 0;
  `}
`;
export const TastsListContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const TaskStyle = styled.div`
  ${({
    theme: {
      ui: { item },
    },
  }) => item}

  padding: 12px;
  margin: 10px 0;
  flex-direction: column;
`;
export const TaskHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  text-decoration-line: underline;
  font-weight: bold;
  font-size: 1.5rem;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white3 },
    },
  }) => white3}
`;
export const TaskBodyStyle = styled.div`
  ${({ theme: { div } }) => div}

  justify-content: space-between;
`;
export const BodyStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.5rem;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white3 },
    },
  }) => white3}
`;
export const TaskDoneIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  justify-content: flex-end;
  align-items: flex-end;
`;
export const DoneFrameStyle = styled.div`
  ${({ theme: { div } }) => div}

  border-radius: 10px;
  height: 33px;
  width: 33px;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;

  ${({
    theme: {
      BackgroundColor: { white3 },
    },
  }) => white3}
`;
export const DoneIconStyle = styled(Check)`
  height: 28px;
  width: 28px;

  ${({
    theme: {
      color: { red1 },
    },
  }) => red1}
`;
