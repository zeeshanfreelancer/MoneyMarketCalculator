import React, { useState } from "react";
import "./loanCalculator.css";

export default function LoanPayoffCalculator() {
  const [currency, setCurrency] = useState("$");
  const [loanBalance, setLoanBalance] = useState(20000);
  const [interestRate, setInterestRate] = useState(5);
  const [paymentChoice, setPaymentChoice] = useState("regular");
  const [monthlyPayment, setMonthlyPayment] = useState(500);
  const [nextPaymentDate, setNextPaymentDate] = useState("2025-07-31");
  const [repaymentIncrease, setRepaymentIncrease] = useState(0);
  const [monthsToPayoff, setMonthsToPayoff] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [activeBtn, setActiveBtn] = useState("btn2");

  const calculatePayoff = () => {
    let balance = parseFloat(loanBalance);
    const monthlyRate = interestRate / 100 / 12;
    let monthly = parseFloat(monthlyPayment);
    let totalInterestPaid = 0;
    let months = 0;

    while (balance > 0 && months < 1000) {
      let interest = balance * monthlyRate;
      let principal = monthly - interest;
      if (principal <= 0) break;
      balance -= principal;
      totalInterestPaid += interest;
      months++;

      // apply yearly repayment increase
      if (repaymentIncrease > 0 && months % 12 === 0) {
        monthly += monthly * (repaymentIncrease / 100);
      }
    }

    setMonthsToPayoff(months);
    setTotalInterest(totalInterestPaid.toFixed(2));
  };

  return (
    <div className="calculator-card">
      <h2>Loan Payoff Calculator</h2>

      {/* Tabs */}
      <div style={{ display: "flex", flexDirection: "1 column" }}>
        <div className="calbtnback">
          <a href="/LoanCalculator">
            <button
              className={`calbtns ${activeBtn === "btn1" ? "active" : ""}`}
              onClick={() => setActiveBtn("btn1")}
            >
              Loan Calculator
            </button>
          </a>
        </div>
        <div className="calbtnback">
          <a href="/LoanPayOff">
            <button
              className={`calbtns ${activeBtn === "btn2" ? "active" : ""}`}
              onClick={() => setActiveBtn("btn2")}
            >
              Loan Payoff
            </button>
          </a>
        </div>
        <div className="calbtnback">
          <a href="/AmortizationCalculator">
            <button
              className={`calbtns ${activeBtn === "btn3" ? "active" : ""}`}
              onClick={() => setActiveBtn("btn3")}
            >
              Amortization Calc
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
        <label>Loan Balance:</label>
        <input
          className="inputdata"
          type="number"
          value={loanBalance}
          onChange={(e) => setLoanBalance(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Annual Interest Rate (%):</label>
        <input
          className="inputdata"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Payment Calculation Choice:</label>
        <select
          className="inputdata"
          value={paymentChoice}
          onChange={(e) => setPaymentChoice(e.target.value)}
        >
          <option value="regular">Pay Regular Amount</option>
          <option value="time">Pay Off Within Time</option>
        </select>
      </div>

      <div className="input-group">
        <label>Monthly Payment You Are Making:</label>
        <input
          className="inputdata"
          type="number"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Date of Next Payment:</label>
        <input
          className="inputdata"
          type="date"
          value={nextPaymentDate}
          onChange={(e) => setNextPaymentDate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Annual Repayment Increase (%):</label>
        <input
          className="inputdata"
          type="number"
          value={repaymentIncrease}
          onChange={(e) => setRepaymentIncrease(e.target.value)}
        />
      </div>

      <button className="calc-btn" onClick={calculatePayoff}>
        Calculate
      </button>

      {monthsToPayoff > 0 && (
        <div className="allresults">
          <h1>Results</h1>
          <h6>
            Months to Payoff: <b>{monthsToPayoff} months</b>
          </h6>
          <h6>
            Total Interest Paid: <b>{currency + totalInterest}</b>
          </h6>
        </div>
      )}
    </div>
  );
}
