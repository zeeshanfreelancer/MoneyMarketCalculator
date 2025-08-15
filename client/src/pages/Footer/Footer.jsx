import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Finance</h4>
          <ul>
            <li>Compound Interest Calculator</li>
            <li>CAGR Calculator</li>
            <li>Margin Calculator</li>
            <li>Salary to Hourly Calculator</li>
            <li>Simple Interest Calculator</li>
            <li>All Finance Calculators...</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Home & Garden</h4>
          <ul>
            <li>Cubic Feet Calculator</li>
            <li>Cubic Yards Calculator</li>
            <li>Gravel Calculator</li>
            <li>Mulch Calculator</li>
            <li>Square Feet Calculator</li>
            <li>All Construction Calculators...</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Cooking</h4>
          <ul>
            <li>Cups to Grams</li>
            <li>Grams to Cups</li>
            <li>Grams to Tablespoons</li>
            <li>Grams to Teaspoons</li>
            <li>mL to Grams</li>
            <li>All Cooking Calculators...</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>Articles</li>
            <li>About The Calculator Site</li>
            <li>Advertise With Us</li>
            <li>Privacy & Cookie Use</li>
            <li>Terms and Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025, Hazell Industries</p>
        <p>Hazell Industries Ltd, 124 City Road, London. EC1V 2NX</p>
      </div>
    </footer>
  );
};

export default Footer;
