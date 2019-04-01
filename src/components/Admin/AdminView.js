import React, { Component } from "react";
import axios from "axios";

class AdminView extends Component {
  constructor() {
    this.state = {
      user: null,
      inq: []
    };
  }
  componentDidMount() {
    this.inquiryData();
  }

  inquiryData = () => {
    axios.get("/admin/inquiries").then(res => {
      this.setState({ inq: res.data });
    });
  };

  render() {
    const allData = this.state.inq.map(i => {
      return (
        <div className="inquiry-container">
          #|date|inquiry_id|fullname|email|inquiry| location|details
          {i.id}
          {i.date}
          {i.inquiry_id}
          {i.fullname}
          {i.email}
          {i.inquiry}
          {i.location}
          {i.details}
        </div>
      );
    });
    return <div />;
  }
}

export default AdminView;
