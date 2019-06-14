import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../../dux/reducer";
import Nav1 from "./AdminNav";
import { Tabs, Tab, Button } from "react-bootstrap";
import AdminItemCreateModal from "./AdminItemCreate";
import EditAndDeleteModal from "./AdminItemEdit";
import "./Admin.scss";
import { Link, Switch, Route, Router } from "react-router-dom";

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/admin/home/:id" component={EditAndDeleteModal} />
        </Switch>
        {isModal ? (
          <Route path="/admin/home/:id" component={EditAndDeleteModal} />
        ) : null}
      </div>
    );
  }
}

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, modalShowCreate: false };
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
    let modalClose = () => this.setState({ modalShow: false });
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

            <Link
              to={`/admin/home/${item.id}`}
              onClick={() => this.setState({ modalShow: true })}
            >
              Edit
            </Link>

            <EditAndDeleteModal
              show={this.state.modalShow}
              onHide={modalClose}
              product_item={item}
              redirect={this.redirect}
            />

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
