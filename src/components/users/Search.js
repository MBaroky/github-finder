import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, showClearButton, setAlert }) => {
  const [text, setText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter Some Text...", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const onChange = e => setText(e.target.value);
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          onChange={onChange}
          value={text}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
