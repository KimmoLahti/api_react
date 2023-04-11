import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Default.css";

function Getall() {
  const [items, setItems] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(
    () => {
      const fetchItems = async () => {
        const response = await axios.get("http://localhost:3001/api/getall");
        setItems(response.data);
      };
      if (showData) {
        fetchItems();
      }
    },
    [showData]
  );

  const handleClick = () => {
    setShowData(true);
  };

  const handleDelete = async id => {
    await axios.delete(`http://localhost:3001/api/delete/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleClick}>
        Show All Data
      </button>
      {showData &&
        <div className="data">
          {items.map(item =>
            <div key={item._id} className="item-container">
              <div className="item-info">
                <h3 className="item-title">
                  {item.fname} {item.lname}
                </h3>
                <p className="item-details">
                  City: {item.city} | Phone: {item.phone} | ID: {item._id}
                </p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item._id)}
              >
                X
              </button>
            </div>
          )}
        </div>}
    </div>
  );
}

export default Getall;
