import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./css/lib/aurora.min.css";
import "./css/cat-theme.css";
import Status from "./Status";
import Home from "./Home";
import Prototype from "./Prototype";
import Emib from "./components/eMIB/Emib";
import Translation from "./components/commons/Translation";
import LOCALIZE from "./text_resources";
import psc_header from "./images/psc_header.png";

const PATH = {
  home: "/",
  prototype: "/prototype",
  status: "/status",
  emibSampleTest: "/emib-sample"
};

const styles = {
  navBar: {
    paddingBottom: 105
  },
  tabs: {
    paddingTop: 68
  },
  pscImage: {
    position: "fixed",
    top: 20,
    left: 20
  },
  languageButton: {
    position: "fixed",
    right: 15,
    top: 15
  }
};

//Check if the home page is selected
const isHomeActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.home;
};

//Check if the Prototype page is selected even when you start the eMIB Sample Test
const isPrototypeActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  if (pathname === PATH.prototype || pathname === PATH.emibSampleTest) {
    return pathname === PATH.prototype || pathname === PATH.emibSampleTest;
  }
};

//Check if the Status page is selected
const isStatusActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.status;
};

class App extends Component {
  static propTypes = {
    // Props from Redux
    currentLanguage: PropTypes.string
  };

  render() {
    return (
      <Router>
        <div>
          <nav
            aria-label={LOCALIZE.ariaLabel.mainMenu}
            style={styles.navBar}
            className="fixed-top bg-white navbar navbar-expand"
            role="dialog"
          >
            <div style={styles.pscImage} id="psc-image">
              <img src={psc_header} alt={LOCALIZE.commons.psc} />
            </div>
            <div style={styles.tabs} className="fixed-top nav nav-tabs">
              <ul id="navigation-tabs" className="mx-auto nav-site nav nav-tabs nav-item">
                <li className="bg-white">
                  <NavLink
                    aria-current="page"
                    isActive={isHomeActive}
                    className="nav-link"
                    to={PATH.home}
                  >
                    {LOCALIZE.mainTabs.homeTabTitle}
                  </NavLink>
                </li>
                <li className="bg-white">
                  <NavLink
                    aria-current="page"
                    isActive={isPrototypeActive}
                    className="nav-link"
                    to={PATH.prototype}
                  >
                    {LOCALIZE.mainTabs.prototypeTabTitle}
                  </NavLink>
                </li>
                <li className="bg-white">
                  <NavLink
                    aria-current="page"
                    isActive={isStatusActive}
                    className="nav-link"
                    to={PATH.status}
                  >
                    {LOCALIZE.mainTabs.statusTabTitle}
                  </NavLink>
                </li>
              </ul>
              <div aria-label={LOCALIZE.ariaLabel.languageToggleBtn} style={styles.languageButton}>
                <Translation />
              </div>
            </div>
          </nav>
          <Route exact path={PATH.home} component={Home} />
          <Route path={PATH.prototype} component={Prototype} />
          <Route path={PATH.status} component={Status} />
          <Route path={PATH.emibSampleTest} component={Emib} />
        </div>
      </Router>
    );
  }
}

export { PATH };

const mapStateToProps = (state, ownProps) => {
  return {
    currentLanguage: state.localize.language
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
