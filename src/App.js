import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Default.css";
import Navbar from "./Navbar";
import Getall from "./Getall.js";
import AddData from "./AddData.js";
import Search from "./Search.js";
import Update from "./Update.js";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route path="/getall">
            <Getall />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/add-data">
            <AddData />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/">
            <h1>Welcome to the Database App!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
