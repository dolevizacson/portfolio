import React from 'react';
import styled from 'styled-components';

// style
const ProfileImageStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 50%;
  height: 100%;

  ${({ theme }) => theme.media.tablet`width: 100%; height: 50%`}
`;

const Image = styled.img.attrs({ src: 'tempPic.jpg', alt: 'profile' })`
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.ui.corners}
`;

const ProfileImage = () => {
  return (
    <ProfileImageStyle>
      <Image />
    </ProfileImageStyle>
  );
};

export default ProfileImage;
