import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  constants,
  UiTextBlock,
  UiButton,
  UiButtonsContainer,
} from '../../../../env/utils/access';

// constants
const { blogRoute } = constants;

// style
const MinimizedBlogPostStyle = styled.article``;

const MinimizedBlogPostContainerStyle = styled(UiTextBlock).attrs({
  gap: '0',
})``;

const MinimizedBlogPostHeaderStyle = styled.h2``;

const MinimizedBlogPostDateContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MinimizedBlogPostDateStyle = styled.h3`
  color: var(--ui-font-color-1);
  margin-bottom: 1.5rem;
`;

const MinimizedBlogPostDateNumberStyle = styled.span`
  letter-spacing: 0.4rem;
`;

const MinimizedBlogPostDescriptionStyle = styled.p`
  display: flex;
  flex-direction: column;
`;

const MinimizedBlogPostShowMoreButtonStyle = styled(UiButtonsContainer)`
  margin-top: var(--ui-grid-gap-2);
`;

const formatDate = (date) => {
  const rawDate = new Date(date);
  return `${rawDate.getDate()}/${
    rawDate.getMonth() + 1
  }/${rawDate.getFullYear()}`;
};

const isUpdated = (date, updatedDate) => {
  let newDate = new Date(date);
  let newUpdatedDate = new Date(updatedDate);

  return newUpdatedDate.getTime() > newDate.getTime();
};

const MinimizedBlogPost = (props) => {
  const { state } = props;

  return (
    <MinimizedBlogPostStyle>
      <MinimizedBlogPostContainerStyle
        header={
          <MinimizedBlogPostHeaderStyle>
            {state?.header}
          </MinimizedBlogPostHeaderStyle>
        }
      >
        <MinimizedBlogPostDateContainerStyle>
          <MinimizedBlogPostDateStyle>
            posted :{' '}
            <MinimizedBlogPostDateNumberStyle>{`${
              state?.date && formatDate(state.date)
            } `}</MinimizedBlogPostDateNumberStyle>
          </MinimizedBlogPostDateStyle>
          <MinimizedBlogPostDateStyle>
            {state?.date &&
              state?.update &&
              isUpdated(state.date, state.update) && (
                <>
                  last updated :{' '}
                  <MinimizedBlogPostDateNumberStyle>
                    {formatDate(state.update)}
                  </MinimizedBlogPostDateNumberStyle>
                </>
              )}
          </MinimizedBlogPostDateStyle>
        </MinimizedBlogPostDateContainerStyle>
        <MinimizedBlogPostDescriptionStyle>
          {state?.summery}
        </MinimizedBlogPostDescriptionStyle>
        <MinimizedBlogPostShowMoreButtonStyle>
          <UiButton as={Link} to={`${blogRoute}/${state._id}`}>
            show more
          </UiButton>
        </MinimizedBlogPostShowMoreButtonStyle>
      </MinimizedBlogPostContainerStyle>
    </MinimizedBlogPostStyle>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });

export default connect(mapStateToProps)(MinimizedBlogPost);
