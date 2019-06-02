import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
const BlogPostParagraphContentFieldStyle = styled.textarea`
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
  render() {
    return (
      <BlogPostFormStyle>
        <BlogPostContainerStyle>
          <Formik
            initialValues={{
              header: 'Post Header',
              paragraph: [
                {
                  header: 'Paragraph header',
                  content: 'Paragraph content',
                },
              ],
              footer: 'Post footer',
            }}
            validationSchema={BlogPostFormValidationSchema}
            onSubmit={(values, actions) => {
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
                            <Field name={`paragraph.${index}.content`}>
                              {({ field, form }) => (
                                <BlogPostParagraphContentFieldStyle
                                  {...field}
                                />
                              )}
                            </Field>
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
