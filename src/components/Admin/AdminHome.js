import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../../dux/reducer";
import Nav1 from "./AdminNav";
import { Tabs, Tab, Button } from "react-bootstrap";
import AdminItemCreateModal from "./AdminItemCreate";
import EditAndDeleteModal from "./AdminItemEdit";
import "./Admin.scss";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, modalShowCreate: false };
  }

  componentDidMount() {
    this.props.getItems();
  }
  clicked = product_id => {
    this.props.deleteItem(product_id);
  };
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let modalCloseCreate = () => this.setState({ modalShowCreate: false });
    console.log(this.props);
    let { user } = this.props;

    const allItems = this.props.items.map(item => (
      <div class="list-group">
        <a
          href="javascript:void(0)"
          class="list-group-item list-group-item-action"
        >
          {item.product_name}
          {item.product_category}
          {item.product_id}
          {item.product_size}
          {item.product_description}
          {item.product_price}

          <Button
            variant="info"
            onClick={() => this.setState({ modalShow: true })}
          >
            Edit
          </Button>
          <Button
            variant="primary"
            onClick={() => this.clicked(item.product_id)}
          >
            Delete
          </Button>
          <EditAndDeleteModal show={this.state.modalShow} onHide={modalClose} />
        </a>
      </div>
    ));
    return (
      <div className="admin-layout">
        <Nav1 />
        <div className="admin-header">
          <h2>Hello {user}</h2>
          <Button
            variant="info"
            onClick={() => this.setState({ modalShowCreate: true })}
          >
            Add New Item
          </Button>
          <AdminItemCreateModal
            show={this.state.modalShowCreate}
            onHide={modalCloseCreate}
          />
        </div>
        <div className="inquiry-container">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="home" title="Product Items">
              {allItems}
            </Tab>
            <Tab eventKey="profile" title="Inquries">
              Inquries
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                  Cras justo odio
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Dapibus ac facilisis in
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Morbi leo risus
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Porta ac consectetur ac
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Vestibulum at eros
                </a>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Wedding Inquries">
              Wedding Inquries
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  let { user, items } = state;
  return {
    user,
    items
  };
};

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(AdminHome);
