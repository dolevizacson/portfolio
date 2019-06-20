import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { constants, actions, services } from '../../../../env/utils/access';

// constants
const { blogFormLocalStorageKey, blogPostInitialState } = constants;

// actions
const { postBlogPost, updateBlogPost } = actions.blogActions;

// services
const { localStorageService } = services;

// style
const BlogPostFormStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
const BlogPostContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  justify-content:center;
  align-content:center;

  ${({
    theme: {
      ui: { corners },
    },
  }) => corners}
  ${({
    theme: {
      ui: { shadow },
    },
  }) => shadow}

  ${({
    theme: {
      BackgroundColor: { black1 },
    },
  }) => black1}
`;

const FormStyle = styled(Form)`
  ${({ theme: { div } }) => div}

  width: 50%;
  flex-direction: column;
  align-content: space-around;
`;
const BlogPostHeaderFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
const BlogPostSummeryFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
const BlogPostParagraphHeaderFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;

const BlogPostParagraphContentFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
const BlogPostFooterFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
const BlogPostParagraphListContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
const BlogPostParagraphContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
const BlogPostParagraphCleanButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
const BlogPostParagraphRemoveButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
const BlogPostParagraphRAddButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
const BlogPostSubmitButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
const BlogPostUpdateButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
const BlogPostResetButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;

const BlogPostFormValidationSchema = Yup.object().shape({
  header: Yup.string().required('Must provide a post header'),
  summery: Yup.string().required('Must provide summery'),
  paragraph: Yup.array().of(
    Yup.object().shape({
      header: Yup.string(),
      content: Yup.string().required('Must provide paragraph content'),
    })
  ),
  footer: Yup.string(),
});

class BlogPostForm extends Component {
  postBlogPost = post => {
    const { postBlogPost } = this.props;
    postBlogPost(post);
  };

  updateBlogPost = (id, post) => {
    const { updateBlogPost } = this.props;
    updateBlogPost(id, post);
  };

  loadBlogPostState = key => {
    try {
      return localStorageService.loadData(key);
    } catch (err) {
      console.log(err);
    }
  };

  saveBlogPostState = (key, data) => {
    try {
      localStorageService.saveData(key, data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { location } = this.props;
    return (
      <BlogPostFormStyle>
        <BlogPostContainerStyle>
          <Formik
            enableReinitialize={true}
            initialValues={
              location && location.state
                ? location.state.blogPost
                : this.loadBlogPostState(blogFormLocalStorageKey)
                ? this.loadBlogPostState(blogFormLocalStorageKey)
                : blogPostInitialState
            }
            validationSchema={BlogPostFormValidationSchema}
            validate={values => {
              !location.state &&
                this.saveBlogPostState(blogFormLocalStorageKey, values);
            }}
            onSubmit={(values, actions) => {
              location && location.state
                ? this.updateBlogPost(location.state.blogPost._id, values)
                : this.postBlogPost(values);
              actions.setSubmitting(false);
            }}
            onReset={(values, formikBug) => {
              this.saveBlogPostState(
                blogFormLocalStorageKey,
                blogPostInitialState
              );
              setTimeout(() => formikBug.resetForm(blogPostInitialState), 0);
            }}
            render={({
              values,
              errors,
              status,
              touched,
              isSubmitting,
              values: { paragraph },
            }) => (
              <FormStyle>
                <BlogPostHeaderFieldStyle type="text" name="header" />
                <ErrorMessage name="header" component="div" />
                <BlogPostSummeryFieldStyle type="text" name="summery" />
                <ErrorMessage name="summery" component="div" />
                <FieldArray
                  name="paragraph"
                  render={arrayHelpers => (
                    <BlogPostParagraphListContainerStyle>
                      {paragraph && paragraph.length > 0 ? (
                        paragraph.map((paragraph, index) => (
                          <BlogPostParagraphContainerStyle key={index}>
                            <BlogPostParagraphHeaderFieldStyle
                              type="text"
                              name={`paragraph[${index}].header`}
                            />
                            <ErrorMessage
                              name={`paragraph[${index}].header`}
                              component="div"
                            />
                            <BlogPostParagraphContentFieldStyle
                              name={`paragraph[${index}].content`}
                            />
                            <ErrorMessage
                              name={`paragraph[${index}].content`}
                              component="div"
                            />
                            <BlogPostParagraphCleanButtonStyle
                              type="button"
                              onClick={() => arrayHelpers.replace(index, '')}
                            >
                              Clean paragraph
                            </BlogPostParagraphCleanButtonStyle>
                            {index > 0 && (
                              <BlogPostParagraphRemoveButtonStyle
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                Remove paragragh
                              </BlogPostParagraphRemoveButtonStyle>
                            )}
                          </BlogPostParagraphContainerStyle>
                        ))
                      ) : (
                        <div>{arrayHelpers.insert(0, '')}</div>
                      )}
                      <BlogPostParagraphRAddButtonStyle
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            header: 'Paragraph header',
                            content: 'Paragraph content',
                          })
                        }
                      >
                        Add Paragraph
                      </BlogPostParagraphRAddButtonStyle>
                    </BlogPostParagraphListContainerStyle>
                  )}
                />
                <BlogPostFooterFieldStyle type="text" name="footer" />
                <ErrorMessage name="footer" component="div" />
                {!location.state && (
                  <>
                    <BlogPostSubmitButtonStyle
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </BlogPostSubmitButtonStyle>
                    <BlogPostResetButtonStyle type="reset">
                      Reset
                    </BlogPostResetButtonStyle>
                  </>
                )}
                {location && location.state && (
                  <BlogPostUpdateButtonStyle
                    type="submit"
                    disabled={isSubmitting}
                  >
                    update
                  </BlogPostUpdateButtonStyle>
                )}
              </FormStyle>
            )}
          />
        </BlogPostContainerStyle>
      </BlogPostFormStyle>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  postBlogPost: post => dispatch(postBlogPost(post, ownProps)),
  updateBlogPost: (id, post) => dispatch(updateBlogPost(id, post, ownProps)),
});

export default connect(
  null,
  mapDispatchToProps
)(BlogPostForm);
