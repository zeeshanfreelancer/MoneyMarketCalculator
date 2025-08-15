import React, { useState } from "react";

const SquareFootageCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [result, setResult] = useState(null);

  const calculateSquareFootage = () => {
    if (length && width) {
      setResult(length * width);
    } else {
      setResult(null);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>How to Calculate Square Footage - Step by Step</h2>
      <p>
        Whether you're shopping for carpet or planning a landscaping or home improvement project, 
        square footage is a key metric to understand. So, let's go through the steps involved in calculating it.
      </p>
      <p>
        <strong>How to calculate the sq.ft of a room - Summary:</strong>
      </p>
      <ol>
        <li>Measure the length and width of the room in feet.</li>
        <li>Multiply the length and width together to get the square footage.</li>
        <li>
          Example: For a room measuring <strong>10 feet wide</strong> by <strong>14 feet long</strong>, 
          your calculation is <strong>10 × 14 = 140 square feet</strong>.
        </li>
      </ol>

      <hr style={{ margin: "20px 0" }} />

      <h3>Square Footage Calculator</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Length (ft)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{ padding: "8px", flex: 1 }}
        />
        <input
          type="number"
          placeholder="Width (ft)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          style={{ padding: "8px", flex: 1 }}
        />
      </div>
      <button
        onClick={calculateSquareFootage}
        style={{
          backgroundColor: "#018e99",
          color: "white",
          padding: "10px 15px",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px"
        }}
      >
        Calculate
      </button>

      {result !== null && (
        <p style={{ marginTop: "15px", fontSize: "18px" }}>
          📏 Square Footage: <strong>{result} sq.ft</strong>
        </p>
      )}
    </div>
  );
};

export default SquareFootageCalculator;
