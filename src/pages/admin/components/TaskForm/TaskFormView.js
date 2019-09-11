import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { constants } from '../../../../env/utils/access';

//style
import {
  TaskFormStyle,
  TaskContainerStyle,
  FormStyle,
  TaskHeaderFieldStyle,
  TaskDescriptionFieldStyle,
  TaskSubmitButtonStyle,
  TaskResetButtonStyle,
  TaskUpdateButtonStyle,
} from './TaskFormStyle';

// constants
const { taskLocalStorageKey, taskInitialState } = constants;

const BlogPostFormView = ({
  state: {
    loadTaskState,
    saveTaskState,
    postTask,
    updateTask,
    TaskFormValidationSchema,
    location,
  },
}) => {
  return (
    <TaskFormStyle>
      <TaskContainerStyle>
        <Formik
          enableReinitialize={true}
          initialValues={
            location && location.state
              ? location.state.task
              : loadTaskState(taskLocalStorageKey)
              ? loadTaskState(taskLocalStorageKey)
              : taskInitialState
          }
          validationSchema={TaskFormValidationSchema}
          validate={values => {
            !location.state && saveTaskState(taskLocalStorageKey, values);
          }}
          onSubmit={(values, actions) => {
            location && location.state
              ? updateTask(location.state.task._id, values)
              : postTask(values);
            actions.setSubmitting(false);
          }}
          onReset={(values, formikBug) => {
            saveTaskState(taskLocalStorageKey, taskInitialState);
            setTimeout(() => formikBug.resetForm(taskInitialState), 0);
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
              <TaskHeaderFieldStyle type="text" name="header" />
              <ErrorMessage name="header" component="div" />
              <TaskDescriptionFieldStyle type="text" name="description" />
              <ErrorMessage name="description" component="div" />
              {!location.state && (
                <>
                  <TaskSubmitButtonStyle type="submit" disabled={isSubmitting}>
                    Submit
                  </TaskSubmitButtonStyle>
                  <TaskResetButtonStyle type="reset">
                    Reset
                  </TaskResetButtonStyle>
                </>
              )}
              {location && location.state && (
                <TaskUpdateButtonStyle type="submit" disabled={isSubmitting}>
                  update
                </TaskUpdateButtonStyle>
              )}
            </FormStyle>
          )}
        />
      </TaskContainerStyle>
    </TaskFormStyle>
  );
};

export default BlogPostFormView;
