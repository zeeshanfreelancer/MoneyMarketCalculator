import React from "react";

function WalkAMile() {
  const walkingData = [
    { age: "20 to 29 years", speed: "3 to 3.04 mph", time: "19 mins 52 seconds" },
    { age: "30 to 39 years", speed: "3 to 3.2 mph", time: "19 mins 21 seconds" },
    { age: "40 to 49 years", speed: "3.11 to 3.2 mph", time: "19 mins 1 seconds" },
    { age: "50 to 59 years", speed: "2.93 to 3.2 mph", time: "19 mins 35 seconds" },
    { age: "60 to 69 years", speed: "2.77 to 3 mph", time: "20 mins 48 seconds" },
    { age: "70 to 79 years", speed: "2.53 to 2.82 mph", time: "22 mins 26 seconds" },
    { age: "80 to 89 years", speed: "2.1 to 2.17 mph", time: "28 mins 6 seconds" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1>How Long Does it Take to Walk a Mile?</h1>
      <p>
        Typically, adults walk at a speed of 3 to 4 miles per hour, and therefore walk a mile in around 15 to 20 minutes.
        Some people will be faster or slower than this, and walking speed is influenced by age and gender, as well as
        fitness level.
      </p>
      <p>
        Whether you're planning a journey, a day out, or preparing for a sponsored walk or 10,000 step challenge, you may
        want to calculate how many minutes it takes to walk a mile. An individual's health will of course have an impact on
        how long it takes to walk a mile, but more general factors such as age, gender and pace can be accounted for in your
        planning.
      </p>
      <p>
        In this article, we'll look at how you calculate walking speed, how walking speed varies by age and how long it
        takes to walk a mile based upon age and walking speed. Let's get started.
      </p>

      <h2>How long to walk a mile by age</h2>
      <p>
        The table below shows average walking speeds by age along with the calculated time to walk a mile.
      </p>

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "10px",
          border: "1px solid #ccc"
        }}
      >
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={cellStyle}>Age</th>
            <th style={cellStyle}>Avg walking speed (mph)</th>
            <th style={cellStyle}>Avg mile time (minutes)</th>
          </tr>
        </thead>
        <tbody>
          {walkingData.map((row, index) => (
            <tr key={index}>
              <td style={cellStyle}>{row.age}</td>
              <td style={cellStyle}>{row.speed}</td>
              <td style={cellStyle}>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left"
};

export default WalkAMile;
