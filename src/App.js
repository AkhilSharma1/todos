import React, { Component } from "react";
import "./App.css";
import { Home } from "./pages/home";
import CssBaseline from "@material-ui/core/CssBaseline";

//npm install create-react-app --global
class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Home />
      </div>
    );
  }
}

export default App;
