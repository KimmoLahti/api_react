import React from "react";
import Getall from "./Getall.js";
import "./Default.css";
import AddData from "./AddData.js";
import Search from "./Search.js";
import Update from "./Update.js";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-header">Database App</h1>
      <div className="app-content">
        <Getall />
        <Search />
        <AddData />

        <Update />
      </div>
    </div>
  );
}

export default App;
