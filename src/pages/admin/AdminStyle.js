import styled from 'styled-components';

// icons
import { FileCode } from 'styled-icons/fa-regular';

// style
export const AdminStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
`;
export const HeaderIconStyle = styled(FileCode)`
  ${({
    theme: {
      color: { black1 },
    },
  }) => black1}
  ${({
    theme: {
      ui: { headerIconSize },
    },
  }) => headerIconSize}
`;
export const LogoutButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
