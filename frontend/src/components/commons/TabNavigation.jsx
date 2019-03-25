import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const styles = {
  tabContainer: {
    order: 1,
    textAlign: "left",
    width: "100%"
  },
  bootstrapNav: {
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    borderBottom: "none"
  },
  afterNav: {
    //this replaces the .bootstrap-tabs > .nav:after
    content: "",
    backgroundColor: "white",
    border: "1px solid #00565e",
    borderBottomColor: "transparent"
  },
  tabContent: {
    display: "block",
    WebkitTransition: "opacity 0.15s linear",
    OTransition: "opacity 0.15s linear",
    transition: "opacity 0.15s linear"
  }
};

class TabNavigation extends Component {
  static propTypes = {
    tabSpecs: PropTypes.array.isRequired,
    currentTab: PropTypes.number.isRequired,
    menuName: PropTypes.string.isRequired,
    style: PropTypes.object
  };

  state = {
    currentTab: this.props.currentTab,
    currentBody: this.props.tabSpecs[this.props.currentTab].body
  };

  selectTab(id) {
    this.setState({ currentTab: id, currentBody: this.props.tabSpecs[id].body });
  }

  render() {
    return (
      <div style={styles.tabContainer}>
        <nav aria-label={this.props.menuName} role="dialog">
          <ul role="menubar" className="nav nav-tabs" style={styles.bootstrapNav}>
            {this.props.tabSpecs.map((tab, key) => (
              <span key={tab.id} onClick={() => this.selectTab(tab.id)}>
                <Tab tabName={tab.tabName} selected={tab.id === this.state.currentTab} />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </ul>
        </nav>
        <div style={styles.afterNav} />
        <div style={this.props.style}>
          <div style={styles.tabContent}>{this.state.currentBody}</div>
        </div>
      </div>
    );
  }
}

export default TabNavigation;
