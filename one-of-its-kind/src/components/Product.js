import React from "react";
import "./Product.css";

const Product = ({ name, description, price, highestBid, image }) => {
  return (
    <div className="product-card">
      {/* Display product image */}
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">Starting Price: R{price}</p> {/* Display price */}
      <p className="highest-bid">Current Highest Bid: R{highestBid}</p>{" "}
      {/* Display bid */}
      <div className="button-container">
        <button className="explore-button">Bid Now</button>
      </div>
    </div>
  );
};

export default Product;
