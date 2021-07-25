import React from 'react';
import { connect } from 'react-redux';

const UiRequest = (props) => {
  const {
    isLoading,
    requestName,
    topComponent,
    loadingAnimation,
    children,
    error,
    errors,
  } = props;

  return (
    <>
      {topComponent}
      {isLoading[requestName] && loadingAnimation}
      {errors[requestName] ? error : !isLoading[requestName] && children}
    </>
  );
};

const mapStateToProps = ({ isLoading, errors }) => ({
  isLoading,
  errors,
});

export default connect(mapStateToProps)(UiRequest);
