import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setUser, getWedding } from "../../dux/reducer";
import "./Admin.scss";
import axios from "axios";
class AdminViewWed extends Component {
  constructor() {
    super();
    this.state = {
      weddingcontactdate: "",
      fullnames: "",
      weddingemail: "",
      weddingphone: "",
      weddingdate: "",
      ceremonyinfo: "",
      receptioninfo: "",
      guestcount: "",
      bridalparty: "",
      colorscheme: "",
      needpersonal: "",
      needceremony: "",
      needreception: "",
      needcakeflowers: "",
      needother: "",
      envision: "",
      weddingstyle: "",
      budget: "",
      pinterest: "",
      extradetails: ""
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get(`/admin/wedding/${this.props.match.params.id}`)
        .then(res => {
          console.log(res, "res");
          return this.props.getWedding(res.data);
        })
        .then(() => {
          this.setState({
            weddingcontactdate: this.props.wedding.weddingcontactdate,
            fullnames: this.props.wedding.fullnames,
            weddingemail: this.props.wedding.weddingemail,
            weddingphone: this.props.wedding.weddingphone,
            weddingdate: this.props.wedding.weddingdate,
            ceremonyinfo: this.props.wedding.ceremonyinfo,
            receptioninfo: this.props.wedding.receptioninfo,
            guestcount: this.props.wedding.guestcount,
            bridalparty: this.props.wedding.bridalparty,
            colorscheme: this.props.wedding.colorscheme,
            needpersonal: this.props.wedding.needpersonal,
            needceremony: this.props.wedding.needceremony,
            needreception: this.props.wedding.needreception,
            needcakeflowers: this.props.wedding.needcakeflowers,
            needother: this.props.wedding.needother,
            envision: this.props.wedding.envision,
            weddingstyle: this.props.wedding.weddingstyle,
            budget: this.props.wedding.budget,
            pinterest: this.props.wedding.pinterest,
            extradetails: this.props.wedding.extradetails
          });
        });
    }
  }
  render() {
    console.log(this.props, "WEDDING");
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
    return (
      <>
        <Card>
          <Card.Header as="h5">Inquiry - {}</Card.Header>
          <Card.Body>
            <Card.Title>
              Full Names: {fullnames} | Email: {weddingemail} | Phone:{" "}
              {weddingphone} | Contact Date: {weddingcontactdate}
            </Card.Title>
            <Card.Title>Wedding Info </Card.Title>
            <Card.Text> Wedding Date: {weddingdate} </Card.Text>
            <Card.Text>Ceremony Info: {ceremonyinfo} </Card.Text>
            <Card.Text> Reception Info: {receptioninfo} </Card.Text>
            <Card.Text> Number of Guests: {guestcount}</Card.Text>
            <Card.Text>Number of Bridal Party: {bridalparty}</Card.Text>
            <Card.Text>Color Scheme: {colorscheme}</Card.Text>
            <Card.Title>Wedding Flowers </Card.Title>
            <Card.Text>
              Needs bouquets, boutonnieres, corsages: {needpersonal}
            </Card.Text>
            <Card.Text>Needs Ceremony decor: {needceremony}</Card.Text>
            <Card.Text>Needs Reception decor: {needreception}</Card.Text>
            <Card.Text>Needs Cake decor: {needcakeflowers}</Card.Text>
            <Card.Text>Other Needs: {needother}</Card.Text>
            <Card.Text>
              Envision of Flowers( Tables, bars, pews, altar, restrooms, etc):
              {envision}
            </Card.Text>
            <Card.Text>Wedding Style: {weddingstyle}</Card.Text>
            <Card.Text>Budget: {budget}</Card.Text>
            <Card.Text>Pinterest boards/Inspirations: {pinterest}</Card.Text>
            <Card.Text>Other Details: {extradetails}</Card.Text>

            <Button variant="primary">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => {
  let { user, wedding } = state;
  return {
    user,
    wedding
  };
};

export default connect(
  mapStateToProps,
  { setUser, getWedding }
)(AdminViewWed);
