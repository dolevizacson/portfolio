import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Formik, Form, FieldArray } from 'formik';
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
const { skillsListFormLocalStorageKey, skillsListInitialState, AdminRoute } =
  constants;

// types
const { skills: skillsTypes } = types;

// actions
const { resetErrors } = actions.errorsActions;

//style
const SkillsListFormStyle = styled.article`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const SkillsListFormHeaderStyle = styled(UiHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillsListFormContainerStyle = styled(Form)`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const SkillsListFormButtonLeftStyle = styled(UiButton)`
  ${(props) => props.theme.media('buttonsCentering')`margin-right: auto;`}
`;

const SkillsListFormModalStyle = styled(AppModal)`
  width: 50%;
  height: 50%;
`;

const SkillsListFormModalHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const SkillsListFormModalBodyStyle = styled.p`
  ${(props) => props.theme.mixins.formModalStyle}
`;

const SkillsListFormView = (props) => {
  const { functions, validation, isLoading, errors, resetErrors, state } =
    props;

  let stackArrayHelpers;

  const handleFormChange = (values) => {
    if (!state?.isUpdate)
      functions.saveSkillsListState(skillsListFormLocalStorageKey, values);
  };

  return (
    <SkillsListFormStyle>
      <SkillsListFormHeaderStyle>
        new skills list
        <UiBackButton to={AdminRoute} />
      </SkillsListFormHeaderStyle>
      <Formik
        enableReinitialize={true}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={state.initialValues}
        validationSchema={validation}
        onSubmit={(values, formikBag) => {
          formikBag.validateForm();
          if (state?.isUpdate) {
            functions.updateSkillsList(state?.id, values);
          } else {
            functions.isSubmit();
            functions.postSkillsList(values);
          }
        }}
      >
        {({ values, setFieldValue, resetForm }) => (
          <SkillsListFormContainerStyle>
            {handleFormChange(values)}
            <UiTextBlock>
              <UiFormInputField label="Skills category" name="topic" />
            </UiTextBlock>
            <FieldArray
              name="stack"
              render={(arrayHelpers) => {
                stackArrayHelpers = arrayHelpers;
                return (
                  <>
                    {values?.stack?.length > 0 ? (
                      values?.stack?.map((stack, index) => (
                        <UiTextBlock key={index}>
                          <UiFormInputField
                            label="programming language / Sub category"
                            name={`stack[${index}].language`}
                          />
                          <FieldArray
                            name={`stack[${index}].longData`}
                            render={(arrayHelpers2) => (
                              <>
                                {stack?.longData?.length > 0 ? (
                                  stack?.longData?.map((data, index2) => (
                                    <Fragment key={index2}>
                                      <UiFormInputField
                                        label={index2 === 0 ? 'Skills' : ''}
                                        name={`stack[${index}].longData[${index2}]`}
                                        textarea
                                        rows="5"
                                      />
                                      <UiButtonsContainer>
                                        {values.stack.length > 1 &&
                                          stack.longData.length ===
                                            index2 + 1 && (
                                            <SkillsListFormButtonLeftStyle
                                              type="button"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              }
                                            >
                                              Remove stack
                                            </SkillsListFormButtonLeftStyle>
                                          )}

                                        {stack.longData.length > 1 && (
                                          <UiButton
                                            type="button"
                                            onClick={() =>
                                              arrayHelpers2.remove(index2)
                                            }
                                          >
                                            Remove data
                                          </UiButton>
                                        )}
                                        {index2 ===
                                          stack.longData.length - 1 && (
                                          <UiButton
                                            type="button"
                                            onClick={() =>
                                              arrayHelpers2.push('')
                                            }
                                          >
                                            Add data
                                          </UiButton>
                                        )}
                                      </UiButtonsContainer>
                                    </Fragment>
                                  ))
                                ) : (
                                  <Fragment>
                                    {arrayHelpers2.insert(0, '')}
                                  </Fragment>
                                )}
                              </>
                            )}
                          />
                        </UiTextBlock>
                      ))
                    ) : (
                      <>{arrayHelpers.insert(0, '')}</>
                    )}
                  </>
                );
              }}
            />
            <UiTextBlock>
              <UiButtonsContainer>
                <SkillsListFormButtonLeftStyle
                  type="button"
                  onClick={() =>
                    stackArrayHelpers.push({
                      language: '',
                      longData: [''],
                    })
                  }
                >
                  Add technology
                </SkillsListFormButtonLeftStyle>
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
                        resetForm({ values: skillsListInitialState });
                      }}
                    >
                      clear
                    </UiButton>
                  </>
                )}
                <UiButton
                  type="submit"
                  disabled={
                    isLoading[skillsTypes.create] ||
                    isLoading[skillsTypes.update]
                  }
                >
                  {state?.isUpdate ? 'update' : 'submit'}
                </UiButton>
              </UiButtonsContainer>
            </UiTextBlock>
          </SkillsListFormContainerStyle>
        )}
      </Formik>
      {(errors[skillsTypes.create] || errors[skillsTypes.update]) && (
        <SkillsListFormModalStyle onClose={resetErrors}>
          <UiTextBlock
            header={
              <SkillsListFormModalHeaderStyle>
                error has accord
              </SkillsListFormModalHeaderStyle>
            }
          >
            <SkillsListFormModalBodyStyle>
              {errors[skillsTypes.create] || errors[skillsTypes.update]}
            </SkillsListFormModalBodyStyle>
            <UiButtonsContainer>
              <UiButton onClick={resetErrors}>close</UiButton>
            </UiButtonsContainer>
          </UiTextBlock>
        </SkillsListFormModalStyle>
      )}
    </SkillsListFormStyle>
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
  connect(mapStateToProps, mapDispatchToProps)(SkillsListFormView)
);
