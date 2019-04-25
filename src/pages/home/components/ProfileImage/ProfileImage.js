import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

// style
const ProfileImageStyle = styled(Flex)`
  width: 50%;

  ${props => props.theme.media.tablet`width: 100%;`}
`;
const Image = styled.img.attrs({ src: 'tempPic.jpg', alt: 'profile' })`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ProfileImage = () => {
  return (
    <ProfileImageStyle>
      <Image />
    </ProfileImageStyle>
  );
};

export default ProfileImage;
