import React, { Component } from 'react';
import styled from 'styled-components';
import { UiHeader } from '../../env/utils/access';
import { FileCode } from 'styled-icons/fa-regular';

// style
const AdminStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
`;
const HeaderIconStyle = styled(FileCode)`
  ${({ theme }) => theme.ui.headerIconSize}
`;

class Admin extends Component {
  render() {
    return (
      <AdminStyle>
        <UiHeader text="admin" icon={HeaderIconStyle} />
      </AdminStyle>
    );
  }
}

export default Admin;
