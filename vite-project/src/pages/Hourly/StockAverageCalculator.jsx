import React, { useState } from "react";

const StockAverageCalculator = () => {
  const [entries, setEntries] = useState([{ price: "", quantity: "" }]);
  const [average, setAverage] = useState(null);

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  const addRow = () => {
    setEntries([...entries, { price: "", quantity: "" }]);
  };

  const calculateAverage = () => {
    let totalCost = 0;
    let totalShares = 0;

    entries.forEach((entry) => {
      const price = parseFloat(entry.price) || 0;
      const quantity = parseFloat(entry.quantity) || 0;
      totalCost += price * quantity;
      totalShares += quantity;
    });

    if (totalShares > 0) {
      setAverage((totalCost / totalShares).toFixed(2));
    } else {
      setAverage(null);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", fontFamily: "Arial" }}>
      <h2>📊 Stock Average Calculator</h2>

      {entries.map((entry, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <input
            type="number"
            placeholder="Price per share"
            value={entry.price}
            onChange={(e) =>
              handleChange(index, "price", e.target.value)
            }
            style={{ flex: 1, padding: "8px" }}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={entry.quantity}
            onChange={(e) =>
              handleChange(index, "quantity", e.target.value)
            }
            style={{ flex: 1, padding: "8px" }}
          />
        </div>
      ))}

      <button
        onClick={addRow}
        style={{
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        ➕ Add Purchase
      </button>

      <br />

      <button
        onClick={calculateAverage}
        style={{
          padding: "10px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Calculate Average
      </button>

      {average !== null && (
        <h3 style={{ marginTop: "20px" }}>
          📈 Average Price per Share: ${average}
        </h3>
      )}
    </div>
  );
};

export default StockAverageCalculator;
