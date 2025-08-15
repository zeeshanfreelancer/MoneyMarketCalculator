import React, { useState } from 'react';


const StockAverageCalculator = () => {
  const [purchases, setPurchases] = useState([{ units: 0, price: 0 }]);
  const [sellPrice, setSellPrice] = useState(0);
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [result, setResult] = useState(null);

  // Add new purchase row
  const addPurchase = () => {
    setPurchases([...purchases, { units: 0, price: 0 }]);
  };

  // Remove purchase row
  const removePurchase = (index) => {
    const updated = purchases.filter((_, i) => i !== index);
    setPurchases(updated);
  };

  // Update row values
  const handlePurchaseChange = (index, field, value) => {
    const updated = [...purchases];
    updated[index][field] = parseFloat(value) || 0;
    setPurchases(updated);
  };

  // Calculate average
  const calculate = () => {
    const totalUnits = purchases.reduce((sum, p) => sum + p.units, 0);
    const totalCost = purchases.reduce((sum, p) => sum + p.units * p.price, 0);

    if (totalUnits === 0) {
      alert('Please enter at least one purchase with units > 0');
      return;
    }

    const avgPrice = totalCost / totalUnits;
    const profitLoss = sellPrice > 0 ? (sellPrice - avgPrice) * totalUnits : null;

    setResult({
      avgPrice: avgPrice.toFixed(2),
      totalUnits,
      totalCost: totalCost.toFixed(2),
      profitLoss: profitLoss !== null ? profitLoss.toFixed(2) : null
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>Stock Average Calculator</h1>

      {/* Currency Selector */}
      <label>Currency:</label>
      <div className='currencyBg1'>
        {['$', '€', '£', '₹', '¥'].map(curr => (
          <button
            key={curr}
            className={`currencybtns ${activeCurrency === curr ? 'active' : ''}`}
            onClick={() => setActiveCurrency(curr)}
          >
            {curr}
          </button>
        ))}
      </div>

      {/* Purchases Section */}
      {purchases.map((purchase, index) => (
        <div key={index} className="calculator-card">
          <h4>Purchase {index + 1}</h4>
          <label>Units:</label>
          <input
            className='inputdata'
            type="number"
            value={purchase.units}
            onChange={(e) => handlePurchaseChange(index, 'units', e.target.value)}
          />

          <label>Price per share:</label>
          <div className='inputdiv'>
            <button className='activebtnCurrency'>{activeCurrency}</button>
            <input
              className='inputdata'
              type="number"
              value={purchase.price}
              onChange={(e) => handlePurchaseChange(index, 'price', e.target.value)}
            />
          </div>

          {purchases.length > 1 && (
            <button
              style={{ backgroundColor: 'red', color: 'white', marginTop: 10 }}
              onClick={() => removePurchase(index)}
            >
              ✖ Remove
            </button>
          )}
        </div>
      ))}

      {/* Add Another Purchase */}
      <button
        className="calc-btn"
        style={{ marginBottom: 20, width: 500 }}
        onClick={addPurchase}
      >
        + Add another purchase
      </button>

      {/* Sell Price */}
      <div className="calculator-card">
        <label>Sell price:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input
            className='inputdata'
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(parseFloat(e.target.value) || 0)}
          />
        </div>
      </div>

      {/* Calculate */}
      <button className="calc-btn" style={{width: 500}} onClick={calculate}>Calculate</button>

      {/* Results */}
      {result && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 32 }}>Result</h1>
          <h6>Average Price per Share:</h6>
          <h1 style={{ color: "green", fontWeight: "bold" }}>
            {activeCurrency} {result.avgPrice}
          </h1>
          <h6>Total Units:</h6>
          <h1>{result.totalUnits}</h1>
          <h6>Total Cost:</h6>
          <h1>{activeCurrency} {Number(result.totalCost).toLocaleString()}</h1>
          {result.profitLoss !== null && (
            <>
              <h6>Profit/Loss at Sell Price:</h6>
              <h1 style={{ color: result.profitLoss >= 0 ? "blue" : "red", fontWeight: "bold" }}>
                {activeCurrency} {Number(result.profitLoss).toLocaleString()}
              </h1>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default StockAverageCalculator;
