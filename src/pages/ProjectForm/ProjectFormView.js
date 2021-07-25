import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, FieldArray } from 'formik';
import styled from 'styled-components';
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
const { projectFormLocalStorageKey, projectInitialState, AdminRoute } =
  constants;

// types
const { projects: projectsTypes } = types;

// actions
const { resetErrors } = actions.errorsActions;

//style
const ProjectFormStyle = styled.article`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const ProjectFormHeaderStyle = styled(UiHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectFormContainerStyle = styled(Form)`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const ProjectFormButtonLeftStyle = styled(UiButton)`
  ${(props) => props.theme.media('buttonsCentering')`margin-right: auto;`}
`;

const ProjectFormModalStyle = styled(AppModal)`
  width: 50%;
  height: 50%;
`;

const ProjectFormModalHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const ProjectFormModalBodyStyle = styled.p`
  ${(props) => props.theme.mixins.formModalStyle}
`;

const ProjectFormView = (props) => {
  const { functions, validation, isLoading, errors, resetErrors, state } =
    props;

  let technologiesArrayHelpers;
  let linksArrayHelpers;

  const handleFormChange = (values) => {
    if (!state?.isUpdate) {
      functions.saveProjectState(projectFormLocalStorageKey, values);
    }
  };

  return (
    <ProjectFormStyle>
      <ProjectFormHeaderStyle>
        new project
        <UiBackButton to={AdminRoute} />
      </ProjectFormHeaderStyle>
      <Formik
        enableReinitialize={true}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={state.initialValues}
        validationSchema={validation}
        onSubmit={(values, formikBag) => {
          formikBag.validateForm();
          if (state?.isUpdate) {
            functions.updateProject(state?.id, values);
          } else {
            functions.isSubmit();
            functions.postProject(values);
          }
        }}
      >
        {({ values, setFieldValue, resetForm }) => (
          <ProjectFormContainerStyle>
            {handleFormChange(values)}
            <UiTextBlock>
              <UiFormInputField label="Header" name="header" />
              <UiFormInputField
                label="Project summery"
                name="summery"
                textarea
              />
              <UiFormInputField
                label="Project description"
                name="description"
                textarea
              />
            </UiTextBlock>
            <UiTextBlock>
              <FieldArray
                name="technologies"
                render={(arrayHelpers) => {
                  technologiesArrayHelpers = arrayHelpers;
                  return (
                    <>
                      {values?.technologies?.length > 0 ? (
                        values?.technologies?.map((technology, index) => (
                          <Fragment key={index}>
                            <UiFormInputField
                              label="technology"
                              name={`technologies[${index}]`}
                            />
                            {values?.technologies?.length > 1 && (
                              <UiButtonsContainer>
                                <UiButton
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove technology
                                </UiButton>
                              </UiButtonsContainer>
                            )}
                          </Fragment>
                        ))
                      ) : (
                        <>{arrayHelpers.insert(0, '')}</>
                      )}
                    </>
                  );
                }}
              />
            </UiTextBlock>

            <FieldArray
              name="links"
              render={(arrayHelpers2) => {
                linksArrayHelpers = arrayHelpers2;
                return (
                  <>
                    {values?.links?.length > 0 && (
                      <UiTextBlock>
                        {values?.links?.map((link, index2) => (
                          <Fragment key={index2}>
                            <UiFormInputField
                              label="Link name"
                              name={`links[${index2}].name`}
                            />
                            <UiFormInputField
                              label="Link url"
                              name={`links[${index2}].url`}
                            />
                            <UiButtonsContainer>
                              <UiButton
                                type="button"
                                onClick={() => arrayHelpers2.remove(index2)}
                              >
                                Remove link
                              </UiButton>
                            </UiButtonsContainer>
                          </Fragment>
                        ))}
                      </UiTextBlock>
                    )}
                  </>
                );
              }}
            />
            <UiTextBlock>
              <UiButtonsContainer>
                <UiButton
                  type="button"
                  onClick={() => {
                    technologiesArrayHelpers.push('');
                  }}
                >
                  Add technology
                </UiButton>
                <ProjectFormButtonLeftStyle
                  type="button"
                  onClick={() => {
                    linksArrayHelpers.push({
                      name: '',
                      url: '',
                    });
                  }}
                >
                  Add link
                </ProjectFormButtonLeftStyle>
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
                        resetForm({ values: projectInitialState });
                      }}
                    >
                      clear
                    </UiButton>
                  </>
                )}
                <UiButton
                  type="submit"
                  disabled={
                    isLoading[projectsTypes.create] ||
                    isLoading[projectsTypes.update]
                  }
                >
                  {state?.isUpdate ? 'update' : 'submit'}
                </UiButton>
              </UiButtonsContainer>
            </UiTextBlock>
          </ProjectFormContainerStyle>
        )}
      </Formik>
      {(errors[projectsTypes.create] || errors[projectsTypes.update]) && (
        <ProjectFormModalStyle onClose={resetErrors}>
          <UiTextBlock
            header={
              <ProjectFormModalHeaderStyle>
                error has accord
              </ProjectFormModalHeaderStyle>
            }
          >
            <ProjectFormModalBodyStyle>
              {errors[projectsTypes.create] || errors[projectsTypes.update]}
            </ProjectFormModalBodyStyle>
            <UiButtonsContainer>
              <UiButton onClick={resetErrors}>close</UiButton>
            </UiButtonsContainer>
          </UiTextBlock>
        </ProjectFormModalStyle>
      )}
    </ProjectFormStyle>
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
  connect(mapStateToProps, mapDispatchToProps)(ProjectFormView)
);
