import styled from 'styled-components';
import { Link } from 'react-router-dom';

// icons
import { Domain } from 'styled-icons/material';
import { ThMenu } from 'styled-icons/typicons';

export const AppNavbarStyle = styled.div`
  ${({ theme: { div } }) => div}
  ${({
    theme: {
      BackgroundColor: { black1 },
    },
  }) => black1}

  width: 100%;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.75);
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

export const MainLogoStyle = styled(Domain)`
  ${({
    theme: {
      color: { red1 },
    },
  }) => red1}
  width: 50px;
  height: 50px;
`;

export const LinksContainerStyle = styled.div`
  ${({ theme: { div } }) => div}
  padding: 0 10px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white1 },
    },
  }) => white1}
`;
export const CollapseIconStyle = styled(ThMenu)`
  ${({
    theme: {
      color: { white1 },
    },
  }) => white1}
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
