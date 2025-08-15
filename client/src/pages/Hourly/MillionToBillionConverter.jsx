import React, { useState } from "react";

const MillionToBillionConverter = () => {
  const [million, setMillion] = useState("");
  const [billion, setBillion] = useState("");

  const handleMillionChange = (e) => {
    const value = e.target.value;
    setMillion(value);
    if (value && !isNaN(value)) {
      setBillion((value / 1000).toFixed(3));
    } else {
      setBillion("");
    }
  };

  const handleBillionChange = (e) => {
    const value = e.target.value;
    setBillion(value);
    if (value && !isNaN(value)) {
      setMillion((value * 1000).toFixed(3));
    } else {
      setMillion("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", fontFamily: "Arial" }}>
      <h2>Million to Billion Converter</h2>
      <p>Convert between millions and billions easily.</p>

      <div style={{ marginBottom: "10px" }}>
        <label>Millions: </label>
        <input
          type="number"
          value={million}
          onChange={handleMillionChange}
          placeholder="Enter value in millions"
          style={{ padding: "5px", width: "100%" }}
        />
      </div>

      <div>
        <label>Billions: </label>
        <input
          type="number"
          value={billion}
          onChange={handleBillionChange}
          placeholder="Enter value in billions"
          style={{ padding: "5px", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default MillionToBillionConverter;
