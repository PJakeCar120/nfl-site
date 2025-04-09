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
      TE1: "Dallas Goedert",
      TE2: "Grant Calcaterra",
      LT: "Jordan Mailata",
      LG: "Landon Dickerson",
      C: "Cam Jurgens",
      RG: "Tyler Steen",
      RT: "Lane Johnson",
    },
    defense: {
      DT1: "Jalen Carter",
      NT: "Jordan Davis",
      DT2: "Mario Ojomo",
      EDGE1: "Nolan Smith",
      ILB1: "Zack Baun",
      ILB2: "Nakobe Dean",
      EDGE2: "Jalyx Hunt",
      CB1: "Quinyon Mitchell",
      FS: "Reed Blankenship",
      SS: "Sydney Brown",
      CB2: "Kelee Ringo",
      NB: "Cooper DeJean",
    },
    backups: [
      { position: "RB", name: "A.J. Dillon" },
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
      TE1: "Travis Kelce",
      TE2: "Noah Gray",
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
      FS: "Bryan Cook",
      SS: "Jaden Hicks",
      CB2: "Kristian Fulton",
      NB: "Chamarri Conner",
    },
    backups: [
      { position: "QB", name: "Gardner Minshew" },
      { position: "RB", name: "Kareem Hunt" },
      { position: "RB", name: "Elijah Mitchell" },
      { position: "WR", name: "JuJu Smith-Schuster" },
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
  Bills: {
    offense: {
      QB: "Josh Allen",
      RB: "James Cook",
      WR1: "Keon Coleman",
      WR2: "Josh Palmer",
      SWR: "Khalil Shakir",
      TE1: "Dawson Knox",
      TE2: "Dalton Kincaid",
      LT: "Dion Dawkins",
      LG: "David Edwards",
      C: "Connor McGovern",
      RG: "O'Cyrus Torrence",
      RT: "Spencer Brown",
    },
    defense: {
      EDGE1: "Greg Rousseau",
      DT1: "Ed Oliver",
      DT2: "DaQuan Jones",
      EDGE2: "Joey Bosa",
      ILB1: "Terrel Bernard",
      ILB2: "Matt Milano",
      CB1: "Christian Benford",
      FS: "Damar Hamlin",
      SS: "Taylor Rapp",
      CB2: "Dane Jackson",
      NB: "Taron Johnson",
    },
    backups: [
      { position: "RB", name: "Ty Johnson" },
      { position: "WR", name: "Curtis Samuel" },
      { position: "DT", name: "Larry Ogunjobi" },
      { position: "EDGE", name: "Michael Hoecht" },
      { position: "EDGE", name: "A.J. Epenesa" },
      { position: "ILB", name: "Dorian Williams" },
      { position: "NB", name: "Cam Lewis" },
      { position: "S", name: "Cole Bishop" },
    ],
    draftPreview: `NFL Draft Preview: Bills
  Picks: 30, 56, 62, 109, 132, 169, 170, 173, 177, 206
  
  Needs: WR, OG, DT, CB, S
  
  WR: 854 vacated snaps from Mack Hollins, 319 vacated from Amari Cooper. They added Josh Palmer, and Keon Coleman should get a boost this season. Still, the group could use help on the outside.
  
  OG: David Edwards' 2 year $6M contract expires at the end of the year. He's fine, but an improvement would be nice.
  
  DT: DaQuan Jones was fine last season, but an impact guy to pair with Oliver would really help out this team. They added Ogunjobi, but that's really a rotational piece. Both guys' deals 
  expire at the end of the season.
  
  CB: 996 vacated snaps from Rasul Douglas. They didn't really address the hole in free agency. This is a pretty glaring need.
  
  S: Both starters, Hamlin and Rapp, return. Both are on cheap deals, so it'd be nice to at least add some competition. They also took Bishop 60th last year, so a mid-round pick would probably 
  suffice.
  
  Since 2015, the Bills have selected the following positions in the 1st round: EDGE, CB, QB, ILB, DT, EDGE, CB, TE. Compared to other teams, they're more willing to draft non-premium positions.
  
  Pick 30: "Needs" aside, the Bills have one of the top QBs in the NFL. They can trust Josh Allen to support an elite offense with what he currently has. Thus, we turn to the defensive side of 
  the ball. This first round pick should probably be defensive line. I think they have a bigger need at DT than EDGE, but I could see either. CB or S is an option as well, but they just invested 
  a lot of money in Benford and S in the first-round is questionable positional-value wise.
  
  Picks 56, 62: Any of the needs work here. They have a lot of options and can go pseudo-BPA. They could also theoretically trade Cook and go RB here if contract negotiations go south.
  
  Sample mock draft:
  30. Walter Nolen, DT, Ole Miss
  56. Darien Porter, CB, Iowa State
  62. Tate Ratledge, OG, Georgia`,
  },  
  Commanders: {
    offense: {
      QB: "Jayden Daniels",
      RB: "Brian Robinson",
      WR1: "Terry McLaurin",
      WR2: "Deebo Samuel",
      SWR: "Luke McCaffrey",
      TE1: "Zach Ertz",
      TE2: "John Bates",
      LT: "Laremy Tunsil",
      LG: "Nick Allegretti",
      C: "Tyler Biadasz",
      RG: "Sam Cosmi",
      RT: "Andrew Wylie",
    },
    defense: {
      EDGE1: "Dorance Armstrong",
      DT1: "Daron Payne",
      DT2: "Javon Kinlaw",
      EDGE2: "Clelin Ferrell",
      ILB1: "Bobby Wagner",
      ILB2: "Frankie Luvu",
      CB1: "Mike Sainristil",
      FS: "Quan Martin",
      SS: "Will Harris",
      CB2: "Marshon Lattimore",
      NB: "Noah Igbinoghene",
    },
    backups: [
      { position: "QB", name: "Marcus Mariota" },
      { position: "RB", name: "Austin Ekeler" },
      { position: "WR", name: "Noah Brown" },
      { position: "WR", name: "K.J. Osborn" },
      { position: "DT", name: "Jer'Zhan Newton" },
      { position: "DT", name: "Eddie Goldman" },
      { position: "EDGE", name: "Deatrich Wise Jr." },
      { position: "EDGE", name: "Jacob Martin" },
      { position: "S", name: "Percy Butler" },
      { position: "NB", name: "Jonathan Jones" },
    ],
    draftPreview: `NFL Draft Preview: Commanders
  Picks: 29, 61, 128, 205, 245
  
  Needs: OT, OG, EDGE, S
  
  OT: Wylie is a weak starter. At 31 years old, his contract expires at the end of the season. How Washington sees Coleman will affect this.
  
  OG: Allegretti is a below-average starter. He's 29 years old, and just signed with Washington for 3 years, $16M last year. He has no guaranteed money in 2026.
  
  EDGE: This may be the weakest EDGE room in the entire NFL. Armstrong is a fine starter. Outside of him they essentially have nothing. They better address the position early.
  
  S: They lost Chinn (1209 snaps) and didn't bring in a legitimate replacement. They'll have to add someone here.
  
  Pick 29: Offensive line or defensive line. I'll say it for most teams, but especially in Washington's case they badly need it. Wylie and Allegretti aren't terrible, but they aren't long-term 
  solutions either – Is Coleman? The EDGE room is terrible.
  
  Pick 61: More of the same. They need to add to the lines. They could look S here too. If they go EDGE R1, I could also see them adding a weapon here for Daniels. He loves Ertz, but Ertz is 34. 
  That will also depend on Sinnott's development. Deebo may only be a one-year stopgap as well, so WR is in play. Even RB is possible if someone slips.
  
  Sample mock draft:
  29: Mike Green, EDGE, Marshall
  61. Marcus Mbow, OG, Purdue`,
  },

  Lions: {
    offense: {
      QB: "Jared Goff",
      RB: "Jahmyr Gibbs",
      WR1: "Jameson Williams",
      WR2: "Tim Patrick",
      SWR: "Amon-Ra St. Brown",
      TE1: "Sam Laporta",
      TE2: "Brock Wright",
      LT: "Taylor Decker",
      LG: "Graham Glasgow",
      C: "Frank Ragnow",
      RG: "Christian Mahogany",
      RT: "Penei Sewell",
    },
    defense: {
      EDGE1: "Aidan Hutchinson",
      NT: "DJ Reader",
      DT: "Alim McNeill",
      EDGE2: "Josh Paschal",
      ILB1: "Jack Campbell",
      ILB2: "Alex Anzalone",
      CB1: "Terrion Arnold",
      FS: "Kerby Joseph",
      SS: "Brian Branch",
      CB2: "D.J. Reed",
      NB: "Amik Robertson",
    },
    backups: [
      { position: "RB", name: "David Montgomery" },
      { position: "WR", name: "Kalif Raymond" },
      { position: "DT", name: "Levi Onwuzurike" },
      { position: "NT", name: "Roy Lopez" },
      { position: "EDGE", name: "Al-Quadin Muhammad" },
      { position: "ILB", name: "Malcolm Rodriguez" },
      { position: "CB", name: "Ennis Rakestraw Jr." },
      { position: "NB", name: "Avonte Maddox" },
    ],
    draftPreview: `NFL Draft Preview: Lions
  Picks: 28, 60, 102, 130, 196, 228, 244
  
  Needs: OG, EDGE, ILB
  
  OG: They lost Kevin Zeitler in FA this offseason. Graham Glasgow also had a down year in 2024. Glasgow, 32, has no guaranteed money in 2026 and likely won't be part of their long-term plans. 
  They took Christian Mahogany in the 6th round last year and he looked good in very limited action.
  
  EDGE: They released Za'Darius Smith. Josh Paschal returns as an option, but he had a weak year. They brought back Marcus Davenport on a $2.5M contract. They certainly need to add here.
  
  ILB: Jack Campbell will be one of the starters here long-term. Alex Anzalone is 30 and his contract expires at the end of the year. They could look to replace him.
  
  Outside of the needs above, they're loaded with star power at almost every position. They could also look to add a WR early. Some may point to CB, but they just paid Reed and drafted 
  Arnold 24th and Rakestraw 61st last year. Arnold struggled, but truthfully he was put in a very tough spot for a rookie. They could also add to the IDL. D.J. Reader's contract expires at the 
  end of the year.
  
  Sample mock draft:
  28. Nic Scourton, EDGE, Texas A&M
  60. Alfred Collins, DT, Texas
  102. Jackson Slater, OG, Sacramento State`,
  },
  Ravens: {
    offense: {
      QB: "Lamar Jackson",
      RB: "Derrick Henry",
      WR1: "Rashod Bateman",
      WR2: "DeAndre Hopkins",
      SWR: "Zay Flowers",
      TE1: "Mark Andrews",
      TE2: "Isaiah Likely",
      LT: "Ronnie Stanley",
      LG: "Andrew Vorhees",
      C: "Tyler Linderbaum",
      RG: "Daniel Faalele",
      RT: "Roger Rosengarten",
    },
    defense: {
      DT1: "Nnamdi Madubuike",
      NT: "Travis Jones",
      DT2: "Broderick Washington",
      EDGE1: "Kyle Van Noy",
      ILB1: "Roquan Smith",
      ILB2: "Trenton Simpson",
      EDGE2: "Odafe Oweh",
      CB1: "Nate Wiggins",
      FS: "Kyle Hamilton",
      SS: "Ar'Darius Washington",
      CB2: "Chidobe Awuzie",
      NB: "Marlon Humphrey",
    },
    backups: [
      { position: "QB", name: "Cooper Rush" },
      { position: "RB", name: "Justice Hill" },
      { position: "FB", name: "Patrick Ricard" },
      { position: "WR", name: "Tylan Wallace" },
      { position: "OG", name: "Ben Cleveland" },
      { position: "EDGE", name: "Tavius Robinson" },
      { position: "EDGE", name: "David Ojabo" },
    ],
    draftPreview: `NFL Draft Preview: Ravens
  Picks: 27, 59, 91, 129, 136, 176, 183, 203, 210, 212, 243
  
  Needs: WR, OG, DLine, ILB, CB
  
  WR: Nelson Agholor vacates 466 snaps. They signed DeAndre Hopkins to a 1 year $5M deal, but long-term they need a replacement on the outside.
  
  OG: They're pretty weak at both spots here after losing Patrick Mekari.
  
  DLine: No team rotates defensive line quite like the Ravens. They have 2 studs at IDL with 27 year-old Madubuike (my #14/102 qualifying IDL) and 25 year-old Jones (#33/102). 
  They played Broderick Washington 490 snaps and he graded as my #84/102 IDL, so an improvement there would be nice. EDGE-wise, 34 year-old Van Noy (#29/115) and Oweh (#30/115) both had strong years. 
  Tavius Robinson (#101/115) played 548 snaps, so some competition would be nice. Of course, Baltimore could just be more restrictive with their snaps next season.
  
  ILB: Some competition for Trenton Simpson would be nice after they benched him late last season.
  
  CB: Last year's rookie Nate Wiggins had a fantastic rookie year (my #19/116 CBs), so he'll be a strength. Marlon Humphrey will man the nickel, and they'll need a replacement at outside CB 
  for Brandon Stephens' 1135 vacated snaps. They signed 30 year-old Chidobe Awuzie in free agency so they have a competent option, but surely they'll be looking for something more long-term. 
  Also important to remember they play in a division with Chase, Higgins, Metcalf, Pickens, and Jeudy.
  
  First Round Pick History under Eric DeCosta: WR, ILB, WR, EDGE, S, C, WR, CB
  
  Quick note: I see a lot of sites with Safety listed as a need. I had 25 year-old Ar'Darius Washington as my #30 ranked S last year, so I disagree pretty strongly on that front.
  
  Sample mock draft:
  27. Shavon Revel, CB, East Carolina
  59. Jonah Savaiinaea, OG, Arizona
  91. Kyle Kennard, EDGE, South Carolina`,
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
                    const unlinkedBackupPositions = ["FB", "OT", "OG", "C"];
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