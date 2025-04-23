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
    draftPreview: `
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
32. Donovan Ezeiruaku, EDGE, Boston College
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
    draftPreview: `
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
    draftPreview: `
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
    draftPreview: `
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
      CB1: "D.J. Reed",
      FS: "Kerby Joseph",
      SS: "Brian Branch",
      CB2: "Terrion Arnold",
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
    draftPreview: `
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
    draftPreview: `
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
    draftPreview: `
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
    draftPreview: `
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
    draftPreview: `
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
    draftPreview: `
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
    draftPreview: `
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
    draftPreview: `
  Picks: 21, 83, 123, 156, 185, 229
  
  Needs: QB, RB, OG, IDL
  
  QB: Their Quarterback next season may very well be Aaron Rodgers, but regardless he was my #17 rated QB last season and is already 41 years old.
  
  RB: Najee Harris left in Free Agency, vacating 590 snaps. Backup Jaylen Warren was my #48 rated RB last season.
  
  OG: Mason McCormick is very replaceable as a starter, while Isaac Seumalo’s contract expires at the end of the season.
  
  IDL: Larry Ogunjobi left in Free Agency, vacating 549 snaps. They’ll need a replacement to join a very strong interior with Cameron Heyward, my #1 rated IDL last season, and Keeanu Benton, 
  my #42 rated IDL last season.
  
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
    draftPreview: `
Picks: 20, 51, 85, 122, 191, 197, 208

Needs: RB, WR, TE, ILB, CB

RB: Their current RB room has last year’s 5th-round pick Audric Estime and the pass-catching Jaleel McLaughlin. Sean Payton’s scheme relies heavily on the run game, and he’s spoken at length about 
wanting to add a dynamic RB.

WR: Outside of the talented Courtland Sutton, my WR20 last season, they’re currently relying on last year’s rookie pair of Troy Franklin and Devaughn Vele. I figured they’d add a veteran, and they 
still can, but as of now this is a need.

TE: Sean Payton loves an impactful Tight End. They signed Evan Engram, but I’m sure Payton would like a more long-term solution at the position.

ILB: They have some question marks here with Greenlaw and Singleton. Neither player has any guaranteed money after this season, so they’ll need to prepare for the future here.

CB: While they have likely the top CB in the NFL in Pat Surtain, we must follow the advice of @ericeager_ with respect to weak-link systems. Riley Moss finished the season as my CB63,
while Nickel Ja’Quan McMillian was my CB80. They could look to add competition here.

First Round Pick History under George Paton: CB, QB
Second Round Pick History under George Paton: RB, EDGE, WR

Sample Mock Draft:
20. Emeka Egbuka, WR, Ohio State
51. Azareye'h Thomas, CB, Florida State
85. Dylan Sampson, RB, Tennessee`,
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
    draftPreview: `
Picks: 19, 53, 84, 121, 157, 235

Needs: TE, EDGE, ILB, S

TE: The Bucs ran a fair bit of 12 personnel last season. Otton’s contract expires at the end of the season, so some added clarity at the position may help.

EDGE: Despite his lack of sacks, I was very happy with Yaya Diaby’s performance in 2024 (my #15 EDGE). Opposite him this season will be Haason Reddick, but they’ll need a long-term answer.

ILB: While Lavonte David may actually be immortal, let’s assume he’s not. I have Anthony Walker Jr, my #63 ILB in 2024, projected to start alongside him. They’ll really want to look towards 
the future here. They’ll likely be replacing both starters in the next 2 years.

S: Christian Izien really struggled last year, coming in as my #64 ranked safety. I’d like to see them give him at least fairly strong competition.

I happen to be much higher on both Buccaneers CBs than most. Provided they still healthy, I think a combination of Zyon McCollum and Jamel Dean is very strong. To me there are other, more 
glaring issues on the defense. I’m sure they’ll add depth, though, with the injury concerns with Dean.

First Round Pick History under Jason Licht: WR, QB, CB, TE, IDL, ILB, OT, EDGE, IDL, OG
Second Round Pick History under Jason Licht: TE, OT, C, EDGE, K, S, RB, CB, CB, CB, S, QB, OT, OG, EDGE

Sample Mock Draft:
19. Mykel Williams, EDGE, Georgia
53. Mason Taylor, TE, LSU
84. Kevin Winston Jr, S, Penn State`,

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
    draftPreview: `
Picks: 18, 50, 52, 82, 92, 137, 172, 175, 223, 234

Needs: WR, TE, OT, OG, ILB, S

WR: Seattle doesn’t have a clear #1 outside WR. Regardless of how they use JSN and Kupp, they’ll need a future perimeter #1.

TE: Noah Fant’s contract expires following the season. They may bring him back, or they may opt to restart at the position.

OT: With Abraham Lucas an upcoming FA, the Seahawks will want to find a better, more long-term option.

OG: It’s never ideal when both OT and OG are needs, but here we are. They’re likely still looking for both starting OGs long-term.

ILB: Tyrice Knight started 11 games last season as a rookie. He played about as expected for a rookie, so I don’t see this as a huge need. They may look for some depth here or competition 
for Knight, but they have more pressing needs.

S: Coby Bryant’s contract expires after the season, so they’ll have an interesting decision here. I thought he played very well last year, grading as my #23 Safety in his only year as a starter.

First Round Pick History under John Schneider: OT, S, OT, EDGE, OG, RB, IDL, ILB, OT, CB, WR, IDL  
Second Round Pick History under John Schneider: WR, ILB, RB, WR, OT, EDGE, IDL, IDL, C, S, WR, EDGE, WR, EDGE, RB, EDGE, RB

Sample Mock Draft:
18. Josh Simmons, OT, Ohio State  
50. Jayden Higgins, WR, Iowa State  
52. Tate Ratledge, OG, Georgia  
82. Jacob Parrish, CB, Kansas State  
92. Chris Paul Jr, ILB, Ole Miss`,

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
    draftPreview: `
Picks: 17, 49, 81, 119, 153, 193

Needs: WR, OG, IDL, EDGE, CB, S

WR: I know, I know, they have Ja’Marr Chase (my #3 WR in 2024) and Tee Higgins (#10). Still, they need a legit third WR.

OG: Neither current starting OG is signed to starter money or really starter level.

IDL: The Bengals are actually relatively deep here, they just lack a true #1. B.J. Hill (my #30 IDL in 2024), Kris Jenkins (my #87), and T.J. Slaton (my #74) can all eat snaps, but they need a 
long-term leader for this group.

EDGE: Outside of the fantastic Trey Hendrickson (my #4 EDGE in 2024) this position group is really thin. Joseph Ossai, my #77 EDGE in 2024, currently projects as the 2nd starter.

CB: Before injury, DJ Turner was playing some really strong football. Cam Taylor-Britt struggled, but you could argue it was in large part an effect of the weak pass-rush. This group may be 
better than we give credit, so I could see Cincinnati focusing on other needs.

S: Geno Stone was solid, though his contract expires after the season. His counterpart Jordan Battle has yet to start for a full season. At the very least, they need to add some depth. 
There’s essentially no certainty at the position past this season.

Sample Mock Draft:
17. Derrick Harmon, IDL, Oregon  
49. Landon Jackson, EDGE, Arkansas  
81. Kevin Winston Jr, S, Penn State`,

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
    draftPreview: `
Picks: 16, 47, 78, 115, 152, 225

Needs: WR, OT, OG, IDL, EDGE

WR: Outside of Marvin Harrison Jr, this is a relatively weak group. Michael Wilson ranked as my #86 WR in 2024, while Greg Dortch was #81.

OT: Jonah Williams is a free agent following the season, so they may opt for a long-term improvement.

OG: Isaiah Adams struggled a bit as a rookie, but the 3rd-round pick is just starting to get his bearing in the NFL. I could easily see Arizona roll with him as a starter next season. 
Evan Brown has been solid but has a replaceable contract.

IDL: They could definitely use some youth in this group. Outside of Darius Robinson, we’re looking at 31 year-old Dalvin Tomlinson and 39 year old Calais Campbell. The group is strong this year,
but they’ll need to add some young talent.

EDGE: A rotation of Zaven Collins, my #48 EDGE last season, and Baron Browning, my #69 EDGE last season, isn’t as bad as some make it out to be. Still, a more consistent long-term starter would be ideal.

I’m fine with their starters at ILB: 28 year-old Akeem Davis-Gaither (my #49 ILB) and 27 year-old Mack Wilson (my #61 ILB) are both signed through 2026. In my opinion, a late depth pick would suffice.

First Round Pick History under Monti Ossenfort: OT, WR, IDL  
Second Round Pick History under Monti Ossenfort: EDGE, CB

Sample Mock Draft:
16. Kelvin Banks Jr, OL, Texas  
47. T.J. Sanders, IDL, South Carolina  
78. Jack Bech, WR, TCU`,

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
    draftPreview: `
Picks: 15, 46, 118, 218, 242

Needs: WR, IDL, EDGE, CB, S

WR: Outside of the fantastic duo of Drake London (my WR15) and Darnell Mooney (WR27), the Falcons are thin at WR. A late-round pick would do, but they should add another option, preferably 
a slot.

IDL: Other than Ruke Orhorhoro, there may not be a player from this group on the roster next season. This is a huge target for them early.

EDGE: Similar to IDL, there isn’t much of a future on the EDGE. The Falcons should be targeting DLine hard this draft.

CB: Weak-link systems. Dee Alford got crushed last year, so they’d really benefit from an improvement at Nickel.

S: The Falcons haven’t yet done anything to replace Justin Simmons and Richie Grant who both walked this offseason. Jordan Fuller struggled last year after a strong 2023 season.

First Round Pick History under Terry Fontenot: TE, WR, RB, QB  
Second Round Pick History under Terry Fontenot: S, EDGE, ILB, OG, IDL

Sample Mock Draft:
15. Mykel Williams, EDGE, Georgia  
46. T.J. Sanders, IDL, South Carolina`,

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
    draftPreview: `
Picks: 14, 45, 80, 117, 151, 189, 232

Needs: TE, OG, IDL, ILB

TE: The Colts have seemingly wanted to add an elite TE for years now and it just hasn’t happened. Regardless, this is a strong draft for the position.

OG: Will Fries departed in free agency and they haven’t really done anything to fill the spot.

IDL: With DeForest Buckner 31 years-old and Grover Stewart 32, the Colts will need to prepare for life after one or both of them.

ILB: The Colts will need to replace E.J. Speed. Last year’s 5th-round pick Jaylon Carlies is the frontrunner, but they may replace him in the draft.

First Round Pick History under Chris Ballard: S, OG, EDGE, QB, EDGE  
Second Round Pick History under Chris Ballard: CB, ILB, OT, IDL, IDL, CB, EDGE, WR, WR, RB, EDGE, WR, CB, WR

Sample Mock Draft:
14. Kelvin Banks Jr, OL, Texas  
45. Elijah Arroyo, TE, Miami  
80. Omarr Norman-Lott, IDL, Tennessee`,

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
    draftPreview: `NFL Draft Preview: Cowboys
Picks: 12, 44, 76, 149, 174, 204, 211, 217, 239, 247

Needs: RB, WR, OG, EDGE, NB

RB: It’s hard to imagine the Cowboys without a star RB, but the truth is they haven’t invested in this position quite as strongly as the general sentiment holds. They’ll probably add at some 
point, but I don’t think it’s a major concern.

WR: Outside of CeeDee Lamb, it’s pretty bleak. KaVontae Turpin actually had a pretty good year (my #66 WR) but regardless they’ll want to add.

OG: Zack Martin retired and leaves a hall-of-fame sized hole. As of now, I have Robert Jones projected to start at that spot.

EDGE: Dante Fowler Jr. graded out very well for me last season as my #36 ranked EDGE. Still, he’s 31 years-old and only signed for one year.

NB: Nickel Jourdan Lewis walked for a huge payday this offseason. They’ll need a replacement at some point.

First Round Pick History Since 2017: EDGE, ILB, WR, EDGE, OG, IDL, OT  
Second Round Pick History Since 2017: CB, C, IDL, CB, CB, EDGE, TE, EDGE

Sample Mock Draft:
12. Jalon Walker, ILB/EDGE, Georgia  
44. Jonah Savaiinaea, OG, Arizona  
76. Damien Martinez, RB, Miami`,

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
  draftPreview: `
Picks: 11, 43, 75, 100, 113, 138, 147, 160, 227, 249, 252

Needs: OG, IDL, EDGE, ILB, CB

OG: Aaron Banks walked this offseason and no replacement has been brought in.

IDL: The biggest weakness on the team. They don’t have an IDL signed past this season. Jordan Elliott and Kevin Givens would be the likely starters as of now.

EDGE: Outside of Bosa, there are no EDGES signed past this season. The focus of this draft will certainly be on the defensive line. Yetur Gross-Matos is the 2nd starter as of now.

ILB: De’Vondre Campbell walked, leaving a hole next to the legendary Fred Warner. Dee Winters is the 2nd starter as of now.

CB: With Charvarius Ward gone they will need to add here. They’ll need an outside Corner.

First Round Pick History Since 2017: EDGE, ILB, OT, EDGE, IDL, WR, QB, WR  
Second Round Pick History Since 2017: WR, WR, OG, EDGE, CB

Sample Mock Draft:
11. Mykel Williams, EDGE, Georgia  
43. Trey Amos, CB, Ole Miss  
75. Shemar Turner, IDL, Texas A&M  
100. Ty Robinson, IDL, Nebraska`,

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
  draftPreview: `
Picks: 10, 39, 41, 72, 148, 233, 240

Needs: RB, TE, EDGE, ILB, CB

RB: Head Coach Ben Johnson uses the run game to set up the full offense. They’ll want an improvement over current RB D’Andre Swift, my #35 RB last season.

TE: Johnson ran a fair bit of 12 personnel last season, so they’ll likely want to improve at the 2nd TE slot.

EDGE: Dayo Odeyingbo is likely to be the 2nd starter here, but his new contract is more projection than anything, ranking as my #55 EDGE last season (#52 in 2023, #82 in 2022).

ILB: With no guaranteed money left on his deal in 2026, Tremaine Edmunds seems unlikely to be on the roster past this year.

CB: Tyrique Stevenson has ranked as my #71 CB each of the past two seasons, so an improvement at the 2nd CB spot would be ideal.

People have seemingly talked themselves into OT being a need. While I will never fully disagree with investing in the lines, I do have to disagree here. Braxton Jones is an above-average 
starting OT and 26 years-old. Darnell Wright was fantastic last year at 23 years-old. 

At Safety, I think a depth pick would suffice. Brisker, while injury prone, was very good last year when healthy. Kevin Byard had a resurgent year, ranking as my #11 S. With the general 
inconsistency at this position league-wide, I don't think they should be investing heavy resources here. 

First Round Pick History Under Ryan Poles: OT, QB, WR
Second Round Pick History Under Ryan Poles: CB, S, IDL, CB, IDL

Sample Mock Draft:
10. Mykel Williams, EDGE, Georgia
39. Azareye'h Thomas, CB, Florida State
41. TreVeyon Henderson, RB, Ohio State
72. Terrance Ferguson, TE, Oregon`,

},
'Saints': {
  offense: {
    QB: "Derek Carr",
    RB: "Alvin Kamara",
    WR1: "Chris Olave",
    WR2: "Rashid Shaheed",
    SWR: "Brandin Cooks",
    TE1: "Juwan Johnson",
    TE2: "Foster Moreau",
    LT: "Taliese Fuaga",
    LG: "Dillon Radunz",
    C: "Erik McCoy",
    RG: "Cesar Ruiz",
    RT: "Trevor Penning",
  },
  defense: {
    EDGE1: "Carl Granderson",
    DT1: "Bryan Bresee",
    DT2: "Khalen Saunders",
    EDGE2: "Chase Young",
    ILB1: "Demario Davis",
    ILB2: "Pete Werner",
    CB1: "Kool-Aid McKinstry",
    FS: "Tyrann Mathieu",
    SS: "Justin Reid",
    CB2: "Isaac Yiadom",
    NB: "Alontae Taylor",
  },
  backups: [
    { position: "QB", name: "Spencer Rattler" },
    { position: "OG", name: "Nick Saldiveri" },
    { position: "DT", name: "Nathan Shepherd" },
    { position: "DT", name: "Davon Godchaux" },
    { position: "EDGE", name: "Cameron Jordan" },
    { position: "CB", name: "Ugo Amadi" },
    { position: "S", name: "Jordan Howden" },
  ],
  draftPreview: `
Picks: 9, 40, 71, 93, 112, 131, 184, 248, 254

Needs: QB, WR, OT, OG, IDL, CB

QB: Truthfully, I’m the world’s biggest Derek Carr fan. I had him as my #5 QB in 2024 and #7 in 2023. Regardless, the Derek Carr Era is over in New Orleans. The Saints will cut bait next 
offseason rather than pay an extra $50M for 2026.

WR: This isn’t a massive need currently, but both Olave and Shaheed have murky futures in NO. The team still has Olave’s 5th-year option, while Shaheed is an UFA following the season.

OT: It feels like the Trevor Penning experience may have run its course. For a team likely to struggle again next year, giving the former first-rounder another year as a starter isn’t the 
worst idea. Still, it seems unlikely he’ll be the guy long-term.

OG: Right now, I have Dillon Radunz projected as the 2nd starter at OG. He just signed a one year, $2.25M contract, so that’s really just a stopgap. They’ll need a long-term solution.

IDL: Outside of Bryan Bresee, who ranked #51 among IDL for me last season, they don’t really have anyone. Khalen Saunders projects to start, but he wont be the long-term answer.

CB: The good news is Kool-Aid McKinstry was solid as a rookie last season. Outside of him, though, they don’t have much. Isaac Yiadom projects to start opposite him, while Alontae Taylor, 
who really struggled last year, will be the Nickel.

First Round Pick History Since 2017: CB, OT, EDGE, OG, EDGE, WR, IDL, OT
Second Round Pick History Since 2017: S, C, ILB, CB, EDGE, CB

Sample Mock Draft:
9. Kelvin Banks Jr, OT, Texas
40. T.J. Sanders, IDL, South Carolina
71. Tyler Shough, QB, Louisville
93. Quincy Riley, CB, Louisville`,

},
'Panthers': {
  offense: {
    QB: "Bryce Young",
    RB: "Chuba Hubbard",
    WR1: "Jalen Coker",
    WR2: "Xavier Legette",
    SWR: "Adam Thielen",
    TE1: "Tommy Tremble",
    TE2: "Ja'Tavion Sanders",
    LT: "Ikem Ekwonu",
    LG: "Damien Lewis",
    C: "Austin Corbett",
    RG: "Robert Hunt",
    RT: "Taylor Moton",
  },
  defense: {
    DT1: "Derrick Brown",
    NT: "Bobby Brown III",
    DT2: "Tershawn Wharton",
    EDGE1: "D.J. Wonnum",
    ILB1: "Josey Jewell",
    ILB2: "Trevin Wallace",
    EDGE2: "Jadeveon Clowney",
    CB1: "Jaycee Horn",
    FS: "Demani Richardson",
    SS: "Tre'von Moehrig",
    CB2: "Mike Jackson",
    NB: "Chau Smith-Wade",
  },
  backups: [
    { position: "RB", name: "Rico Dowdle" },
    { position: "WR", name: "David Moore" },
    { position: "DT", name: "A'Shawn Robinson" },
    { position: "DT", name: "Shy Tuttle" },
    { position: "DT", name: "LaBryan Ray" },
    { position: "EDGE", name: "Pat Jones II" },
    { position: "EDGE", name: "DJ Johnson" },
    { position: "ILB", name: "Christian Rozeboom" },
    { position: "S", name: "Nick Scott" },
  ],
  draftPreview: `
Picks: 8, 57, 74, 111, 114, 140, 146, 163, 230

Needs: WR, EDGE, ILB, CB, S

WR: Jalen Coker had a fantastic rookie year, finishing as my #49 WR on the season but really heating up late. Adam Thielen had a good year as well, though at 35 he won’t be a part of the 
long-term plan. Xavier Legette also deserves time. Still, they need a dominant WR1, and I’m not to sure that is currently on the roster.

EDGE: D.J. Wonnum and Jadeveon Clowney each graded out well for me last year, ranking 23rd and 28th, respectively. Wonnum is 28 and an upcoming free agent, while Clowney is 32 and an 
upcoming free agent. So, there’s lots of uncertainty here. Wonnum will be a part of the long-term plans, but they’ll need a Clowney replacement.

ILB: Carolina is likely looking for 2 long-term starters here. Josey Jewell is 30 with no guaranteed money past this season, while Trevin Wallace is a question mark.

CB: CB2 Mike Jackson graded as my #45 CB last season, so he may be a little stronger than public perception. Nevertheless, they’ll look to improve long-term. They don’t have a consistent
presence at Nickel, so they’ll look to add there.

S: Borderline need here. If the Panthers are comfortable rolling with 2024 undrafted-rookie Demani Richardson then I am too. He played pretty well in limited snaps last season.

First Round Pick History Under Dan Morgan: WR
Second Round Pick History Under Dan Morgan: RB

Sample Mock Draft:
8. Tet McMillan, WR, Arizona
57. Landon Jackson, EDGE, Arkansas
74. Kevin Winston Jr, S, Penn State`,
},
'Jets': {
  offense: {
    QB: "Justin Fields",
    RB: "Breece Hall",
    WR1: "Garrett Wilson",
    WR2: "Allen Lazard",
    SWR: "Malachi Corley",
    TE1: "Jeremy Ruckert",
    TE2: "Stone Smartt",
    LT: "Olu Fashanu",
    LG: "John Simpson",
    C: "Joe Tippmann",
    RG: "Alijah Vera-Tucker",
    RT: "N/A",
  },
  defense: {
    EDGE1: "Will McDonald IV",
    DT1: "Quinnen Williams",
    DT2: "Byron Cowart",
    EDGE2: "Jermaine Johnson",
    ILB1: "Quincy Williams",
    ILB2: "Jamien Sherwood",
    CB1: "Sauce Gardner",
    FS: "Andre Cisco",
    SS: "Tony Adams",
    CB2: "Brandon Stephens",
    NB: "Michael Carter II",
  },
  backups: [
    { position: "QB", name: "Tyrod Taylor" },
    { position: "RB", name: "Braelon Allen" },
    { position: "WR", name: "Josh Reynolds" },
    { position: "WR", name: "Tyler Johnson" },
    { position: "DT", name: "Derrick Nnadi" },
    { position: "EDGE", name: "Micheal Clemons" },
    { position: "CB", name: "Isaiah Oliver" },
  ],
  draftPreview: `NFL Draft Preview: #Jets (https://footballanalyticsnerd.netlify.app/lineup?team=Jets)
Picks: 7, 42, 73, 110, 145, 162, 186, 207

Needs: QB, WR, TE, OT, IDL, S

QB: I know there are many Justin Fields “truthers” but I just don’t think he’ll ever be the guy. He ranked as my QB19 in 2023, QB29 in 2022, and QB27 in 2021.

WR: Outside of Garrett Wilson, it’s bleak. I’m hoping we get to see Malachi Corley start in the slot this year, but regardless they need a lot of help here.

TE: They really don’t have anything here. Jeremy Ruckert projects to start but he doesn’t even qualify for my model.

OT: The good news: they have a 23 year-old, selected 11th last year, locked in as one of the starters. They really have no options on the other side, and my expectation is that this is 
where they’ll use pick #7.

IDL: Behind Quinnen Williams (my #8 IDL in 2024) they are very thin. I project Byron Cowart to start, but that’s just a placeholder.

S: Both starting Safeties are upcoming free agents and struggled somewhat in 2024. They’re both young, and really could both be long-term solutions, but there’s not a lot of stability in the 
position group moving forward.

Sample Mock Draft:
7. Armand Membou, OT, Missouri
42. Luther Burden III, WR, Missouri
73. Omarr Norman-Lott, IDL, Tennessee`
},


