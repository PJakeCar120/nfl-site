import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";


const teams = {
  Eagles: {
    offense: {
      QB: "Jalen Hurts",
      RB: "Saquon Barkley",
      WR1: "A.J. Brown",
      WR2: "Jahan Dotson",
      SWR: "Devonta Smith",
      TE: "Dallas Goedert",
      LT: "Jordan Mailata",
      LG: "Landon Dickerson",
      C: "Cam Jurgens",
      RG: "Tyler Steen",
      RT: "Lane Johnson",
    },
    defense: {
      NT: "Jordan Davis",
      DT1: "Jalen Carter",
      DT2: "Mario Ojomo",
      EDGE1: "Nolan Smith Jr.",
      EDGE2: "Jalyx Hunt",
      ILB1: "Zach Baun",
      ILB2: "Nakobe Dean",
      CB1: "Quinyon Mitchell",
      CB2: "Kelee Ringo",
      NB: "Cooper DeJean",
      S1: "Reed Blankenship",
      S2: "Sydney Brown",
    },
    backups: [
      { position: "RB", name: "A.J. Dillon" },
      { position: "TE", name: "Grant Calcaterra" },
      { position: "OG", name: "Kenyon Green" },
      { position: "EDGE", name: "Bryce Huff" },
      { position: "EDGE", name: "Azeez Ojulari" },
      { position: "CB", name: "Adoree' Jackson" }
    ],
    draftPreview: `NFL Draft Preview: Eagles
Draft Picks: 32, 64, 96, 134, 161, 164, 165, 168

Needs: WR3, TE (if Goedert moved), OG, DE, EDGE, CB, S

At each of these needs, the Eagles have young, unproven players (WR Dotson, OGs Steen, Green, DE Ojomo, EDGEs Hunt, Ojulari, Huff, CB Ringo, S Brown).

Over the next month, you will see a lot of mock drafts with the Eagles taking S. Here are the Eagles 1st round picks since 2015: WR, QB, DE, OT, WR, WR, DT, DE, EDGE, CB. So, don't hold your breath.

Pick 32: If they don't trade back, which is likely, I'd expect this to be used on either OL or DL. On OL, the team could look to take an OT and convert him to OG, or just take an OG. 
OG contracts, it has become a position "worthy" of selecting in the 1st-round from a salary cap standpoint. On DL, the team could look for either a DE or EDGE. CB is also "worthy" of being selected 
from a salary cap standpoint, but with Mitchell and DeJean playing at such a high level it may be a bit excessive for a first-round pick.

Pick 64 and on: The board opens up now. Eagles 2nd round picks since 2015: CB, CB, TE, RB, WR, QB, OG, C, NB. The team seemingly starts to prioritize their draft board over positional value here.

The Eagles excel at not having any "massive" needs heading into the draft. This year, there are probably a couple more question marks than normal.

2024 Snaps by "Needs":
WR3 Dotson: 674
OG Steen: 315, Green: 592
DE Ojomo: 388
EDGE Hunt: 240, Ojulari: 391, Huff: 285
CB Ringo: 113
S Brown: 80 (2023: 334)

While the team has some young question marks, it should remain incredibly strong with superstar talent throughout the roster.

Sample mock draft:
32. Mike Green, EDGE, Marshall
64. Omarr Norman-Lott, DT, Tennessee
96. Jaylen Reed, S, Penn State`,
  },

  Chiefs: {
    offense: {
      QB: "Patrick Mahomes",
      RB: "Isiah Pacheco",
      WR1: "Xavier Worthy",
      WR2: "Marquise Brown",
      SWR: "Rashee Rice",
      TE: "Travis Kelce",
      LT: "Jaylon Moore",
      LG: "Kingsley Suamataia",
      C: "Creed Humphrey",
      RG: "Trey Smith",
      RT: "Jawaan Taylor",
    },
    defense: {
      EDGE1: "George Karlaftis",
      DT1: "Chris Jones",
      DT2: "Mike Pennel",
      EDGE2: "Mike Danna",
      ILB1: "Nick Bolton",
      ILB2: "Drue Tranquill",
      CB1: "Trent McDuffie",
      CB2: "Kristian Fulton",
      NB: "Chamarri Conner",
      S1: "Bryan Cook",
      S2: "Jaden Hicks",
    },
    backups: [
      { position: "QB", name: "Gardner Minshew" },
      { position: "RB", name: "Kareem Hunt" },
      { position: "RB", name: "Elijah Mitchell" },
      { position: "WR", name: "JuJu Smith-Schuster" },
      { position: "TE", name: "Noah Gray" },
      { position: "DT", name: "Jerry Tillery" },
      { position: "EDGE", name: "Charles Omenihu" },
      { position: "EDGE", name: "Felix Anudike-Uzomah" },
      { position: "ILB", name: "Leo Chenal" },
      { position: "CB", name: "Jaylen Watson" },
      { position: "S", name: "Mike Edwards" },
      { position: "CB", name: "Nazeeh Johnson" },
    ],
    draftPreview: `NFL Draft Preview: Chiefs
Picks: 31, 63, 66, 95, 133, 226, 251, 257

Needs:
RB: Clear weak spot
OT: Both Moore and Taylor have contracts the Chiefs can get out of relatively easily following the season.
OG: Kingsley was drafted 63rd last season and is still just 22 years old. I'd like to see them give him a shot here.
DT: Need a replacement for Wharton
S: Reid departed, but it seems the team is confident in Jaden Hicks, who looked very strong in 330 snaps last season

Since 2015, the Chiefs have selected the following positions in the 1st round: CB, QB, RB, CB, EDGE, EDGE, WR.

Pick 31: I'd expect either OL or IDL. They could take OG, but I'd like to see Kingsley get his shot. That leaves us with OT and IDL. Either would be very justifiable.

Picks 63, 66: Presumably, they'll have taken one of OT or IDL. That leaves them with holes at OT/IDL and RB. They could also look to add an EDGE here. I'd love to see them add an explosive back 
to pair with Pacheco's power. If they go OT round 1, they really need to add IDL here as well.

Sample mock draft:
31. Derrick Harmon, DT, Oregon
63. JT Tuimoloau, EDGE, Ohio State
66. Darien Porter, CB, Iowa State
95. Dylan Sampson, RB, Tennessee`,
  },
};

