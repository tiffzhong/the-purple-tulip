import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser, getItems, getInqs } from "../../dux/reducer";
import Nav1 from "./AdminNav";
import { Tabs, Tab, Button, Table } from "react-bootstrap";
import AdminItemCreateModal from "./AdminItemCreate";
import "./Admin.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class AdminHome extends Component {
  previousLocation = this.props.location;
  constructor(props) {
    super(props);
    this.state = {
      modalShowCreate: false,
      key: "items"
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
        <tbody>
          <tr>
            <td>
              <img src={item.product_image} width={50} />
            </td>
            <td>{item.product_name}</td>
            <td>{item.product_description} </td>
            <td>{item.product_size}</td>
            <td>{item.product_category}</td>
            <td>{item.product_price}</td>
            <td>
              <Link to={`/admin/item/${item.id}`}>Edit</Link>
            </td>
          </tr>
        </tbody>
      ));

    const allInqs =
      this.props.inqs.length > 0 &&
      this.props.inqs.map(inq => (
        <tbody>
          <tr>
            <td>{inq.contactdate}</td>
            <td>{inq.inquiry_id}</td>
            <td>{inq.fullname}</td>
            <td>{inq.email}</td>
            <td>
              <Link to={`/admin/inq/${inq.id}`}>more</Link>
            </td>
          </tr>
        </tbody>
      ));
    return (
      <>
        {user ? (
          <div className="admin-layout">
            <Nav1 />

            <div className="admin-header">
              <h2>Hello {user}!</h2>
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
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
                id="controlled-tab-example"
              >
                <Tab eventKey="items" title="Product Items">
                  <div className="item-container">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th />
                          <th>Name</th>
                          <th>Description</th>
                          <th>Size</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th />
                        </tr>
                      </thead>
                      {allItems}
                    </Table>
                  </div>
                </Tab>
                <Tab eventKey="inq" title="Inquries">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Contact Date</th>
                        <th>Inquiry ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th />
                      </tr>
                    </thead>
                    {allInqs}
                  </Table>
                </Tab>
                <Tab eventKey="wedding" title="Wedding Inquries">
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
