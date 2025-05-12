import React from "react";

const DraftPage = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 box-border">
      <h1 className="text-3xl font-bold mb-4">📈 Draft Center</h1>

      <p className="mb-6">
        Chart 1: Strength of each position in the early rounds of this year's NFL Draft, per Grinding the Mocks (Updated 4/25). Chart 2: NFL team's total draft capital, per the Jimmy Johnson model. The charts are interactive: if on computer, hover over the bars!
      </p>

      <p className="mb-6">
        <strong>HUGE shoutout to Ben Robinson for the data.</strong> Check out his site –{" "}
        <a
          href="https://grindingthemocks.shinyapps.io/Dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://grindingthemocks.shinyapps.io/Dashboard/
        </a>
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
