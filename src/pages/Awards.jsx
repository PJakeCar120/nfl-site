import { useState } from "react";
import { Link } from "react-router-dom";

const awardsData = {
  "2024": {
    awards: [
      { title: "Most Valuable Player", winner: "QB: Lamar Jackson, BAL" },
      { title: "Offensive Player of the Year", winner: "WR: Ja’Marr Chase, CIN" },
      { title: "Defensive Player of the Year", winner: "EDGE: Myles Garrett, CLE" },
      { title: "Offensive Rookie of the Year", winner: "QB: Jayden Daniels, WAS" },
      { title: "Defensive Rookie of the Year", winner: "CB: Quinyon Mitchell, PHI" },
      { title: "Coach of the Year", winner: "HC Kevin O'Connell, MIN" },
    ],
    firstTeam: [
      "QB: Lamar Jackson, BAL",
      "RB: Jahmyr Gibbs, DET",
      "WR: Ja'Marr Chase, CIN",
      "WR: Justin Jefferson, MIN",
      "WR: A.J. Brown, PHI",
      "TE: George Kittle, SF",
      "LT: Tristan Wirfs, TB",
      "LG: Joe Thuney, KC",
      "C: Creed Humphrey, KC",
      "RG: Quinn Meinerz, DEN",
      "RT: Penei Sewell, DET",
      "EDGE: Myles Garrett, CLE",
      "IDL: Cameron Heyward, PIT",
      "IDL: Zach Allen, DEN",
      "EDGE: Micah Parsons, DAL",
      "ILB: Zack Baun, PHI",
      "ILB: Eric Kendricks, DAL",
      "CB: Pat Surtain II, DEN",
      "S: Xavier McKinney, GB",
      "S: Jessie Bates III, ATL",
      "CB: Derek Stingley Jr, HOU",
      "NB: Garrett Williams, ARI",
      "K: Chris Boswell, PIT",
      "P: Jack Fox, DET"
    ],
    secondTeam: [
      "QB: Joe Burrow, CIN",
      "RB: Saquon Barkley, PHI",
      "WR: Mike Evans, TB",
      "WR: Amon-Ra St. Brown, DET",
      "WR: Terry McLaurin, WAS",
      "TE: Trey McBride, ARI",
      "LT: Jordan Mailata, PHI",
      "LG: Quenton Nelson, IND",
      "C: Frank Ragnow, DET",
      "RG: Chris Lindstrom, ATL",
      "RT: Lane Johnson, PHI",
      "EDGE: Nick Bosa, SF",
      "IDL: Chris Jones, KC",
      "IDL: Jalen Carter, PHI",
      "EDGE: Trey Hendrickson, CIN",
      "ILB: Demario Davis, NO",
      "ILB: Zaire Franklin, IND",
      "CB: Quinyon Mitchell, PHI",
      "S: Brian Branch, DET",
      "S: Kerby Joseph, DET",
      "CB: Christian Benford, BUF",
      "NB: Marlon Humphrey, BAL",
    ],
    notes: [
      "Excluded due to games played: WR Nico Collins, WR Chris Godwin, WR Puka Nacua, ILB Jeremiah Owusu-Koramoah",
      "Note: I do not have my own OL ratings, so I have relied on AP, PFWA, and PFF.",
    ]
  },
  "2023": {},
  "2022": {},
  "2021": {}
};

const linkifyPlayer = (text) => {
  const [pos, rest] = text.split(": ");
  if (!rest) return text;

  const [name, team] = rest.split(", ");
  const unlinkedPositions = ["LT", "LG", "C", "RG", "RT", "HC"];

  return (
    <>
      <strong>{pos}:</strong>{" "}
      {unlinkedPositions.includes(pos) ? (
        name
      ) : (
        <Link
          to={`/playersearch?name=${encodeURIComponent(name)}`}
          className="text-blue-600 hover:underline"
        >
          {name}
        </Link>
      )}
      {team ? `, ${team}` : ""}
    </>
  );
};

export default function AwardsPage() {
  const [year, setYear] = useState("2024");
  const yearData = awardsData[year];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">NFL Awards & All-Pro Teams</h1>

      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="mb-6 border p-2 rounded"
      >
        {Object.keys(awardsData)
          .sort((a, b) => b - a)
          .map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
      </select>

      {yearData.awards && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{year} NFL Awards</h2>
          <ul className="list-disc list-inside">
            {yearData.awards.map((a, idx) => (
              <li key={idx}>
                <strong>{a.title}:</strong>{" "}
                {a.winner.includes(": ") ? linkifyPlayer(a.winner) : a.winner}
              </li>
            ))}
          </ul>
        </div>
      )}

      {yearData.firstTeam && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">All-Pro First Team (min. 13 GP)</h2>
          <ul className="list-disc list-inside">
            {yearData.firstTeam.map((p, idx) => (
              <li key={idx}>{linkifyPlayer(p)}</li>
            ))}
          </ul>
        </div>
      )}

      {yearData.secondTeam && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">All-Pro Second Team (min. 13 GP)</h2>
          <ul className="list-disc list-inside">
            {yearData.secondTeam.map((p, idx) => (
              <li key={idx}>{linkifyPlayer(p)}</li>
            ))}
          </ul>
        </div>
      )}

      {yearData.notes && (
        <div className="mt-6 text-sm italic space-y-1">
          {yearData.notes.map((n, idx) => (
            <p key={idx}>{n}</p>
          ))}
        </div>
      )}
    </div>
  );
}
