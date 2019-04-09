import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LOCALIZE from "../../text_resources";
import EditEmail from "./EditEmail";
import EditTask from "./EditTask";
import { Modal } from "react-bootstrap";
import { ACTION_TYPE, EDIT_MODE } from "./constants";
import { addEmail, addTask } from "../../modules/EmibInboxRedux";

const styles = {
  icon: {
    float: "left",
    marginTop: 14,
    marginRight: 8
  },
  dialogHeaderText: {
    float: "left",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  modalHeader: {
    backgroundColor: "#00565E",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: "10px 10px 0px 0px",
    paddingTop: 0,
    paddingBottom: 0
  },
  closeButton: {
    backgroundColor: "transparent",
    float: "right"
  }
};

class EditActionDialog extends Component {
  static propTypes = {
    emailId: PropTypes.number.isRequired,
    emailSubject: PropTypes.string,
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    actionType: PropTypes.oneOf(Object.keys(ACTION_TYPE)).isRequired,
    editMode: PropTypes.oneOf(Object.keys(EDIT_MODE)).isRequired,
    // Provided from Redux.
    addEmail: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired
  };

  state = {
    action: {}
  };

  handleSave = () => {
    if (this.props.actionType === ACTION_TYPE.email) {
      this.props.addEmail(this.props.emailId, this.state.action);
    } else if (this.props.actionType === ACTION_TYPE.task) {
      this.props.addTask(this.props.emailId, this.state.action);
    }
    this.setState({ action: {} });
    this.props.handleClose();
  };

  // updatedAction is the PropType shape actionShape and represents a single action a candidate takes on an email
  editAction = updatedAction => {
    this.setState({ action: updatedAction });
  };

  render() {
    const { showDialog, handleClose, actionType, editMode } = this.props;
    const closeButton = (
      <button onClick={handleClose} style={styles.closeButton}>
        X
      </button>
    );
    return (
      <div>
        <Modal show={showDialog} onHide={handleClose}>
          <div>
            <Modal.Header style={styles.modalHeader}>
              {
                <div style={styles.title}>
                  {actionType === ACTION_TYPE.email && (
                    <div>
                      <i style={styles.icon} className="fas fa-envelope" />
                      <h3 style={styles.dialogHeaderText}>
                        {editMode === EDIT_MODE.create &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.addEmail}
                        {editMode === EDIT_MODE.update &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.editEmail}
                      </h3>
                      {closeButton}
                    </div>
                  )}
                  {actionType === ACTION_TYPE.task && (
                    <div>
                      <i style={styles.icon} className="fas fa-tasks" />
                      <h3 style={styles.dialogHeaderText}>
                        {editMode === EDIT_MODE.create &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.addTask}
                        {editMode === EDIT_MODE.update &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.editTask}
                      </h3>
                      {closeButton}
                    </div>
                  )}
                </div>
              }
            </Modal.Header>
            <Modal.Body>
              {actionType === ACTION_TYPE.email && <EditEmail onChange={this.editAction} />}
              {actionType === ACTION_TYPE.task && (
                <EditTask emailId={this.props.emailId + 1} emailSubject={this.props.emailSubject} />
              )}
            </Modal.Body>
            <Modal.Footer>
              <div>
                <div>
                  <button
                    id="unit-test-email-response-button"
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleSave}
                  >
                    {LOCALIZE.emibTest.inboxPage.editActionDialog.save}
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    );
  }
}

export { EditActionDialog as UnconnectedEditActionDialog };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addEmail,
      addTask
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(EditActionDialog);
