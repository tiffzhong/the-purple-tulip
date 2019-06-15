import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser, getItems } from "../../dux/reducer";
import Nav1 from "./AdminNav";
import {
  Tabs,
  Tab,
  Button,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import AdminItemCreateModal from "./AdminItemCreate";
import "./Admin.scss";
import { Link } from "react-router-dom";
import axios from "axios";

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
    axios.get("/admin/user").then(res => {
      if (res.data.user.username) {
        this.props.setUser(res.data.user.username);
      }
    });
    this.props.getItems();
  }

  redirect = () => {
    window.location.pathname = "/admin/home";
  };

  render() {
    let modalCloseCreate = () => this.setState({ modalShowCreate: false });

    let { user } = this.props;

    const allItems =
      this.props.items.length > 0 &&
      this.props.items.map(item => (
        <Card style={{ width: "17rem" }}>
          <Card.Img
            style={{ width: "17rem", height: "17rem" }}
            variant="top"
            src={item.product_image}
            rounded
          />
          <Card.Body>
            <Card.Title>{item.product_name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{item.product_description} </ListGroupItem>
            <ListGroupItem>
              {item.product_size}, {item.product_category}, {item.product_price}
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="buttons">
            <Link to={`/admin/item/${item.id}`}>Edit</Link>
          </ListGroup>
        </Card>
      ));
    return (
      <>
        {user ? (
          <div className="admin-layout">
            <Nav1 />

            <div className="admin-header">
              <h2>Welcome back {user}!</h2>
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
                  <div className="item-container">{allItems}</div>
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
        ) : (
          <div className="error-admin">
            Admin only. <br /> <Link to="/admin">Sign In</Link>
          </div>
        )}
      </>
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
  { getItems, setUser }
)(AdminHome);
