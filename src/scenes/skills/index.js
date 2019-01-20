import React from 'react';

import './index.css';

import SkillsList from './components/SkillsList';
import content from './services/content';

class Skills extends React.Component {
  state = { skillObject: content };

  render() {
    return (
      <div>
        <SkillsList skillObject={this.state.skillObject} />
      </div>
    );
  }
}

export default Skills;
