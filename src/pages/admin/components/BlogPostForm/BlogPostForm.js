import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

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

  ${({ theme }) => theme.BackgroundColor.black1}s
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
const BlogPostFooterFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const BlogPostSubmitButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;

class BlogPostForm extends Component {
  render() {
    return (
      <BlogPostFormStyle>
        <BlogPostContainerStyle>
          <Formik
            initialValues={{}}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
            }}
            render={({ errors, status, touched, isSubmitting }) => (
              <FormStyle>
                <BlogPostHeaderFieldStyle type="text" name="blogPostHeader" />
                <ErrorMessage name="blogPostHeader" component="div" />
                <BlogPostFooterFieldStyle type="text" name="blogPostFooter" />
                <ErrorMessage name="blogPostFooter" component="div" />
                <BlogPostSubmitButtonStyle
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </BlogPostSubmitButtonStyle>
              </FormStyle>
            )}
          />
        </BlogPostContainerStyle>
      </BlogPostFormStyle>
    );
  }
}

export default BlogPostForm;
