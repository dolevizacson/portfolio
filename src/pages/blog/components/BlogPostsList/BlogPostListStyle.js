import styled from 'styled-components';

// icons
import { BloggerB } from 'styled-icons/fa-brands/';

export const BlogPostsListStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const HeaderIconStyle = styled(BloggerB)`
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
