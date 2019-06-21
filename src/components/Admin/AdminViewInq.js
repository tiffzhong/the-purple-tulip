import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { setUser, deleteInq } from "../../dux/reducer";
import "./Admin.scss";
class AdminViewInq extends Component {
  constructor(props) {
    super(props);
  }

  deleteInqClicked = id => {
    this.props.deleteInq(id);
    this.props.onHide();
    window.location.reload();
  };

  render() {
    console.log(this.props, "ASDFJKL;");
    const { selectedinq } = this.props;
    return (
      <>
        {this.props.show ? (
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Full Name: {selectedinq.fullname} | Email: {selectedinq.email} |
                Contacted: {selectedinq.contactdate}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Reason: {selectedinq.inquiry}
              Date: {selectedinq.date}
              Event Location: {selectedinq.location}
              Details: {selectedinq.details}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
              <Button onClick={() => this.deleteInqClicked(selectedinq.id)}>
                Delete Inq
              </Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  let { user } = state;
  return {
    user
  };
};

export default connect(
  mapStateToProps,
  { setUser, deleteInq }
)(AdminViewInq);
