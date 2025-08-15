import React, { useState } from "react";

const PricePerSquareFootCalculator = () => {
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [pricePerSqFt, setPricePerSqFt] = useState(null);

  const calculatePricePerSqFt = () => {
    if (!price || !area || area <= 0) {
      alert("Please enter valid values");
      return;
    }
    setPricePerSqFt((price / area).toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏠 Price Per Square Foot Calculator</h2>
      <p style={styles.desc}>
        Enter the total price and total square footage to calculate the price
        per square foot.
      </p>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Total Price ($):</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Total Area (sq.ft):</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          style={styles.input}
        />
      </div>

      <button onClick={calculatePricePerSqFt} style={styles.button}>
        Calculate
      </button>

      {pricePerSqFt !== null && (
        <div style={styles.result}>
          💰 Price Per Sq.Ft: <strong>${pricePerSqFt}</strong>
        </div>
      )}
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    background: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
  },
  desc: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#666",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ecb951ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
    textAlign: "center",
  },
};

export default PricePerSquareFootCalculator;
