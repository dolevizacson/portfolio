import React from 'react';
import styled from 'styled-components';
import { BreedingRhombusSpinner } from 'react-epic-spinners';

const UiLoadingStyle = styled.div`
  ${({ theme }) => theme.div}

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const renderLoadingIcon = (color, size) => {
  const Elem = styled(BreedingRhombusSpinner).attrs(props => ({
    color: color || props.theme.mainAppThemeColors.red1,
    size,
  }))``;
  return <Elem />;
};

const UiLoading = ({ color, size }) => {
  return <UiLoadingStyle>{renderLoadingIcon(color, size)}</UiLoadingStyle>;
};

export default UiLoading;
