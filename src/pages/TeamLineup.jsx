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

  Rams: {
    offense: {
      QB: "Matthew Stafford",
      RB: "Kyren Williams",
      WR1: "Puka Nacua",
      WR2: "Davante Adams",
      SWR: "Tutu Atwell",
      TE1: "Tyler Higbee",
      TE2: "Colby Parkinson",
      LT: "Alaric Jackson",
      LG: "Steve Avila",
      C: "Beaux Limmer",
      RG: "Kevin Dotson",
      RT: "Rob Havenstein",
    },
    defense: {
      DT1: "Kobie Turner",
      NT: "Poona Ford",
      DT2: "Braden Fiske",
      EDGE1: "Jared Verse",
      ILB1: "Omar Speights",
      ILB2: "Nate Landman",
      EDGE2: "Byron Young",
      CB1: "Darious Williams",
      FS: "Kamren Kinchens",
      SS: "Kam Curl",
      CB2: "Cobie Durant",
      NB: "Quentin Lake",
    },
    backups: [
      { position: "QB", name: "Jimmy Garoppolo" },
      { position: "WR", name: "Jordan Whittington" },
      { position: "TE", name: "Davis Allen" },
      { position: "C", name: "Coleman Shelton" },
      { position: "NT", name: "Tyler Davis" },
      { position: "S", name: "Jaylen McCollough" }
    ],
    draftPreview: `NFL Draft Preview: Rams
  Picks: 26, 90, 101, 127, 190, 195, 201, 202
  
  Needs: TE, OT, EDGE, ILB, CB
  
  TE: 32 year-old Tyler Higbee's contract expires after this season. Colby Parkinson has no guaranteed money after this season, as well. 
  
  OT: Preferential decision here. They just locked up Alaric Jackson long-term. 32 year-old Rob Havenstein's contract expires after this season, but he's still playing at a high level. 
  They could extend Havenstein or opt to look for a new, long-term solution. 
  
  EDGE: Michael Hoecht left in Free Agency, vacating 705 snaps. They haven't brought in anyone to replace him. 
  
  ILB: Christian Rozeboom left in Free Agency, vacating 956 snaps. They replaced him with Nate Landman, but this is quite a weak group with Landman and Speights. 
  
  CB: I happen to be higher on this CB group than most, ranking Darious Williams 37th and Cobie Durant 14th among CBs in 2024. Still, the 32 year-old Williams has no guaranteed money past 
  this season and Ahkello Witherspoon, who played 599 snaps last season, was my 86th ranked CB. 
  
  First Round Pick History under Les Snead: EDGE, WR, ILB, OT, IDL, RB, QB, EDGE
  
  Sample mock draft:
  26. Josh Simmons, OT, Ohio State
  90. Jacob Parrish, CB, Kansas State
  101. Jared Ivey, EDGE, Ole Miss`
  },
  
  Texans: {
    offense: {
      QB: "C.J. Stroud",
      RB: "Joe Mixon",
      WR1: "Nico Collins",
      WR2: "Tank Dell",
      SWR: "Christian Kirk",
      TE1: "Dalton Schultz",
      TE2: "Brevin Jordan",
      LT: "Cam Robinson",
      LG: "Laken Tomlinson",
      C: "Juice Scruggs",
      RG: "Tytus Howard",
      RT: "Blake Fisher",
    },
    defense: {
      EDGE1: "Danielle Hunter",
      DT1: "Sheldon Rankins",
      DT2: "Tim Settle",
      EDGE2: "Will Anderson Jr.",
      ILB1: "Henry To'oTo'o",
      ILB2: "Azeez Al-Shaair",
      CB1: "Derek Stingley Jr.",
      FS: "Calen Bullock",
      SS: "C.J. Gardner-Johnson",
      CB2: "Kamari Lassiter",
      NB: "Jalen Pitre",
    },
    backups: [
      { position: "WR", name: "Justin Watson" },
      { position: "WR", name: "John Metchie" },
      { position: "OT", name: "Trent Brown" },
      { position: "C", name: "Jarrett Patterson" },
      { position: "DT", name: "Mario Edwards Jr." },
      { position: "EDGE", name: "Derek Barnett" },
      { position: "EDGE", name: "Darrell Taylor" },
      { position: "ILB", name: "E.J. Speed" },
      { position: "CB", name: "Ronald Darby" },
      { position: "S", name: "Jimmie Ward" },
    ],
    draftPreview: `NFL Draft Preview: Texans
  Picks: 25, 58, 79, 89, 166, 236, 241
  
  Needs: RB, WR, OL, IDL
  
  RB: Joe Mixon is already 28 and has no guaranteed money in 2026. They could look to add a backup this season to eventually take over.
  
  WR: Outside of Nico Collins, the future of the WR room is very much in doubt. Christian Kirk's contract expires following this season, and we don't know when or even if Tank Dell will be healthy 
  again. For this season, they'll need another outside WR with Collins being one and Kirk in the slot.
  
  OL: Given Tytus Howard and Juice Scruggs' abilities to play multiple positions, this is a sort of "combo need" for Houston. With that being said, here is how I see the Texans' most optimal path 
  forward at OL: draft good players. Cam Robinson, Tytus Howard, Blake Fisher, and Juice Scruggs are all passable starters.
  
  IDL: I'm a big fan of the veteran IDL on Houston, with my model having the following ranks among IDL: Rankins #26, Settle #27, and Edwards #34. Still, all 3 are on the older side with contracts 
  expiring this year except for Edwards on a two-year deal.
  
  First Round Pick History under Nick Caserio: CB, OG, QB, EDGE
  
  Mock Draft:
  25. Josh Simmons, OT, Ohio State
  58. Tate Ratledge, OG, Georgia
  79. Shemar Turner, DT, Texas A&M
  89. Savion Williams, WR, TCU
  
  Possible starting OL with this mock draft:
  LT: Cam Robinson
  LG: Tytus Howard
  C: Juice Scruggs
  RG: Tate Ratledge
  RT: Josh Simmons
  
  Blake Fisher could also start over Cam Robinson, with Simmons at LT and Fisher at RT.`,
  },
  Vikings: {
    offense: {
      QB: "J.J. McCarthy",
      RB: "Aaron Jones",
      WR1: "Justin Jefferson",
      WR2: "Jordan Addison",
      SWR: "Jalen Nailor",
      TE1: "T.J. Hockenson",
      TE2: "Josh Oliver",
      LT: "Christian Darrisaw",
      LG: "Blake Brandel",
      C: "Ryan Kelly",
      RG: "Will Fries",
      RT: "Brian O'Neill",
    },
    defense: {
      DT1: "Jonathan Allen",
      NT: "Harrison Phillips",
      DT2: "Javon Hargrave",
      EDGE1: "Jonathan Greenard",
      ILB1: "Blake Cashman",
      ILB2: "Ivan Pace Jr.",
      EDGE2: "Andrew Van Ginkel",
      CB1: "Byron Murphy Jr.",
      FS: "Josh Metellus",
      SS: "Harrison Smith",
      CB2: "Isaiah Rodgers",
      NB: "Tavierre Thomas",
    },
    backups: [
      { position: "RB", name: "Jordan Mason" },
      { position: "SWR", name: "Rondale Moore" },
      { position: "DT", name: "Jalen Redmond" },
      { position: "EDGE", name: "Dallas Turner" },
      { position: "CB", name: "Jeff Okudah" },
      { position: "S", name: "Theo Jackson" },
    ],
    draftPreview: `NFL Draft Preview: Vikings
  Picks: 24, 97, 139, 187
  
  Needs: OG, IDL, NB/S
  
  OG: Blake Brandel really struggled last season. An improvement would be hugely beneficial. This is the only significant need on offense.
  
  IDL: Harrison Phillips has no guaranteed money after this season and has struggled the past few years, ranking #78 among IDL in my model in 2024.
  
  NB/S: Camryn Bynum walked, vacating 1060 snaps. They'll have a hole at one of these positions, depending on where they play Josh Metellus. I’m assuming that they will 
  keep Murphy Jr. on the outside this year, however.
  
  Note: Many will point to CB as a need. I had Isaiah Rodgers, who was very solid in limited reps, as my #43 CB last season. I think he’ll be solid in the CB2 role this year.
  
  First Round Pick History under Kwesi Adofo-Mensah: S, WR, QB, EDGE
  
  I don’t attempt to predict draft day trades, but I do think it would make a lot of sense for Minnesota to move down this year.
  
  Mock Draft:
  24. Nick Emmanwori, S, South Carolina
  97. Deone Walker, IDL, Kentucky`
  },
  Packers: {
    offense: {
      QB: "Jordan Love",
      RB: "Josh Jacobs",
      WR1: "Romeo Doubs",
      WR2: "Christian Watson",
      SWR: "Jayden Reed",
      TE1: "Tucker Kraft",
      TE2: "Luke Musgrave",
      LT: "Rasheed Walker",
      LG: "Aaron Banks",
      C: "Elgton Jenkins",
      RG: "Sean Rhyan",
      RT: "Zach Tom",
    },
    defense: {
      EDGE1: "Rashan Gary",
      DT1: "Kenny Clark",
      DT2: "Devonte Wyatt",
      EDGE2: "Kingsley Enagbare",
      ILB1: "Quay Walker",
      ILB2: "Edgerrin Cooper",
      CB1: "Jaire Alexander",
      FS: "Evan Williams",
      SS: "Xavier McKinney",
      CB2: "Keisean Nixon",
      NB: "Nate Hobbs",
    },
    backups: [
      { position: "QB", name: "Malik Willis" },
      { position: "WR", name: "Dontayvion Wicks" },
      { position: "SWR", name: "Mecole Hardman" },
      { position: "OL", name: "Jordan Morgan" },
      { position: "DT", name: "Karl Brooks" },
      { position: "EDGE", name: "Lukas Van Ness" },
      { position: "EDGE", name: "Colby Wooden" },
      { position: "EDGE", name: "Brenton Cox Jr." },
      { position: "ILB", name: "Isaiah McDuffie" },
      { position: "CB", name: "Carrington Valentine" },
      { position: "S", name: "Javon Bullard" },
    ],
    draftPreview: `NFL Draft Preview: Packers
  Picks: 23, 54, 87, 124, 159, 198, 237, 250
  
  Needs: WR, IDL, EDGE, CB
  
  WR: Jayden Reed graded out as my #26 WR last season, so he’ll confidently man the slot next season. However, they’re weak on the outside. Christian Watson was my #25, but he’ll likely miss time 
  and has generally struggled to stay on the field. Romeo Doubs was my #35, and Dontayvion Wicks struggled, ranking #63. They have depth here, but they could use a more dominant outside WR.
  
  IDL: The Packers are still looking for a more consistent piece next to Kenny Clark. Personally, I like Devonte Wyatt, who graded as my #16 DT in 2023 and didn’t play enough in 2024 to qualify. 
  Unfortunately, the Packers don’t seem as convinced as I am.
  
  EDGE: Another place where they are looking for more consistency across from Rashan Gary. Kingsley Enagbare graded as my #80 EDGE last season, and Lukas Van Ness was my #86 EDGE, so I 
  wouldn’t hold my breath on a breakout season.
  
  CB: I’m going to make the safe assumption that Jaire Alexander will not be a Packer next season. That leaves the Packers with Keisean Nixon and Carrington Valentine on the outside. I’m actually 
  a big fan of both, with Nixon as my #22 CB last season and Valentine as my #27. Still, they’ll want to add another guy here.
  
  First Round Pick History under Brian Gutekunst: CB, EDGE, S, QB, CB, ILB, IDL, EDGE, OG
  
  Sample Mock Draft:
  23. Walter Nolen, IDL, Ole Miss
  54. J.T. Tuimoloau, EDGE, Ohio State
  87. Savion Williams, WR, TCU`,
  },
  
  Chargers: {
    offense: {
      QB: "Justin Herbert",
      RB: "Najee Harris",
      WR1: "Quentin Johnston",
      WR2: "Mike Williams",
      SWR: "Ladd McConkey",
      TE1: "Will Dissly",
      TE2: "Tyler Conklin",
      LT: "Rashawn Slater",
      LG: "Zion Johnson",
      C: "Bradley Bozeman",
      RG: "Mekhi Becton",
      RT: "Joe Alt",
    },
    defense: {
      DT1: "Da'Shawn Hand",
      NT: "Teair Tart",
      DT2: "Otito Ogbonnia",
      EDGE1: "Khalil Mack",
      ILB1: "Daiyan Henley",
      ILB2: "Denzel Perryman",
      EDGE2: "Tuli Tuipulotu",
      CB1: "Donte Jackson",
      FS: "Alohi Gilman",
      SS: "Derwin James Jr",
      CB2: "Tarheeb Still",
      NB: "Cam Hart",
    },
    backups: [
      { position: "OG", name: "Trey Pipkins" },
      { position: "C", name: "Andre James" },
      { position: "DT", name: "Scott Matlock" },
      { position: "EDGE", name: "Bud Dupree" },
      { position: "ILB", name: "Junior Colson" },
      { position: "ILB", name: "Troy Dye" },
      { position: "CB", name: "Benjamin St-Juste" },
      { position: "CB", name: "Ja'Sir Taylor" },
      { position: "S", name: "Elijah Molden" },
      { position: "S", name: "Tony Jefferson" },
    ],
    draftPreview: `NFL Draft Preview: Chargers
  Picks: 22, 55, 86, 125, 158, 181, 199, 209, 214, 256
  
  Needs: RB, WR, IOL, IDL, EDGE
  
  RB: The Chargers thrive on running the ball, so they’ll want to add a compliment and successor to Najee Harris. Luckily, this is a deep draft, so they’ll have plenty of options.
  
  WR: Slot WR Ladd McConkey will be their top target again next year. Quentin Johnston showed massive improvement this season, going from my #91 WR as a rookie to #22 this year. Still, they’ll 
  need another Outside WR after vacating 616 snaps from Josh Palmer.
  
  IOL: The Chargers could opt to find a long-term replacement for Bradley Bozeman. Because Zion Johnson has the ability to move to Center, this means they could draft either a Center or Guard.
  
  IDL: This group could use a lot of work. The projected starters ranked the following in my model last season among IDL: Da’Shawn Hand #71, Teair Tart #44, Otito Ogbonnia #81. Furthermore, not a 
  single one is signed past this season. I think this is by far the weakest position group on the team.
  
  EDGE: Joey Bosa left in Free Agency, vacating 502 snaps. They haven’t added a replacement, so they’ll need another rotational EDGE at some point.
  
  The Chargers could also add a TE or CB early. Really, they’re looking at straight BPA. For a playoff team, they have quite a few holes.
  
  First Round Pick History under Joe Hortiz: OT
  
  Sample Mock Draft:
  22. Kenneth Grant, IDL, Michigan
  55. TreVeyon Henderson, RB, Ohio State
  86. Kyle Kennard, EDGE, South Carolina`
  },

  Steelers: {
    offense: {
      QB: "Mason Rudolph",
      RB: "Jaylen Warren",
      WR1: "DK Metcalf",
      WR2: "George Pickens",
      SWR: "Calvin Austin",
      TE1: "Pat Freiermuth",
      TE2: "Darnell Washington",
      LT: "Broderick Jones",
      LG: "Isaac Seumalo",
      C: "Zach Frazier",
      RG: "Mason McCormick",
      RT: "Troy Fautanu",
    },
    defense: {
      DT1: "Cameron Heyward",
      NT: "Keeanu Benton",
      DT2: "Isaiahh Loudermilk",
      EDGE1: "T.J. Watt",
      ILB1: "Patrick Queen",
      ILB2: "Payton Wilson",
      EDGE2: "Alex Highsmith",
      CB1: "Joey Porter Jr.",
      FS: "Minkah Fitzpatrick",
      SS: "Deshon Elliott",
      CB2: "Darius Slay",
      NB: "Beanie Bishop Jr.",
    },
    backups: [
      { position: "RB", name: "Kenneth Gainwell" },
      { position: "NT", name: "Montravious Adams" },
      { position: "EDGE", name: "Nick Herbig" },
      { position: "ILB", name: "Malik Harrison" },
      { position: "ILB", name: "Cole Holcomb" },
      { position: "CB", name: "Brandin Echols" },
      { position: "S", name: "Juan Thornhill" },
    ],
    draftPreview: `NFL Draft Preview: Steelers
  Picks: 21, 83, 123, 156, 185, 229
  
  Needs: QB, RB, OG, IDL
  
  QB: Their Quarterback next season may very well be Aaron Rodgers, but regardless he was my #17 rated QB last season and is already 41 years old.
  
  RB: Najee Harris left in Free Agency, vacating 590 snaps. Backup Jaylen Warren was my #48 rated RB last season.
  
  OG: Mason McCormick is very replaceable as a starter, while Isaac Seumalo’s contract expires at the end of the season.
  
  IDL: Larry Ogunjobi left in Free Agency, vacating 549 snaps. They’ll need a replacement to join a very strong interior with Cameron Heyward, my #1 rated IDL last season, and Keeanu Benton, my #42 rated IDL last season.
  
  First Round Pick History under Omar Khan: OT, CB, OT
  
  Sample Mock Draft:
  21. Jaxson Dart, QB, Ole Miss
  83. Omarr Norman-Lott, IDL, Tennessee`
  },
  
  Broncos: {
    offense: {
      QB: "Bo Nix",
      RB: "Audric Estime",
      WR1: "Courtland Sutton",
      WR2: "Troy Franklin",
      SWR: "Devaughn Vele",
      TE1: "Evan Engram",
      TE2: "Adam Trautman",
      LT: "Garett Bolles",
      LG: "Ben Powers",
      C: "Luke Wattenberg",
      RG: "Quinn Meinerz",
      RT: "Mike McGlinchey",
    },
    defense: {
      DT1: "Zach Allen",
      NT: "D.J. Jones",
      DT2: "John Franklin-Myers",
      EDGE1: "Jonathon Cooper",
      ILB1: "Dre Greenlaw",
      ILB2: "Alex Singleton",
      EDGE2: "Nik Bonitto",
      CB1: "Pat Surtain II",
      FS: "Talanoa Hufanga",
      SS: "Brandon Jones",
      CB2: "Riley Moss",
      NB: "Ja'Quan McMillian",
    },
    backups: [
      { position: "RB", name: "Jaleel McLaughlin" },
      { position: "WR", name: "Marvin Mims" },
      { position: "NT", name: "Malcolm Roach" },
      { position: "DT", name: "Jordan Jackson" },
      { position: "EDGE", name: "Jonah Ellis" },
      { position: "EDGE", name: "Baron Browning" },
      { position: "ILB", name: "Justin Strnad" },
      { position: "S", name: "P.J. Locke" },
    ],
  },
  
  Buccaneers: {
    offense: {
      QB: "Baker Mayfield",
      RB: "Bucky Irving",
      WR1: "Mike Evans",
      WR2: "Jalen McMillan",
      SWR: "Chris Godwin",
      TE1: "Cade Otton",
      TE2: "Payne Durham",
      LT: "Tristan Wirfs",
      LG: "Ben Bredeson",
      C: "Graham Barton",
      RG: "Cody Mauch",
      RT: "Luke Goedeke",
    },
    defense: {
      DT1: "Calijah Kancey",
      NT: "Vita Vea",
      DT2: "Logan Hall",
      EDGE1: "Yaya Diaby",
      ILB1: "Lavonte David",
      ILB2: "Anthony Walker Jr.",
      EDGE2: "Haason Reddick",
      CB1: "Zyon McCollum",
      FS: "Christian Izien",
      SS: "Antoine Winfield Jr.",
      CB2: "Jamel Dean",
      NB: "Tykee Smith",
    },
    backups: [
      { position: "RB", name: "Rachaad White" },
      { position: "WR", name: "Sterling Shepard" },
      { position: "NT", name: "Greg Gaines" },
      { position: "EDGE", name: "Anthony Nelson" },
      { position: "EDGE", name: "Chris Braswell" },
      { position: "ILB", name: "SirVocea Dennis" },
      { position: "CB", name: "Josh Hayes" },
      { position: "S", name: "Kaevon Merriweather" },
      { position: "NB", name: "Kindle Vildor" },
    ],
  },
  
  Seahawks: {
    offense: {
      QB: "Sam Darnold",
      RB: "Kenneth Walker",
      WR1: "Cooper Kupp",
      WR2: "Marquez Valdes-Scantling",
      SWR: "Jaxon Smith-Njigba",
      TE1: "Noah Fant",
      TE2: "AJ Barner",
      LT: "Charles Cross",
      LG: "Christian Haynes",
      C: "Olu Oluwatimi",
      RG: "Anthony Bradford",
      RT: "Abraham Lucas",
    },
    defense: {
      DT1: "Leonard Williams",
      NT: "Byron Murphy II",
      DT2: "Jarran Reed",
      EDGE1: "Boye Mafe",
      ILB1: "Ernest Jones",
      ILB2: "Tyrice Knight",
      EDGE2: "Uchenna Nwosu",
      CB1: "Tariq Woolen",
      FS: "Coby Bryant",
      SS: "Julian Love",
      CB2: "Josh Jobe",
      NB: "Devon Witherspoon",
    },
    backups: [
      { position: "QB", name: "Drew Lock" },
      { position: "RB", name: "Zach Charbonnet" },
      { position: "OG", name: "Satoa Laumea" },
      { position: "EDGE", name: "Demarcus Lawrence" },
      { position: "EDGE", name: "Derick Hall" },
      { position: "CB", name: "Nehemiah Pritchett" },
    ],
  },
  Bengals: {
    offense: {
      QB: "Joe Burrow",
      RB: "Chase Brown",
      WR1: "Ja'Marr Chase",
      WR2: "Tee Higgins",
      SWR: "Andrei Iosivas",
      TE1: "Mike Gesicki",
      TE2: "Drew Sample",
      LT: "Orlando Brown Jr.",
      LG: "Cordell Volson",
      C: "Ted Karras",
      RG: "Cody Ford",
      RT: "Amarius Mims",
    },
    defense: {
      EDGE1: "Trey Hendrickson",
      DT1: "B.J. Hill",
      DT2: "Kris Jenkins",
      EDGE2: "Joseph Ossai",
      ILB1: "Logan Wilson",
      ILB2: "Germaine Pratt",
      CB1: "Cam Taylor-Britt",
      FS: "Geno Stone",
      SS: "Jordan Battle",
      CB2: "DJ Turner II",
      NB: "Dax Hill",
    },
    backups: [
      { position: "QB", name: "Jake Browning" },
      { position: "RB", name: "Zack Moss" },
      { position: "OG", name: "Lucas Patrick" },
      { position: "DT", name: "T.J. Slaton" },
      { position: "DT", name: "McKinnley Jackson" },
      { position: "EDGE", name: "Cam Sample" },
      { position: "EDGE", name: "Myles Murphy" },
      { position: "ILB", name: "Oren Burks" },
      { position: "CB", name: "Josh Newton" },
    ],
  },
  Cardinals: {
    offense: {
      QB: "Kyler Murray",
      RB: "James Conner",
      WR1: "Marvin Harrison",
      WR2: "Michael Wilson",
      SWR: "Greg Dortch",
      TE1: "Trey McBride",
      TE2: "Tip Reiman",
      LT: "Paris Johnson Jr",
      LG: "Evan Brown",
      C: "Hjalte Froholdt",
      RG: "Isaiah Adams",
      RT: "Jonah Williams",
    },
    defense: {
      DT1: "Calais Campbell",
      NT: "Dalvin Tomlinson",
      DT2: "Darius Robinson",
      EDGE1: "Josh Sweat",
      ILB1: "Akeem Davis-Gaither",
      ILB2: "Mack Wilson Sr.",
      EDGE2: "Zaven Collins",
      CB1: "Sean Murphy-Bunting",
      FS: "Budda Baker",
      SS: "Jalen Thompson",
      CB2: "Starling Thomas V",
      NB: "Garrett Williams",
    },
    backups: [
      { position: "WR", name: "Zay Jones" },
      { position: "TE", name: "Elijah Higgins" },
      { position: "NT", name: "Bilal Nichols" },
      { position: "DT", name: "L.J. Collier" },
      { position: "DT", name: "Justin Jones" },
      { position: "DT", name: "Dante Stills" },
      { position: "EDGE", name: "Baron Browning" },
      { position: "CB", name: "Max Melton" },
      { position: "S", name: "Dadrion Taylor-Demerson" },
    ],
  },
  Falcons: {
    offense: {
      QB: "Michael Penix Jr.",
      RB: "Bijan Robinson",
      WR1: "Drake London",
      WR2: "Darnell Mooney",
      SWR: "Ray-Ray McCloud",
      TE1: "Kyle Pitts",
      TE2: "Charlie Woerner",
      LT: "Jake Matthews",
      LG: "Matthew Bergeron",
      C: "Ryan Neuzil",
      RG: "Chris Lindstrom",
      RT: "Kaleb McGary",
    },
    defense: {
      DT1: "Morgan Fox",
      NT: "David Onyemata",
      DT2: "Ruke Orhorhoro",
      EDGE1: "Leonard Floyd",
      ILB1: "Kaden Ellis",
      ILB2: "Divine Deablo",
      EDGE2: "Arnold Ebiketie",
      CB1: "A.J. Terrell",
      FS: "Jessie Bates III",
      SS: "Jordan Fuller",
      CB2: "Mike Hughes",
      NB: "Dee Alford",
    },
    backups: [
      { position: "QB", name: "Kirk Cousins" },
      { position: "RB", name: "Tyler Allgeier" },
      { position: "WR", name: "KhaDarel Hodge" },
      { position: "DT", name: "Kentavius Street" },
      { position: "DT", name: "Ta'Quon Graham" },
      { position: "DT", name: "Zach Harrison" },
      { position: "ILB", name: "Troy Anderson" },
      { position: "CB", name: "Mike Ford" },
      { position: "CB", name: "Clark Phillips III" },
    ],
  },
  Colts: {
    offense: {
      QB: "Anthony Richardson",
      RB: "Jonathan Taylor",
      WR1: "Michael Pittman",
      WR2: "Alec Pierce",
      SWR: "Josh Downs",
      TE1: "Drew Ogletree",
      TE2: "Mo Alie-Cox",
      LT: "Bernhard Raimann",
      LG: "Quenton Nelson",
      C: "Tanner Bortolini",
      RG: "Dalton Tucker",
      RT: "Braden Smith",
    },
    defense: {
      EDGE1: "Kwity Paye",
      DT1: "DeForest Buckner",
      DT2: "Grover Stewart",
      EDGE2: "Laiatu Latu",
      ILB1: "Zaire Franklin",
      ILB2: "Jaylon Carlies",
      CB1: "Charvarius Ward",
      FS: "Camryn Bynum",
      SS: "Nick Cross",
      CB2: "Jaylon Jones",
      NB: "Kenny Moore II",
    },
    backups: [
      { position: "QB", name: "Daniel Jones" },
      { position: "WR", name: "Adonai Mitchell" },
      { position: "EDGE", name: "Samson Ebukam" },
      { position: "EDGE", name: "Tyquan Lewis" },
      { position: "CB", name: "Samuel Womack III" },
    ],
  },
  Dolphins: {
    offense: {
      QB: "Tua Tagovailoa",
      RB: "De'Von Achane",
      WR1: "Tyreek Hill",
      WR2: "Jaylen Waddle",
      SWR: "Malik Washington",
      TE1: "Jonnu Smith",
      TE2: "Julian Hill",
      LT: "Patrick Paul",
      LG: "Liam Eichenberg",
      C: "Aaron Brewer",
      RG: "James Daniels",
      RT: "Austin Jackson",
    },
    defense: {
      DT1: "Zach Sieler",
      NT: "Benito Jones",
      DT2: "Bradley Chubb",
      EDGE1: "Jaelan Phillips",
      ILB1: "Jordyn Brooks",
      ILB2: "Tyrel Dodson",
      EDGE2: "Chop Robinson",
      CB1: "Jalen Ramsey",
      FS: "Ashtyn Davis",
      SS: "Ifeatu Melifonwu",
      CB2: "Storm Duck",
      NB: "Kader Kohou",
    },
    backups: [
      { position: "QB", name: "Zach Wilson" },
      { position: "RB", name: "Jaylen Wright" },
      { position: "RB", name: "Alexander Mattison" },
      { position: "WR", name: "Nick Westbrook-Ikhine" },
      { position: "TE", name: "Pharaoh Brown" },
      { position: "ILB", name: "Willie Gay" },
      { position: "ILB", name: "K.J. Britt" },
      { position: "CB", name: "Cam Smith" },
    ],
  },
  Cowboys: {
    offense: {
      QB: "Dak Prescott",
      RB: "Javonte Williams",
      WR1: "CeeDee Lamb",
      WR2: "Jalen Tolbert",
      SWR: "KaVontae Turpin",
      TE1: "Jake Ferguson",
      TE2: "Luke Schoonmaker",
      LT: "Tyler Guyton",
      LG: "Tyler Smith",
      C: "Cooper Beebe",
      RG: "Robert Jones",
      RT: "Terence Steele",
    },
    defense: {
      EDGE1: "Micah Parsons",
      NT: "Mazi Smith",
      DT: "Osa Odighizuwa",
      EDGE2: "Dante Fowler Jr.",
      ILB1: "DeMarvion Overshown",
      ILB2: "Kenneth Murray Jr.",
      CB1: "Trevon Diggs",
      FS: "Malik Hooker",
      SS: "Donovan Wilson",
      CB2: "DaRon Bland",
      NB: "Israel Mukuamu",
    },
    backups: [
      { position: "RB", name: "Miles Sanders" },
      { position: "WR", name: "Jonathan Mingo" },
      { position: "OG", name: "Brock Hoffman" },
      { position: "DT", name: "Solomon Thomas" },
      { position: "EDGE", name: "Sam Williams" },
      { position: "EDGE", name: "Marshawn Kneeland" },
      { position: "EDGE", name: "Payton Turner" },
      { position: "ILB", name: "Marist Liufau" },
      { position: "ILB", name: "Jack Sanborn" },
      { position: "CB", name: "Kaiir Elam" },
    ],
  },
  '49ers': {
  offense: {
    QB: "Brock Purdy",
    RB: "Christian McCaffrey",
    WR1: "Brandon Aiyuk",
    WR2: "Jauan Jennings",
    SWR: "Ricky Pearsall",
    TE1: "George Kittle",
    TE2: "Luke Farrell",
    LT: "Trent Williams",
    LG: "Ben Bartch",
    C: "Jake Brendel",
    RG: "Dominick Puni",
    RT: "Colton McKivitz",
  },
  defense: {
    EDGE1: "Nick Bosa",
    DT1: "Jordan Elliott",
    DT2: "Kevin Givens",
    EDGE2: "Yetur Gross-Matos",
    ILB1: "Fred Warner",
    ILB2: "Dee Winters",
    CB1: "Renardo Green",
    FS: "Ji'Ayir Brown",
    SS: "Malik Mustapha",
    CB2: "Tre Brown",
    NB: "Deommodore Lenoir",
  },
  backups: [
    { position: "QB", name: "Mac Jones" },
    { position: "RB", name: "Isaac Guerendo" },
    { position: "FB", name: "Kyle Juszczyk" },
    { position: "WR", name: "Demarcus Robinson" },
    { position: "DT", name: "Evan Anderson" },
    { position: "EDGE", name: "Sam Okuayinonu" },
    { position: "ILB", name: "Luke Gifford" },
    { position: "S", name: "Jason Pinnock" },
    { position: "S", name: "Richie Grant" },
  ],
},
'Bears': {
  offense: {
    QB: "Caleb Williams",
    RB: "D'Andre Swift",
    WR1: "D.J. Moore",
    WR2: "Rome Odunze",
    SWR: "Olamide Zaccheaus",
    TE1: "Cole Kmet",
    TE2: "Durham Smythe",
    LT: "Braxton Jones",
    LG: "Joe Thuney",
    C: "Drew Dalman",
    RG: "Jonah Jackson",
    RT: "Darnell Wright",
  },
  defense: {
    EDGE1: "Montez Sweat",
    DT1: "Gervon Dexter Sr.",
    DT2: "Grady Jarrett",
    EDGE2: "Dayo Odeyingbo",
    ILB1: "T.J. Edwards",
    ILB2: "Tremaine Edmunds",
    CB1: "Jaylon Johnson",
    FS: "Kevin Byard",
    SS: "Jaquan Brisker",
    CB2: "Tyrique Stevenson",
    NB: "Kyler Gordon",
  },
  backups: [
    { position: "RB", name: "Roschon Johnson" },
    { position: "OT", name: "Kiran Amegadjie" },
    { position: "DT", name: "Andrew Billings" },
    { position: "DT", name: "Chris Williams" },
    { position: "EDGE", name: "Austin Booker" },
    { position: "CB", name: "Terell Smith" },
    { position: "S", name: "Jonathan Owens" },
    { position: "S", name: "Elijah Hicks" },
  ],
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
  
        {/* Info Message */}
        <p className="text-center text-sm text-gray-600 mb-8 max-w-3xl mx-auto">
          These pages show projected starting lineups and important backups for each team with links attached to each player showing their player page (so click on the player names!). Underneath the starting lineup is my draft writeup for each team. I've included 3 WRs and 2 TEs for each offense, and a Nickel for each defense.  
        </p>
  
        {/* Team content */}
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
  