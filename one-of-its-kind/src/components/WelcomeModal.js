import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LogoTransparent.png";
import "./WelcomeModal.css";

// WelcomeModal component, handles the display of the welcome modal
const WelcomeModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate routes

  // If the modal should not be shown, render nothing
  if (!showModal) return null;

  // Function to navigate to the login page
  const handleLoginNavigate = () => {
    navigate("/login");
  };

  // Function to navigate to the sign-up page
  const handleSignUpAndNavigate = () => {
    navigate("/signup");
  };

  return (
    // Overlay for the modal background
    <div className="modal-overlay">
      {/* Main content area of the modal */}
      <div className="modal-content">
        {/* Logo displayed at the top of the modal */}
        <img src={logo} alt="One of its Kind Logo" className="modal-logo" />
        {/* Welcome message and introductory text */}
        <h2>Welcome to One of its Kind!</h2>
        <p>Your fashion journey starts here.</p>
        {/* Button to navigate to the login page */}
        <button onClick={handleLoginNavigate}>Login</button>
        {/* Button to navigate to the sign-up page */}
        <button onClick={handleSignUpAndNavigate}>Sign Up</button>
        {/* Button to close the modal */}
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default WelcomeModal;
