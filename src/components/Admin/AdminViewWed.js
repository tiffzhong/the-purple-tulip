import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { setUser, deleteWed } from "../../dux/reducer";
import "./Admin.scss";

class AdminViewWed extends Component {
  constructor(props) {
    super(props);
  }
  deleteWedClicked = id => {
    this.props.deleteWed(id);
    this.props.onHide();
    window.location.reload();
  };
  render() {
    console.log(this.props, "WEDDING");

    const { selectedwed } = this.props;
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
                <h1>Wedding Inq</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Full Names: {selectedwed.fullnames} | Email:
              {selectedwed.weddingemail} | Phone: {selectedwed.weddingphone} |
              Contact Date: {selectedwed.weddingcontactdate}
              Wedding Info Wedding Date: {selectedwed.weddingdate}
              Ceremony Info: {selectedwed.ceremonyinfo}
              Reception Info: {selectedwed.receptioninfo}
              Number of Guests: {selectedwed.guestcount}
              Number of Bridal Party: {selectedwed.bridalparty}
              Color Scheme: {selectedwed.colorscheme}
              Wedding Flowers Needs bouquets, boutonnieres, corsages:
              {selectedwed.needpersonal}
              Needs Ceremony decor: {selectedwed.needceremony}
              Needs Reception decor: {selectedwed.needreception}
              Needs Cake decor: {selectedwed.needcakeflowers}
              Other Needs: {selectedwed.needother}
              Envision of Flowers( Tables, bars, pews, altar, restrooms, etc):
              {selectedwed.envision}
              Wedding Style: {selectedwed.weddingstyle}
              Budget: {selectedwed.budget}
              Pinterest boards/Inspirations: {selectedwed.pinterest}
              Other Details: {selectedwed.extradetails}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
              <Button onClick={() => this.deleteWedClicked(selectedwed.id)}>
                Delete Wed Inq
              </Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  let { user, wedding } = state;
  return {
    user,
    wedding
  };
};

export default connect(
  mapStateToProps,
  { setUser, deleteWed }
)(AdminViewWed);
