import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ ...this.state, players: res.data })
      })
      .catch(err => console.log("error ", err))
  }

  render() {
    return (
      <div className="App">
        <h1>Players</h1>
      </div>
    )
  }
}

export default App;
