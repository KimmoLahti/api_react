import React, { useState } from "react";
import axios from "axios";
import "./Default.css";

function AddData() {
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    city: "",
    phone: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/add", formState);
      alert("Data added successfully!");
      setFormState({ fname: "", lname: "", city: "", phone: "" });
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Error adding data");
    }
  };

  return (
    <div className="add-data-container">
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="fname"
            value={formState.fname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lname"
            value={formState.lname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formState.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}

export default AddData;
