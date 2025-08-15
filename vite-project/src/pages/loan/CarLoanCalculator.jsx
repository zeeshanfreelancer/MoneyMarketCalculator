import React, { useState } from "react";
import "./loanCalculator.css";

export default function CarLoanCalculator() {
  const [currency, setCurrency] = useState("$");
  const [carValue, setCarValue] = useState(15000);
  const [interestRate, setInterestRate] = useState(5.4);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [balloon, setBalloon] = useState(0);
  const [startDate, setStartDate] = useState("2025-08-01");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [activeBtn, setActiveBtn] = useState("btn3");

  const calculateCarLoan = () => {
    let loanAmount = parseFloat(carValue) - parseFloat(deposit);
    if (loanAmount <= 0) loanAmount = 0;

    const totalMonths = parseInt(years) * 12 + parseInt(months);
    const monthlyRate = interestRate / 100 / 12;

    // Monthly payment formula with balloon (if applicable)
    const monthlyPaymentAmount =
      (loanAmount - balloon / Math.pow(1 + monthlyRate, totalMonths)) *
      (monthlyRate / (1 - Math.pow(1 + monthlyRate, -totalMonths)));

    let balance = loanAmount;
    let currentDate = new Date(startDate);
    let totalPaidInterest = 0;
    let table = [];

    for (let i = 1; i <= totalMonths; i++) {
      let interestPayment = balance * monthlyRate;
      let principalPayment = monthlyPaymentAmount - interestPayment;
      balance -= principalPayment;
      if (i === totalMonths && balloon > 0) {
        balance -= parseFloat(balloon);
      }
      if (balance < 0) balance = 0;

      table.push({
        month: i,
        date: currentDate.toLocaleDateString(),
        payment: monthlyPaymentAmount.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: balance.toFixed(2),
      });

      totalPaidInterest += interestPayment;
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    setMonthlyPayment(monthlyPaymentAmount.toFixed(2));
    setTotalInterest(totalPaidInterest.toFixed(2));
    setSchedule(table);
  };

  return (
    <div className="calculator-card">
      <h2>Car Loan Payoff Calculator</h2>

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
        <label>Car Value:</label>
        <input
          className="inputdata"
          type="number"
          value={carValue}
          onChange={(e) => setCarValue(e.target.value)}
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
        <label>Initial Deposit:</label>
        <input
          className="inputdata"
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Balloon Payment at End:</label>
        <input
          className="inputdata"
          type="number"
          value={balloon}
          onChange={(e) => setBalloon(e.target.value)}
        />
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

      <button className="calc-btn" onClick={calculateCarLoan}>
        Calculate
      </button>

      {monthlyPayment > 0 && (
        <div className="allresults">
          <h1>Results</h1>
          <h6>
            Monthly Payment: <b>{currency + monthlyPayment}</b>
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
