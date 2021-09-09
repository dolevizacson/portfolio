import React, { Component } from 'react';
import styled from 'styled-components';

const UiImageContainerStyle = styled.figure`
  /* box-shadow: var(--ui-shadow-5); */
  border-radius: var(--ui-corners-1);
  overflow: hidden;
  width: 100%;
  height: 100%;

  padding: 0.8rem;
  border: 1px solid var(--ui-general-color-3);

  ${(props) =>
    !props.isLoaded
      ? 'opacity: 0'
      : 'opacity: 1; transition: opacity 0.2s ease-in'}
`;

const UiImageContainerLoadingStyle = styled.div`
  ${(props) => props.theme.mixins.centerContent}
  width: 100%;
  height: 100%;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;

  &::selection {
    background-color: var(--ui-main-color-4);
  }
`;

class UiImageContainer extends Component {
  state = { isLoaded: false };

  showImage = () => {
    this.setState((state) => ({ isLoaded: true }));
  };

  render() {
    const { src, alt, loading } = this.props;
    const { isLoaded, className } = this.state;

    return (
      <>
        {!isLoaded && (
          <UiImageContainerLoadingStyle>{loading}</UiImageContainerLoadingStyle>
        )}
        <UiImageContainerStyle className={className} isLoaded={isLoaded}>
          <ImageStyle src={src} alt={alt} onLoad={this.showImage} />
        </UiImageContainerStyle>
      </>
    );
  }
}

export default UiImageContainer;
