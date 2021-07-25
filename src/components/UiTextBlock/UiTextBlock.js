import React from 'react';
import styled from 'styled-components';

// style
const UiTextBlockStyle = styled.section`
  display: grid;
  grid-template-rows: min-content;
  grid-auto-rows: 1fr;
  border-radius: var(--ui-corners-1);
  overflow: hidden;

  border: 1px solid var(--ui-specific-color-5);
`;

const UiTextBlockHeaderStyle = styled.div`
  padding: var(--ui-text-block-vertical) var(--ui-text-block-horizontal);
  border-radius: var(--ui-corners-1);

  background-color: var(--ui-specific-color-4);
  border-bottom: 1px solid var(--ui-specific-color-5);
`;

const UiTextBlockBodyStyle = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gap || `var(--ui-grid-gap-2)`};
  ${(props) => props.center && `align-content: center`};

  padding: var(--ui-text-block-vertical) var(--ui-text-block-horizontal);

  line-height: 2.3rem;
  font-size: 1.4rem;

  background-color: var(--ui-specific-color-4);
`;

const UiTextBlock = (props) => {
  const { children, header, gap, center } = props;

  return (
    <UiTextBlockStyle {...props}>
      {header && <UiTextBlockHeaderStyle>{header}</UiTextBlockHeaderStyle>}
      <UiTextBlockBodyStyle gap={gap} center={center} {...props}>
        {children}
      </UiTextBlockBodyStyle>
    </UiTextBlockStyle>
  );
};

export default UiTextBlock;
