import React, { Component } from 'react';
import styled from 'styled-components';

// style
const AdminStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
`;

class Admin extends Component {
  render() {
    return <AdminStyle>admin</AdminStyle>;
  }
}

export default Admin;
