import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  };

  render() {
    return (
      <span>
        {this.props.selected === false && (
          <li role="presentation">
            <button id={this.props.tabName} role="tab" aria-selected="false">
              {this.props.tabName}
            </button>
          </li>
        )}
        {this.props.selected === true && (
          <li role="presentation" className="active">
            <button id={this.props.tabName} role="tab" aria-selected="true">
              {this.props.tabName}
            </button>
          </li>
        )}
      </span>
    );
  }
}

export default Tab;