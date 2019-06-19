import React, { Component } from "react";
import NavBarServices from "../NavBars/NavBarServices";
import "./Services.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import wedding from "./wedding.jpg";
class WeddingConsult extends Component {
  constructor(props) {
    super(props);
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
      <div className="wedding-consult">
        <NavBarServices />
        <div className="wedding-container">
          <div className="image-container">
            <h1>Wedding Consultation Questionnaire</h1>
            <img src={wedding} alt="wedding" />
          </div>
          <p>
            Feel free to leave any questions blank if you would like to discuss
            more about them or if they are not applicable to your request!
          </p>
          <form onSubmit={event => this.onSubmit(event)}>
            <h2>Your Contact Info</h2>
            <label> You and Partner’s Full Name:</label>
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
            <label> Phone:</label>
            <input
              name="inquiry"
              type="text"
              value={inquiry}
              onChange={event => this.handleChange(event)}
            />
            <h2>Wedding Info</h2>
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
            <h2>Wedding Flowers</h2>
            <label>Other Details You'd Like to Add:</label>
            <textarea
              //   placeholder="Other Details"
              name="details"
              type="text"
              value={details}
              onChange={event => this.handleChange(event)}
            />

            <p>Please allow up to 48 hours for a reply via email.</p>
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
export default WeddingConsult;
