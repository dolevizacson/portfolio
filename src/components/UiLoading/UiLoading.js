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

const loadingIcon = [BreedingRhombusSpinner];

const renderLoadingIcon = (color, size, icon) => {
  const Elem = styled(loadingIcon[icon < loadingIcon.length ? icon : 0]).attrs(
    props => ({
      color: color || props.theme.mainAppThemeColors.red1,
      size,
    })
  )``;
  return <Elem />;
};

const UiLoading = ({ color, size, icon }) => {
  return (
    <UiLoadingStyle>{renderLoadingIcon(color, size, icon)}</UiLoadingStyle>
  );
};

export default UiLoading;
