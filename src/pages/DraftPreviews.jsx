import React, { useState } from "react";

const previews = {
  Lions: `NFL Draft Preview: #Lions
Picks: 28, 60, 102, 130, 196, 228, 244

Weaknesses: OG, EDGE, ILB
OG: They lost Kevin Zeitler in FA this offseason. Graham Glasgow also had a down year in 2024. Glasgow, 32, has no guaranteed money in 2026 and likely won't be part of their long-term plans. 
They took Christian Mahogany in the 6th round last year and he looked good in very limited action.
EDGE: They released Za'Darius Smith. Josh Paschal returns as an option, but he had a weak year. They brought back Marcus Davenport on a $2.5M contract. They certainly need to add here.
ILB: Jack Campbell will be one of the starters here long-term. Alex Anzalone is 30 and his contract expires at the end of the year. They could look to replace him.

Outside of the weaknesses above, they're loaded with star power at almost every position. They could also look to add a WR early. Some may point to CB, but they just paid Reed and drafted 
Arnold 24th and Rakestraw 61st last year. Arnold struggled, but truthfully he was put in a very tough spot for a rookie. They could also add to the IDL. D.J. Reader's contract expires at the 
end of the year.

Sample mock draft:
28. Nic Scourton, EDGE, Texas A&M
60. Alfred Collins, DT, Texas
102. Jackson Slater, OG, Sacramento State`,

  Commanders: `NFL Draft Preview: #Commanders
Picks: 29, 61, 128, 205, 245

Weaknesses: OT, OG, EDGE, S
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

  Bills: `NFL Draft Preview: #Bills
Picks: 30, 56, 62, 109, 132, 169, 170, 173, 177, 206

Weaknesses: WR, OG, DT, CB, S
WR: 854 vacated snaps from Mack Hollins, 319 vacated from Amari Cooper. They added Josh Palmer, and Keon Coleman should get a boost this season. Still, the group is weak on the outside.
OG: David Edwards' 2 year $6M contract expires at the end of the year. He's fine, but an improvement would be nice.
DT: DaQuan Jones was fine last season, but an impact guy to pair with Oliver would really help out this team. They added Ogunjobi, but that's really a rotational piece. Both guys' deals 
expire at the end of the season.
CB: 996 vacated snaps from Rasul Douglas. They didn't really address the hole in free agency. This is a pretty glaring need.
S: Both starters, Hamlin and Rapp, return. Both are on cheap deals, so it'd be nice to at least add some competition. They also took Bishop 60th last year, so a mid-round pick would 
probably suffice.

Since 2015, the Bills have selected the following positions in the 1st round: EDGE, CB, QB, ILB, DT, EDGE, CB, TE. Compared to other teams, they're more willing to draft 
non-premium positions.

Pick 30: "Weaknesses" aside, the Bills have one of the top 3 QBs in the NFL. They can trust Josh Allen to support an elite offense with what he currently has. Thus, we turn to the 
defensive side of the ball. This first round pick should probably be defensive line. I think they're weaker at DT than EDGE, but I could see either. CB or S is an option as well, 
but they just invested a lot of money in Benford and S in the first-round is questionable positional-value wise.

Picks 56, 62: Any of the weaknesses work here. They have a lot of options and can go pseudo-BPA. They could also theoretically trade Cook and go RB here if contract negotiations go south.

Sample mock draft:
30. Walter Nolen, DT, Ole Miss
56. Darien Porter, CB, Iowa State
62. Tate Ratledge, OG, Georgia`,

  Chiefs: `NFL Draft Preview: #Chiefs
Picks: 31, 63, 66, 95, 133, 226, 251, 257

Roster Holes:
RB – Clear weak spot
OT – Both Moore and Taylor have contracts the Chiefs can get out of relatively easily following the season.
OG – Kingsley was drafted 63rd last season and is still just 22 years old. I'd like to see them give him a shot here.
DT – Need a replacement for Wharton
S – Reid departed, but it seems the team is confident in Jaden Hicks, who looked very strong in 330 snaps last season

Since 2015, the Chiefs have selected the following positions in the 1st round: CB, QB, RB, CB, EDGE, EDGE, WR.

Pick 31: I'd expect either OL or IDL. They could take OG, but I'd like to see Kingsley get his shot. That leaves us with OT and IDL. Either would be very justifiable.

Picks 63, 66: Presumably, they'll have taken one of OT or IDL. That leaves them with holes at OT/IDL and RB. They could also look to add an EDGE here. I'd love to see them add an explosive back 
to pair with Pacheco's power. If they go OT round 1, they really need to add IDL here as well.

Sample mock draft:
31. Derrick Harmon, DT, Oregon
63. JT Tuimoloau, EDGE, Ohio State
66. Darien Porter, CB, Iowa State
95. Dylan Sampson, RB, Tennessee`,

  Eagles: `NFL Draft Preview: #Eagles
Draft Picks: 32, 64, 96, 134, 161, 164, 165, 168

Weaknesses: WR3, TE (if Goedert moved), OG, DE, EDGE, CB, S

At each of these weaknesses, the Eagles have young, unproven players (WR Dotson, OGs Steen, Green, DE Ojomo, EDGEs Hunt, Ojulari, Huff, CB Ringo, S Brown).

Over the next month, you will see a lot of mock drafts with the Eagles taking S. Here are the Eagles 1st round picks since 2015: WR, QB, DE, OT, WR, WR, DT, DE, EDGE, CB. So, don't 
hold your breath.

Pick 32: If they don't trade back, which is likely, I'd expect this to be used on either OL or DL. On OL, the team could look to take an OT and convert him to OG,
or just take an OG. With the rise in OG contracts, it has become a position "worthy" of selecting in the 1st-round from a salary cap standpoint. On DL, the team 
could look for either a DE or EDGE. CB is also "worthy" of 
being selected from a salary cap standpoint, but with Mitchell and DeJean playing at such a high level it may be a bit excessive for a first-round pick.

Pick 64 and on: The board opens up now. Eagles 2nd round picks since 2015: CB, CB, TE, RB, WR, QB, OG, C, NB. The team seemingly starts to prioritize their draft board over positional value here.

The Eagles excel at not having any "massive" needs heading into the draft. This year, there are probably a couple more question marks than normal.

2024 Snaps by "Weaknesses":

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
96. Jaylen Reed, S, Penn State `,
};

const DraftPreviews = () => {
    const [team, setTeam] = useState("");
  
    return (
      <div className="p-6 max-w-4xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-4">📘 NFL Draft Previews</h1>
  
        <select
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="mb-6 px-3 py-2 border rounded shadow bg-black text-white"
        >
          <option value="" disabled>
            Select a Team
          </option>
          {Object.keys(previews).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
  
        {team && (
          <pre className="whitespace-pre-wrap break-words text-lg leading-relaxed">
            {previews[team]}
          </pre>
        )}
      </div>
    );
  };
  
  export default DraftPreviews;
