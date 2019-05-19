import React, { Component } from 'react';
import styled from 'styled-components';

// components
import Methodology from '../Methodology/Methodology';

// style
const MethodologyListStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;

class MethodologyList extends Component {
  state = {
    list: this.props.list,
    isExtended: false,
  };

  renderOneMethodology = id => {
    this.setState(state => {
      return {
        list: this.state.list.filter(methodology => methodology._id === id),
        isExtended: true,
      };
    });
  };

  renderAllMethodologies = () => {
    this.setState(state => {
      return { list: this.props.list, isExtended: false };
    });
  };

  renderMethodologyList = list => {
    return list.map((methodology, index) => {
      return (
        <Methodology
          key={index}
          content={methodology}
          isExtended={this.state.isExtended}
          choose={this.renderOneMethodology}
          close={this.renderAllMethodologies}
        />
      );
    });
  };

  render() {
    const { list } = this.state;
    return (
      <MethodologyListStyle>
        {this.renderMethodologyList(list)}
      </MethodologyListStyle>
    );
  }
}

export default MethodologyList;
