import React from 'react';
import { withRouter } from 'react-router-dom';

import { BackButtonStyle } from './BackButtonStyle';

const BackButton = ({ history, component, text, backTo }) => {
  return (
    <BackButtonStyle
      onClick={() => {
        try {
          if (backTo) {
            history.push(backTo);
          } else {
            if (history.length > 0) {
              history.goBack();
            }
          }
        } catch (err) {
          if (history.length > 0) {
            history.goBack();
          }
        }
      }}
    >
      {component ? component : text}
    </BackButtonStyle>
  );
};

export default withRouter(BackButton);
