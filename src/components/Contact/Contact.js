import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      inquiry: "",
      date: "",
      location: "",
      details: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    const { fullname, email, inquiry, date, location, details } = this.state;
    return (
      <div className="contact-container">
        <section>
          <h1>Contact </h1>
          <p>
            Contact me to place an order, inquire for an event, or schedule a
            consultation.
          </p>
          <form onSubmit={event => this.onSubmit(event)}>
            <label>Your Name:</label>
            <input
              //   placeholder="Full Name"
              name="fullname"
              type="text"
              value={fullname}
              onChange={event => this.handleChange(event)}
            />
            <label>Email:</label>
            <input
              //   placeholder="Email"
              name="email"
              type="text"
              value={email}
              onChange={event => this.handleChange(event)}
            />
            <label> Inquiry (delivery, corporate event, wedding, etc.):</label>
            <input
              //   placeholder="Inquiry Type (ordering, corporate event, wedding, or something else!)"
              name="inquiry"
              type="text"
              value={inquiry}
              onChange={event => this.handleChange(event)}
            />
            <label>Event Date:</label>
            <input
              //   placeholder="Event Date"
              name="date"
              type="text"
              value={date}
              onChange={event => this.handleChange(event)}
            />
            <label>Location:</label>
            <input
              //   placeholder="Location"
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
            <button>Submit </button>
          </form>
        </section>
        <div className="text-container">
          Follow us on{"  "}
          <a href="https://www.instagram.com/thepurpletulipinc/">
            <i class="fab fa-instagram" />
          </a>{" "}
          | Email:{" "}
          <a href="mailto:ThePurpleTulip.inc@gmail.com">
            ThePurpleTulip.inc@gmail.com
          </a>{" "}
          | Text: 408-872-2972
        </div>
      </div>
    );
  }
}
export default Contact;
