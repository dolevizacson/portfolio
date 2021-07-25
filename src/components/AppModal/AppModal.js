import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

//style
const AppModalStyle = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 1000;
`;

const AppModalBackGroundStyle = styled.div`
  ${(props) => props.theme.mixins.centerContent}

  background-color: var(--ui-specific-color-6);

  height: 100%;
  width: 100%;
`;

const AppModalContainerStyle = styled.div`
  min-height: 50%;
  min-width: 50%;
`;

const modalRoot = document.getElementById('modal');

class AppModal extends Component {
  constructor(props) {
    super(props);
    this.newElement = document.createElement('div');
  }

  static defaultProps = {
    show: true,
  };

  state = { show: this.props.show };

  componentDidMount() {
    modalRoot.appendChild(this.newElement);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.newElement);
  }

  closeModal = () => {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
    this.setState((state) => ({ show: false }));
  };

  render() {
    return !this.state.show || !this.props.show
      ? null
      : ReactDOM.createPortal(
          <AppModalStyle>
            <AppModalBackGroundStyle onClick={this.closeModal}>
              <AppModalContainerStyle onClick={(e) => e.stopPropagation()}>
                {this.props.children}
              </AppModalContainerStyle>
            </AppModalBackGroundStyle>
          </AppModalStyle>,

          this.newElement
        );
  }
}

export default AppModal;
