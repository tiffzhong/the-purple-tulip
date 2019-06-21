import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser, getItems, getInqs, getWeddings } from "../../dux/reducer";
import Nav1 from "./AdminNav";
import { Tabs, Tab, Button, Table } from "react-bootstrap";
import AdminItemCreateModal from "./AdminItemCreate";
import "./Admin.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminItemEdit from "./AdminItemEdit";
import AdminViewInq from "./AdminViewInq";
import AdminViewWed from "./AdminViewWed";
class AdminHome extends Component {
  previousLocation = this.props.location;
  constructor(props) {
    super(props);
    this.state = {
      modalShowCreate: false,
      key: "items",
      itemClicked: [],
      modalShowEdit: false,
      modalShowInq: false,
      inqClicked: [],
      wedClicked: [],
      modalShowWed: false
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
    this.props.getWeddings();
  }
  clickedItem = item => {
    this.setState({
      modalShowEdit: true,
      itemClicked: item
    });
  };

  clickedInq = inq => {
    this.setState({
      modalShowInq: true,
      inqClicked: inq
    });
  };
  clickedWed = wed => {
    this.setState({
      wedClicked: wed,
      modalShowWed: true
    });
  };
  redirect = () => {
    window.location.pathname = "/admin/home";
  };

  render() {
    console.log(this.props);
    let modalCloseCreate = () => this.setState({ modalShowCreate: false });
    let modalCloseEdit = () => this.setState({ modalShowEdit: false });
    let modalCloseInq = () => this.setState({ modalShowInq: false });
    let modalCloseWed = () => this.setState({ modalShowWed: false });

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
              <button
                onClick={() => {
                  this.clickedItem(item);
                }}
              >
                edit
              </button>
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
              <button
                onClick={() => {
                  this.clickedInq(inq);
                }}
              >
                view
              </button>
            </td>
          </tr>
        </tbody>
      ));

    const allWeddings =
      this.props.weddings.length > 0 &&
      this.props.weddings.map(wedding => (
        <tbody>
          <tr>
            <td>{wedding.weddingcontactdate}</td>
            <td>{wedding.fullnames}</td>
            <td>{wedding.weddingemail}</td>
            <td>{wedding.weddingphone}</td>
            <td>{wedding.weddingdate}</td>
            <td>
              <button onClick={() => this.clickedWed(wedding)}>view</button>
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
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Contact Date</th>
                        <th>Names</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Wedding Date</th>
                        <th />
                      </tr>
                    </thead>
                    {allWeddings}
                  </Table>
                </Tab>
              </Tabs>

              <AdminItemEdit
                show={this.state.modalShowEdit}
                onHide={modalCloseEdit}
                selecteditem={this.state.itemClicked}
              />
              <AdminViewInq
                show={this.state.modalShowInq}
                onHide={modalCloseInq}
                selectedinq={this.state.inqClicked}
              />
              <AdminViewWed
                show={this.state.modalShowWed}
                onHide={modalCloseWed}
                selectedwed={this.state.wedClicked}
              />
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
  let { user, items, inqs, weddings } = state;
  return {
    user,
    items,
    inqs,
    weddings
  };
};

export default connect(
  mapStateToProps,
  { getItems, setUser, getInqs, getWeddings }
)(AdminHome);
