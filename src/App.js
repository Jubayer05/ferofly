import React from "react";
import "./App.css";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
