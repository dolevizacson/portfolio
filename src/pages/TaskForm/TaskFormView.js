import React from 'react';
import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
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
const { taskFormLocalStorageKey, taskInitialState, adminRoute } = constants;

// types
const { taskList: taskListTypes } = types;

// actions
const { resetErrors } = actions.errorsActions;

//style
const TaskFormStyle = styled.article`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const TaskFormHeaderStyle = styled(UiHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskFormContainerStyle = styled(Form)`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const TaskFormModalStyle = styled(AppModal)`
  width: 50%;
  height: 50%;
`;

const TaskFormModalHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const TaskFormModalBodyStyle = styled.p`
  ${(props) => props.theme.mixins.formModalStyle}
`;

const TaskFormView = (props) => {
  const { functions, validation, isLoading, errors, resetErrors, state } =
    props;

  const handleFormChange = (values) => {
    if (!state?.isUpdate)
      functions.saveTaskState(taskFormLocalStorageKey, values);
  };

  return (
    <TaskFormStyle>
      <TaskFormHeaderStyle>
        new task
        <UiBackButton to={adminRoute} />
      </TaskFormHeaderStyle>

      <Formik
        enableReinitialize={true}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={state.initialValues}
        validationSchema={validation}
        onSubmit={(values, formikBag) => {
          formikBag.validateForm();
          if (state?.isUpdate) {
            functions.updateTask(state?.id, values);
          } else {
            functions.isSubmit();
            functions.postTask(values);
          }
        }}
      >
        {({ values, resetForm }) => (
          <TaskFormContainerStyle>
            {handleFormChange(values)}
            <UiTextBlock>
              <UiFormInputField label="Task Header" name="header" />
              <UiFormInputField
                label="Task description"
                name="description"
                textarea
              />
            </UiTextBlock>
            <UiTextBlock>
              <UiButtonsContainer>
                {!state?.isUpdate && (
                  <>
                    <UiButton
                      type="button"
                      onClick={() =>
                        resetForm({ values: state?.initialValues })
                      }
                    >
                      undo
                    </UiButton>
                    <UiButton
                      type="button"
                      onClick={() => {
                        resetForm({ values: taskInitialState });
                      }}
                    >
                      {state?.isUpdate ? 'reset' : 'clear'}
                    </UiButton>
                  </>
                )}
                <UiButton
                  type="submit"
                  disabled={
                    isLoading[taskListTypes.create] ||
                    isLoading[taskListTypes.update]
                  }
                >
                  {state?.isUpdate ? 'update' : 'submit'}
                </UiButton>
              </UiButtonsContainer>
            </UiTextBlock>
          </TaskFormContainerStyle>
        )}
      </Formik>
      {(errors[taskListTypes.create] || errors[taskListTypes.update]) && (
        <TaskFormModalStyle onClose={resetErrors}>
          <UiTextBlock
            header={
              <TaskFormModalHeaderStyle>
                error has accord
              </TaskFormModalHeaderStyle>
            }
          >
            <TaskFormModalBodyStyle>
              {errors[taskListTypes.create] || errors[taskListTypes.update]}
            </TaskFormModalBodyStyle>
            <UiButtonsContainer>
              <UiButton onClick={resetErrors}>close</UiButton>
            </UiButtonsContainer>
          </UiTextBlock>
        </TaskFormModalStyle>
      )}
    </TaskFormStyle>
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
  connect(mapStateToProps, mapDispatchToProps)(TaskFormView)
);
