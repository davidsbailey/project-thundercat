import React, { Component } from "react";
import PropTypes from "prop-types";
import EmailPreview from "./EmailPreview";
import Email from "./Email";

const styles = {
  ul: {
    borderBottom: "none"
  },
  li: {
    listStyleType: "none"
  },
  buttonList: {
    overflow: "auto",
    width: 240,
    paddingRight: 25,
    marginTop: 18,
    height: "calc(100vh - 275px)"
  },
  bodyContent: {
    overflow: "auto",
    paddingRight: 20,
    height: "calc(100vh - 241px)"
  }
};

class Inbox extends Component {
  static propTypes = {
    inboxSpecs: PropTypes.array.isRequired
  };

  state = {
    currentEmail: 0
  };

  changeEmail = index => {
    this.setState({ currentEmail: index });
  };

  render() {
    return (
      <div className="side-nav-grid">
        <nav
          className="side-nav-grid-buttons-cell"
          style={styles.buttonList}
          role="dialog"
          aria-label={"Inbox"}
        >
          <ul className="nav nav-tabs" style={styles.ul} role="menubar">
            {this.props.inboxSpecs.map(email => (
              <div key={email.id}>
                {email.id === this.state.currentEmail && (
                  <li style={styles.li} aria-current="page" role="menuitem">
                    <EmailPreview email={email} clickFunction={this.changeEmail} />
                  </li>
                )}
                {email.id !== this.state.currentEmail && (
                  <li style={styles.li} role="menuitem">
                    <EmailPreview email={email} clickFunction={this.changeEmail} />
                  </li>
                )}
              </div>
            ))}
          </ul>
        </nav>
        <div
          className="side-nav-grid-content-cell"
          style={styles.bodyContent}
          id="side-nav-grid-content-cell"
        >
          <Email email={this.props.inboxSpecs[this.state.currentEmail]} />
        </div>
      </div>
    );
  }
}

export default Inbox;
