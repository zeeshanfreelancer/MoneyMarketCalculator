import React, { useState } from "react";

const MarginCalculator = () => {
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [margin, setMargin] = useState(null);

  const calculateMargin = () => {
    if (!costPrice || !sellingPrice) {
      alert("Please enter both cost price and selling price.");
      return;
    }

    const profit = sellingPrice - costPrice;
    const marginValue = (profit / sellingPrice) * 100;
    setMargin(marginValue.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Margin Calculator</h2>
      <div style={styles.formGroup}>
        <label>Cost Price ($)</label>
        <input
          type="number"
          value={costPrice}
          onChange={(e) => setCostPrice(parseFloat(e.target.value) || "")}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Selling Price ($)</label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(parseFloat(e.target.value) || "")}
          style={styles.input}
        />
      </div>
      <button onClick={calculateMargin} style={styles.button}>
        Calculate Margin
      </button>

      {margin !== null && (
        <div style={styles.result}>
          <h3>Profit Margin: {margin}%</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#ffa600ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e0ffe0",
    borderRadius: "5px",
    textAlign: "center",
    color: "#006400",
  },
};

export default MarginCalculator;
