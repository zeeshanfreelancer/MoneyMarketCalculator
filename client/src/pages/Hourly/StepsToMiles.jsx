import React from "react";

function StepsToMiles() {
  const walkingData = [
    { height: "5'0\"", slow: "4.22", medium: "4.59", brisk: "4.87" },
    { height: "5'1\"", slow: "4.24", medium: "4.62", brisk: "4.90" },
    { height: "5'2\"", slow: "4.27", medium: "4.65", brisk: "4.94" },
    { height: "5'3\"", slow: "4.29", medium: "4.68", brisk: "4.97" },
    { height: "5'4\"", slow: "4.32", medium: "4.71", brisk: "5.01" },
    { height: "5'5\"", slow: "4.35", medium: "4.74", brisk: "5.04" },
    { height: "5'6\"", slow: "4.37", medium: "4.77", brisk: "5.08" },
    { height: "5'7\"", slow: "4.40", medium: "4.80", brisk: "5.11" },
    { height: "5'8\"", slow: "4.43", medium: "4.84", brisk: "5.15" },
    { height: "5'9\"", slow: "4.46", medium: "4.87", brisk: "5.19" },
    { height: "5'10\"", slow: "4.48", medium: "4.90", brisk: "5.23" },
    { height: "5'11\"", slow: "4.51", medium: "4.94", brisk: "5.27" },
    { height: "6'0\"", slow: "4.54", medium: "4.97", brisk: "5.31" },
    { height: "6'1\"", slow: "4.57", medium: "5.01", brisk: "5.35" },
    { height: "6'2\"", slow: "4.60", medium: "5.04", brisk: "5.39" },
  ];

  const runningData = [
    { height: "5'0\"", jog: "5.37", run: "5.76", fastRun: "6.21" },
    { height: "5'1\"", jog: "5.41", run: "5.80", fastRun: "6.27" },
    { height: "5'2\"", jog: "5.45", run: "5.85", fastRun: "6.32" },
    { height: "5'3\"", jog: "5.49", run: "5.90", fastRun: "6.38" },
    { height: "5'4\"", jog: "5.53", run: "5.95", fastRun: "6.44" },
    { height: "5'5\"", jog: "5.58", run: "6.00", fastRun: "6.49" },
    { height: "5'6\"", jog: "5.62", run: "6.05", fastRun: "6.55" },
    { height: "5'7\"", jog: "5.67", run: "6.10", fastRun: "6.62" },
    { height: "5'8\"", jog: "5.71", run: "6.16", fastRun: "6.68" },
    { height: "5'9\"", jog: "5.76", run: "6.21", fastRun: "6.74" },
    { height: "5'10\"", jog: "5.80", run: "6.27", fastRun: "6.81" },
    { height: "5'11\"", jog: "5.85", run: "6.32", fastRun: "6.87" },
    { height: "6'0\"", jog: "5.90", run: "6.38", fastRun: "6.94" },
    { height: "6'1\"", jog: "5.95", run: "6.44", fastRun: "7.01" },
    { height: "6'2\"", jog: "6.00", run: "6.50", fastRun: "7.08" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>How Many Miles is 10,000 Steps?</h1>
      <p>
        For an individual of average height, 10,000 steps equate to around 4½ miles of walking, or 6 miles of running.
        Such a person has an average stride length of between 2.1 to 2.5 feet, meaning they take approximately 2,250
        steps to walk a mile.
      </p>
      <p>
        To gain a more accurate measurement, your height, gender, and walking speed can be factored into the equation.
      </p>

      <h2>10,000 Walking Steps to Miles (Women)</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr style={{ background: "#f4f4f4" }}>
              <th style={cellStyle}>Height</th>
              <th style={cellStyle}>Slow Walk (3 mph)</th>
              <th style={cellStyle}>Medium Walk (3.5 mph)</th>
              <th style={cellStyle}>Brisk Walk (4 mph)</th>
            </tr>
          </thead>
          <tbody>
            {walkingData.map((row, idx) => (
              <tr key={idx}>
                <td style={cellStyle}>{row.height}</td>
                <td style={cellStyle}>{row.slow} miles</td>
                <td style={cellStyle}>{row.medium} miles</td>
                <td style={cellStyle}>{row.brisk} miles</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>10,000 Running Steps to Miles (Women)</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr style={{ background: "#f4f4f4" }}>
              <th style={cellStyle}>Height</th>
              <th style={cellStyle}>Jog (5 mph)</th>
              <th style={cellStyle}>Run (6 mph)</th>
              <th style={cellStyle}>Fast Run (7.5 mph)</th>
            </tr>
          </thead>
          <tbody>
            {runningData.map((row, idx) => (
              <tr key={idx}>
                <td style={cellStyle}>{row.height}</td>
                <td style={cellStyle}>{row.jog} miles</td>
                <td style={cellStyle}>{row.run} miles</td>
                <td style={cellStyle}>{row.fastRun} miles</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  minWidth: "500px",
};

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
};

export default StepsToMiles;
