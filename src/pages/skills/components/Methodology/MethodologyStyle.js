import styled from 'styled-components';

// icons
import { Times } from 'styled-icons/fa-solid';

export const MethodologyStyle = styled.div`
  ${({ theme: { div } }) => div}

  padding: 1vh 0;

  ${({ isExtended }) => (isExtended === true ? `width: 100%` : `width: 48%`)}

  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    width: 100%;
  `}
`;
export const MethodologyContainerstyle = styled.div`
  ${({
    theme: {
      ui: { item },
    },
  }) => item}

  flex-direction: column;
  width: 100%;
  height: 100%;

  ${({ isExtended }) => (isExtended === false ? `cursor: pointer` : '')}
`;
export const MethodologyHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  justify-content: space-between;
`;
export const LeftHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  align-items: center;
`;
export const HeaderStyle = styled.h4`
  font-weight: bold;
  padding: 0 20px;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
export const MethodologyIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  ${({
    theme: {
      ui: { headerIconSize },
    },
  }) => headerIconSize}
`;
export const IconStyle = styled.img`
  width: 100%;
  height: 100%;
  ${({
    theme: {
      ui: { corners },
    },
  }) => corners}

  ${({
    theme: {
      BackgroundColor: { white2 },
    },
  }) => white2}
`;
export const MethodologyCloseIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  justify-content: flex-end;
  padding: 12px;

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
export const CloseIconStyle = styled(Times)`
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    width: 30px;
    height: 30px;
  `}
`;
export const MethodologyBodyStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
