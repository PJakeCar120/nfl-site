import { useState } from "react";

export default function ChartsPage() {
  const [category, setCategory] = useState("");

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
          <option value="Draft">Draft</option>
          <option value="QB">QB</option>
          <option value="RB">RB</option>
          <option value="WR">WR</option>
          <option value="TE">TE</option>
          <option value="EDGE">EDGE</option>
          <option value="ILB">ILB</option>
          {/* Add more options here as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "ILB" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
              2024 Regular Season Tackles vs. Stops. Highly correlated, but we can see the players with more valuable tackles above the OLS line.
            </p>
            <img src="/assets/charts/2024ILB.png" alt="Tackles vs Stops" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "TE" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
                TE Yards per Route Run vs. PFF Run Block Grade. George Kittle continues to be an anomaly.
            </p>
            <img src="/assets/charts/2024TE.png" alt="TE YPRR vs. PFF Run Block" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "WR" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
              WR Slot Rate vs. Yards per Route Run. JSN and McConkey the only real elite pure Slot WRs.
            </p>
            <img src="/assets/charts/2024WR.png" alt="WR Slot Rate vs. YPRR" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "RB" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
            Explosive Run % vs. Yards Before Contact per Attempt. Super strong correlation here. Barkley, Gibbs, and Henry are so far ahead of any other RBs in the NFL.
            </p>
            <img src="/assets/charts/2024RB.png" alt="RB Explosive Run % vs. YBCO/ATT" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "QB" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
            2024 Turnover Worthy Throw % vs. Pressure to Sack Rate with Yards per Attempt. One of the reasons I feel Carr was very underrated.
            </p>
            <img src="/assets/charts/2024QB.png" alt="" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "Draft" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
            How Cam Ward, Shedeur Sanders, Jaxson Dart, Jalen Milroe, and Tyler Shough Stack Up Analytically Against Past First-Round Picks.
            </p>
            <img src="/assets/charts/2024QBDraft.png" alt="" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "QB" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
            Just gave a small update to my QB model. Here are rookie-year QB Scores for all qualifying rookies from 2021-2024:
            </p>
            <img src="/assets/charts/QBRookies.jpeg" alt="" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "EDGE" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
            2024 Sacks vs. Hurries (Top 50 Sack Leaders). We see a lower correlation than I expected.
            </p>
            <img src="/assets/charts/2024EDGE.jpeg" alt="" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "EDGE" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
            We can see that Sacks really aren't that correlated with Pass Rush Win Rate, either.
            </p>
            <img src="/assets/charts/2024EDGE2.jpeg" alt="" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "EDGE" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
            However, Pass Rush Win Rate is very highly correlated with Hurries.
            </p>
            <img src="/assets/charts/2024EDGE3.jpeg" alt="" className="w-full rounded" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category === "Draft" && (
          <div className="border rounded p-4 bg-white shadow">
            <p className="text-sm text-gray-600">
            Color-Coded Final Top-50 Positional Strength Chart per @GrindingMocks Data
            </p>
            <img src="/assets/charts/2024Draft.jpeg" alt="" className="w-full rounded" />
          </div>
        )}
      </div>
    </div>
  );
}
