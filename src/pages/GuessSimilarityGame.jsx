import { useEffect, useState } from "react";
import Papa from "papaparse";
import Select from "react-select";
import { getStatsVector, computeSimilarity } from "./vectorUtils";

const YEARS = ["2021", "2022", "2023", "2024"];
const POSITIONS = ["QB", "RB", "WR", "TE", "IDL", "EDGE", "ILB", "CB", "S"];

const STAT_COLS = {
  QB: ["Comp. % Over Expected", "Hero Throw %", "Turnover Worthy Throw %", "Pressure Sack Rate", "Drop %", "Rush YPG", "Adj. Comp %", "Pass TD/G", "Rush TD/G", "Fum/G", "Int/G", "YPA"],
  RB: ["Explosive Run %", "Attempts per Game", "Receiving Yards per Game", "Yards Before Contact per Run", "Touchdowns per Game", "Missed Tackles Forced per Attempt", "PFF Pass Blocking Grade", "Stuffed Run %"],
  WR: ["Yards per Route Run", "Receiving YPG", "First Downs per Route Run", "Air Yards", "TDs per Route Run", "Yards per Target Over Expectation", "Slot Rate", "Yards After Catch per Reception", "Contested Catch %", "QB Rating When Targeted", "Missed Tackles Forced per Reception"],
  TE: ["First Downs per Route Run", "Receiving Yards per Game", "Yards per Route Run", "Missed Tackles Forced per Reception", "Drop Rate", "PFF Run Block Grade", "Yards per Target Over Expectation", "Yards After Catch per Reception", "PFF Pass Block Grade", "TDs per Route Run", "Contested Catch Rate"],
  IDL: ["Pass Rush Win Rate", "Hurries per Snap", "Hits per Snap", "Sacks per Snap", "Pass Snaps/Game", "Pressures per Snap", "Average Depth of Tackle", "Forced Fumbles per Snap", "Run Snaps/Game", "Tackles per Snap", "Stops per Snap"],
  EDGE: ["Sacks per Snap", "Pass Snaps per Game", "Hurries per Snap", "Pass Rush Win Rate", "Forced Fumbles per Snap", "Hits per Snap", "Run Snaps per Game", "Avg Depth of Tackle", "Tackles per Snap", "Pressures per Snap", "Stop %"],
  ILB: ["Hurries per Rush", "Pass Rush Snaps", "Pass Rush Win Rate", "Sacks per Rush", "Pressures per Rush", "Run Snaps per Game", "Forced Fumbles per Run Snap", "Stop %", "Tackles per Run Snap", "Coverage Snaps per Game", "Snaps per Reception", "INTs per Coverage Snap", "Avg Depth of Tackle", "QB Rating Against", "Yards per Coverage Snap"],
  CB: ["Coverage Snaps per Reception", "QB Rating Against", "Yards Allowed per Snap", "Forced Incompletion Rate", "Interceptions per Game", "Catch Rate Allowed", "Missed Tackle Rate", "Penalties per Snap", "TDs Allowed per Snap", "Coverage Snaps per Game", "Slot Coverage Snaps per Game", "Tackles per Game"],
  S: ["Forced Fumbles per Snap", "Interceptions per Snap", "Sacks per Snap", "Missed Tackle Rate", "QB Rating Against", "Snap Count"]
};

const STAT_WEIGHTS = {
  QB: [2, 4, 6, 5, 1, 2, 4, 4.5, 1, 1, 3, 1.5],
  RB: [7, 7, 5, 4, 3, 2, 2, 1],
  WR: [8, 7, 6, 5, 5, 3, 3, 2, 2, 2, 1],
  TE: [14, 14, 12, 5, 5, 5, 4, 3, 3, 1, 1],
  IDL: [40, 30, 26, 20, 30, 10, 10, 6, 16, 8, 5],
  EDGE: [20, 22, 11, 14, 8, 5, 12, 5, 5, 4, 4],
  ILB: [15, 15, 25, 35, 40, 50, 10, 195, 35, 125, 10, 174, 25, 40, 105],
  CB: [5, 16, 22, 3, 12, 1, 9, 1, 1, 20, 5, 1],
  S: [2, 6, 7, 1, 6, 6]
};

