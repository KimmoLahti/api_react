import React, { useState } from "react";
import axios from "axios";
import "./Default.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.get(
      `http://localhost:3001/api/${searchValue}`
    );
    setSearchResult(response.data);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/api/delete/${searchResult._id}`);
    setSearchResult("");
    setSearchValue("");
    window.location.reload();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            required
            className="input"
            placeholder="Search by ID"
          />
        </label>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {searchResult &&
        <div className="data">
          <div key={searchResult._id} className="item-container">
            <div className="item-info">
              <h3 className="item-title">
                {searchResult.fname} {searchResult.lname}
              </h3>
              <p className="item-details">
                City: {searchResult.city} | Phone: {searchResult.phone} | ID:{" "}
                {searchResult._id}
              </p>
            </div>
            <button className="delete-btn" onClick={handleDelete}>
              X
            </button>
          </div>
        </div>}
    </div>
  );
}

export default Search;
