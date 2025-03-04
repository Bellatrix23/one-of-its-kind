import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./LandingPage.css";
import logo from "../assets/LogoTransparent.png";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialise the navigate function

  // Function to navigate to the shop page
  const goToShop = () => {
    navigate("/shop"); // Navigate to the /shop route
  };

  return (
    <section className="landing-page">
      {/* Logo Display */}
      <img src={logo} alt="One of its Kind Logo" className="landing-logo" />
      {/* Main Heading */}
      <h2>Originally unique. Originally sustainable.</h2>
      {/* Introduction Paragraphs */}
      <p>
        Welcome to One of its Kind—where fashion meets exclusivity and
        eco-consciousness! Here, every piece you see is the only one of its
        kind, crafted with care and made available in just one size per style.
        No mass production, no duplicates—just a unique look that’s all yours.
      </p>
      <p>
        Our 24-hour auctions are your chance to own a masterpiece, whether it's
        a bold statement jacket, handcrafted shoes, or that perfect
        one-of-a-kind accessory. Bid to win, pick your size, and be the proud
        owner of something truly special. The best part? Unsold sizes don’t go
        to waste—you can decide whether they’re recycled into new, fabulous
        designs, shared among friends, or donated to a charity of your choice.
      </p>
      <p>
        Step into a world where fashion is exclusive, sustainable, and
        impactful. Ready to find your next One of its Kind?
      </p>
      {/* Button to Explore the Collection */}
      <button className=".explore-button" onClick={goToShop}>
        Explore Our Collection
      </button>
      {/* Navigate on click */}
    </section>
  );
};

export default LandingPage;
