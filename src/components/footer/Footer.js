import React from "react";

const Footer = () => {



  return (
      <div className="footer"
      >
      <div className="footer-copyright">
          <div>
        <span className="footer-text">
        Copyright © 2019 United Oversea Bank Limited Co.
        </span>
        <span className="footer-separator"> | </span>
        <span className="footer-text"> Reg. No. XXXX12345 All Rights Reserved.</span>
      </div>
      </div>

      <div className="footer-help">
        <span className="footer-text">
        FAQ
        </span>
        <span className="footer-separator"> | </span>
        <span className="footer-text"> Terms & Conditions</span>
        <span className="footer-separator"> | </span>
        <span className="footer-text"> Privacy & Security</span>
        <span className="footer-separator"> | </span>
        <span className="footer-text"> Legal Notices</span>

      </div>
      </div>
  );
};

export default Footer;
