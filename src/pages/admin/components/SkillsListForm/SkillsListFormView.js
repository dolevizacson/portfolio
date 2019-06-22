import React from 'react';
import { Formik, FieldArray, ErrorMessage } from 'formik';
import { constants } from '../../../../env/utils/access';

//style
import {
  SkillsListFormStyle,
  SkillsListContainerStyle,
  FormStyle,
  SkillsListTopicFieldStyle,
  SkillsListImageFieldStyle,
  SkillsListStackListListContainerStyle,
  SkillsListStackContainerStyle,
  SkillsListLanguageFieldStyle,
  SkillsListStackRemoveButtonStyle,
  SkillsListstackAddButtonStyle,
  SkillsListSubmitButtonStyle,
  SkillsListResetButtonStyle,
  SkillsListUpdateButtonStyle,
  SkillsListLongDataContainerStyle,
  SkillsListLongDataListContainerStyle,
  SkillsListLongDataFieldStyle,
  SkillsListLongDataAddButtonStyle,
  SkillsListLongDataRemoveButtonStyle,
} from './SkillsListFormStyle';

// constants
const { skillslistLocalStorageKey, skillsListInitialState } = constants;

const SkillsListFormView = ({
  state: {
    postSkillsList,
    updateSkillsList,
    loadSkillsListState,
    saveSkillsListState,
    SkillsListFormValidationSchema,
    location,
  },
}) => {
  return (
    <SkillsListFormStyle>
      <SkillsListContainerStyle>
        <Formik
          enableReinitialize={true}
          initialValues={
            location && location.state
              ? location.state.skillsList
              : loadSkillsListState(skillslistLocalStorageKey)
              ? loadSkillsListState(skillslistLocalStorageKey)
              : skillsListInitialState
          }
          validationSchema={SkillsListFormValidationSchema}
          validate={values => {
            !location.state &&
              saveSkillsListState(skillslistLocalStorageKey, values);
          }}
          onSubmit={(values, actions) => {
            location && location.state
              ? updateSkillsList(location.state.skillsList._id, values)
              : postSkillsList(values);
            actions.setSubmitting(false);
          }}
          onReset={(values, formikBug) => {
            saveSkillsListState(
              skillslistLocalStorageKey,
              skillsListInitialState
            );
            setTimeout(() => formikBug.resetForm(skillsListInitialState), 0);
          }}
          render={({
            values,
            errors,
            status,
            touched,
            isSubmitting,
            values: {
              stack,
              stack: { longData },
            },
          }) => (
            <FormStyle>
              <SkillsListTopicFieldStyle type="text" name="topic" />
              <ErrorMessage name="topic" component="div" />
              <SkillsListImageFieldStyle type="text" name="image" />
              <ErrorMessage name="image" component="div" />
              <FieldArray
                name="stack"
                render={arrayHelpers => (
                  <SkillsListStackListListContainerStyle>
                    {stack && stack.length > 0 ? (
                      stack.map((stack, index) => (
                        <SkillsListStackContainerStyle key={index}>
                          <SkillsListLanguageFieldStyle
                            type="text"
                            name={`stack[${index}].language`}
                          />
                          <ErrorMessage
                            name={`stack[${index}].language`}
                            component="div"
                          />
                          <FieldArray
                            name={`stack[${index}].longData`}
                            render={arrayHelpers => (
                              <SkillsListLongDataListContainerStyle>
                                {stack.longData && stack.longData.length > 0 ? (
                                  stack.longData.map((data, index2) => (
                                    <SkillsListLongDataContainerStyle
                                      key={index2}
                                    >
                                      <SkillsListLongDataFieldStyle
                                        type="text"
                                        name={`stack[${index}].longData[${index2}]`}
                                      />
                                      <ErrorMessage
                                        name={`stack[${index}].longData[${index2}]`}
                                        component="div"
                                      />
                                    </SkillsListLongDataContainerStyle>
                                  ))
                                ) : (
                                  <div>{arrayHelpers.insert(0, '')}</div>
                                )}
                                {stack.longData.length > 1 && (
                                  <SkillsListLongDataRemoveButtonStyle
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    Remove data
                                  </SkillsListLongDataRemoveButtonStyle>
                                )}
                                <SkillsListLongDataAddButtonStyle
                                  type="button"
                                  onClick={() =>
                                    arrayHelpers.push('language skill')
                                  }
                                >
                                  Add data
                                </SkillsListLongDataAddButtonStyle>
                              </SkillsListLongDataListContainerStyle>
                            )}
                          />
                          {index > 0 && (
                            <SkillsListStackRemoveButtonStyle
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Remove stack
                            </SkillsListStackRemoveButtonStyle>
                          )}
                        </SkillsListStackContainerStyle>
                      ))
                    ) : (
                      <div>{arrayHelpers.insert(0, '')}</div>
                    )}
                    <SkillsListstackAddButtonStyle
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          language: 'language name',
                          longData: ['language skill'],
                        })
                      }
                    >
                      Add stack
                    </SkillsListstackAddButtonStyle>
                  </SkillsListStackListListContainerStyle>
                )}
              />
              {!location.state && (
                <>
                  <SkillsListSubmitButtonStyle
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </SkillsListSubmitButtonStyle>
                  <SkillsListResetButtonStyle type="reset">
                    Reset
                  </SkillsListResetButtonStyle>
                </>
              )}
              {location && location.state && (
                <SkillsListUpdateButtonStyle
                  type="submit"
                  disabled={isSubmitting}
                >
                  update
                </SkillsListUpdateButtonStyle>
              )}
            </FormStyle>
          )}
        />
      </SkillsListContainerStyle>
    </SkillsListFormStyle>
  );
};

export default SkillsListFormView;
