import React from "react";
import "./GalBouquet.scss";
import { Modal, Button } from "react-bootstrap";
class BouquetModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, "modal props");
    const { selectedid } = this.props;
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
                {selectedid.product_name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <img src={selectedid.product_image} alt="product" />
              <p>
                {selectedid.product_description}
                {selectedid.product_size}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </>
    );
  }
}
export default BouquetModal;
