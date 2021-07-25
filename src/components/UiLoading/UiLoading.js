import React, { Component } from 'react';
import styled from 'styled-components';

const UiLoadingStyle = styled.div`
  --loading-height: ${(props) => props.size || '20px'};

  height: var(--loading-height);
  width: calc(
    (var(--loading-height) * 3) + 2 * ((var(--loading-height) * 0.5) / 2) +
      (var(--loading-height) / 5)
  );
  display: grid;
  grid-auto-flow: column;
  grid-gap: calc(
    ((var(--loading-height) * 0.5) / 2) + (var(--loading-height) / 5)
  );
`;
const UiLoadingSquareStyle = styled.div`
  border-radius: var(--ui-corners-1);

  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const UiLoadingSquare1Style = styled(UiLoadingSquareStyle)`
  background-color: var(--ui-main-color-3);
  animation-name: ${(props) => props.theme.animations.resize1};
`;
const UiLoadingSquare2Style = styled(UiLoadingSquareStyle)`
  background-color: var(--ui-main-color-2);
  animation-name: ${(props) => props.theme.animations.resize2};
`;
const UiLoadingSquare3Style = styled(UiLoadingSquareStyle)`
  background-color: var(--ui-main-color-1);
  animation-name: ${(props) => props.theme.animations.resize3};
`;

class UiLoading extends Component {
  state = { isShowing: this.props.delay ? false : true };

  componentDidMount() {
    const { delay } = this.props;
    if (delay) {
      this.timeOutId = setTimeout(() => {
        this.setState((state) => ({
          isShowing: true,
        }));
      }, delay);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutId);
  }

  render() {
    const { size, className } = this.props;
    const { isShowing } = this.state;
    return (
      <>
        {isShowing && (
          <UiLoadingStyle className={className} size={size}>
            <UiLoadingSquare1Style />
            <UiLoadingSquare2Style />
            <UiLoadingSquare3Style />
          </UiLoadingStyle>
        )}
      </>
    );
  }
}

export default UiLoading;
