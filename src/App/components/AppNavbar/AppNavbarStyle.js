import styled from 'styled-components';
import { Link } from 'react-router-dom';

// icons
import { ThMenu } from 'styled-icons/typicons';

export const AppNavbarStyle = styled.div`
  ${({ theme: { div } }) => div}

  border-bottom: solid 2px ${({
    theme: {
      mainAppThemeColors: { uiColor4 },
    },
  }) => uiColor4};
  box-shadow: 0px 3px 5px 0px rgba(45,45,45,0.75);
  width: 100%;
  flex-direction: column;
`;

export const NavbarContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;
export const LeftStyle = styled.div`
  ${({ theme: { div } }) => div}
  padding: 0 10px;
  width: 30%;
  height: 100%;
  align-items: center;
`;
export const RightStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 70%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const LinksContainerStyle = styled.div`
  ${({ theme: { div } }) => div}
  padding: 0 10px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { fontColor2 },
    },
  }) => fontColor2};
`;
export const CollapseIconStyle = styled(ThMenu)`
  ${({
    theme: {
      color: { uiColor4 },
    },
  }) => uiColor4}
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
export const CollapseStyle = styled.div`
  ${({ theme: { div } }) => div}
  flex-direction: column;
  padding: 7px;
`;
export const CollapseLinkContainerStyle = styled.div`
  ${({ theme: { div } }) => div}
  padding: 3px 0;
`;
