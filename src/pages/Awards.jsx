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
      "ILB: Demario Davis, NO",
      "ILB: Zaire Franklin, IND",
      "CB: Quinyon Mitchell, PHI",
      "S: Brian Branch, DET",
      "S: Kerby Joseph, DET",
      "CB: Christian Benford, BUF",
      "NB: Marlon Humphrey, BAL",
    ],
    allRookie: [
      "QB: Jayden Daniels, WAS",
      "RB: Bucky Irving, TB",
      "WR: Brian Thomas, JAX",
      "WR: Ladd McConkey, LAC",
      "WR: Malik Nabers, NYG",
      "TE: Brock Bowers, LV",
      "LT: JC Latham, TEN",
      "LG: Jackson Powers-Johnson, LV",
      "C: Zach Frazier, PIT",
      "RG: Dominick Puni, SF",
      "RT: Joe Alt, LAC",
      "EDGE: Jared Verse, LAR",
      "IDL: Braden Fiske, LAR",
      "IDL: Jer'Zhan Newton, WAS",
      "EDGE: Chop Robinson, MIA",
      "ILB: Edgerrin Cooper, GB",
      "ILB: Darius Muasau, NYG",
      "CB: Quinyon Mitchell, PHI",
      "S: Jaylen McCollough, LAR",
      "S: Calen Bullock, HOU",
      "CB: Kamari Lassiter, HOU",
      "NB: Cooper DeJean, PHI"
    ],
    proBowl: {
      NFC: [
        "QB: Derek Carr, NO",
        "QB: Jared Goff, DET",
        "QB: Kyler Murray, ARI",
        "RB: Jahmyr Gibbs, DET",
        "RB: Saquon Barkley, PHI",
        "RB: James Conner, ARI",
        "WR: A.J. Brown, PHI",
        "WR: Justin Jefferson, MIN",
        "WR: Mike Evans, TB",
        "WR: Puka Nacua, LAR",
        "TE: George Kittle, SF",
        "TE: Trey McBride, ARI",
        "OT: Tristan Wirfs, TB",
        "OT: Penei Sewell, DET",
        "OT: Lane Johnson, PHI",
        "OG: Chris Lindstrom, ATL",
        "OG: Landon Dickerson, PHI",
        "OG: Tyler Smith, DAL",
        "C: Frank Ragnow, DET",
        "C: Cam Jurgens, PHI",
        "IDL: Jalen Carter, PHI",
        "IDL: Leonard Williams, SEA",
        "IDL: Osa Odighizuwa, DAL",
        "DE: Micah Parsons, DAL",
        "DE: Nick Bosa, SF",
        "DE: Carl Granderson, NO",
        "OLB: Jonathan Greenard, MIN",
        "OLB: Jared Verse, LAR",
        "OLB: Brian Burns, NYG",
        "ILB: Zack Baun, PHI",
        "ILB: Eric Kendricks, DAL",
        "CB: Quinyon Mitchell, PHI",
        "CB: Garrett Williams, ARI",
        "CB: A.J. Terrell, ATL",
        "CB: Tariq Woolen, SEA",
        "S: Xavier McKinney, GB",
        "S: Jessie Bates III, ATL",
        "S: Brian Branch, DET"
      ],
      AFC: [
        "QB: Lamar Jackson, BAL",
        "QB: Joe Burrow, CIN",
        "QB: Josh Allen, BUF",
        "RB: Derrick Henry, BAL",
        "RB: James Cook, BUF",
        "RB: Jonathan Taylor, IND",
        "WR: Nico Collins, HOU",
        "WR: Ja'Marr Chase, CIN",
        "WR: Tee Higgins, CIN",
        "WR: Brian Thomas, JAX",
        "TE: Jonnu Smith, MIA",
        "TE: Brock Bowers, LV",
        "OT: Dion Dawkins, BUF",
        "OT: Laremy Tunsil, HOU",
        "OT: Rashawn Slater, LAC",
        "OG: Joe Thuney, KC",
        "OG: Quinn Meinerz, DEN",
        "OG: Quenton Nelson, IND",
        "C: Creed Humphrey, KC",
        "C: Tyler Linderbaum, BAL",
        "IDL: Cameron Heyward, PIT",
        "IDL: Zach Allen, DEN",
        "IDL: Chris Jones, KC",
        "DE: Myles Garrett, CLE",
        "DE: Trey Hendrickson, CIN",
        "DE: Danielle Hunter, HOU",
        "OLB: Alex Highsmith, PIT",
        "OLB: Jonathon Cooper, DEN",
        "OLB: T.J. Watt, PIT",
        "ILB: Zaire Franklin, IND",
        "ILB: Roquan Smith, BAL",
        "CB: Pat Surtain II, DEN",
        "CB: Derek Stingley Jr, HOU",
        "CB: Christian Benford, BUF",
        "CB: Christian Gonzalez, NE",
        "S: Kyle Hamilton, BAL",
        "S: Calen Bullock, HOU",
        "S: Amani Hooker, TEN"
      ]
    }, 
    notes: [
      "Note: I do not have my own OL ratings, so I have relied on AP, PFWA, and PFF."
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
    "CB: Jaylon Johnson, CHI",
    "S: Kyle Hamilton, BAL",
    "S: Antoine Winfield Jr, TB",
    "CB: Darious Williams, LAR",
    "NB: Devon Witherspoon, SEA",
  ],
  secondTeam: [
    "QB: Russell Wilson, PIT",
    "RB: James Conner, ARI",
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
    "ILB: Jeremiah Owusu-Koramoah, CLE",
    "ILB: Bobby Okereke, NYG",
    "CB: Charvarius Ward, KC",
    "S: Jalen Thompson, ARI",
    "S: Jessie Bates III, ATL",
    "CB: Steven Nelson, HOU",
    "NB: Deommodore Lenoir, SF",
  ],
  proBowl: {
    NFC: [
      "QB: Jared Goff, DET",
      "QB: Dak Prescott, DAL",
      "QB: Jalen Hurts, PHI",
      "RB: Christian McCaffrey, SF",
      "RB: James Conner, ARI",
      "RB: Jahmyr Gibbs, DET",
      "WR: Brandon Aiyuk, SF",
      "WR: D.J. Moore, CHI",
      "WR: Justin Jefferson, MIN",
      "WR: A.J. Brown, PHI",
      "TE: George Kittle, SF",
      "TE: Trey McBride, ARI",
      "OT: Trent Williams, SF",
      "OT: Penei Sewell, DET",
      "OT: Lane Johnson, PHI",
      "OG: Zack Martin, DAL",
      "OG: Tyler Smith, DAL",
      "OG: Chris Lindstrom, ATL",
      "C: Jason Kelce, PHI",
      "C: Frank Ragnow, DET",
      "IDL: Aaron Donald, LAR",
      "IDL: Dexter Lawrence, NYG",
      "IDL: Jonathan Allen, WAS",
      "DE: Nick Bosa, SF",
      "DE: Aidan Hutchinson, DET",
      "DE: Montez Sweat, CHI",
      "OLB: Micah Parsons, DAL",
      "OLB: Danielle Hunter, MIN",
      "OLB: Rashan Gary, GB",
      "ILB: Fred Warner, SF",
      "ILB: Bobby Okereke, NYG",
      "CB: Jaylon Johnson, CHI",
      "CB: Charvarius Ward, SF",
      "CB: Kendall Fuller, WAS",
      "CB: Darius Slay, PHI",
      "S: Antoine Winfield Jr, TB",
      "S: Jalen Thompson, ARI",
      "S: Jessie Bates III, ATL"
    ],
    AFC: [
      "QB: Lamar Jackson, BAL",
      "QB: Russell Wilson, PIT",
      "QB: Patrick Mahomes, KC",
      "RB: Raheem Mostert, MIA",
      "RB: Isiah Pacheco, KC",
      "RB: Devon Achane, MIA",
      "WR: Nico Collins, HOU",
      "WR: Tyreek Hill, MIA",
      "WR: Jaylen Waddle, MIA",
      "WR: Keenan Allen, LAC",
      "TE: Mark Andrews, BAL",
      "TE: Travis Kelce, KC",
      "OT: Laremy Tunsil, HOU",
      "OT: Dion Dawkins, BUF",
      "OT: Terron Armstead, MIA",
      "OG: Joe Thuney, KC",
      "OG: Quenton Nelson, IND",
      "OG: Joel Bitonio, CLE",
      "C: Creed Humphrey, KC",
      "C: Tyler Linderbaum, BAL",
      "IDL: Quinnen Williams, NYJ",
      "IDL: Chris Jones, KC",
      "IDL: Ed Oliver, BUF",
      "DE: Myles Garrett, CLE",
      "DE: Maxx Crosby, LV",
      "DE: Trey Hendrickson, CIN",
      "OLB: Khalil Mack, LAC",
      "OLB: T.J. Watt, PIT",
      "OLB: Josh Hines-Allen, JAX",
      "ILB: Terrel Bernard, BUF",
      "ILB: Jeremiah Owusu-Koramoah, CLE",
      "CB: Darious Williams, JAX",
      "CB: Jalen Ramsey, MIA",
      "CB: Steven Nelson, HOU",
      "CB: L'Jarius Sneed, KC",
      "S: Kyle Hamilton, BAL",
      "S: Jabrill Peppers, NE",
      "S: Andre Cisco, JAX"
    ]
  },  
  allRookie: [
    "QB: C.J. Stroud, HOU",
    "RB: Jahmyr Gibbs, DET",
    "WR: Puka Nacua, LAR",
    "WR: Tank Dell, HOU",
    "WR: Rashee Rice, KC",
    "TE: Sam LaPorta, DET",
    "LT: Wanya Morris, KC",
    "LG: Peter Skoronski, TEN",
    "C: Joe Tippman, NYJ",
    "RG: Sidy Sow, NE",
    "RT: Dawand Jones, CLE",
    "EDGE: Will Anderson Jr, HOU",
    "IDL: Kobie Turner, LAR",
    "IDL: Calijah Kancey, TB",
    "EDGE: Tuli Tuipulotu, LAC",
    "ILB: Ivan Pace Jr, MIN",
    "ILB: Henry To'oTo'o, HOU",
    "CB: Devon Witherspoon, SEA",
    "S: Jordan Battle, CIN",
    "S: Quan Martin, WAS",
    "CB: Joey Porter Jr, PIT",
    "NB: Brian Branch, DET"
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
      proBowl: {
        NFC: [
          "QB: Jalen Hurts, PHI",
          "QB: Aaron Rodgers, GB",
          "QB: Tom Brady, TB",
          "RB: Saquon Barkley, NYG",
          "RB: Christian McCaffrey, SF",
          "RB: Tony Pollard, DAL",
          "WR: A.J. Brown, PHI",
          "WR: Justin Jefferson, MIN",
          "WR: Cooper Kupp, LAR",
          "WR: CeeDee Lamb, DAL",
          "TE: Dallas Goedert, PHI",
          "TE: George Kittle, SF",
          "OT: Trent Williams, SF",
          "OT: Lane Johnson, PHI",
          "OT: Andrew Thomas, NYG",
          "OG: Chris Lindstrom, ATL",
          "OG: Zack Martin, DAL",
          "OG: Landon Dickerson, PHI",
          "C: Jason Kelce, PHI",
          "C: Frank Ragnow, DET",
          "IDL: Dexter Lawrence, NYG",
          "IDL: Aaron Donald, LAR",
          "IDL: Jonathan Allen, WAS",
          "DE: Nick Bosa, SF",
          "DE: Brian Burns, CAR",
          "DE: Josh Sweat, PHI",
          "OLB: Micah Parsons, DAL",
          "OLB: Rashan Gary, GB",
          "OLB: Za'Darius Smith, MIN",
          "ILB: Fred Warner, SF",
          "ILB: Bobby Wagner, LAR",
          "CB: James Bradberry, PHI",
          "CB: Patrick Peterson, MIN",
          "CB: Tariq Woolen, SEA",
          "CB: Jaycee Horn, CAR",
          "S: Tashaun Gipson Sr, SF",
          "S: Tyrann Mathieu, NO",
          "S: Talanoa Hufanga, SF"
        ],
        AFC: [
          "QB: Patrick Mahomes, KC",
          "QB: Joe Burrow, CIN",
          "QB: Trevor Lawrence, JAX",
          "RB: Nick Chubb, CLE",
          "RB: Rhamondre Stevenson, NE",
          "RB: Josh Jacobs, LV",
          "WR: Stefon Diggs, BUF",
          "WR: Tyreek Hill, MIA",
          "WR: Jaylen Waddle, MIA",
          "WR: Davante Adams, LV",
          "TE: Travis Kelce, KC",
          "TE: Mark Andrews, BAL",
          "OT: Laremy Tunsil, HOU",
          "OT: Terron Armstead, MIA",
          "OT: Orlando Brown Jr, KC",
          "OG: Joel Bitonio, CLE",
          "OG: Joe Thuney, KC",
          "OG: Michael Onwenu, NE",
          "C: Creed Humphrey, KC",
          "C: Mitch Morse, BUF",
          "IDL: Chris Jones, KC",
          "IDL: DeForest Buckner, IND",
          "IDL: Cameron Heyward, PIT",
          "DE: Myles Garrett, CLE",
          "DE: Maxx Crosby, LV",
          "DE: Denico Autry, TEN",
          "OLB: Matthew Judon, NE",
          "OLB: Jaelan Phillips, MIA",
          "OLB: Von Miller, BUF",
          "ILB: Matt Milano, BUF",
          "ILB: Roquan Smith, BAL",
          "CB: Sauce Gardner, NYJ",
          "CB: Pat Surtain II, DEN",
          "CB: D.J. Reed, NYJ",
          "CB: Marlon Humphrey, BAL",
          "S: Vonn Bell, CIN",
          "S: Derwin James Jr, LAC",
          "S: Juan Thornhill, KC"
        ]
      },  
      allRookie: [
        "QB: Brock Purdy, SF",
        "RB: Breece Hall, NYJ",
        "WR: Christian Watson, GB",
        "WR: Chris Olave, NO",
        "WR: Drake London, ATL",
        "TE: Isaiah Likely, BAL",
        "LT: Braxton Jones, CHI",
        "LG: Tyler Smith, DAL",
        "C: Tyler Linderbaum, BAL",
        "RG: Zion Johnson, LAC",
        "RT: Abraham Lucas, SEA",
        "EDGE: Aidan Hutchinson, DET",
        "IDL: Jordan Davis, PHI",
        "IDL: Devonte Wyatt, GB",
        "EDGE: Kayvon Thibodeaux, NYG",
        "ILB: Jack Sanborn, CHI",
        "ILB: Quay Walker, GB",
        "ILB: Devin Lloyd, JAX",
        "CB: Sauce Gardner, NYJ",
        "S: Jalen Pitre, HOU",
        "S: Rodney Thomas II, IND",
        "CB: Tariq Woolen, SEA"
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
      allRookie: [],
      notes: [
        "Note: I do not have my own OL ratings, so I have relied on AP, PFWA, and PFF.",
      ]
    }
};

const linkifyPlayer = (text) => {
  const [pos, rest] = text.split(": ");
  if (!rest) return text;

  const [name, team] = rest.split(", ");
  const unlinkedPositions = ["LT", "LG", "C", "RG", "RT", "HC", "OT", "OG"];

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
      <h1 className="text-3xl font-bold mb-4">🏆 Football Analytics Nerd Awards & All-Pro Teams</h1>

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

{yearData.allRookie && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">All-Rookie Team</h2>
          <ul className="list-disc list-inside">
            {yearData.allRookie.map((p, idx) => (
              <li key={idx}>{linkifyPlayer(p)}</li>
            ))}
          </ul>
        </div>
      )}



      {yearData.proBowl && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Pro Bowl (min. 9 GP)</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">NFC</h3>
              <ul className="list-disc list-inside">
                {yearData.proBowl.NFC.map((p, idx) => (
                  <li key={idx}>{linkifyPlayer(p)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">AFC</h3>
              <ul className="list-disc list-inside">
                {yearData.proBowl.AFC.map((p, idx) => (
                  <li key={idx}>{linkifyPlayer(p)}</li>
                ))}
              </ul>
            </div>
          </div>
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