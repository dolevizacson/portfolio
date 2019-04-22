import React from 'react';
import { connect } from 'react-redux';

import './About.css';

import { getAboutContent, getMotoContent } from '../../services/actions';

class About extends React.Component {
  componentDidMount() {
    this.props.getAboutContent();
    this.props.getMotoContent();
  }

  render() {
    const { aboutContent, motoContent } = this.props;

    return (
      <div className="about ui-container ">
        <div className="about-me">
          <div className="content">
            {aboutContent === undefined ? '' : aboutContent.content}
          </div>
        </div>
        <div className="moto">
          <div className="top-quotes">"</div>
          <div className="content">
            {motoContent === undefined ? '' : motoContent.content}
          </div>
          <div className="bottum-quotes">"</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ aboutContent, motoContent }) => {
  return {
    aboutContent,
    motoContent,
  };
};

export default connect(
  mapStateToProps,
  {
    getAboutContent,
    getMotoContent,
  }
)(About);
