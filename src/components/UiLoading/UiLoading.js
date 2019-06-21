import React from 'react';
import styled from 'styled-components';
import { BreedingRhombusSpinner } from 'react-epic-spinners';

// style
import { UiLoadingStyle } from './UiLoadingStyle';

const loadingIcon = [BreedingRhombusSpinner];

const renderLoadingIcon = (color, size, icon) => {
  const Elem = styled(loadingIcon[icon < loadingIcon.length ? icon : 0]).attrs(
    ({
      theme: {
        mainAppThemeColors: { red1 },
      },
    }) => ({
      color: color || red1,
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
