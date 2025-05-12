import { useState } from "react";

const chartData = {
  Draft: [
    {
      src: "/assets/charts/2026QBs.png",
      caption:
        "My early look at the top projected 2026 QB Draft Prospects.",
    },
    {
      src: "/assets/charts/2024QBDraft.png",
      caption:
        "How Cam Ward, Shedeur Sanders, Jaxson Dart, Jalen Milroe, and Tyler Shough Stack Up Analytically Against Past First-Round Picks.",
    },
    {
      src: "/assets/charts/2024Draft.jpeg",
      caption:
        "Color-Coded Final Top-50 Positional Strength Chart per @GrindingMocks Data",
    },
  ],
  
  "Free Agency": [
    {src: "/assets/charts/PFFFAS.png",
      caption:
        "Free Agency Positional Strengh",
    }

  ],
  QB: [
    {
      src: "/assets/charts/2024QB.png",
      caption:
        "2024 Turnover Worthy Throw % vs. Pressure to Sack Rate with Yards per Attempt. One of the reasons I feel Carr was very underrated.",
    },
    {
      src: "/assets/charts/QBRookies.jpeg",
      caption:
        "Just gave a small update to my QB model. Here are rookie-year QB Scores for all qualifying rookies from 2021–2024:",
    },
    {
      src: "/assets/charts/2024AQR.png",
      caption:
        "2024 QBR vs. Passer Rating with AQS as Color. Always interesting to see how my model compares to these two. Most glaring to me is model being higher on Russ and Young, lower on Stafford and Geno. ",
    },
    {
      src: "/assets/charts/2024QBInts.jpeg",
      caption: "What QBs got lucky/unlucky with interceptions last year?",
    },
    {
      src: "/assets/charts/TWT1R.jpeg",
      caption:
        "Presumably the QBs with very high 1st Read % are forcing the ball too much.",
    },
    {
      src: "/assets/charts/Deep.jpeg",
      caption:
        "Turnover worthy throw % can be a bit biased against QBs who throw deep more often. Here's a nice way of looking at it IMO. Obviously you want QBs above the line.",
    },
  ],
  RB: [
    {
      src: "/assets/charts/2024RB.png",
      caption:
        "Explosive Run % vs. Yards Before Contact per Attempt. Barkley, Gibbs, and Henry are so far ahead of any other RBs in the NFL.",
    },
  ],
  WR: [
    {
      src: "/assets/charts/2024WR.png",
      caption:
        "WR Slot Rate vs. Yards per Route Run. JSN and McConkey the only real elite pure Slot WRs.",
    },
    {
      src: "/assets/charts/AWRSPFF.jpeg",
      caption: "AWRS vs. PFF WR Grades",
    },
  ],
  TE: [
    {
      src: "/assets/charts/2024TE.png",
      caption:
        "TE Yards per Route Run vs. PFF Run Block Grade. George Kittle continues to be an anomaly.",
    },
  ],
  EDGE: [
    {
      src: "/assets/charts/EDGE2024Snaps.png",
      caption:
        "Ever wonder how the top NFL EDGES are actually used?",
    },
    {
      src: "/assets/charts/2024EDGE.jpeg",
      caption:
        "2024 Sacks vs. Hurries (Top 50 Sack Leaders). Lower correlation than expected.",
    },
    {
      src: "/assets/charts/2024EDGE2.jpeg",
      caption:
        "Sacks really aren't that correlated with Pass Rush Win Rate, either.",
    },
    {
      src: "/assets/charts/2024EDGE3.jpeg",
      caption:
        "However, Pass Rush Win Rate is very highly correlated with Hurries.",
    },
  ],
  ILB: [
    {
      src: "/assets/charts/2024ILB.png",
      caption:
        "2024 Regular Season Tackles vs. Stops. Players with more valuable tackles are above the OLS line.",
    },
  ],
  CB: [
    {
      src: "/assets/charts/2024CB.jpeg",
      caption:
        "2024 CB Yards Allowed per Snap vs. QB Rating Against. Cobie Durant stands out to me in a group of well-known elite guys.",
    },
  ],
};

export default function ChartsPage() {
  const [category, setCategory] = useState("");
  const [indexMap, setIndexMap] = useState({});

  const charts = chartData[category] || [];
  const currentIndex = indexMap[category] || 0;
  const currentChart = charts[currentIndex];

  const changeIndex = (delta) => {
    setIndexMap((prev) => ({
      ...prev,
      [category]: (currentIndex + delta + charts.length) % charts.length,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-bold">
      <h1 className="text-3xl font-bold mb-6">Analytics Charts</h1>

      <div className="mb-6">
        <label htmlFor="chart-category" className="block text-sm font-medium text-gray-700 mb-1">
          Select a Category:
        </label>
        <select
          id="chart-category"
          className="border border-gray-300 rounded p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=""> Select </option>
          {Object.keys(chartData).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      {category && currentChart && (
        <div className="border rounded p-4 bg-white shadow relative overflow-x-auto">
          {charts.length > 1 && (
            <div className="absolute top-4 right-4 flex items-center gap-2 text-sm font-normal">
              <button
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                onClick={() => changeIndex(-1)}
              >
                ← Prev
              </button>
              <span>
                {currentIndex + 1} / {charts.length}
              </span>
              <button
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                onClick={() => changeIndex(1)}
              >
                Next →
              </button>
            </div>
          )}

          <p className="text-sm font-bold text-gray-800 mb-4">{currentChart.caption}</p>

          <div className="min-w-[800px] max-w-full mx-auto">
            <img
              src={currentChart.src}
              alt=""
              className="w-full h-auto max-h-[90vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}