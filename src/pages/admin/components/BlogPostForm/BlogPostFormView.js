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
  BlogPostParagraphAddButtonStyle,
  BlogPostParagraphRemoveButtonStyle,
  BlogPostConclusionAddButtonStyle,
  BlogPostConclusionRemoveButtonStyle,
  BlogPostConclusionSentenceAddButtonStyle,
  BlogPostConclusionSentenceRemoveButtonStyle,
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
            setFieldValue,
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
                    <BlogPostParagraphAddButtonStyle
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          header: 'Paragraph header',
                          content: 'Paragraph content',
                        })
                      }
                    >
                      Add Paragraph
                    </BlogPostParagraphAddButtonStyle>
                  </BlogPostParagraphListContainerStyle>
                )}
              />
              {values.conclusion && values.conclusion.header && (
                <BlogPostParagraphContainerStyle>
                  <BlogPostParagraphHeaderFieldStyle
                    type="text"
                    name={`conclusion.header`}
                  />
                  <ErrorMessage name={`conclusion.header`} component="div" />
                  <BlogPostParagraphContentFieldStyle
                    name={`conclusion.content`}
                  />
                  <ErrorMessage name={`conclusion.content`} component="div" />
                </BlogPostParagraphContainerStyle>
              )}
              {values.conclusion && !values.conclusion.header && (
                <BlogPostConclusionAddButtonStyle
                  type="button"
                  onClick={() =>
                    setFieldValue('conclusion', {
                      header: 'Post conclusion header',
                      content: 'Post conclusion content',
                    })
                  }
                >
                  Add conclusion
                </BlogPostConclusionAddButtonStyle>
              )}
              {values.conclusion && values.conclusion.header && (
                <BlogPostConclusionRemoveButtonStyle
                  type="button"
                  onClick={() =>
                    setFieldValue('conclusion', {
                      header: '',
                      content: '',
                    })
                  }
                >
                  remove conclusion
                </BlogPostConclusionRemoveButtonStyle>
              )}
              {values.conclusionSentence && (
                <>
                  <BlogPostParagraphContentFieldStyle
                    type="text"
                    name="conclusionSentence"
                  />
                  <ErrorMessage name="conclusionSentence" component="div" />
                </>
              )}
              {!values.conclusionSentence && (
                <BlogPostConclusionSentenceAddButtonStyle
                  type="button"
                  onClick={() =>
                    setFieldValue(
                      'conclusionSentence',
                      'Post conclusion sentence'
                    )
                  }
                >
                  Add conclusion sentence
                </BlogPostConclusionSentenceAddButtonStyle>
              )}
              {values.conclusionSentence && (
                <BlogPostConclusionSentenceRemoveButtonStyle
                  type="button"
                  onClick={() => setFieldValue('conclusionSentence', '')}
                >
                  remove conclusion sentence
                </BlogPostConclusionSentenceRemoveButtonStyle>
              )}
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
