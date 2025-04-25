import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";


const awardsData = {
  "2024": {
    awards: [
      { title: "Most Valuable Player", winner: "QB: Lamar Jackson, BAL" },
      { title: "Offensive Player of the Year", winner: "WR: Ja'Marr Chase, CIN" },
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
      "ILB: Demario Davis, NO",
      "CB: Pat Surtain II, DEN",
      "S: Xavier McKinney, GB",
      "S: Jessie Bates III, ATL",
      "CB: Derek Stingley Jr, HOU",
      "NB: Garrett Williams, ARI",
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
      "ILB: Zaire Franklin, IND",
      "ILB: Roquan Smith, BAL",
      "ILB: Fred Warner, SF",
      "CB: Quinyon Mitchell, PHI",
      "S: Brian Branch, DET",
      "S: Kerby Joseph, DET",
      "CB: Christian Benford, BUF",
      "NB: Marlon Humphrey, BAL",
    ],
    notes: [
      "Note: I do not have my own OL ratings, so I have relied on AP, PFWA, and PFF.",
    ]
  },
  "2023": {
  awards: [
    { title: "Most Valuable Player", winner: "QB: Lamar Jackson, BAL" },
    { title: "Offensive Player of the Year", winner: "RB: Christian McCaffrey, SF" },
    { title: "Defensive Player of the Year", winner: "EDGE: Khalil Mack, LAC" },
    { title: "Offensive Rookie of the Year", winner: "WR: Puka Nacua, LAR" },
    { title: "Defensive Rookie of the Year", winner: "EDGE: Will Anderson Jr, HOU" },
    { title: "Coach of the Year", winner: "HC Kevin Stefanski, CLE" },
  ],
  firstTeam: [
    "QB: Lamar Jackson, BAL",
    "RB: Christian McCaffrey, SF",
    "WR: Nico Collins, HOU",
    "WR: Tyreek Hill, MIA",
    "WR: Brandon Aiyuk, SF",
    "TE: George Kittle, SF",
    "LT: Trent Williams, SF",
    "LG: Joe Thuney, KC",
    "C: Jason Kelce, PHI",
    "RG: Zack Martin, DAL",
    "RT: Penei Sewell, DET",
    "EDGE: Khalil Mack, LAC",
    "IDL: Aaron Donald, LAR",
    "IDL: Quinnen Williams, NYJ",
    "EDGE: Myles Garrett, CLE",
    "ILB: Terrel Bernard, BUF",
    "ILB: Fred Warner, SF",
    "ILB: Jeremiah Owusu-Koramoah, CLE",
    "CB: Jaylon Johnson, CHI",
    "S: Kyle Hamilton, BAL",
    "S: Antoine Winfield Jr, TB",
    "CB: Darious Williams, LAR",
    "NB: Devon Witherspoon, SEA",
  ],
  secondTeam: [
    "QB: Russell Wilson, PIT",
    "RB: James Conner",
    "WR: D.J. Moore, CHI",
    "WR: A.J. Brown, PHI",
    "WR: Amon-Ra St. Brown, DET",
    "TE: Trey McBride, ARI",
    "LT: Jordan Mailata, PHI",
    "LG: Tyler Smith, DAL",
    "C: Frank Ragnow, DET",
    "RG: Chris Lindstrom, ATL",
    "RT: Lane Johnson, PHI",
    "EDGE: T.J. Watt, PIT",
    "IDL: Dexter Lawrence, NYG",
    "IDL: Chris Jones, KC",
    "EDGE: Josh Hines-Allen, JAX",
    "ILB: Quincy Williams, NYJ",
    "ILB: Robert Spillane, LV",
    "ILB: T.J. Edwards, CHI",
    "CB: Charvarius Ward, KC",
    "S: Jalen Thompson, ARI",
    "S: Jessie Bates III, ATL",
    "CB: Steven Nelson, HOU",
    "NB: Deommodore Lenoir, SF",
  ],
  notes: [
    "Note: I do not have my own OL ratings, so I have relied on AP, PFWA, and PFF.",
  ]
},

  "2022": {
    awards: [
        { title: "Most Valuable Player", winner: "QB: Patrick Mahomes, KC" },
        { title: "Offensive Player of the Year", winner: "WR: A.J. Brown, PHI" },
        { title: "Defensive Player of the Year", winner: "EDGE: Myles Garrett, CLE" },
        { title: "Offensive Rookie of the Year", winner: "WR: Chris Olave, NO" },
        { title: "Defensive Rookie of the Year", winner: "CB: Sauce Gardner, NYJ" },
        { title: "Coach of the Year", winner: "HC Kyle Shanahan, SF" },
      ],
      firstTeam: [
        "QB: Patrick Mahomes, KC",
        "RB: Nick Chubb, CLE",
        "WR: A.J. Brown, PHI",
        "WR: Justin Jefferson, MIN",
        "WR: Stefon Diggs, BUF",
        "TE: Travis Kelce, KC",
        "LT: Trent Williams, SF",
        "LG: Joel Bitonio, CLE",
        "C: Jason Kelce, PHI",
        "RG: Chris Lindstrom, ATL",
        "RT: Lane Johnson, PHI",
        "EDGE: Myles Garrett, CLE",
        "IDL: Chris Jones, KC",
        "IDL: DeForest Buckner, IND",
        "EDGE: Maxx Crosby, LV",
        "ILB: Matt Milano, BUF",
        "ILB: Fred Warner, SF",
        "ILB: Roquan Smith, BAL",
        "CB: James Bradberry, PHI",
        "S: Vonn Bell, CIN",
        "S: Tashaun Gipson Sr, SF",
        "CB: Patrick Peterson, MIN",
      ],
      secondTeam: [
        "QB: Joe Burrow, CIN",
        "RB: Saquon Barkley, PHI",
        "WR: Tyreek Hill, MIA",
        "WR: Jaylen Waddle, MIA",
        "WR: Davante Adams, LV",
        "TE: George Kittle, SF",
        "LT: Andrew Thomas, NYG",
        "LG: Joe Thuney, KC",
        "C: Creed Humphrey, KC",
        "RG: Zack Martin, DAL",
        "RT: Tristan Wirfs, TB",
        "EDGE: Nick Bosa, SF",
        "IDL: Dexter Lawrence, NYG",
        "IDL: Cameron Heyward, IDL",
        "EDGE: Micah Parsons, DAL",
        "ILB: Bobby Wagner, LAR",
        "ILB: Ja'Whaun Bentley, NE",
        "ILB: Tremaine Edmunds, BUF",
        "CB: Sauce Gardner, NYJ",
        "S: Tyrann Mathieu, NO",
        "S: Derwin James Jr, LAC",
        "CB: Tariq Woolen, SEA",
      ],
      notes: [
        "Note: I do not have my own OL ratings, so I have relied on AP, PFWA, and PFF.",
      ]
    },
  "2021": {
    awards: [
        { title: "Most Valuable Player", winner: "QB: Tom Brady, TB" },
        { title: "Offensive Player of the Year", winner: "WR: Ja'Marr Chase, CIN" },
        { title: "Defensive Player of the Year", winner: "IDL: Aaron Donald, LAR" },
        { title: "Offensive Rookie of the Year", winner: "WR: Ja'Marr Chase, CIN" },
        { title: "Defensive Rookie of the Year", winner: "ILB/EDGE: Micah Parsons, DAL" },
        { title: "Coach of the Year", winner: "HC Mike Vrabel, TEN" },
      ],
      firstTeam: [
        "QB: Tom Brady, TB",
        "RB: Jonathan Taylor, IND",
        "WR: Ja'Marr Chase, CIN",
        "WR: Cooper Kupp, LAR",
        "WR: Davante Adams, GB",
        "TE: George Kittle, SF",
        "LT: Trent Williams, SF",
        "LG: Joel Bitonio, CLE",
        "C: Jason Kelce, PHI",
        "RG: Zack Martin, DAL",
        "RT: Tristan Wirfs, TB",
        "EDGE: Nick Bosa, SF",
        "IDL: Aaron Donald, LAR",
        "IDL: Javon Hargrave, PHI",
        "EDGE: T.J. Watt, PIT",
        "ILB: Micah Parsons, DAL",
        "ILB: Shaquille Leonard, IND",
        "ILB: Kyzir White, LAC",
        "CB: D.J. Reed, SEA",
        "S: Jordan Poyer, BUF",
        "S: Kevin Byard, TEN",
        "CB: A.J. Terrell, ATL",
      ],
      secondTeam: [
        "QB: Kyler Murray, ARI",
        "RB: Dalvin Cook, MIN",
        "WR: Justin Jefferson, MIN",
        "WR: Deebo Samuel, SF",
        "WR: Tee Higgins, CIN",
        "TE: Mark Andrews, BAL",
        "LT: Rashawn Slater, LAC",
        "LG: Quenton Nelson, IND",
        "C: Creed Humphrey, KC",
        "RG: Wyatt Teller, CLE",
        "RT: Lane Johnson, PHI",
        "EDGE: Maxx Crosby, LV",
        "IDL: Jonathan Allen, WAS",
        "IDL: Cameron Heyward, PIT",
        "EDGE: Myles Garrett, CLE",
        "ILB: Bobby Okereke, IND",
        "ILB: Shaq Thompson, CAR",
        "ILB: Roquan Smith, BAL",
        "CB: Casey Hayward Jr, LV",
        "S: Justin Simmons, DEN",
        "S: Derwin James Jr, LAC",
        "CB: Adoree' Jackson, NYG",
      ],
      notes: [
        "Note: I do not have my own OL ratings, so I have relied on AP, PFWA, and PFF.",
      ]
    }
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
const [searchParams, setSearchParams] = useSearchParams();
const year = searchParams.get("year") || "2024";
  const yearData = awardsData[year];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🏆 F.A.N. Awards & All-Pro Teams</h1>


      <select
        value={year}
        onChange={(e) => setSearchParams({ year: e.target.value })}
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
          <h2 className="text-xl font-semibold mb-2">{year} NFL Awards (min. 15 GP)</h2>
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

export { awardsData };