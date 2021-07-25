import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form, FieldArray } from 'formik';
import { withRouter } from 'react-router-dom';
import {
  types,
  actions,
  constants,
  UiHeader,
  UiTextBlock,
  UiButton,
  UiFormInputField,
  UiBackButton,
  AppModal,
  UiButtonsContainer,
} from '../../env/utils/access';

// constants
const { blogPostInitialState, blogFormLocalStorageKey, AdminRoute } = constants;

// types
const { blog: blogTypes } = types;

// actions
const { resetErrors } = actions.errorsActions;

//style
const BlogPostFormStyle = styled.article`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const BlogPostFormHeaderStyle = styled(UiHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BlogPostFormContainerStyle = styled(Form)`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const BlogPostFormButtonLeftStyle = styled(UiButton)`
  ${(props) => props.theme.media('buttonsCentering')`margin-right: auto;`}
`;

const BlogPostFormModalStyle = styled(AppModal)`
  width: 50%;
  height: 50%;
`;

const BlogPostFormModalHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const BlogPostFormModalBodyStyle = styled.p`
  ${(props) => props.theme.mixins.formModalStyle}
`;

const BlogPostFormView = (props) => {
  const { functions, validation, isLoading, errors, resetErrors, state } =
    props;

  let paragraphArrayHelpers;

  const handleFormChange = (values) => {
    if (!state?.isUpdate) {
      functions.saveBlogPostState(blogFormLocalStorageKey, values);
    }
  };

  return (
    <BlogPostFormStyle>
      <BlogPostFormHeaderStyle>
        new blog post
        <UiBackButton to={AdminRoute} />
      </BlogPostFormHeaderStyle>
      <Formik
        enableReinitialize={true}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={state.initialValues}
        validationSchema={validation}
        onSubmit={(values, formikBag) => {
          formikBag.validateForm();
          if (state?.isUpdate) {
            functions.updateBlogPost(state?.id, values);
          } else {
            functions.isSubmit();
            functions.postBlogPost(values);
          }
        }}
      >
        {({ values, setFieldValue, resetForm }) => (
          <BlogPostFormContainerStyle>
            {handleFormChange(values)}
            <UiTextBlock>
              <UiFormInputField label="header" name="header" />
              <UiFormInputField label="summery" name="summery" textarea />
            </UiTextBlock>
            <FieldArray
              name="paragraph"
              render={(arrayHelpers) => {
                paragraphArrayHelpers = arrayHelpers;
                return (
                  <>
                    {values?.paragraph?.length > 0 ? (
                      values?.paragraph?.map((currParagraph, index) => (
                        <UiTextBlock key={index}>
                          <UiFormInputField
                            label="Paragraph header"
                            name={`paragraph[${index}].header`}
                          />
                          <UiFormInputField
                            label="Paragraph content"
                            name={`paragraph[${index}].content`}
                            textarea
                          />
                          <UiButtonsContainer>
                            <UiButton
                              type="button"
                              onClick={() => arrayHelpers.replace(index, '')}
                            >
                              Clear paragraph
                            </UiButton>
                            {values?.paragraph?.length > 1 && (
                              <UiButton
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                Remove paragraph
                              </UiButton>
                            )}
                          </UiButtonsContainer>
                        </UiTextBlock>
                      ))
                    ) : (
                      <div>{arrayHelpers.insert(0, '')}</div>
                    )}
                  </>
                );
              }}
            />

            <UiTextBlock>
              <UiFormInputField
                label="Conclusion header"
                name={`conclusion.header`}
              />
              <UiFormInputField
                label="Conclusion content"
                name={`conclusion.content`}
                textarea
              />
              <UiButtonsContainer>
                <UiButton
                  type="button"
                  onClick={() => {
                    setFieldValue(`conclusion.header`, '');
                    setFieldValue(`conclusion.content`, '');
                  }}
                >
                  Clear conclusion
                </UiButton>
              </UiButtonsContainer>
            </UiTextBlock>
            <UiTextBlock>
              <UiFormInputField
                label="Conclusion sentence"
                name="conclusionSentence"
                textarea
                rows="2"
              />
            </UiTextBlock>
            <UiTextBlock>
              <UiButtonsContainer>
                <BlogPostFormButtonLeftStyle
                  type="button"
                  onClick={() =>
                    paragraphArrayHelpers.push({
                      header: '',
                      content: '',
                    })
                  }
                >
                  Add Paragraph
                </BlogPostFormButtonLeftStyle>
                {!state?.isUpdate && (
                  <>
                    <UiButton
                      type="button"
                      onClick={() => {
                        resetForm({ values: state?.initialValues });
                      }}
                    >
                      undo
                    </UiButton>

                    <UiButton
                      type="button"
                      onClick={() => {
                        resetForm({ values: blogPostInitialState });
                      }}
                    >
                      clear
                    </UiButton>
                  </>
                )}
                <UiButton
                  type="submit"
                  disabled={
                    isLoading[blogTypes.create] || isLoading[blogTypes.update]
                  }
                >
                  {state?.isUpdate ? 'update' : 'submit'}
                </UiButton>
              </UiButtonsContainer>
            </UiTextBlock>
          </BlogPostFormContainerStyle>
        )}
      </Formik>
      {(errors[blogTypes.create] || errors[blogTypes.update]) && (
        <BlogPostFormModalStyle onClose={resetErrors}>
          <UiTextBlock
            header={
              <BlogPostFormModalHeaderStyle>
                error has accord
              </BlogPostFormModalHeaderStyle>
            }
          >
            <BlogPostFormModalBodyStyle>
              {errors[blogTypes.create] || errors[blogTypes.update]}
            </BlogPostFormModalBodyStyle>
            <UiButtonsContainer>
              <UiButton onClick={resetErrors}>close</UiButton>
            </UiButtonsContainer>
          </UiTextBlock>
        </BlogPostFormModalStyle>
      )}
    </BlogPostFormStyle>
  );
};

const mapStateToProps = ({ errors, isLoading }) => ({
  errors,
  isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetErrors: () => dispatch(resetErrors()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogPostFormView)
);
