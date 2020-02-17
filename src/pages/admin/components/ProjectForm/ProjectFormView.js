import React from 'react';
import { Formik, FieldArray, ErrorMessage } from 'formik';
import { constants } from '../../../../env/utils/access';

//style
import {
  ProjectFormStyle,
  ProjectContainerStyle,
  FormStyle,
  ProjectHeaderFieldStyle,
  ProjectSummeryFieldStyle,
  ProjectDescriptionFieldStyle,
  ProjectDescriptionAddButtonStyle,
  ProjectDescriptionRemoveButtonStyle,
  ProjectTechnologiesListContainerStyle,
  ProjectTechnologyContainerStyle,
  ProjectTechnologyFieldStyle,
  ProjectTechnologyRemoveButtonStyle,
  ProjectTechnologyAddButtonStyle,
  ProjectLinksListContainerStyle,
  ProjectLinkContainerStyle,
  ProjectLinkFieldStyle,
  ProjectLinkRemoveButtonStyle,
  ProjectLinkAddButtonStyle,
  ProjectSubmitButtonStyle,
  ProjectResetButtonStyle,
  ProjectUpdateButtonStyle,
} from './ProjectFormStyle';

// constants
const { projectFormLocalStorageKey, projectInitialState } = constants;

const ProjectFormView = ({
  state: {
    loadProjectState,
    saveProjectState,
    postProject,
    updateProject,
    projectFormValidationSchema,
    location,
  },
}) => {
  return (
    <ProjectFormStyle>
      <ProjectContainerStyle>
        <Formik
          enableReinitialize={true}
          initialValues={
            location && location.state
              ? location.state.project
              : loadProjectState(projectFormLocalStorageKey)
              ? loadProjectState(projectFormLocalStorageKey)
              : projectInitialState
          }
          validationSchema={projectFormValidationSchema}
          validate={values => {
            !location.state &&
              saveProjectState(projectFormLocalStorageKey, values);
          }}
          onSubmit={(values, actions) => {
            location && location.state
              ? updateProject(location.state.project._id, values)
              : postProject(values);
            actions.setSubmitting(false);
          }}
          onReset={(values, formikBug) => {
            saveProjectState(projectFormLocalStorageKey, projectInitialState);
            setTimeout(() => formikBug.resetForm(projectInitialState), 0);
          }}
          render={({
            values,
            setFieldValue,
            errors,
            status,
            touched,
            isSubmitting,
            values: { technologies, links },
          }) => (
            <FormStyle>
              <ProjectHeaderFieldStyle type="text" name="header" />
              <ErrorMessage name="header" component="div" />
              <ProjectSummeryFieldStyle type="text" name="summery" />
              <ErrorMessage name="summery" component="div" />
              {values.description && (
                <>
                  <ProjectDescriptionFieldStyle
                    type="text"
                    name="description"
                  />
                  <ErrorMessage name="description" component="div" />
                </>
              )}
              {!values.description && (
                <ProjectDescriptionAddButtonStyle
                  type="button"
                  onClick={() =>
                    setFieldValue('description', 'Project description')
                  }
                >
                  Add project description
                </ProjectDescriptionAddButtonStyle>
              )}
              {values.description && (
                <ProjectDescriptionRemoveButtonStyle
                  type="button"
                  onClick={() => setFieldValue('description', '')}
                >
                  remove project description
                </ProjectDescriptionRemoveButtonStyle>
              )}
              <FieldArray
                name="technologies"
                render={arrayHelpers => (
                  <ProjectTechnologiesListContainerStyle>
                    {technologies && technologies.length > 0 ? (
                      technologies.map((technology, index) => (
                        <ProjectTechnologyContainerStyle key={index}>
                          <ProjectTechnologyFieldStyle
                            type="text"
                            name={`technologies[${index}]`}
                          />
                          <ErrorMessage
                            name={`technologies[${index}]`}
                            component="div"
                          />
                          {index > 0 && (
                            <ProjectTechnologyRemoveButtonStyle
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Remove technology
                            </ProjectTechnologyRemoveButtonStyle>
                          )}
                        </ProjectTechnologyContainerStyle>
                      ))
                    ) : (
                      <div>{arrayHelpers.insert(0, '')}</div>
                    )}
                    <ProjectTechnologyAddButtonStyle
                      type="button"
                      onClick={() => arrayHelpers.push('Technology name')}
                    >
                      Add technology
                    </ProjectTechnologyAddButtonStyle>
                  </ProjectTechnologiesListContainerStyle>
                )}
              />
              <FieldArray
                name="links"
                render={arrayHelpers => (
                  <ProjectLinksListContainerStyle>
                    {links.map((link, index) => (
                      <ProjectLinkContainerStyle key={index}>
                        <ProjectLinkFieldStyle
                          type="text"
                          name={`links[${index}]`}
                        />
                        <ErrorMessage
                          name={`links[${index}]`}
                          component="div"
                        />

                        <ProjectLinkRemoveButtonStyle
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove link
                        </ProjectLinkRemoveButtonStyle>
                      </ProjectLinkContainerStyle>
                    ))}
                    <ProjectLinkAddButtonStyle
                      type="button"
                      onClick={() => arrayHelpers.push('Link url')}
                    >
                      Add link
                    </ProjectLinkAddButtonStyle>
                  </ProjectLinksListContainerStyle>
                )}
              />
              {!location.state && (
                <>
                  <ProjectSubmitButtonStyle
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </ProjectSubmitButtonStyle>
                  <ProjectResetButtonStyle type="reset">
                    Reset
                  </ProjectResetButtonStyle>
                </>
              )}
              {location && location.state && (
                <ProjectUpdateButtonStyle type="submit" disabled={isSubmitting}>
                  update
                </ProjectUpdateButtonStyle>
              )}
            </FormStyle>
          )}
        />
      </ProjectContainerStyle>
    </ProjectFormStyle>
  );
};

export default ProjectFormView;
