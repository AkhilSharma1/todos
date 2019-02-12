import React, { Component } from 'react'
import "./App.css";
import { Home } from "./pages/home";


//npm install create-react-app --global
class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
