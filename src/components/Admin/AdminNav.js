import React, { Component } from "react";
import "./Admin.scss";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../dux/reducer";
import { Link } from "react-router-dom";
class AdminNav extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }
  componentDidMount() {
    axios.get("/admin/user").then(response => {
      this.props.setUser(response.data.user.username);
    });
  }
  logout = () => {
    axios.post("/admin/logout").then(() => {
      this.props.setUser(null);
    });
    window.location.pathname = "/admin";
  };
  render() {
    // console.log(this.props);
    return (
      <>
        <div>
          <ul>
            <Link to="/admin/home">home</Link>
            <Link to="/admin/upload">upload item</Link>

            <Link to="/">visit website</Link>
            <li onClick={() => this.logout()}>logout</li>
          </ul>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  let { user } = state;

  return {
    user
  };
}

export default connect(
  mapStateToProps,
  { setUser }
)(AdminNav);
