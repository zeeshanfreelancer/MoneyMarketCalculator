import React, { useState } from "react";
import "./loanCalculator.css";

export default function BoatLoanCalculator() {
  const [currency, setCurrency] = useState("$");
  const [loanAmount, setLoanAmount] = useState(30000);
  const [interestRate, setInterestRate] = useState(6);
  const [years, setYears] = useState(7);
  const [months, setMonths] = useState(0);
  const [startDate, setStartDate] = useState("2025-08-02");
  const [monthlyExtra, setMonthlyExtra] = useState(0);
  const [oneTimeExtra, setOneTimeExtra] = useState(0);
  const [balloonPayment, setBalloonPayment] = useState(0);
  const [balloonDate, setBalloonDate] = useState("2027-08-01");
  const [schedule, setSchedule] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [activeBtn, setActiveBtn] = useState("btn4");

  const calculateBoatLoan = () => {
    let balance = parseFloat(loanAmount);
    const totalMonths = parseInt(years) * 12 + parseInt(months);
    const monthlyRate = interestRate / 100 / 12;

    const baseMonthlyPayment =
      (balance * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

    let payment = baseMonthlyPayment + parseFloat(monthlyExtra);
    let table = [];
    let currentDate = new Date(startDate);
    let totalPaidInterest = 0;

    for (let i = 1; i <= totalMonths; i++) {
      let interestPayment = balance * monthlyRate;
      let principalPayment = payment - interestPayment;

      if (i === 1 && oneTimeExtra > 0) {
        principalPayment += parseFloat(oneTimeExtra);
      }

      balance -= principalPayment;

      // Apply balloon payment at set date
      const formattedDate = currentDate.toISOString().split("T")[0];
      if (formattedDate === balloonDate && balloonPayment > 0) {
        balance -= parseFloat(balloonPayment);
      }

      if (balance <= 0) balance = 0;

      table.push({
        month: i,
        date: currentDate.toLocaleDateString(),
        payment: payment.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: balance.toFixed(2),
      });

      totalPaidInterest += interestPayment;
      currentDate.setMonth(currentDate.getMonth() + 1);
      if (balance <= 0) break;
    }

    setMonthlyPayment(baseMonthlyPayment.toFixed(2));
    setTotalInterest(totalPaidInterest.toFixed(2));
    setSchedule(table);
  };

  return (
    <div className="calculator-card">
      <h2>Boat Loan Calculator</h2>

      {/* Tabs */}
      <div style={{ display: "flex", flexDirection: "1 column" }}>
        <div className="calbtnback">
          <a href="/CarLoanCalculator">
            <button
              className={`calbtns ${activeBtn === "btn3" ? "active" : ""}`}
              onClick={() => setActiveBtn("btn3")}
            >
              Car Loan
            </button>
          </a>
        </div>
        <div className="calbtnback">
          <a href="/BoatLoanCalculator">
            <button
              className={`calbtns ${activeBtn === "btn4" ? "active" : ""}`}
              onClick={() => setActiveBtn("btn4")}
            >
              Boat Loan
            </button>
          </a>
        </div>
      </div>

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
        <label>Boat Loan Amount:</label>
        <input
          className="inputdata"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (%):</label>
        <input
          className="inputdata"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Loan Term:</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            className="inputdata"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Years"
          />
          <input
            className="inputdata"
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="Months"
          />
        </div>
      </div>
      <div className="input-group">
        <label>Loan Start Date:</label>
        <input
          className="inputdata"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Additional Monthly Payment:</label>
        <input
          className="inputdata"
          type="number"
          value={monthlyExtra}
          onChange={(e) => setMonthlyExtra(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>One-Time Extra Payment:</label>
        <input
          className="inputdata"
          type="number"
          value={oneTimeExtra}
          onChange={(e) => setOneTimeExtra(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Balloon Payment:</label>
        <input
          className="inputdata"
          type="number"
          value={balloonPayment}
          onChange={(e) => setBalloonPayment(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Balloon Payment Date:</label>
        <input
          className="inputdata"
          type="date"
          value={balloonDate}
          onChange={(e) => setBalloonDate(e.target.value)}
        />
      </div>

      <button className="calc-btn" onClick={calculateBoatLoan}>
        Calculate
      </button>

      {monthlyPayment > 0 && (
        <div className="allresults">
          <h1>Results</h1>
          <h6>
            Base Monthly Payment: <b>{currency + monthlyPayment}</b>
          </h6>
          <h6>
            Total Interest Paid: <b>{currency + totalInterest}</b>
          </h6>

          <h6 style={{ marginTop: "20px" }}>Amortization Schedule:</h6>
          <table style={{ width: "100%", marginTop: "10px", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Month</th>
                <th>Date</th>
                <th>Payment</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index}>
                  <td>{row.month}</td>
                  <td>{row.date}</td>
                  <td>{currency + row.payment}</td>
                  <td>{currency + row.principal}</td>
                  <td>{currency + row.interest}</td>
                  <td>{currency + row.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
