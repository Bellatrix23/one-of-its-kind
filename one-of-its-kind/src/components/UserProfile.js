import React, { useState } from "react";
import "./UserProfile.css";

// UserProfile component, accepts props for authentication status and logout handling
const UserProfile = ({ isLoggedIn, setIsLoggedIn, handleLogout }) => {
  // State for storing the uploaded profile photo
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Function to handle user logout and update state
  const handleProfileLogout = () => {
    setIsLoggedIn(false);
    handleLogout();
  };

  // Function to handle profile photo upload and preview
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    // Main container for the user profile section
    <div className="user-profile">
      {/* Heading welcoming the user */}
      <h2>Welcome Back, Fashionista!</h2>
      {/* Profile header section containing photo and logout button */}
      <div className="profile-header">
        {/* Profile photo section */}
        <div className="profile-photo">
          {profilePhoto ? (
            // Display uploaded profile photo
            <img src={profilePhoto} alt="Profile" className="photo-preview" />
          ) : (
            // Placeholder when no photo is uploaded
            <div className="photo-placeholder">Add Photo</div>
          )}
          {/* Label for uploading profile photo */}
          <label htmlFor="photo-upload" className="upload-label">
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="upload-input"
            />
            {/* Icon or button for triggering photo upload */}
            <span className="upload-button">📷</span>
          </label>
        </div>
        {/* Button to log out of the profile */}
        <button onClick={handleProfileLogout} className="logout-button">
          Logout
        </button>
      </div>
      {/* Container for different sections within the profile */}
      <div className="profile-sections">
        {/* Section for user activity */}
        <section className="profile-section">
          <h3>My Activity</h3>
          <p>Check out your latest activity and updates.</p>
        </section>
        {/* Section for purchase history */}
        <section className="profile-section">
          <h3>Purchases</h3>
          <p>View your recent purchases and order history.</p>
        </section>
        {/* Section for account settings */}
        <section className="profile-section">
          <h3>Settings</h3>
          <p>Manage your account settings and preferences.</p>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
