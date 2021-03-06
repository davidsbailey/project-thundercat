import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";
import LOCALIZE from "../../text_resources";
import EditActionDialog from "./EditActionDialog";
import { ACTION_TYPE, EDIT_MODE, actionShape } from "./constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTask } from "../../modules/EmibInboxRedux";

const styles = {
  taskStyle: {
    marginTop: 18
  },
  hr: {
    margin: "16px 0 16px 0"
  },
  editButton: {
    float: "right"
  }
};

class ActionViewTask extends Component {
  static propTypes = {
    action: actionShape,
    emailSubject: PropTypes.string,
    actionId: PropTypes.number.isRequired,
    emailId: PropTypes.number.isRequired,
    // Props from Redux
    deleteTask: PropTypes.func
  };

  state = {
    showTaskDialog: false
  };

  showTaskDialog = () => {
    this.setState({ showTaskDialog: true });
  };

  closeTaskDialog = () => {
    this.setState({ showTaskDialog: false });
  };

  render() {
    const action = this.props.action;
    return (
      <div aria-label={LOCALIZE.ariaLabel.taskDetails}>
        <div tabIndex="0">
          <h6 style={styles.taskStyle}>{LOCALIZE.emibTest.inboxPage.taskContent.task}</h6>
          <p>{action.task}</p>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <h6>{LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}</h6>
          <p>{action.reasonsForAction}</p>
        </div>
        <hr style={styles.hr} />
        <div aria-label={LOCALIZE.ariaLabel.taskOptions}>
          <button
            className="btn btn-primary"
            style={styles.editButton}
            onClick={this.showTaskDialog}
          >
            {LOCALIZE.emibTest.inboxPage.emailCommons.editButton}
          </button>
          <button
            id="unit-test-view-task-delete-button"
            className="btn btn-danger"
            onClick={() => this.props.deleteTask(this.props.emailId, this.props.actionId)}
          >
            {LOCALIZE.emibTest.inboxPage.emailCommons.deleteButton}
          </button>
        </div>
        <div>
          <EditActionDialog
            emailId={this.props.emailId}
            emailSubject={this.props.emailSubject}
            showDialog={this.state.showTaskDialog}
            handleClose={this.closeTaskDialog}
            actionType={ACTION_TYPE.task}
            editMode={EDIT_MODE.update}
            action={action}
            actionId={this.props.actionId}
          />
        </div>
      </div>
    );
  }
}

export { ActionViewTask as UnconnectedActionViewTask };
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteTask
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(ActionViewTask);
