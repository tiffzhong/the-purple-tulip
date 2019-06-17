import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setUser, getInq } from "../../dux/reducer";
import "./Admin.scss";
import axios from "axios";
class AdminViewInq extends Component {
  constructor() {
    super();
    this.state = {
      contactdate: "",
      inquiry_id: "",
      fullname: "",
      email: "",
      inquiry: "",
      date: "",
      location: "",
      details: ""
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get(`/admin/inquiry/${this.props.match.params.id}`)
        .then(res => {
          console.log(res, "res");
          return this.props.getInq(res.data);
        })
        .then(() => {
          this.setState({
            contactdate: this.props.inq.contactdate,
            inquiry_id: this.props.inq.inquiry_id,
            fullname: this.props.inq.fullname,
            email: this.props.inq.email,
            inquiry: this.props.inq.inquiry,
            date: this.props.inq.date,
            location: this.props.inq.location,
            details: this.props.inq.details
          });
        });
    }
  }
  render() {
    console.log(this.props, "ASDFJKL;");
    console.log(this.state, "ASDFJKL;");
    const {
      contactdate,
      inquiry_id,
      fullname,
      email,
      inquiry,
      date,
      location,
      details
    } = this.state;
    return (
      <>
        <Card>
          <Card.Header as="h5">Inquiry - {inquiry_id}</Card.Header>
          <Card.Body>
            <Card.Title>
              Full Name: {fullname} | Email: {email} | Contacted: {contactdate}
            </Card.Title>
            <Card.Text>Reason: {inquiry} </Card.Text>
            <Card.Text> Date: {date} </Card.Text>
            <Card.Text> Event Location: {location} </Card.Text>
            <Card.Text> Details: {details} </Card.Text>

            <Button variant="primary">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => {
  let { user, inq } = state;
  return {
    user,
    inq
  };
};

export default connect(
  mapStateToProps,
  { setUser, getInq }
)(AdminViewInq);
