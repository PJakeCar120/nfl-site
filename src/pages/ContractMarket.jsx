import React from "react";

const ContractMarket = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📊 Contract Market</h1>
      <p className="mb-6">
        Explore the top 50 NFL contracts by cap percentage at signing at each position. Use the dropdown below the chart to switch positions.
      </p>

      <iframe
        src="/assets/ContractMarket.html"
        width="100%"
        height="1200px"
        title="Contract Market Dashboard"
        aria-label="Interactive Cap Chart"
        style={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          boxShadow: "0 0 12px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default ContractMarket;
