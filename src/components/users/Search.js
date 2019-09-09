import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearButton: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please Enter Some Text...", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { showClearButton, clearUsers } = this.props;
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClearButton && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
