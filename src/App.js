import React from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  // set Alert
  setAlert = (text, type) => {
    this.setState({ alert: { text, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  //Clear Users from stage
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading, alert } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          {alert !== null && <Alert alert={this.state.alert} />}
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClearButton={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
