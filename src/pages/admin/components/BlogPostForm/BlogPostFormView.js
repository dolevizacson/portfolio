import React from 'react';
import { Formik, FieldArray, ErrorMessage } from 'formik';
import { constants } from '../../../../env/utils/access';

//style
import {
  BlogPostFormStyle,
  BlogPostContainerStyle,
  FormStyle,
  BlogPostHeaderFieldStyle,
  BlogPostSummeryFieldStyle,
  BlogPostParagraphListContainerStyle,
  BlogPostParagraphContainerStyle,
  BlogPostParagraphHeaderFieldStyle,
  BlogPostParagraphContentFieldStyle,
  BlogPostParagraphCleanButtonStyle,
  BlogPostParagraphRAddButtonStyle,
  BlogPostParagraphRemoveButtonStyle,
  BlogPostFooterFieldStyle,
  BlogPostSubmitButtonStyle,
  BlogPostResetButtonStyle,
  BlogPostUpdateButtonStyle,
} from './BlogPostFormStyle';

// constants
const { blogFormLocalStorageKey, blogPostInitialState } = constants;

const BlogPostFormView = ({
  state: {
    loadBlogPostState,
    saveBlogPostState,
    postBlogPost,
    updateBlogPost,
    BlogPostFormValidationSchema,
    location,
  },
}) => {
  return (
    <BlogPostFormStyle>
      <BlogPostContainerStyle>
        <Formik
          enableReinitialize={true}
          initialValues={
            location && location.state
              ? location.state.blogPost
              : loadBlogPostState(blogFormLocalStorageKey)
              ? loadBlogPostState(blogFormLocalStorageKey)
              : blogPostInitialState
          }
          validationSchema={BlogPostFormValidationSchema}
          validate={values => {
            !location.state &&
              saveBlogPostState(blogFormLocalStorageKey, values);
          }}
          onSubmit={(values, actions) => {
            location && location.state
              ? updateBlogPost(location.state.blogPost._id, values)
              : postBlogPost(values);
            actions.setSubmitting(false);
          }}
          onReset={(values, formikBug) => {
            saveBlogPostState(blogFormLocalStorageKey, blogPostInitialState);
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
};

export default BlogPostFormView;
