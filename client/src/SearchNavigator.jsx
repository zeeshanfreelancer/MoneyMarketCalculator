import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages/home/home.css"

const SearchNavigator = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // List of all available routes and labels
  const components = [
    { label: "Finance", path: "/finance" },
    { label: "Compound Interest Calculator", path: "/CompoundInterestCalculator" },
    { label: "Simple Interest Calculator", path: "/SimpleInterestCalculator" },
    { label: "Daily Compound Calculator", path: "/DailyCompoundCalculator" },
    { label: "Forex Compound Calculator", path: "/ForexCompoundCalculator" },
    { label: "APY Calculator", path: "/APYCalculator" },
    { label: "CAGR Calculator", path: "/CAGRCalculator" },
    { label: "Future Value Calculator", path: "/FutureValueCalculator" },
    { label: "Savings Calculator", path: "/SavingsCalculator" },
    { label: "Investment Calculator", path: "/InvestmentCalculator" },
    { label: "How Long to Save Calculator", path: "/HowLongToSaveCalculator" },
    { label: "How Long Will Money Last", path: "/HowLongWillMoneyLast" },
    { label: "IRR Calculator", path: "/IRRCalculator" },
    { label: "Money Market Calculator", path: "/MoneyMarketCalculator" },
    { label: "Savings Goal Calculator", path: "/SavingsGoalCalculator" },
    { label: "SIP Calculator", path: "/SIPCalculator" },
    { label: "Stock Average Calculator", path: "/StockAverageCalculator" },
    { label: "Hourly to Salary Calculator", path: "/HourlyToSalaryCalculator" },
    { label: "Salary to Hourly Calculator", path: "/SalaryToHourlyCalculator" },
    { label: "Time and Half Calculator", path: "/TimeAndHalfCalculator" },
    { label: "Overtime Calculator", path: "/OvertimeCalculator" },
    { label: "Loan Calculator", path: "/LoanCalculator" },
    { label: "Loan Payoff Calculator", path: "/LoanPayOff" },
    { label: "Amortization Calculator", path: "/AmortizationCalculator" },
    { label: "Boat Loan Calculator", path: "/BoatLoanCalculator" },
    { label: "Car Loan Calculator", path: "/CarLoanCalculator" },
    { label: "Cash Back Calculator", path: "/CashBackCalculator" },
    { label: "Credit Card Payoff Calculator", path: "/CreditCardPayoffCalculator" },
    { label: "How much is a Trillion", path: "/HowmuchTrillion" },
    { label: "Walk a Mile", path: "/WalkAMile" },
    { label: "Steps to Miles", path: "/StepsToMiles" },
    { label: "Square Footage Calculator", path: "/SquareFootageCalculator" },
    { label: "Margin Calculator", path: "/MarginCalculator" },
    { label: "Price Per Square Foot Calculator", path: "/PricePerSquareFootCalculator" },
    { label: "Million to Billion Converter", path: "/MillionToBillionConverter" }
  ];

  const filtered = components.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    setQuery("");
    navigate(path);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search calculators..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='search-input'
      />
      {query && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "5px",
            background: "#fff",
            border: "1px solid #ccc",
            position: "absolute",
            width: "100%",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto"
          }}
        >
          {filtered.length > 0 ? (
            filtered.map((c, index) => (
              <li
                key={index}
                onClick={() => handleSelect(c.path)}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee"
                }}
              >
                {c.label}
              </li>
            ))
          ) : (
            <li style={{ padding: "5px" }}>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchNavigator;
