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
        <nav className="admin-nav">
          <Link to="/admin/home">home</Link>

          <Link to="/">visit website</Link>
          <a href="javascript:void(0)" onClick={() => this.logout()}>
            logout
          </a>
        </nav>
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
