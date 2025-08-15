import React, { useState } from "react";
import "./loanCalculator.css";

export default function CashBackCalculator() {
  const [currency, setCurrency] = useState("$");
  const [purchaseAmount, setPurchaseAmount] = useState(15);
  const [cashBackPercent, setCashBackPercent] = useState(1);
  const [cashBackLimit, setCashBackLimit] = useState(0);
  const [cashBack, setCashBack] = useState(0);

  const calculateCashBack = () => {
    let cashBackValue = (purchaseAmount * cashBackPercent) / 100;

    // If there’s a limit, cap the cashback
    if (cashBackLimit > 0 && cashBackValue > cashBackLimit) {
      cashBackValue = cashBackLimit;
    }

    setCashBack(cashBackValue.toFixed(2));
  };

  return (
    <div className="calculator-card">
      <h2>Cash Back Calculator</h2>

      {/* Currency Selector */}
      <div className="currencyBg">
        {["$", "€", "£", "₹", "¥"].map((cur) => (
          <button
            key={cur}
            className={`currencybtns ${currency === cur ? "active" : ""}`}
            onClick={() => setCurrency(cur)}
          >
            {cur}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="input-group">
        <label>Purchase Amount:</label>
        <input
          className="inputdata"
          type="number"
          value={purchaseAmount}
          onChange={(e) => setPurchaseAmount(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Cash Back (%):</label>
        <input
          className="inputdata"
          type="number"
          value={cashBackPercent}
          onChange={(e) => setCashBackPercent(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Cash Back Limit:</label>
        <input
          className="inputdata"
          type="number"
          value={cashBackLimit}
          onChange={(e) => setCashBackLimit(parseFloat(e.target.value))}
        />
      </div>

      <button className="calc-btn" onClick={calculateCashBack}>
        Calculate
      </button>

      {cashBack > 0 && (
        <div className="allresults">
          <h1>Result</h1>
          <h6>
            Cash Back: <b>{currency + cashBack}</b>
          </h6>
        </div>
      )}
    </div>
  );
}
