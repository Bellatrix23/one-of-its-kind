import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Product from "./components/Product";
import WelcomeModal from "./components/WelcomeModal";
import UserProfile from "./components/UserProfile";
import Legal from "./components/Legal";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import InterestCalculator from "./components/InterestCalculator";
import "./App.css";

// Main App component
function App() {
  const location = useLocation(); // Hook to get the current location object
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
  const [showModal, setShowModal] = useState(true); // State to control the visibility of the welcome modal

  // Check if the current page is the home page
  const isHomePage = location.pathname === "/";

  // Function to handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("User has logged out");
  };

  // Function to handle login, hides the modal after login
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowModal(false);
  };

  // Function to handle sign-up, hides the modal after sign-up
  const handleSignUp = () => {
    setIsLoggedIn(true);
    setShowModal(false);
  };

  // Product objects for the shop page
  const products = [
    {
      name: "Hand-crafted Link Choker With Peace Heart Earrings",
      description:
        "This stunning choker set features delicate hand-crafted links with a matching pair of peace heart earrings.",
      price: 1800,
      highestBid: 2250,
      image: require("./assets/chockerset.jpg"),
    },
    {
      name: "Light Large-Weave Arm Slip in Jersey",
      description:
        "Wrap yourself in comfort and style with this light large-weave jersey.",
      price: 3000,
      highestBid: 3300,
      image: require("./assets/Frontloopjersey.jpg"),
    },
    {
      name: "Black & White Plaid School Girl Skirt",
      description:
        "Turn heads with this charming black and white plaid school girl skirt.",
      price: 900,
      highestBid: 1200,
      image: require("./assets/Plaidskirt.jpg"),
    },
  ];

  return (
    // Main container of the app
    <div className="App">
      {/* Header component, passing login status and logout handler */}
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {/* Routes for different pages of the app */}
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        {/* Route for the user profile page */}
        <Route
          path="/profile"
          element={
            <UserProfile
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              handleLogout={handleLogout}
            />
          }
        />
        {/* Route for the shop page, displaying product listings */}
        <Route
          path="/shop"
          element={
            <div>
              <h2 className="product-heading">Our Gems Currently on Bid</h2>
              <div className="product-list">
                {products.map((product, index) => (
                  <Product
                    key={index}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    highestBid={product.highestBid}
                    image={product.image}
                  />
                ))}
              </div>
            </div>
          }
        />
        {/* Route for the legal information page */}
        <Route path="/legal" element={<Legal />} />
        {/* Route for the login page, passing the login handler */}
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        {/* Route for the sign-up page, passing the sign-up handler */}
        <Route
          path="/signup"
          element={<SignUp handleSignUp={handleSignUp} />}
        />
        {/* Route for the interest calculator page */}
        <Route path="/interest-calculator" element={<InterestCalculator />} />
      </Routes>

      {/* Display the Welcome Modal only on the home page */}
      {isHomePage && showModal && (
        <WelcomeModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
        />
      )}
    </div>
  );
}

export default App;