'Raiders': {
  offense: {
    QB: "Geno Smith",
    RB: "Raheem Mostert",
    WR1: "Jakobi Meyers",
    WR2: "Tre Tucker",
    SWR: "N/A",
    TE1: "Brock Bowers",
    TE2: "Michael Mayer",
    LT: "Kolton Miller",
    LG: "Alex Cappa",
    C: "Jackson Powers-Johnson",
    RG: "Dylan Parham",
    RT: "DJ Glaze",
  },
  defense: {
    EDGE1: "Maxx Crosby",
    DT1: "Christian Wilkins",
    DT2: "Adam Butler",
    EDGE2: "Malcolm Koonce",
    ILB1: "Elandon Roberts",
    ILB2: "Devin White",
    CB1: "Jakorian Bennett",
    FS: "Isaiah Pola-Mao",
    SS: "Jeremy Chinn",
    CB2: "Decamerion Richardson",
    NB: "Darnay Holmes",
  },
  backups: [
    { position: "QB", name: "Aidan O'Connell" },
    { position: "DT", name: "Jonah Laulu" },
    { position: "EDGE", name: "Tyree Wilson" },
    { position: "EDGE", name: "Charles Snowden" },
    { position: "CB", name: "Eric Stokes" },
  ], 
  draftPreview: `
Picks: 6, 37, 68, 108, 143, 180, 213, 215, 222

Needs: QB, RB, WR, IDL, ILB, CB, S

QB: Geno Smith is 35 and trending in the wrong direction according to my model (2024 26th, 2023 15th, 2022 13th). He has no guaranteed money in 2027, so they could theoretically look towards 
the future here.

RB: They have very little on the roster right now RB-wise. It’s a very deep draft at the position, so they’ll be alright here. They may just draft Ashton Jeanty and call it a day – I won’t do 
so in this mock draft.

WR: Outside of the ever-consistent Jakobi Meyers, the Raiders don’t have much here. Of course, Brock Bowers is essentially a WR, and a very good one at that.

IDL: Outside of Christian Wilkins, they’re pretty thin here. I’m sure they’d love to beef up the interior to make Maxx Crosby’s job a little easier.

ILB: They’re scrapping at parts here with Elandon Roberts and Devin White. Neither is signed past this season, so they’re looking for two long-term starters.

CB: While I am the world’s biggest Jakorian Bennett (my #26 CB last season), they have very little behind him. They’ll definitely want to address the position.

S: Isaiah Pola-Mao was thrust into a starter role last season and struggled. He won’t kill them, but long-term they’ll need a better solution.

While I’m always a general proponent of trading down for future picks, If I were the Raiders I would REALLY want to trade back. 6 is an awkward spot for them and they have a ton of holes to 
fill.

Sample Mock Draft:
6. Tet McMillan, WR, Arizona
37. Shavon Revel, CB, East Carolina
68. Kaleb Johnson, RB, Iowa`
  
},
'Jaguars': {
  offense: {
    QB: "Trevor Lawrence",
    RB: "Travis Etienne",
    WR1: "Brian Thomas",
    WR2: "Dyami Brown",
    SWR: "Parker Washington",
    TE1: "Brenton Strange",
    TE2: "Johnny Mundt",
    LT: "Walker Little",
    LG: "Ezra Cleveland",
    C: "Robert Hainsey",
    RG: "Patrick Mekari",
    RT: "Anton Harrison",
  },
  defense: {
    EDGE1: "Josh Hines-Allen",
    DT1: "Maason Smith",
    DT2: "Arik Armstead",
    EDGE2: "Travon Walker",
    ILB1: "Foyesade Oluokun",
    ILB2: "Devin Lloyd",
    CB1: "Tyson Campbell",
    FS: "Darnell Savage",
    SS: "Eric Murray",
    CB2: "Montaric Brown",
    NB: "Jourdan Lewis",
  },
  backups: [
    { position: "RB", name: "Tank Bigsby" },
    { position: "WR", name: "Gabe Davis" },
    { position: "TE", name: "Hunter Long" },
    { position: "DT", name: "DaVon Hamilton" },
    { position: "ILB", name: "Ventrell Miller" },
    { position: "CB", name: "Jarrian Jones" },
    { position: "S", name: "Antonio Johnson" },
  ],
  draftPreview: `
Picks: 5, 36, 70, 88, 107, 126, 142, 182, 194, 221

Needs: RB, WR, CB, S

RB: At this point, we know Etienne isn’t the future. They’ll want to improve here, but it’s not necessarily a massive need.

WR: Brian Thomas is a superstar, ranking as my WR11 as a rookie. That makes everything else a lot easier. They could definitely improve from Dyami Brown and Parker Washington, but if they opt 
not to they aren’t in a terrible position by any means necessary.

CB: Outside of Tyson Campbell they are very thin on the outside. I project Montaric Brown, my #89 CB last season, to start. This is a big spot for improvement.

S: Darnell Savage has really struggled the past 4 years according to my model, ranking #82, #86, #82, and #70. They can easily get out of his contract after this season, which I expect they 
will. Eric Murray had a strong 2024, but he’s still 31 years-old and making borderline starter money.

I don’t believe OT is necessarily a need, yet I choose Armand Membou here in my mock. The Jaguars need to unlock Trevor Lawrence, so let’s turn a somewhat “fine” OT room into an elite one. 
I see the argument for Mason Graham as well, though I would like to see Maason Smith in a bigger role and a combination of Arik Armstead and DaVon Hamilton should be a strong #2. 
I do not see the argument for Ashton Jeanty.

Overall, this is a very strong roster for a 4-13 team. In a weaker division, they may be ready to compete right away.

Sample Mock Draft:
5. Armand Membou, OT, Missouri
36. Maxwell Hairston, CB, Kentucky
70. Kevin Winston Jr, S, Penn State
88. Dylan Sampson, RB, Tennessee`
},
'Patriots': {
  offense: {
    QB: "Drake Maye",
    RB: "Rhamondre Stevenson",
    WR1: "Stefon Diggs",
    WR2: "Kayshon Boutte",
    SWR: "Demario Douglas",
    TE1: "Hunter Henry",
    TE2: "Austin Hooper",
    LT: "Vederian Lowe",
    LG: "Cole Strange",
    C: "Garrett Bradbury",
    RG: "Mike Onwenu",
    RT: "Morgan Moses",
  },
  defense: {
    EDGE1: "Harold Landry III",
    DT1: "Milton Williams",
    DT2: "Christian Barmore",
    EDGE2: "Keion White",
    ILB1: "Robert Spillane",
    ILB2: "Jahlani Tavai",
    CB1: "Christian Gonzalez",
    FS: "Jabrill Peppers",
    SS: "Kyle Dugger",
    CB2: "Carlton Davis III",
    NB: "Marcus Jones",
  },
  backups: [
    { position: "QB", name: "Joshua Dobbs" },
    { position: "RB", name: "Antonio Gibson" },
    { position: "WR", name: "Kendrick Bourne" },
    { position: "WR", name: "Mack Hollins" },
    { position: "WR", name: "Ja'Lynn Polk" },
    { position: "OG", name: "Layden Robinson" },
    { position: "DT", name: "Khyiris Tonga" },
    { position: "DT", name: "Jeremiah Pharms Jr." },
    { position: "EDGE", name: "Anfernee Jennings" },
    { position: "ILB", name: "Christian Elliss" },
    { position: "ILB", name: "Jack Gibbens" },
    { position: "S", name: "Marte Mapu" },
    { position: "S", name: "Jaylinn Hawkins" },
  ],
  draftPreview: `
Picks: 4, 38, 69, 77, 106, 144, 171, 220, 238

Needs: RB, WR, OT, IOL, EDGE

RB: While they have bigger issues, I don’t see Rhamondre Stevenson as a starting-level RB (#38 in 2024, #36 in 2023). They can get out of his contract easily after 2026.

WR: Outside of Stefon Diggs, the room is very unproven. Kayshon Boutte was my #60 WR last season, while Pop Douglas was #78. That’s not terrible for young guys, and we can’t give up on 
Ja’Lynn Polk after one season. Still, there’s reason for concern with this group.

OT: They really have to add an OT with one of the top 2 picks. Drake Maye needs to be protected and the current setup won’t do that.

IOL: The current lineup at OG and C will be fine for this season, but outside of Onwenu they don’t have any long-term options.

EDGE: They aren’t particularly weak here, they just aren’t very strong either. Landry and White are both solid EDGES but they’ll want to find a true #1 at some point.

The theme of this draft will be helping to protect Drake Maye. The offensive line and receiver room simply aren’t good enough. On the other side of the ball, I really like what they’ve put 
together. The pairing of Milton Williams and Christian Barmore should be super strong. The secondary likely has above-average starters at each position. At linebacker, Robert Spillane was my 
#10 ILB in 2024 and #6 in 2023. If they draft well this year, and Drake Maye is as good as I think he’ll eventually be, this team is really looking up.

Sample Mock Draft:
4. Armand Membou, OT, Missouri
38. Donovan Jackson, OG, Ohio State
69. Jaylin Noel, WR, Iowa State
77. Joshua Farmer, IDL, Florida State`
},
'Giants': {
  offense: {
    QB: "Russell Wilson",
    RB: "Tyrone Tracy",
    WR1: "Malik Nabers",
    WR2: "Darius Slayton",
    SWR: "Wan'Dale Robinson",
    TE1: "Theo Johnson",
    TE2: "Daniel Bellinger",
    LT: "Andrew Thomas",
    LG: "Jon Runyan",
    C: "John Michael Schmitz Jr.",
    RG: "Greg Van Roten",
    RT: "Jermaine Eluemunor",
  },
  defense: {
    DT1: "Rakeem Nunez-Roches",
    NT: "Dexter Lawrence",
    DT2: "Roy Robertson-Harris",
    EDGE1: "Brian Burns",
    ILB1: "Bobby Okereke",
    ILB2: "Micah McFadden",
    EDGE2: "Kayvon Thibodeaux",
    CB1: "Paulson Adebo",
    FS: "Jevon Holland",
    SS: "Tyler Nubin",
    CB2: "Deonte Banks",
    NB: "Dru Phillips",
  },
  backups: [
    { position: "QB", name: "Jameis Winston" },
    { position: "RB", name: "Devin Singletary" },
    { position: "WR", name: "Jalin Hyatt" },
    { position: "WR", name: "Lil'Jordan Humphrey" },
    { position: "DT", name: "Elijah Chatman" },
    { position: "DT", name: "Jeremiah Ledbetter" },
    { position: "EDGE", name: "Chauncey Golston" },
    { position: "ILB", name: "Darius Muasau" },
    { position: "CB", name: "Cor'Dale Flott" },
    { position: "S", name: "Dane Belton" },
  ],
  draftPreview: `
Picks: 3, 34, 65, 99, 105, 154, 219, 246

Needs: QB, TE, OT, OG, IDL

QB: I’m a Russell Wilson fan, my model ranking him QB7 last season. Still, he’s not the future and they likely will not be contenders this season.

TE: In a strong TE draft class, the Giants could certainly add here. The current group is underwhelming.

OT: 31 year-old Jermaine Eluemunor’s contract expires after the season. They’ll want to add a more long-term starter.

OG: I have 35 year-old Greg Van Roten projected as the 2nd starter at OG. Similar to OT, they’ll want to find a more long-term starter.

IDL: Neither Rakeem Nunez-Roches nor Roy Robertson-Harris is making over $5M AAV. They need a full overhaul of this group outside of star NT Dexter Lawrence.

At CB, Deonte Banks probably deserves one more year. He has solid his rookie season but dreadful last year. The additions of Paulson Adebo and Jevon Holland should make his life a lot easier. 
The EDGE room is relatively strong, but the opportunity to draft such a premier player in Abdul Carter is too much to pass up.

First Round Draft History Under Joe Schoen: EDGE, OT, CB, WR
Second Round Draft History Under Joe Schoen: WR, C, S

Sample Mock Draft:
3. Abdul Carter, EDGE, Penn State
34. Donovan Jackson, OG, Ohio State
65. Elijah Arroyo, TE, Miami
99. Joshua Farmer, IDL, Florida State`
},
'Browns': {
  offense: {
    QB: "Joe Flacco",
    RB: "Jerome Ford",
    WR1: "Jerry Jeudy",
    WR2: "Cedric Tillman",
    SWR: "Jamari Thrash",
    TE1: "David Njoku",
    TE2: "Blake Whiteheart",
    LT: "Dawand Jones",
    LG: "Joel Bitonio",
    C: "Ethan Pocic",
    RG: "Wyatt Teller",
    RT: "Jack Conklin",
  },
  defense: {
    EDGE1: "Myles Garrett",
    DT1: "Maliek Collins",
    DT2: "Mike Hall Jr.",
    EDGE2: "Isaiah McGuire",
    ILB1: "Jeremiah Owusu-Koramoah",
    ILB2: "Jordan Hicks",
    CB1: "Denzel Ward",
    FS: "Ronnie Hickman",
    SS: "Grant Delpit",
    CB2: "Martin Emerson Jr ",
    NB: "Greg Newsome II",
  },
  backups: [
    { position: "QB", name: "Kenny Pickett" },
    { position: "OG", name: "Teven Jenkins" },
    { position: "DT", name: "Shelby Harris" },
    { position: "EDGE", name: "Joe Tryon-Shoyinka" },
    { position: "EDGE", name: "Ogbo Okoronkwo" },
    { position: "ILB", name: "Mohamoud Diabate" },
    { position: "ILB", name: "Jerome Baker" },
    { position: "CB", name: "Cameron Mitchell" },
  ],
  draftPreview: `
Picks: 2, 33, 67, 94, 104, 179, 192, 200, 216, 255

Needs: QB, RB, WR, OT, EDGE, CB, S

QB: It will be interesting to see how Cleveland approaches the position this draft. It appears they won’t be selecting one with the 2nd pick, so pick 33 or a trade back into the first become 
interesting options.

RB: Jerome Ford ranked as my #20 RB in 2024, so this isn’t as big of a need to me. Cleveland isn’t really in a position to invest in RB anyway, so I’d be happy to see them stick with Ford or a 
late-round pick.

WR: Jerry Jeudy really turned it on late last season, though the raw volume of passing from Jameis Winston certainly helped. Outside of him, the group is pretty weak. The expectation is that 
Cleveland will draft Travis Hunter and use him as a WR, so they may have found their solution.

OT: Former fourth-round pick Dawand Jones struggled last season after a better 2023. Jack Conklin has maintained a solid level of play, but after agreeing to a contract restructure this 
offseason in which he shortened his contract to end after 2025 it seems his time with the Browns is ending.

EDGE: The Browns have the best EDGE rusher in the NFL. Behind him, though, they are a little thin. Isaiah McGuire performed very well last season, but a larger sample size will tell us more. 
They’ll hope to revitalize the career of Joe Tryon-Shoyinka as a depth piece.

CB: Martin Emerson Jr. really struggled last season after a strong 2023. His contract expires after the season, so they’ll want to add some flexibility at the position. It appears that Nickel 
Greg Newsome II is on his way out, too. His contract expires after the season.

S: With Rodney McLeod Jr. and Juan Thornhill gone, the second projected starting spot turns to Ronnie Hickman. He has been solid in limited snaps, but they’ll want to add some assurance to the 
position.

You simply can’t build a competitive roster with the amount of money Deshaun Watson is being paid not to play quarterback. I don’t blame Cleveland for the decision they made to acquire him or 
the contract they gave him, but we are where we are. I can very easily understand the decision to draft Travis Hunter or Abdul Carter, and it appears that Hunter will be the pick.

First Round Draft History Under Andrew Berry: OT, CB
Second Round Draft History Under Andrew Berry: S, ILB, IDL

Sample Mock Draft:
2. Travis Hunter, WR, Colorado
32. Jaxson Dart, QB, Ole Miss
67. Aireontae Ersery, OT, Minnesota
94. Josaiah Stewart, EDGE, Michigan`
},
'Titans': {
  offense: {
    QB: "Will Levis",
    RB: "Tony Pollard",
    WR1: "Calvin Ridley",
    WR2: "Treylon Burks",
    SWR: "Van Jefferson",
    TE1: "Chig Okonkwo",
    TE2: "Josh Whyle",
    LT: "Dan Moore Jr.",
    LG: "Peter Skoronski",
    C: "Lloyd Cushenberry III",
    RG: "Kevin Zeitler",
    RT: "JC Latham",
  },
  defense: {
    DT1: "Jeffery Simmons",
    NT: "T'Vondre Sweat",
    DT2: "Sebastian Joseph-Day",
    EDGE1: "Arden Key",
    ILB1: "Cody Barton",
    ILB2: "Cedric Gray",
    EDGE2: "Dre'Mont Jones",
    CB1: "L'Jarius Sneed",
    FS: "Xavier Woods",
    SS: "Amani Hooker",
    CB2: "Jarvis Brownlee Jr.",
    NB: "Roger McCreary",
  },
  backups: [
    { position: "RB", name: "Tyjae Spears" },
    { position: "EDGE", name: "Lorenzo Carter" },
    { position: "CB", name: "Darrell Baker Jr." },
    { position: "S", name: "Mike Brown" },
  ],
  draftPreview: `
Picks: 1, 35, 103, 120, 141, 167, 178, 188

Needs: QB, WR, TE, IDL, EDGE, ILB, CB

QB: Cam Ward is going to be the Titans starting quarterback. This is a need by technicality.

WR: Outside of Calvin Ridley, this is a really thin group with Treylon Burks and Van Jefferson projected to start. They’ll want to add a weapon for their new QB early.

TE: Chig Okonkwo is a free agent after the season. They’ll want to either work on an extension or gain some clarity on the long-term plan at TE.

IDL: The Titans have two very important pieces in Jeffery Simmons and T’Vondre Sweat. Sebastian Joseph-Day projects as the third starter upfront, but he is 30 with an expiring contract. 
They’ll want to find a third piece long-term.

EDGE: There isn’t really a long-term piece in place here. I project Arden Key and Dre’Mont Jones to start this season, but both are on expiring contracts and nearing the end of their primes. 
This will be a focus of the draft and/or next offseason for Tennessee.

ILB: The Titans don’t have much opposite of Cody Barton. I project last year’s 4th-round pick Cedric Gray to start, but he didn’t play at all last season so he’s quite a wildcard.

CB: Last year’s 5th-round pick Jarvis Brownlee Jr. projects to be the 2nd starter on the outside. He really struggled last season, ranking as my #108 CB. Roger McCreary will man the Nickel, 
but he is on an expiring contract and also struggled last year.

The Titans have surrounded #1 pick Cam Ward with a strong offensive line. If they can add some receiving threats, they’ll have put him in a nice position to have early success. The defense is 
a work in progress, but the goal has to be putting Cam Ward in the most optimal position.

Sample Mock Draft:
1. Cam Ward, QB, Miami
35. Luther Burden III, WR, Missouri`
}







  
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
  