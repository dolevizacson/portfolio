import styled from 'styled-components';

// icons
import { LogIn } from 'styled-icons/boxicons-regular';

export const LoginStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
`;
export const HeaderIconStyle = styled(LogIn)`
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
