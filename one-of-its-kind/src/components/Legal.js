// Legal.js
import React from "react";
import "./Legal.css";

const Legal = () => {
  return (
    <div className="legal-container">
      <h2>Legal Information</h2>

      {/* Terms and Conditions Section */}
      <section className="legal-section">
        <h3>Terms and Conditions</h3>
        <p>
          By using our website, you agree to the following terms and conditions.
          All purchases are subject to availability and confirmation of the
          order price. We reserve the right to refuse service to anyone for any
          reason at any time.
        </p>
      </section>

      {/* Privacy Policy Section */}
      <section className="legal-section">
        <h3>Privacy Policy</h3>
        <p>
          Your privacy is important to us. We collect, use, and protect your
          information according to our privacy policy. We will never share your
          personal data with third parties without your consent, except as
          required by law.
        </p>
      </section>

      {/* Return Policy Section */}
      <section className="legal-section">
        <h3>Return Policy</h3>
        <p>
          If you are not completely satisfied with your purchase, you may return
          the item within 30 days of receipt for a full refund or exchange. All
          items must be returned in their original condition with tags attached.
        </p>
      </section>

      {/* Cookie Policy Section */}
      <section className="legal-section">
        <h3>Cookie Policy</h3>
        <p>
          Our website uses cookies to enhance your browsing experience. By
          continuing to use our site, you agree to our cookie policy. You can
          adjust your cookie settings in your browser at any time.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="legal-section">
        <h3>Contact Information</h3>
        <p>
          For any legal inquiries, please contact us at{" "}
          <a href="mailto:legal@oneofitskind.co.za">legal@oneofitskind.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Legal;
