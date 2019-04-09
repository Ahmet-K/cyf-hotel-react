import React, { Component } from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <Bookings />
        <Restaurant />
      </div>
    );
  }
}

export default App;
