import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { LANGUAGES } from "../../components/commons/Translation";
import original_email_emib_sample_test_example_en from "../../images/original_email_emib_sample_test_example_en.png";
import original_email_emib_sample_test_example_fr from "../../images/original_email_emib_sample_test_example_fr.png";
import option_1_emib_sample_test_example_en from "../../images/option_1_emib_sample_test_example_en.png";
import option_1_emib_sample_test_example_fr from "../../images/option_1_emib_sample_test_example_fr.png";
import option_2_emib_sample_test_example_en from "../../images/option_2_emib_sample_test_example_en.png";
import option_2_emib_sample_test_example_fr from "../../images/option_2_emib_sample_test_example_fr.png";

const styles = {
  testImage: {
    maxWidth: 600
  }
};

class TestInstructions extends Component {
  static propTypes = {
    // Props from Redux
    currentLanguage: PropTypes.string
  };

  render() {
    const { currentLanguage } = this.props;
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.howToPage.testInstructions.title}</h2>
          <div>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.para1}</p>
          </div>
          <div>
            <h3>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.title}</h3>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.description}</p>
            <h4>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.title}</h4>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.para1}</p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.para2}</p>
            <h4>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part2.title}</h4>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part2.para1}</p>
            <h4>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.title}</h4>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para1}</p>
            <ol>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet1}</li>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet2}</li>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet3}</li>
            </ol>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para2}</p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para3}</p>
          </div>
          <div>
            <h3>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.title}</h3>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.description}</p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.title}</p>
            <h4>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Title}</h4>
            <p>
              {currentLanguage === LANGUAGES.english && (
                <img
                  src={original_email_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Title}
                  style={styles.testImage}
                />
              )}
              {currentLanguage === LANGUAGES.french && (
                <img
                  src={original_email_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Title}
                  style={styles.testImage}
                />
              )}
            </p>
            <p>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Description}
            </p>
            <h4>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part2Title}</h4>
            <p>
              {currentLanguage === LANGUAGES.english && (
                <img
                  src={option_1_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part2Title}
                  style={styles.testImage}
                />
              )}
              {currentLanguage === LANGUAGES.french && (
                <img
                  src={option_1_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part2Title}
                  style={styles.testImage}
                />
              )}
            </p>
            <h4>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part3Title}</h4>
            <p>
              {currentLanguage === LANGUAGES.english && (
                <img
                  src={option_2_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part3Title}
                  style={styles.testImage}
                />
              )}
              {currentLanguage === LANGUAGES.french && (
                <img
                  src={option_2_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part3Title}
                  style={styles.testImage}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentLanguage: state.localize.language
  };
};

export default connect(
  mapStateToProps,
  null
)(TestInstructions);
