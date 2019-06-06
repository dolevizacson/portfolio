import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { actions } from '../../../../env/utils/access';

// actions
const postBlogPost = actions.blogActions.postBlogPost;
const updateBlogPost = actions.blogActions.updateBlogPost;

// style
const BlogPostFormStyle = styled.div`
  ${({ theme }) => theme.div}
`;
const BlogPostContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 100%;
  justify-content:center;
  align-content:center;

  ${({ theme }) => theme.ui.corners}
  ${({ theme }) => theme.ui.shadow}

  ${({ theme }) => theme.BackgroundColor.black1}
`;

const FormStyle = styled(Form)`
  ${({ theme }) => theme.div}

  width: 50%;
  flex-direction: column;
  align-content: space-around;
`;
const BlogPostHeaderFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const BlogPostParagraphHeaderFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const BlogPostParagraphContentFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const BlogPostFooterFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const BlogPostParagraphListContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
`;
const BlogPostParagraphContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
`;
const BlogPostParagraphCleanButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;
const BlogPostParagraphRemoveButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;
const BlogPostParagraphRAddButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;
const BlogPostSubmitButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;
const BlogPostUpdateButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
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
    this.props.postBlogPost(post);
  };

  updateBlogPost = (id, post) => {
    this.props.updateBlogPost(id, post);
  };

  render() {
    return (
      <BlogPostFormStyle>
        <BlogPostContainerStyle>
          <Formik
            initialValues={
              this.props.location && this.props.location.state
                ? this.props.location.state.blogPost
                : {
                    header: 'Post Header',
                    paragraph: [
                      {
                        header: 'Paragraph header',
                        content: 'Paragraph content',
                      },
                    ],
                    footer: 'Post footer',
                  }
            }
            validationSchema={BlogPostFormValidationSchema}
            onSubmit={(values, actions) => {
              this.props.location && this.props.location.state
                ? this.updateBlogPost(
                    this.props.location.state.blogPost._id,
                    values
                  )
                : this.postBlogPost(values);
              actions.setSubmitting(false);
            }}
            render={({ values, errors, status, touched, isSubmitting }) => (
              <FormStyle>
                <BlogPostHeaderFieldStyle type="text" name="header" />
                <ErrorMessage name="header" component="div" />
                <FieldArray
                  name="paragraph"
                  render={arrayHelpers => (
                    <BlogPostParagraphListContainerStyle>
                      {values.paragraph && values.paragraph.length > 0 ? (
                        values.paragraph.map((paragraph, index) => (
                          <BlogPostParagraphContainerStyle key={index}>
                            <BlogPostParagraphHeaderFieldStyle
                              type="text"
                              name={`paragraph.${index}.header`}
                            />
                            <ErrorMessage
                              name={`paragraph.${index}.header`}
                              component="div"
                            />
                            <BlogPostParagraphContentFieldStyle
                              name={`paragraph.${index}.content`}
                            />
                            <ErrorMessage
                              name={`paragraph.${index}.content`}
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
                {!this.props.location.state && (
                  <BlogPostSubmitButtonStyle
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </BlogPostSubmitButtonStyle>
                )}
                {this.props.location && this.props.location.state && (
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

export default connect(
  null,
  { postBlogPost, updateBlogPost }
)(BlogPostForm);
