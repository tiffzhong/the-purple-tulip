import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../../dux/reducer";
import Nav1 from "./AdminNav";
import { Tabs, Tab, Button } from "react-bootstrap";
import AdminItemCreateModal from "./AdminItemCreate";
import "./Admin.scss";
import { Link } from "react-router-dom";

class AdminHome extends Component {
  previousLocation = this.props.location;
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      modalShowCreate: false
    };
  }

  componentDidMount() {
    this.props.getItems();
  }
  clicked = id => {
    this.props.deleteItem(id);
    window.location.reload();
  };
  redirect = () => {
    window.location.pathname = "/admin/home";
  };

  render() {
    let modalCloseCreate = () => this.setState({ modalShowCreate: false });
    console.log(this.props);
    let { user } = this.props;

    const allItems =
      this.props.items.length > 0 &&
      this.props.items.map(item => (
        <div class="list-group">
          <a
            href="javascript:void(0)"
            class="list-group-item list-group-item-action"
          >
            {item.id}
            {item.product_name}
            {item.product_size}
            {item.product_category}
            {item.product_price}
            {item.product_description}

            <Link to={`/admin/item/${item.id}`}>Edit</Link>
            {/* <ModalRoute
              path={`/admin/home/${item.id}`}
              parentPath={"/admin/home"}
              component={EditAndDeleteModal}
            /> */}
            {/* <EditAndDeleteModal
              show={this.state.modalShow}
              onHide={modalClose}
              redirect={this.redirect}
              id={item.id}
              product_name={item.product_name}
              product_size={item.product_size}
              product_category={item.product_category}
              product_price={item.product_price}
              product_description={item.product_description}
              product_image={item.product_image}
            /> */}
            <Button variant="primary" onClick={() => this.clicked(item.id)}>
              Delete
            </Button>
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
            redirect={this.redirect}
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
