import React, { Component } from "react";
import PropTypes from "prop-types";

export class User extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;
    return <div>{name}</div>;
  }
}

export default User;
