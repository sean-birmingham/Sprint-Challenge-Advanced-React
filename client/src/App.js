import React, { Component } from 'react';
import axios from "axios";
import PlayersList from "./components/PlayersList";
import './App.css';

class App extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data)
        this.setState({ ...this.state, players: res.data })
      })
      .catch(err => console.log("error ", err))
  }

  render() {
    return (
      <div className="App">
        <h1>Players</h1>
        <PlayersList players={this.state.players} />
      </div>
    )
  }
}

export default App;