export default function GuessSimilarityGame() {
  const [position, setPosition] = useState("QB");
  const [dataByYear, setDataByYear] = useState({});
  const [basePlayer, setBasePlayer] = useState(null);
  const [top5, setTop5] = useState([]);
  const [guess, setGuess] = useState(null);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const files = {};
      await Promise.all(
        YEARS.map((year) =>
          new Promise((resolve) => {
            const prefix = position === "IDL" ? "DI" : position;
            Papa.parse(`/assets/${prefix}ScoreResults${year}.csv`, {
              download: true,
              header: true,
              complete: (res) => {
                files[year] = res.data;
                resolve();
              }
            });
          })
        )
      );
      setDataByYear(files);
    };
    fetchData();
  }, [position]);

  const allPlayers = YEARS.flatMap((yr) =>
    (dataByYear[yr] || []).filter((r) => r.Name).map((r) => ({
      label: `${r.Name} (${yr})`,
      value: `${r.Name}__${yr}`,
      name: r.Name,
      year: yr
    }))
  );

  const handleBasePlayerSelect = (opt) => {
    const { name, year } = opt;
    const row = (dataByYear[year] || []).find((r) => r.Name === name);
    const cols = STAT_COLS[position];
    const weights = STAT_WEIGHTS[position];
    const baseVec = getStatsVector(row, cols);

    const others = allPlayers
      .filter((r) => r.name !== name || r.year !== year)
      .map((r) => {
        const row = (dataByYear[r.year] || []).find((x) => x.Name === r.name);
        return {
          name: r.name,
          year: r.year,
          sim: computeSimilarity(baseVec, getStatsVector(row, cols), weights)
        };
      })
      .filter((r) => !isNaN(r.sim))
      .sort((a, b) => b.sim - a.sim)
      .slice(0, 5);

    setBasePlayer({ name, year });
    setTop5(others);
    setCorrectGuesses([]);
    setStrikes(0);
    setFeedback("");
    setGuess(null);
  };

  const handleGuessSubmit = () => {
    if (!guess || !basePlayer || strikes >= 10 || correctGuesses.length === 5) return;

    const [gName, gYear] = guess.value.split("__");
    const alreadyGuessed = correctGuesses.find((g) => g.name === gName && g.year === gYear);
    const match = top5.find((p) => p.name === gName && p.year === gYear);

    if (alreadyGuessed) {
      setFeedback("⚠️ You already guessed that one.");
    } else if (match) {
      setCorrectGuesses((prev) => [...prev, match]);
      setFeedback(`✅ Correct! That was #${top5.indexOf(match) + 1}`);
    } else {
      const nameMatch = top5.find((p) => p.name === gName);
      if (nameMatch) {
        setFeedback("⚠️ Right player, wrong year!");
      } else {
        setFeedback("❌ Not one of the top 5.");
        setStrikes((prev) => prev + 1);
      }
    }

    setGuess(null);
  };

  const resetGame = () => {
    setBasePlayer(null);
    setTop5([]);
    setGuess(null);
    setCorrectGuesses([]);
    setStrikes(0);
    setFeedback("");
  };

  const isGameOver = strikes >= 3 || correctGuesses.length === 5;

  const getRevealAtIndex = (i) => {
    const correct = correctGuesses.find(
      (g) => g.name === top5[i].name && g.year === top5[i].year
    );
    if (correct || isGameOver) {
      return `${top5[i].name} (${top5[i].year}) — ${top5[i].sim.toFixed(1)}`;
    }
    return "";
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Guess the Most Similar Season</h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Select Position:</label>
        <select
          value={position}
          onChange={(e) => resetGame() || setPosition(e.target.value)}
          className="p-2 border rounded"
        >
          {POSITIONS.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Select Base Player-Season:</label>
        <Select
          options={allPlayers}
          onChange={handleBasePlayerSelect}
          placeholder="Choose a player-season"
        />
      </div>

      {basePlayer && (
        <div className="mb-4">
          <p>
            <strong>Guess the 5 most similar seasons to:</strong>{" "}
            {basePlayer.name} ({basePlayer.year})
          </p>
          <p className="text-sm text-gray-600">
            Strikes: {strikes} / 10 | Correct: {correctGuesses.length} / 5
          </p>
        </div>
      )}

      {basePlayer && !isGameOver && (
        <>
          <Select
            options={allPlayers}
            value={guess}
            onChange={setGuess}
            placeholder="Enter a guess"
            className="mb-4"
          />
          <button
            onClick={handleGuessSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit Guess
          </button>
        </>
      )}

      {feedback && <p className="mt-4 text-lg">{feedback}</p>}

      {top5.length > 0 && (
        <div className="mt-6">
          <p className="font-semibold mb-2">Top 5 Most Similar Seasons:</p>
          <ul className="list-inside space-y-2">
            {top5.map((r, i) => (
              <li key={i}>
                {i + 1}. {getRevealAtIndex(i)}
              </li>
            ))}
          </ul>

          {isGameOver && (
            <button
              onClick={resetGame}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              New Game
            </button>
          )}
        </div>
      )}
    </div>
  );
}
