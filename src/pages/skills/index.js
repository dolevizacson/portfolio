import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

import MethodologyList from './components/MethodologyList/MethodologyList';
import StackList from './components/StackList/StackList';

import { getSkillsListContent } from './services/actions';

class Skills extends React.Component {
  state = {
    skillsList: [],
    isHidden: true,
    cursor: 'pointer',
  };

  componentDidMount = async () => {
    await this.props.getSkillsListContent();
    this.setState(state => {
      return { skillsList: this.props.skillsListContent.content };
    });
  };

  createMethodologyList = () => {
    if (this.state.skillsList === undefined) {
      return <div />;
    } else {
      return this.state.skillsList.map(methodology => {
        return (
          <div
            key={methodology._id}
            className="skills-methodology-ui-container"
            style={{ cursor: this.state.cursor }}
            onClick={() => {
              this.setState({
                skillsList: this.state.skillsList.filter(
                  item => item._id === methodology._id
                ),
                isHidden: false,
                cursor: 'auto',
              });
            }}
          >
            <div className="skills-methodology-ui-container-header">
              <div className="skills-methodology-ui-container-header-image">
                <img src={methodology.image} alt={methodology.topic} />
              </div>
              <div className="skills-methodology-ui-container-header-title">
                <h4>{methodology.topic}</h4>
                {!this.state.isHidden && (
                  <FontAwesomeIcon
                    icon="times"
                    size="2x"
                    style={{ cursor: 'pointer' }}
                    onClick={e => {
                      e.stopPropagation();
                      this.setState(state => {
                        return {
                          skillsList: this.props.skillsListContent.content,
                          isHidden: true,
                          cursor: 'pointer',
                        };
                      });
                    }}
                  />
                )}
              </div>
            </div>
            {this.state.isHidden && (
              <div className="skills-methodology-ui-container-body">
                {methodology.stack.map(lang => {
                  return <div key={lang._id}> - {lang.language}</div>;
                })}
              </div>
            )}
            {!this.state.isHidden && (
              <StackList stackList={methodology.stack} />
            )}
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="skills">
        <div className="skills-skillsList">
          <div className="ui-titles-container">
            <div className="container-image">
              <img src="/skillsTitleImage.png" alt="stone-stack" />
            </div>
            <div className="container-title">
              <h4>Technology Stack And Stuff</h4>
            </div>
          </div>
          <div className="Methodology-list">
            <MethodologyList content={this.createMethodologyList()} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ skillsListContent }) => {
  return {
    skillsListContent,
  };
};

export default connect(
  mapStateToProps,
  {
    getSkillsListContent,
  }
)(Skills);
