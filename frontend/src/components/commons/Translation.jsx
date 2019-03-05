import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import { setLanguage } from "../../modules/LocalizeRedux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const LANGUAGES = {
  english: "en",
  french: "fr"
};

class Translation extends Component {
  state = {
    currentLanguage: LANGUAGES.english
  };

  static propTypes = {
    // Props from Redux
    setLanguage: PropTypes.func
  };

  onSetLanguageToFrench = () => {
    LOCALIZE.setLanguage(LANGUAGES.french);
    this.setState({ currentLanguage: LANGUAGES.french });
    this.props.setLanguage(LANGUAGES.french);
  };

  onSetLanguageToEnglish = () => {
    LOCALIZE.setLanguage(LANGUAGES.english);
    this.setState({ currentLanguage: LANGUAGES.english });
    this.props.setLanguage(LANGUAGES.english);
  };

  render() {
    return (
      <div>
        {this.state.currentLanguage === LANGUAGES.english && (
          <button type="button" className="btn btn-secondary" onClick={this.onSetLanguageToFrench}>
            Français
          </button>
        )}
        {this.state.currentLanguage === LANGUAGES.french && (
          <button type="button" className="btn btn-secondary" onClick={this.onSetLanguageToEnglish}>
            English
          </button>
        )}
      </div>
    );
  }
}

export { LANGUAGES };
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLanguage
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Translation);
