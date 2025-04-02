import React from "react";

const DraftPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📈 Draft Center</h1>
      <p className="mb-6">
        Explore each NFL team's total draft capital, per the Jimmy Johnson model. SOON TO COME: positional strength draft rankings.
      </p>

      <iframe
        src="/assets/draft_capital_chart.html"
        width="100%"
        height="600px"
        title="Draft Capital Chart"
        aria-label="NFL Draft Capital by Team"
        style={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          boxShadow: "0 0 12px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default DraftPage;
