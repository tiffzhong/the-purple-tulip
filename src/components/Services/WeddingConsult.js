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
      weddingcontactdate: moment().format("L"),
      fullnames: "",
      weddingemail: "",
      weddingphone: "",
      weddingdate: "",
      ceremonyinfo: "",
      receptioninfo: "",
      guestcount: "",
      bridalparty: "",
      colorscheme: "",
      needpersonal: false,
      needceremony: false,
      needreception: false,
      needcakeflowers: false,
      needother: "",
      envision: "",
      weddingstyle: "",
      budget: "",
      pinterest: "",
      extradetails: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  order = () => {
    const {
      weddingcontactdate,
      fullnames,
      weddingemail,
      weddingphone,
      weddingdate,
      ceremonyinfo,
      receptioninfo,
      guestcount,
      bridalparty,
      colorscheme,
      needpersonal,
      needceremony,
      needreception,
      needcakeflowers,
      needother,
      envision,
      weddingstyle,
      budget,
      pinterest,
      extradetails
    } = this.state;
    axios
      .post("/api/wedding", {
        weddingcontactdate,
        fullnames,
        weddingemail,
        weddingphone,
        weddingdate,
        ceremonyinfo,
        receptioninfo,
        guestcount,
        bridalparty,
        colorscheme,
        needpersonal,
        needceremony,
        needreception,
        needcakeflowers,
        needother,
        envision,
        weddingstyle,
        budget,
        pinterest,
        extradetails
      })
      .then((window.location.pathname = "/confirmation"))
      .catch(error => error, "error in wedding method");
  };

  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    const {
      weddingcontactdate,
      fullnames,
      weddingemail,
      weddingphone,
      weddingdate,
      ceremonyinfo,
      receptioninfo,
      guestcount,
      bridalparty,
      colorscheme,
      needpersonal,
      needceremony,
      needreception,
      needcakeflowers,
      needother,
      envision,
      weddingstyle,
      budget,
      pinterest,
      extradetails
    } = this.state;
    console.log(this.state);
    return (
      <div className="wedding-consult">
        <NavBarServices />
        <div className="wedding-container">
          <div className="image-container">
            <h1>Wedding Consultation Questionnaire</h1>
            <img src={wedding} alt="wedding" />
          </div>
          <h4>
            Feel free to leave any questions blank if you would like to discuss
            more about them or if they are not applicable to your request!
          </h4>
          <form onSubmit={event => this.onSubmit(event)}>
            <div className="info-container">
              <h2>Your Contact Info</h2>
              <label> You and Partner’s Full Name:</label>
              <input
                name="fullnames"
                type="text"
                value={fullnames}
                onChange={event => this.handleChange(event)}
              />
              <label>Email:</label>
              <input
                name="weddingemail"
                type="text"
                value={weddingemail}
                onChange={event => this.handleChange(event)}
              />
              <label> Phone:</label>
              <input
                name="weddingphone"
                type="text"
                value={weddingphone}
                onChange={event => this.handleChange(event)}
              />
            </div>
            <div className="info-container">
              <h2>Wedding Info</h2>
              <label>Wedding Date:</label>
              <input
                name="weddingdate"
                type="text"
                value={weddingdate}
                onChange={event => this.handleChange(event)}
              />

              <label>Ceremony Venue & Start + End Time:</label>
              <textarea
                name="ceremonyinfo"
                type="text"
                value={ceremonyinfo}
                onChange={event => this.handleChange(event)}
              />
              <label>Reception Venue & Start + End Time:</label>
              <textarea
                name="receptioninfo"
                type="text"
                value={receptioninfo}
                onChange={event => this.handleChange(event)}
              />
              <label>Number of Guests Expected:</label>
              <input
                name="guestcount"
                type="text"
                value={guestcount}
                onChange={event => this.handleChange(event)}
              />
              <label>
                Number of people in bridal party (bridesmaids, grooms, flower
                girls, etc):
              </label>
              <input
                name="bridalparty"
                type="text"
                value={bridalparty}
                onChange={event => this.handleChange(event)}
              />
              <label>Wedding Color Scheme:</label>
              <input
                name="colorscheme"
                type="text"
                value={colorscheme}
                onChange={event => this.handleChange(event)}
              />
            </div>
            <div className="info-container">
              <h2>Wedding Flowers</h2>
              <label>
                What types of flower designs would you like us to create - check
                all that apply:
              </label>
              <div className="input-container">
                <input
                  name="needpersonal"
                  type="checkbox"
                  value={needpersonal}
                  onChange={event => this.handleChange(event)}
                />
                <p>Personal flowers (bouquets, boutonnieres, corsages, etc)</p>
              </div>
              <div className="input-container">
                <input
                  name="needceremony"
                  type="checkbox"
                  value={needceremony}
                  onChange={event => this.handleChange(event)}
                />
                <p>Ceremony decor</p>
              </div>
              <div className="input-container">
                <input
                  name="needreception"
                  type="checkbox"
                  value={needreception}
                  onChange={event => this.handleChange(event)}
                />
                <p>Reception decor</p>
              </div>
              <div className="input-container">
                <input
                  name="needcakeflowers"
                  type="checkbox"
                  value={needcakeflowers}
                  onChange={event => this.handleChange(event)}
                />
                <p>Cake flowers</p>
              </div>
              <label>
                Any other events where would you like flowers? (Cocktail hour,
                etc):
              </label>
              <input
                name="needother"
                type="text"
                value={needother}
                onChange={event => this.handleChange(event)}
              />
              <label>
                Where do you envision flowers at your wedding? (Tables, bars,
                pews, altar, restrooms, etc):
              </label>
              <textarea
                name="envision"
                type="text"
                value={envision}
                onChange={event => this.handleChange(event)}
              />
              <label>
                What best describes your wedding style? Some description ides:
                <p>
                  Romantic, Exotic, Eclectic, Bold, Clean, Contemporary, Soft,
                  Traditional, Formal, Artsy, Dynamic, Semi-formal, Classic,
                  Simple, or Casual
                </p>
              </label>
              <textarea
                name="weddingstyle"
                type="text"
                value={weddingstyle}
                onChange={event => this.handleChange(event)}
              />

              <label>Approximate total budget for flowers:</label>
              <input
                name="budget"
                type="text"
                value={budget}
                onChange={event => this.handleChange(event)}
              />
              <label>Links to Pinterest boards or other sites:</label>
              <textarea
                name="pinterest"
                type="text"
                value={pinterest}
                onChange={event => this.handleChange(event)}
              />
              <label>Any other details you would like me to know?</label>
              <textarea
                name="extradetails"
                type="text"
                value={extradetails}
                onChange={event => this.handleChange(event)}
              />
            </div>

            <h4>Please allow up to 48 hours for a reply via email.</h4>
          </form>
          <button
            onClick={() => {
              this.order(
                weddingcontactdate,
                fullnames,
                weddingemail,
                weddingphone,
                weddingdate,
                ceremonyinfo,
                receptioninfo,
                guestcount,
                bridalparty,
                colorscheme,
                needpersonal,
                needceremony,
                needreception,
                needcakeflowers,
                needother,
                envision,
                weddingstyle,
                budget,
                pinterest,
                extradetails
              );
            }}
          >
            Submit
          </button>
          <div className="text-container">
            <h5>If you prefer direct contact:</h5>

            <h5>
              email:{" "}
              <a href="mailto:ThePurpleTulip.inc@gmail.com">
                ThePurpleTulip.inc@gmail.com
              </a>{" "}
              | text: 408-872-2972
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default WeddingConsult;
