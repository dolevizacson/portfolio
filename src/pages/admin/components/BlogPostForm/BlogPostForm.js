import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { actions } from '../../../../env/utils/access';

// actions
const {
  postBlogPost,
  updateBlogPost,
  changeBlogPost,
  resetBlogPost,
} = actions.blogActions;

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

  changeBlogPost = changedBlogPost => {
    const { changeBlogPost } = this.props;
    changeBlogPost(changedBlogPost);
  };

  render() {
    const { location, blogPost } = this.props;
    return (
      <BlogPostFormStyle>
        <BlogPostContainerStyle>
          <Formik
            initialValues={
              location && location.state ? location.state.blogPost : blogPost
            }
            validationSchema={BlogPostFormValidationSchema}
            validate={values => {
              !location.state && this.changeBlogPost(values);
            }}
            onSubmit={(values, actions) => {
              location && location.state
                ? this.updateBlogPost(location.state.blogPost._id, values)
                : this.postBlogPost(values);
              actions.setSubmitting(false);
            }}
            onReset={() => this.props.resetBlogPost()}
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
                    name="submit"
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

const mapStateToProps = ({ blogPost }) => ({
  blogPost,
});

const mapDispatchToProps = dispatch => ({
  postBlogPost: post => dispatch(postBlogPost(post)),
  updateBlogPost: (id, post) => dispatch(updateBlogPost(id, post)),
  changeBlogPost: changedBlogPost => dispatch(changeBlogPost(changedBlogPost)),
  resetBlogPost: () => dispatch(resetBlogPost()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostForm);
