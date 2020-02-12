import React from 'react';
import { connect } from 'react-redux';

const UiRequest = ({
  isLoading,
  requestName,
  component,
  loading,
  children,
  error,
  errors,
}) => {
  return (
    <>
      {component}
      {isLoading[requestName] && loading}
      {errors[requestName] ? error : !isLoading[requestName] && children}
    </>
  );
};

const mapStateToProps = ({ isLoading, errors }) => ({
  isLoading,
  errors,
});

export default connect(mapStateToProps)(UiRequest);