export default function TeamLineup() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialTeam = searchParams.get("team") || "";
    const [selectedTeam, setSelectedTeam] = useState(initialTeam);
  
    useEffect(() => {
      if (selectedTeam) {
        setSearchParams({ team: selectedTeam });
      }
    }, [selectedTeam, setSearchParams]);
  
    const renderTable = (title, starters) => {
      const unlinkedPositions = ["LT", "LG", "C", "RG", "RT"];
      return (
        Object.keys(starters).length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left border border-gray-300">Position</th>
                  <th className="p-3 text-left border border-gray-300">Player</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(starters).map(([position, player]) => (
                  <tr key={position}>
                    <td className="p-3 border border-gray-300">{position}</td>
                    <td className="p-3 border border-gray-300">
                      {unlinkedPositions.includes(position) ? (
                        <span className="text-gray-800">{player}</span>
                      ) : (
                        <Link
                          to={`/playersearch?name=${encodeURIComponent(player)}`}
                          className="text-blue-600 hover:underline"
                        >
                          {player}
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      );
    };
  
    return (
      <div className="p-6 max-w-5xl mx-auto">
        {/* Dropdown Selector */}
        <div className="flex justify-center mb-4">
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="p-2 border rounded text-lg"
          >
            <option value="" disabled>Select a Team</option>
            {Object.keys(teams).sort().map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
  
        {/* Only render if a team is selected */}
        {selectedTeam && (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center">
              {selectedTeam} Starting Lineup
            </h1>
  
            {renderTable("Offense", teams[selectedTeam].offense)}
            {renderTable("Defense", teams[selectedTeam].defense)}
  
            {teams[selectedTeam].backups.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Notable Backups</h2>
                <ul className="list-disc list-inside space-y-1 text-blue-600">
                  {teams[selectedTeam].backups.map(({ position, name }) => {
                    const unlinkedBackupPositions = ["OT", "OG", "C"];
                    return (
                      <li key={name}>
                        {unlinkedBackupPositions.includes(position) ? (
                          <span className="text-gray-800">
                            {position} — {name}
                          </span>
                        ) : (
                          <Link
                            to={`/playersearch?name=${encodeURIComponent(name)}`}
                            className="hover:underline"
                          >
                            {position} — {name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
  
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">NFL Draft Preview: {selectedTeam}</h2>
              <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 border border-gray-200 rounded">
                {teams[selectedTeam].draftPreview}
              </pre>
            </div>
          </>
        )}
      </div>
    );
  }