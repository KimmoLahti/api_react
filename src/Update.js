import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleIdChange = event => {
    setId(event.target.value);
  };

  const handleFnameChange = event => {
    setFname(event.target.value);
  };

  const handleLnameChange = event => {
    setLname(event.target.value);
  };

  const handleCityChange = event => {
    setCity(event.target.value);
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/api/update/${id}`,
        {
          fname,
          lname,
          city,
          phone
        }
      );
      window.location.reload();
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-data-container">
      <form onSubmit={handleSubmit}>
        <h2>Update Data</h2>
        <label>
          ID of updatable data:
          <input type="text" value={id} onChange={handleIdChange} required />
        </label>
        <label>
          New First Name:
          <input type="text" value={fname} onChange={handleFnameChange} />
        </label>
        <label>
          New Last Name:
          <input type="text" value={lname} onChange={handleLnameChange} />
        </label>
        <label>
          New City:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <label>
          New Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
