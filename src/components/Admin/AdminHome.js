import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser, getItems, getInqs } from "../../dux/reducer";
import Nav1 from "./AdminNav";
import {
  Tabs,
  Tab,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Table
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
    this.props.getInqs();
  }

  redirect = () => {
    window.location.pathname = "/admin/home";
  };

  render() {
    console.log(this.props);
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

    const allInqs =
      this.props.inqs.length > 0 &&
      this.props.inqs.map(inq => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Reason</th>
              <th>Reason</th>
              <th>Reason</th>
              <th>Reason</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{inq.inquiry_id}</td>
              <td>{inq.fullname}</td>
              <td>{inq.email}</td>
              <td>{inq.inquiry}</td>
              <td>{inq.date}</td>
              <td>{inq.email}</td>
              <td>{inq.location}</td>
              <td>{inq.details}</td>
            </tr>
          </tbody>
        </Table>
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
                  <div> {allInqs}</div>
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
  let { user, items, inqs } = state;
  return {
    user,
    items,
    inqs
  };
};

export default connect(
  mapStateToProps,
  { getItems, setUser, getInqs }
)(AdminHome);
