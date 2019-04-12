import React from 'react';
import { connect } from 'react-redux';

import './About.css';

import { loadAboutContent, loadMotoContent } from '../../services/actions';

class About extends React.Component {
  componentDidMount() {
    this.props.loadAboutContent();
    this.props.loadMotoContent();
  }

  render() {
    return (
      <div className="about ui-container ">
        <div className="about-me">
          <div className="content">
            {this.props.about === undefined
              ? ''
              : this.props.about.aboutContent}
          </div>
        </div>
        <div className="moto">
          <div className="top-quotes">"</div>
          <div className="content">
            {this.props.moto === undefined ? '' : this.props.moto.motoContent}{' '}
          </div>
          <div className="bottum-quotes">"</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    about: state.about,
    moto: state.moto,
  };
};

export default connect(
  mapStateToProps,
  {
    loadAboutContent,
    loadMotoContent,
  }
)(About);
