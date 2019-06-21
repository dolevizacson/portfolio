import styled from 'styled-components';

export const ProfileImageStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 50%;
  height: 100%;

  ${({
    theme: {
      media: { tablet },
    },
  }) => tablet`width: 100%; height: 50%`}
`;

export const Image = styled.img.attrs({ src: 'tempPic.jpg', alt: 'profile' })`
  width: 100%;
  height: 100%;

  ${({
    theme: {
      ui: { corners },
    },
  }) => corners}
`;
