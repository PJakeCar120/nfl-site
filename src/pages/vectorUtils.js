// === Stat Columns ===
export const WR_COLS = [
    "Yards per Route Run",
    "Receiving YPG",
    "First Downs per Route Run",
    "Air Yards",
    "TDs per Route Run",
    "Yards per Target Over Expectation",
    "Slot Rate",
    "Yards After Catch per Reception",
    "Contested Catch %",
    "QB Rating When Targeted",
    "Missed Tackles Forced per Reception"
  ];
  
  export const TE_COLS = [
    "First Downs per Route Run",
    "Receiving Yards per Game",
    "Yards per Route Run",
    "Missed Tackles Forced per Reception",
    "Drop Rate",
    "PFF Run Block Grade",
    "Yards per Target Over Expectation",
    "Yards After Catch per Reception",
    "PFF Pass Block Grade",
    "TDs per Route Run",
    "Contested Catch Rate"
  ];
  
  export const QB_COLS = [
    "Comp. % Over Expected",
    "Hero Throw %",
    "Turnover Worthy Throw %",
    "Pressure Sack Rate",
    "Drop %",
    "Rush YPG",
    "Adj. Comp %",
    "Pass TD/G",
    "Rush TD/G",
    "Fum/G",
    "Int/G",
    "YPA"
  ];
  
  export const CB_COLS = [
    "Coverage Snaps per Reception",
    "QB Rating Against",
    "Yards Allowed per Snap",
    "Forced Incompletion Rate",
    "Interceptions per Game",
    "Catch Rate Allowed",
    "Missed Tackle Rate",
    "Penalties per Snap",
    "TDs Allowed per Snap",
    "Coverage Snaps per Game",
    "Slot Coverage Snaps per Game",
    "Tackles per Game"
  ];
  
  export const S_COLS = [
    "Forced Fumbles per Snap",
    "Interceptions per Snap",
    "Sacks per Snap",
    "Missed Tackle Rate",
    "QB Rating Against",
    "Snap Count"
  ];
  
  export const RB_COLS = [
    "Explosive Run %",
    "Attempts per Game",
    "Receiving Yards per Game",
    "Yards Before Contact per Run",
    "Touchdowns per Game",
    "Missed Tackles Forced per Attempt",
    "PFF Pass Blocking Grade",
    "Stuffed Run %"
  ];
  
  export const IDL_COLS = [
    "Pass Rush Win Rate",
    "Hurries per Snap",
    "Hits per Snap",
    "Sacks per Snap",
    "Pass Snaps/Game",
    "Pressures per Snap",
    "Average Depth of Tackle",
    "Forced Fumbles per Snap",
    "Run Snaps/Game",
    "Tackles per Snap",
    "Stops per Snap"
  ];
  
  export const EDGE_COLS = [
    "Sacks per Snap",
    "Pass Snaps per Game",
    "Hurries per Snap",
    "Pass Rush Win Rate",
    "Forced Fumbles per Snap",
    "Hits per Snap",
    "Run Snaps per Game",
    "Avg Depth of Tackle",
    "Tackles per Snap",
    "Pressures per Snap",
    "Stop %"
  ];
  
  export const ILB_COLS = [
    "Hurries per Rush",
    "Pass Rush Snaps",
    "Pass Rush Win Rate",
    "Sacks per Rush",
    "Pressures per Rush",
    "Run Snaps per Game",
    "Forced Fumbles per Run Snap",
    "Stop %",
    "Tackles per Run Snap",
    "Coverage Snaps per Game",
    "Snaps per Reception",
    "INTs per Coverage Snap",
    "Avg Depth of Tackle",
    "QB Rating Against",
    "Yards per Coverage Snap"
  ];
  
  // === Stat Weights ===
  export const WR_WEIGHTS = [8, 7, 6, 5, 5, 3, 3, 2, 2, 2, 1];
  export const TE_WEIGHTS = [14, 14, 12, 5, 5, 5, 4, 3, 3, 1, 1];
  export const QB_WEIGHTS = [2, 4, 6, 5, 1, 2, 4, 4.5, 1, 1, 3, 1.5];
  export const CB_WEIGHTS = [5, 16, 22, 3, 12, 1, 9, 1, 1, 20, 5, 1];
  export const S_WEIGHTS = [2, 6, 7, 1, 6, 6];
  export const RB_WEIGHTS = [7, 7, 5, 4, 3, 2, 2, 1];
  export const IDL_WEIGHTS = [40, 30, 26, 20, 30, 10, 10, 6, 16, 8, 5];
  export const EDGE_WEIGHTS = [20, 22, 11, 14, 8, 5, 12, 5, 5, 4, 4];
  export const ILB_WEIGHTS = [15, 15, 25, 35, 40, 50, 10, 195, 35, 125, 10, 174, 25, 40, 105];
  
  // === Utility Selectors ===
  export const getStatColumns = (pos) => {
    switch (pos) {
      case "WR": return WR_COLS;
      case "QB": return QB_COLS;
      case "CB": return CB_COLS;
      case "S": return S_COLS;
      case "RB": return RB_COLS;
      case "IDL": return IDL_COLS;
      case "EDGE": return EDGE_COLS;
      case "ILB": return ILB_COLS;
      case "TE": return TE_COLS;
      default: return [];
    }
  };
  
  export const getStatWeights = (pos) => {
    switch (pos) {
      case "WR": return WR_WEIGHTS;
      case "QB": return QB_WEIGHTS;
      case "CB": return CB_WEIGHTS;
      case "S": return S_WEIGHTS;
      case "RB": return RB_WEIGHTS;
      case "IDL": return IDL_WEIGHTS;
      case "EDGE": return EDGE_WEIGHTS;
      case "ILB": return ILB_WEIGHTS;
      case "TE": return TE_WEIGHTS;
      default: return [];
    }
  };
  
  // === Stat Vector Extraction ===
  export const getStatsVector = (row, cols) =>
    cols.map((col) => parseFloat(row[col]) || 0);
  
  // === Similarity Computation ===
  export const computeSimilarity = (v1, v2, weights) => {
    const weightedSum = v1.reduce((sum, val, i) => {
      const w = weights[i] ?? 1;
      return sum + w * (val - v2[i]) ** 2;
    }, 0);
  
    const maxDistance = Math.sqrt(weights.reduce((sum, w) => sum + w * 100 ** 2, 0));
    return 100 * (1 - Math.sqrt(weightedSum) / maxDistance);
  };
  