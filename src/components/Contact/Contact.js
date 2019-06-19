import React, { Component } from "react";
import "./Contact.scss";
import axios from "axios";
import moment from "moment";
import NavBarContact from "../NavBars/NavBarContact";
import { Link } from "react-router-dom";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contactdate: moment().format("L"),
      fullname: "",
      email: "",
      inquiry: "",
      date: "",
      location: "",
      details: "",
      checked: false
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  order = () => {
    console.log("order is running");
    const {
      contactdate,
      fullname,
      email,
      inquiry,
      date,
      location,
      details,
      checked
    } = this.state;
    axios
      .post("/api/email/order", {
        contactdate,
        fullname,
        email,
        inquiry,
        date,
        location,
        details,
        checked
      })
      .then((window.location.pathname = "/confirmation"))
      .catch(error => error, "error in order method");
  };

  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    const { fullname, email, inquiry, date, location, details } = this.state;
    console.log(this.state);
    return (
      <div className="contact">
        <NavBarContact />
        {/* <div className="container-overlay" /> */}
        <div className="contact-container">
          <p>Contact me to place an order/delivery or inquire for an event.</p>
          <p>
            If you are looking to contact me for a wedding consultation, please
            fill out this <Link to="/services/wedding">form</Link>.
          </p>
          <form onSubmit={event => this.onSubmit(event)}>
            <label>Your Name:</label>
            <input
              name="fullname"
              type="text"
              value={fullname}
              onChange={event => this.handleChange(event)}
            />
            <label>Email:</label>
            <input
              name="email"
              type="text"
              value={email}
              onChange={event => this.handleChange(event)}
            />
            <label> Inquiry (order/delivery, corporate event, other):</label>
            <input
              name="inquiry"
              type="text"
              value={inquiry}
              onChange={event => this.handleChange(event)}
            />
            <label>Event Date:</label>
            <input
              name="date"
              type="text"
              value={date}
              onChange={event => this.handleChange(event)}
            />
            <label>Location:</label>
            <input
              name="location"
              type="text"
              value={location}
              onChange={event => this.handleChange(event)}
            />
            <label>Other Details You'd Like to Add:</label>
            <textarea
              //   placeholder="Other Details"
              name="details"
              type="text"
              value={details}
              onChange={event => this.handleChange(event)}
            />
            <button
              onClick={() => {
                this.order(fullname, email, inquiry, date, location, details);
              }}
            >
              Submit
            </button>
          </form>
          <div className="text-container">
            <h6>If you prefer direct contact:</h6>

            <p>
              email:{" "}
              <a href="mailto:ThePurpleTulip.inc@gmail.com">
                ThePurpleTulip.inc@gmail.com
              </a>{" "}
              | text: 408-872-2972
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
