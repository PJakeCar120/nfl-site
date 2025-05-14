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
      SS: "Andrew Mukuba (R)",
      CB2: "Kelee Ringo",
      NB: "Cooper DeJean",
    },
    backups: [
      { position: "RB", name: "A.J. Dillon" },
      { position: "OG", name: "Kenyon Green" },
      { position: "EDGE/ILB", name: "Jihaad Campbell (R)" },
      { position: "EDGE", name: "Bryce Huff" },
      { position: "EDGE", name: "Azeez Ojulari" },
      { position: "CB", name: "Adoree' Jackson" },
      { position: "S", name: "Sydney Brown" },
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
      LT: "Josh Simmons (R)",
      LG: "Kingsley Suamataia",
      C: "Creed Humphrey",
      RG: "Trey Smith",
      RT: "Jawaan Taylor",
    },
    defense: {
      EDGE1: "George Karlaftis",
      DT1: "Chris Jones",
      DT2: "Omarr Norman-Lott (R)",
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
      { position: "OT", name: "Jaylon Moore" },
      { position: "DT", name: "Mike Pennel" },
      { position: "DT", name: "Jerry Tillery" },
      { position: "EDGE", name: "Charles Omenihu" },
      { position: "EDGE", name: "Ashton Gillotte (R)" },
      { position: "EDGE", name: "Felix Anudike-Uzomah" },
      { position: "ILB", name: "Leo Chenal" },
      { position: "CB", name: "Jaylen Watson" },
      { position: "CB", name: "Nohl Williams (R)" },
      { position: "CB", name: "Nazeeh Johnson" },
      { position: "S", name: "Mike Edwards" },

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
      CB2: "Maxwell Hairston (R)",
      NB: "Taron Johnson",
    },
    backups: [
      { position: "RB", name: "Ty Johnson" },
      { position: "WR", name: "Curtis Samuel" },
      { position: "DT", name: "T.J. Sanders (R)" },
      { position: "DT", name: "Larry Ogunjobi" },
      { position: "EDGE", name: "Landon Jackson (R)" },
      { position: "EDGE", name: "Michael Hoecht" },
      { position: "EDGE", name: "A.J. Epenesa" },
      { position: "ILB", name: "Dorian Williams" },
      { position: "CB", name: "Tre'Davious White" },
      { position: "CB", name: "Dane Jackson" },
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
  
  CB: 996 vacated snaps from Rasul Douglas. They just signed Tre'Davious White to a one-year deal, but they'll want a more long-term solution.
  
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
      RT: "Josh Conerly Jr. (R)",
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
      { position: "OT", name: "Andrew Wylie" },
      { position: "OT", name: "Brandon Coleman" },
      { position: "DT", name: "Jer'Zhan Newton" },
      { position: "DT", name: "Eddie Goldman" },
      { position: "EDGE", name: "Deatrich Wise Jr." },
      { position: "EDGE", name: "Jacob Martin" },
      { position: "CB", name: "Trey Amos (R)" },
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
      RG: "Tate Ratledge (R)",
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
      { position: "WR", name: "Isaac TeSLaa" },
      { position: "OG", name: "Christian Mahogany"},
      { position: "DT", name: "Tyleik Williams (R)" },
      { position: "DT", name: "Levi Onwuzurike" },
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
      FS: "Malaki Starks (R)",
      SS: "Kyle Hamilton",
      CB2: "Chidobe Awuzie",
      NB: "Marlon Humphrey",
    },
    backups: [
      { position: "QB", name: "Cooper Rush" },
      { position: "RB", name: "Justice Hill" },
      { position: "FB", name: "Patrick Ricard" },
      { position: "WR", name: "Tylan Wallace" },
      { position: "TE", name: "Mitchell Evans (R)" },
      { position: "OT", name: "Emery Jones Jr (R)" },
      { position: "OT", name: "Carson Vinson (R)" },
      { position: "OG", name: "Ben Cleveland" },
      { position: "IDL", name: "Cam Jackson (R)" },
      { position: "EDGE", name: "Mike Green (R)" },
      { position: "EDGE", name: "Tavius Robinson" },
      { position: "EDGE", name: "David Ojabo" },
      { position: "ILB", name: "Teddye Buchanan (R)" },
      { position: "IR", name: "Ar'Darius Washington" },
    ],
    draftReview: `
I wanted the Ravens to improve at OG, DLine, and CB. With pick #27, they selected S Malaki Starks. It’s an interesting pick with Starks having experience at Nickel. The secondary now includes 
Humphrey, Washington, Hamilton, and Starks all with experience at Nickel. I’m not entirely sure how they’ll line up, and I’d imagine it will rotate throughout the game, but my inclination is 
they’ll start like this: CB1: Marlon Humphrey, FS: Ar'Darius Washington, SS: Kyle Hamilton, CB2: Nate Wiggins, NB: Malaki Starks. This would mean Humphrey sliding back to the Outside. If they don’t 
want to do that, they’d either move Kyle Hamilton to the Nickel or Ar’Darius Washington to the bench, but Washington was my #30 Safety last year so I’d imagine they’ll favor him over Chidobe Awuzie. 
In terms of the actual pick, as expected I struggle with the positional value aspect. Safety is both a low-paying and volatile position. The Ravens scouting department has been very successful and the 
addition gives them a ton of flexibility, so I can see it working well. Still, he’ll need to be an elite player for the pick to really be worth it. With pick #59, they selected EDGE Mike Green. 
This will be quite a debated pick with Green’s off-field concerns, but I’m not in team meetings so let’s stick to the on-field outlook. Green was a consensus top-30 player from a talent perspective. 
With Odafe Oweh and Kyle Van Noy as starters, the Ravens will be able to ease him into action. Van Noy is 34 years old, so Green will be a perfect successor. From an on-field perspective, this is a slam dunk. 
I wanted a high draft capital addition on the DLine, and Green is exactly that. With pick #91, they took OL Emery Jones Jr. I’ll be curious to see if they move him to OG, which was my final need for the team. 
They just added OT Joe Noteboom, so it does seem more likely he’ll kick inside. In the 4th round they added ILB Teddye Buchanan, so that should be nice depth behind Trenton Simpson who struggled late last season.

Looking forward to the season, this will be an elite Ravens team. Lamar Jackson was the best player in the NFL each of the last two seasons. Both starting OTs Ronnie Stanley and Roger Rosengarten 
and C Tyler Linderbaum return, which are spots of strength for the team. The OGs are a question mark, but I believe with a player of Lamar Jackson’s talent you focus on the defense and trust him to 
make up for a weak spot or two. The wide receiver room is pretty good with Rashod Bateman (my 2024 #29 WR) and Zay Flowers (2024 #21 WR), though Hopkins is a weak spot (but I’d expect lots of 12 
personnel). Tight ends Mark Andrews (2024 #10 TE) and Isaiah Likely (2024 #7 TE) are very strong points for the offense. The run game should be one of the best in the league with Jackson and 
RB Derrick Henry (2024 #3 RB).

On defense, they should also be one of the best units in the league. The interior is very strong with Travis Jones (2024 #33 IDL), Nnamdi Madabuike (2024 #14 IDL) and Broderick Washington 
(2024 #84 IDL). Washington is probably the weakest link of the defense. On the EDGE, Kyle Van Noy (2024 #29 EDGE) and Odafe Oweh (2024 #30 EDGE) form a strong starting duo, while rookie Mike Green 
could make an instant impact. ILB Roquan Smith (2024 #6 ILB) is another star, while his counterpart Trenton Simpson struggled last season (2024 #79 ILB). Simpson is the other question mark on the 
defense. I already talked about the secondary a bit, but it should be one of the best in football. Marlon Humphrey (2024 #10 CB) and Nate Wiggins (2024 #29 CB) form one of the best duos in the league. 
They have another superstar in S Kyle Hamilton (2024 #5 S) next to a solid starter in Ar’Darius Washington (2024 #30 S). Rookie 1st round pick Malaki Starks will be the other starter.

Their depth is very strong too with QB Cooper Rush, OL Joe Noteboom and Emery Jones Jr, WRs Tez Walker and Tylan Wallace, IDL Aeneas Peebles, ILB Teddye Buchanan, EDGEs Tavius Robinson, David Ojabo 
and Adisa Isaac, and CBs Chidobe Awuzie and T.J. Tampa.

This is one of the best rosters in the NFL, if not the best. The only question marks come at OG, DT2, and ILB2. Even then, they have relatively proven entities at those spots, so they won’t be 
dragged down. The abundance of starpower is incredible, so much so that I don’t want to list them all off. It’s hard to imagine, but they probably got better this offseason. If rookies Malaki Starks 
and Mike Green have strong years, this may be the best team in the NFL. GM Eric DeCosta has built a Goliath, now we’ll have to wait and see if it’s finally their year.`,
  },

  Rams: {
    offense: {
      QB: "Matthew Stafford",
      RB: "Kyren Williams",
      WR1: "Puka Nacua",
      WR2: "Davante Adams",
      SWR: "Tutu Atwell",
      TE1: "Tyler Higbee",
      TE2: "Terrance Ferguson (R)",
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
      { position: "TE", name: "Colby Parkinson" },
      { position: "TE", name: "Davis Allen" },
      { position: "C", name: "Coleman Shelton" },
      { position: "NT", name: "Tyler Davis" },
      { position: "EDGE", name: "Josaiah Stewart (R)" },
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
      WR2: "Jayden Higgins (R)",
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
      { position: "WR", name: "Jaylin Noel (R)" },
      { position: "WR", name: "Justin Watson" },
      { position: "WR", name: "John Metchie" },
      { position: "OT", name: "Aireontae Ersery (R)" },
      { position: "OT", name: "Trent Brown" },
      { position: "C", name: "Jarrett Patterson" },
      { position: "DT", name: "Mario Edwards Jr." },
      { position: "EDGE", name: "Derek Barnett" },
      { position: "EDGE", name: "Darrell Taylor" },
      { position: "ILB", name: "E.J. Speed" },
      { position: "CB", name: "Ronald Darby" },
      { position: "CB", name: "Jaylin Smith (R)" },
      { position: "S", name: "Jimmie Ward" },
      { position: "IR", name: "Tank Dell" },
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
      LG: "Donovan Jackson (R)",
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
      { position: "WR", name: "Rondale Moore" },
      { position: "WR", name: "Tai Felton (R)" },
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
      WR2: "Matthew Golden (R)",
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
      { position: "WR", name: "Christian Watson" },
      { position: "WR", name: "Dontayvion Wicks" },
      { position: "WR", name: "Savion Williams (R)" },
      { position: "SWR", name: "Mecole Hardman" },
      { position: "OT", name: "Anthony Belton (R)" },
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
      RB: "Omarion Hampton (R)",
      WR1: "Quentin Johnston",
      WR2: "Tre Harris (R)",
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
      { position: "RB", name: "Najee Harris" },
      { position: "WR", name: "Mike Williams" },
      { position: "OG", name: "Trey Pipkins" },
      { position: "C", name: "Andre James" },
      { position: "DT", name: "Jamaree Caldwell (R)" },
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
      WR2: "Robert Woods",
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
      DT2: "Derrick Harmon (R)",
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
      { position: "RB", name: "Kaleb Johnson (R)" },
      { position: "NT", name: "Montravious Adams" },
      { position: "DT", name: "Isaiahh Loudermilk" },
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
      RB: "RJ Harvey (R)",
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
      NB: "Jahdae Barron (R)",
    },
    backups: [
      { position: "RB", name: "Audric Estime" },
      { position: "RB", name: "Jaleel McLaughlin" },
      { position: "WR", name: "Marvin Mims" },
      { position: "WR", name: "Pat Bryant (R)" },
      { position: "NT", name: "Malcolm Roach" },
      { position: "DT", name: "Jordan Jackson" },
      { position: "EDGE", name: "Jonah Ellis" },
      { position: "EDGE", name: "Baron Browning" },
      { position: "EDGE", name: "Savion Jones (R)" },
      { position: "ILB", name: "Justin Strnad" },
      { position: "CB", name: "Ja'Quan McMillian" },
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
      WR2: "Chris Godwin",
      SWR: "Emeka Egbuka (R)",
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
      { position: "WR", name: "Jalen McMillan" },
      { position: "WR", name: "Sterling Shepard" },
      { position: "NT", name: "Greg Gaines" },
      { position: "EDGE", name: "Anthony Nelson" },
      { position: "EDGE", name: "Chris Braswell" },
      { position: "ILB", name: "SirVocea Dennis" },
      { position: "CB", name: "Benjamin Morrison (R)" },
      { position: "CB", name: "Jacob Parrish (R)" },
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
      TE2: "Elijah Arroyo (R)",
      LT: "Charles Cross",
      LG: "Grey Zabel (R)",
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
      FS: "Julian Love",
      SS: "Nick Emmanwori (R)",
      CB2: "Josh Jobe",
      NB: "Devon Witherspoon",
    },
    backups: [
      { position: "QB", name: "Jalen Milroe (R)" },
      { position: "RB", name: "Zach Charbonnet" },
      { position: "TE", name: "AJ Barner" },
      { position: "OG", name: "Christian Haynes" },
      { position: "EDGE", name: "Demarcus Lawrence" },
      { position: "EDGE", name: "Derick Hall" },
      { position: "CB", name: "Nehemiah Pritchett" },
      { position: "S", name: "Coby Bryant" },
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
      EDGE2: "Shemar Stewart (R)",
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
      { position: "OG", name: "Dylan Fairchild (R)" },
      { position: "OG", name: "Jalen Rivers (R)" },
      { position: "OG", name: "Lucas Patrick" },
      { position: "DT", name: "T.J. Slaton" },
      { position: "DT", name: "McKinnley Jackson" },
      { position: "ILB", name: "Demetrius Knight Jr. (R)" },
      { position: "ILB", name: "Barrett Carter (R)" },
      { position: "EDGE", name: "Joseph Ossai" },
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
      DT1: "Darius Robinson",
      NT: "Dalvin Tomlinson",
      DT2: "Walter Nolen (R)",
      EDGE1: "Josh Sweat",
      ILB1: "Akeem Davis-Gaither",
      ILB2: "Mack Wilson Sr.",
      EDGE2: "Zaven Collins",
      CB1: "Sean Murphy-Bunting",
      FS: "Budda Baker",
      SS: "Jalen Thompson",
      CB2: "Will Johnson (R)",
      NB: "Garrett Williams",
    },
    backups: [
      { position: "WR", name: "Zay Jones" },
      { position: "TE", name: "Elijah Higgins" },
      { position: "NT", name: "Bilal Nichols" },
      { position: "DT", name: "Calais Campbell" },
      { position: "DT", name: "L.J. Collier" },
      { position: "DT", name: "Justin Jones" },
      { position: "DT", name: "Dante Stills" },
      { position: "EDGE", name: "Baron Browning" },
      { position: "EDGE", name: "Jordan Burch (R)" },
      { position: "ILB", name: "Cody Simon (R)" },
      { position: "CB", name: "Starling Thomas V" },
      { position: "CB", name: "Max Melton" },
      { position: "CB", name: "Denzel Burke (R)" },
      { position: "S", name: "Dadrion Taylor-Demerson" },
    ],
    draftReview: `
A couple weeks ago, I talked about how underrated I felt this roster was. Well, I think they nailed the draft. I wanted them to improve the defensive line; they went out and took 
IDL Walter Nolen 16th, who I had 11th in my “What I’d Do as GM for Every Team” draft. Then, they grabbed CB Will Johnson at 47. Obviously he fell because of health concerns, so I don’t really 
know how valid that is from the outside. If he can stay healthy, though, they added a borderline top-10 prospect in the second round. In the third round, they took EDGE Jordan Burch 12 spots 
after expected according to MockDraftDatabase’s consensus big board. In the 4th they added linebacker depth, which is good because they didn’t have a clear third guy. The only thing they didn’t 
add that I wanted to see was some OL competition. They are strong at both T positions and C, but the OGs could be a problem. Still, this was a very successful draft from both a talent and need 
perspective.

Overall, I really like where the Cardinals stand next season.

The defense is going to be strong. In the words of @ericeager_, it’s a really nice weak-link unit. Up front, they have my 2024 #26 IDL Dalvin Tomlinson sandwiched between last year’s first 
round pick Darius Robinson and this year’s first round pick Walter Nolen. They added my 2024 #25 EDGE Josh Sweat to be a clear #1, and a rotation of Zaven Collins (2024 #48 EDGE), Baron Browning (2024 #69 EDGE), 
and rookie Jordan Burch will be a strong complement. Both ILBs, Akeem Davis-Gaither (2024 #49 ILB) and Mack Wilson Sr. (2024 #61 ILB) are startable and we’ve seen Gannon have success without starpower there. 
At CB, they have a wealth of options. Assuming Will Johnson is healthy, he’ll instantly be a quality player. Sean Murphy-Bunting (2024 #46 CB) is dependable, while Starling Thomas V (2024 #50 CB) was fine last season. 
They have last year’s 43rd overall pick in Max Melton, too. In the slot, they have my #1 overall Nickel from last year, Garrett Williams. At Safety, they’re very strong with Budda Baker and Jalen Thompson. 
There isn’t any noticeable weak spot on the defense.

To me, offense is the bigger question mark. I graded Kyler Murray as the #8 QB last season, so I’m confident in him. The run game was strong last year, and Trey McBride (2024 #2 TE) is a stud. 
The OTs (Paris Johnson Jr. and Jonah Williams) and C (Hjalte Froholdt) are good, but as I mentioned I have some concern over the OGs. They'll need some secondary WR to step up, too. 
Projected WR2 Michael Wilson was my #86 WR, while Slot Greg Dortch was my #81. To reach that next level, they need to get MHJ (2024 #48 WR) more involved. If the Kyler to MHJ connection can grow, 
defenses are going to have a really tough time guarding both MHJ and McBride while worrying about the run game.

I think this is a Cardinals team that could surprise a lot of people next season – I won’t be one of them.`,

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
      ILB1: "Jalon Walker (R)",
      ILB2: "Kaden Ellis",
      EDGE2: "James Pearce Jr. (R)",
      CB1: "A.J. Terrell",
      FS: "Jessie Bates III",
      SS: "Xavier Watts (R)",
      CB2: "Mike Hughes",
      NB: "Billy Bowman Jr. (R)",
    },
    backups: [
      { position: "QB", name: "Kirk Cousins" },
      { position: "RB", name: "Tyler Allgeier" },
      { position: "WR", name: "KhaDarel Hodge" },
      { position: "DT", name: "Kentavius Street" },
      { position: "DT", name: "Ta'Quon Graham" },
      { position: "DT", name: "Zach Harrison" },
      { position: "EDGE", name: "Arnold Ebiketie" },
      { position: "ILB", name: "Divine Deablo" },
      { position: "ILB", name: "Troy Anderson" },
      { position: "CB", name: "Dee Alford" },
      { position: "CB", name: "Mike Ford" },
      { position: "CB", name: "Clark Phillips III" },
      { position: "S", name: "Jordan Fuller" },
    ],
    draftReview: `
I wanted the Falcons to completely revamp the defensive line in this draft. They started off very strong by selecting EDGE/ILB Jalon Walker at 15 (12th pick in my “What I’d Do as All 32 GMs” draft),
who I think is a great fit for them. They then traded back into the first round to select EDGE James Pearce Jr. at 26 (around where I had him projected). Look, I love the pick. I’ll explain later 
how I see the Falcons using Walker, Pearce Jr, and Leonard Floyd, but I think it’ll really change the defense. That being said, the trade is inexcusable. They moved up 20 picks from 46th to 26th 
and sent their first-round pick next year. This is a team that won 8 games last season and has an unproven entity at QB. I’m a strong proponent in not devaluing future draft picks, so there’s really 
no way of justifying the trade in my eyes. If Penix struggles or gets injured, this could be a colossal issue for Atlanta. 

From an on-field perspective I really like what Atlanta can do on the EDGE this season. I imagine Walker will primarily play the EDGE, but they should also use some fun disguised looks given the 
capability to play Pearce Jr. and Floyd (my #44 2024 EDGE) on the EDGE with Walker lined up at ILB. The additions of Xavier Watts and Billy Bowman Jr. should really help the secondary. Watts will 
likely start at Safety opposite Jessie Bates III, while Bowman Jr. may take over the Nickel position from Dee Alford (my #113 CB in 2024).

Looking forward to the season, I think Atlanta is a bit of a question mark. On offense, we don’t really know what they have in Penix. The offensive line should remain a strength as long as Ryan Neuzil 
is an apt replacement for Drew Dalman, and with it the run game. In the receiving game, they’re pretty thin outside of Drake London (my #15 2024 WR) and Darnell Mooney (my #27).

On defense, the interior is still a big concern. IDL David Onyemata ranked #65 among DL for me last season, while IDL Morgan Fox ranked #46. They’ll badly need 2024 35th overall pick Ruke Orhorhoro 
to step up. Last year, Atlanta ranked 26th against the run in EPA/play. This is especially a concern in a division where Tampa Bay and Carolina run the ball so well. I already talked about the EDGE 
room, which I think will be a huge improvement from last season and will make a big impact. The ILBs are passable. At CB1, they have the fantastic A.J. Terrell, my #8 CB last season. CB2 Mike Hughes 
has struggled each of the past 4 seasons, so that is a big concern of mine. I discussed this earlier, but Nickel will be an interesting spot for them. The hope is certainly that Billy Bowman Jr. can 
step up immediately, as Alford hasn’t proved to be startable. Safety should be a point of strength with Jessie Bates III, my #2 S last season, and 3rd-round pick Xavier Watts, who is a very “NFL-Ready” player.

In summary, there are a few too many question marks with this roster for me to be confident. How will Penix fare in his first real season as a starter? Can a receiver step up outside of London and Mooney? 
Will the offensive line look the same without Dalman? Can Ruke Orhorhoro step up and anchor the IDL? Will both rookie EDGE rushers be immediate impact players? Can the rookie 3rd and 4th round picks fix a 
secondary that struggled greatly last season?

On offense, they have a strong offensive line, a good run game and two very good WRs. On defense, they have the 35th pick in 2024 at IDL who we haven’t gotten to see much of yet, two promising EDGE first-round 
draft picks, and stars in A.J. Terrell and Jessie Bates III. There’s certainly room for hope, I just have too many questions to feel good about their outlook for the 2025 season.`,

  },
  Colts: {
    offense: {
      QB: "Anthony Richardson",
      RB: "Jonathan Taylor",
      WR1: "Michael Pittman",
      WR2: "Alec Pierce",
      SWR: "Josh Downs",
      TE1: "Tyler Warren (R)",
      TE2: "Drew Ogletree",
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
      { position: "TE", name: "Mo Alie-Cox" },
      { position: "EDGE", name: "JT Tuimoloau (R)" },
      { position: "EDGE", name: "Samson Ebukam" },
      { position: "EDGE", name: "Tyquan Lewis" },
      { position: "CB", name: "Samuel Womack III" },
      { position: "CB", name: "Justin Walley (R)" },
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
      LG: "Jonah Savaiinaea (R)",
      C: "Aaron Brewer",
      RG: "James Daniels",
      RT: "Austin Jackson",
    },
    defense: {
      DT1: "Zach Sieler",
      NT: "Kenneth Grant (R)",
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
      { position: "NT", name: "Benito Jones" },
      { position: "ILB", name: "Willie Gay" },
      { position: "ILB", name: "K.J. Britt" },
      { position: "CB", name: "Cam Smith" },
    ],
  },
  Cowboys: {
    offense: {
      QB: "Dak Prescott",
      RB: "Javonte Williams",
      WR1: "George Pickens",
      WR2: "Jalen Tolbert",
      SWR: "CeeDee Lamb",
      TE1: "Jake Ferguson",
      TE2: "Luke Schoonmaker",
      LT: "Tyler Guyton",
      LG: "Tyler Smith",
      C: "Cooper Beebe",
      RG: "Tyler Booker (R)",
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
      { position: "RB", name: "Jaydon Blue (R)" },
      { position: "WR", name: "KaVontae Turpin" },
      { position: "WR", name: "Jonathan Mingo" },
      { position: "OG", name: "Brock Hoffman" },
      { position: "DT", name: "Solomon Thomas" },
      { position: "EDGE", name: "Donovan Ezeiruaku (R)" },
      { position: "EDGE", name: "Sam Williams" },
      { position: "EDGE", name: "Marshawn Kneeland" },
      { position: "EDGE", name: "Payton Turner" },
      { position: "ILB", name: "Marist Liufau" },
      { position: "ILB", name: "Jack Sanborn" },
      { position: "ILB", name: "Shemar James (R)" },
      { position: "CB", name: "Shavon Revel Jr (R)" },
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
    DT2: "Alfred Collins (R)",
    EDGE2: "Mykel Williams (R)",
    ILB1: "Fred Warner",
    ILB2: "Dee Winters",
    CB1: "Deommodore Lenoir",
    FS: "Ji'Ayir Brown",
    SS: "Malik Mustapha",
    CB2: "Renardo Green",
    NB: "Upton Stout (R)",
  },
  backups: [
    { position: "QB", name: "Mac Jones" },
    { position: "RB", name: "Isaac Guerendo" },
    { position: "FB", name: "Kyle Juszczyk" },
    { position: "WR", name: "Demarcus Robinson" },
    { position: "DT", name: "Kevin Givens" },
    { position: "DT", name: "Evan Anderson" },
    { position: "EDGE", name: "Yetur Gross-Matos" },
    { position: "EDGE", name: "Sam Okuayinonu" },
    { position: "ILB", name: "Nick Martin (R)" },
    { position: "ILB", name: "Luke Gifford" },
    { position: "CB", name: "Tre Brown" },
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
    SWR: "Luther Burden III (R)",
    TE1: "Cole Kmet",
    TE2: "Colston Loveland (R)",
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
    { position: "WR", name: "Olamide Zaccheaus" },
    { position: "OT", name: "Ozzy Trapilo (R)" },
    { position: "OT", name: "Kiran Amegadjie" },
    { position: "DT", name: "Shemar Turner (R)" },
    { position: "DT", name: "Andrew Billings" },
    { position: "EDGE", name: "Austin Booker" },
    { position: "ILB", name: "Ruben Hyppolite II (R)" },
    { position: "CB", name: "Zah Frazier (R)" },
    { position: "CB", name: "Terell Smith" },
    { position: "S", name: "Jonathan Owens" },
    { position: "S", name: "Elijah Hicks" },
  ],
  draftReview: `
My most important needs heading into the draft for the Bears were EDGE and CB. With the 10th pick, they selected TE Colston Loveland. Loveland is a talented receiver who should fit well in Head Coach 
Ben Johnson’s scheme, with the goal of him taking the role of Sam Laporta. That being said, I have major issues with this pick. To start, the hit rate on first-round Tight Ends has been very low. 
These are the most recent TEs to go in the first round: Brock Bowers, Dalton Kincaid, Kyle Pitts, TJ Hockenson, Noah Fant, Hayden Hurst, OJ Howard, Evan Engram, David Njoku, and Eric Ebron. 
Outside of Bowers and Hockenson, I imagine teams regret these picks (and Hockenson was traded from his original team). Furthermore, the position is extremely low-paying. Kittle and McBride, the two 
best TEs in the league, just signed for $19.1M and $19M AAV, respectively. Those would be the 13th and 14th highest paid EDGEs in the league, an example I use as Mykel Williams was on the board.
So they use the 10th pick on a player at a low-paying position with a low hit-rate. I can’t get behind the process. Moving on, the Bears took WR Luther Burden III with the 39th pick. I’m intrigued by 
the pick and how the Bears plan to use Burden in addition to Moore and Odunze. Nevertheless, if Ben Johnson can scheme him the ball, he’ll be a dangerous player. This is right around where Burden was 
projected and he plays a premier position, so I’m on board. The Bears then traded picks 41, 72, and 240 for picks 56, 62, and 109. Without referencing a trade calculator, I think this was about what we would expect. 
With the 56th pick they selected OT Ozzy Trapilo. Clearly, the theme of the draft was to make sure they left no stone unturned to set QB Caleb Williams up for a successful season. I’ll never be upset about a team 
investing in the trenches. The pick gives them insurance if they don’t extend LT Braxton Jones, and at worst it gives them a solid swing tackle. With the 62nd pick, they selected IDL Shemar Turner. Turner puts the 
Bears in a really nice spot at IDL. Gervon Dexter Sr. was fantastic last season and will be the #1 moving forward. With the 2nd spot, the Bears can start Grady Jarrett and ease Turner into action with the goal of him 
eventually becoming the second long-term starter. While I can understand all three 2nd round picks, I do still have trouble with the Bears neglecting needs at EDGE and CB and think the defense will struggle because of it. 
That being said, I understand the approach to put Caleb Williams in the best position possible to succeed next year, as the franchise will depend on his success.

Looking forward to next year, I have a very difficult time projecting the success of the offense. It truly comes down to QB Caleb Williams. Williams was my 26th ranked QB last season. He really 
struggled against pressure, didn’t make many big time throws, and overall had accuracy issues. However, his supporting cast this season should be phenomenal. First, they added offensive mastermind Ben Johnson as Head Coach. 
The offensive line should be one of the best in the league. Both OTs, Braxton Jones and Darnell Wright, are good starters. OG Joe Thuney is still one of the best in the league, while OG Jonah Jackson is a bit of a question 
mark but knows the scheme well. C Drew Dalman is also one of the best in the league. The Wide Receivers will be very interesting with D.J. Moore (my 2024 #50 WR, but 2023 #4 WR), 2024 9th overall pick Rome Odunze, and 2025 
39th overall pick Luther Burden III. Both Moore and Odunze struggled last season. Still, Moore was my #4 WR in 2023 and I won’t write off the 9th pick in the draft in Rome Odunze after one season. At Tight End, they’ll be 
very strong with 10th overall pick Colston Loveland and Cole Kmet (2024 #27 TE, 2023 #6 TE). At RB they have D’Andre Swift, my 2024 #35 RB.

On defense, I think they’ll be relatively average. I’m intrigued by the Interior Defensive Line. Gervon Dexter Sr. was very good last season (2024 #21 IDL) and they signed Grady Jarrett to pair with him (2024 #28 IDL). 
Jarrett is 32 years old, so we can expect a bit of regression. Still, it’s a nice duo. They drafted Shemar Turner 62nd, so he’ll rotate in and ideally eventually be Dexter’s counterpart. I like what they’ve done here. 
On the EDGE, I think they’re a bit weak. Montez Sweat (2024 #24 EDGE) is a below-average number one. He’ll pair with Free Agent addition Dayo Odeyingbo (2024 #55 EDGE) who is really unproven. They don’t have a well defined 
number 3, with Austin Booker the most likely candidate. The Inside Linebackers should be fine with T.J. Edwards (2024 #45 ILB, 2023 #7 ILB) and Tremaine Edmunds (2024 #67 ILB, 2023 #26 ILB). 
This will likely be Edmunds’ last season with the team, so they’ll need to start looking for a long-term replacement. At CB, they have a stud in Jaylon Johnson (2024 #15 CB, 2023 #1 CB). 
However, they are very weak outside of him, with Tyrique Stevenson (2024 #71 CB) the other projected starter. Kyler Gordon should start at Nickel (2024 #109 CB, 2023 #42 CB). I happen to like both 
Safeties in Jaquan Brisker (2024 #6 S) and Kevin Byard (2024 #11 S). For them, it will moreso be a question of staying healthy. The defense just lacks starpower outside of Jaylon Johnson. I like the 
IDL and the Safeties, and the linebackers shouldn’t be an issue. I think they’ll struggle to rush the Quarterback, though. I also see CB2 and EDGE3 as big holes.

To me, the Bears are one of the most intriguing teams in the league. On defense, I think they’ll be around average. They have the holes I’ve referenced, but they also have some legitimate strengths with Johnson, Sweat, 
Dexter, and the Safeties. On offense, I really don’t know. The talent is without a doubt there. If Caleb Williams looks better under pressure, they could be really dangerous. They have so many weapons, it’s just a question 
of if Williams can get the ball in their hands. Of course, it won’t help that the NFC North will be so strong again this season. The Bears will certainly be a fun team to keep your eye on. `,

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
    RT: "Kelvin Banks Jr. (R)",
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
    { position: "QB", name: "Tyler Shough (R)" },
    { position: "QB", name: "Spencer Rattler" },
    { position: "OG", name: "Nick Saldiveri" },
    { position: "DT", name: "Vernon Broughton (R)" },
    { position: "DT", name: "Nathan Shepherd" },
    { position: "DT", name: "Davon Godchaux" },
    { position: "EDGE", name: "Cameron Jordan" },
    { position: "CB", name: "Ugo Amadi" },
    { position: "S", name: "Jonas Sanker (R)" },
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
    WR1: "Tetairoa McMillan (R)",
    WR2: "Jalen Coker",
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
    EDGE2: "Nic Scourton (R)",
    CB1: "Jaycee Horn",
    FS: "Demani Richardson",
    SS: "Tre'von Moehrig",
    CB2: "Mike Jackson",
    NB: "Chau Smith-Wade",
  },
  backups: [
    { position: "RB", name: "Rico Dowdle" },
    { position: "RB", name: "Trevor Etienne (R)" },
    { position: "WR", name: "Xavier Legette" },
    { position: "WR", name: "David Moore" },
    { position: "DT", name: "A'Shawn Robinson" },
    { position: "DT", name: "Shy Tuttle" },
    { position: "DT", name: "LaBryan Ray" },
    { position: "DT", name: "Cam Jackson (R)" },
    { position: "EDGE", name: "Princely Umanmielen (R)" },
    { position: "EDGE", name: "Pat Jones II" },
    { position: "EDGE", name: "DJ Johnson" },
    { position: "ILB", name: "Christian Rozeboom" },
    { position: "S", name: "Nick Scott" },
    { position: "S", name: "Lathan Ransom (R)" },
  ],
  draftReview: `
I wanted the Panthers to find long-term plans at WR, EDGE, and ILB. With pick #8, the Panthers selected WR Tetairoa McMillan. I took McMillan #8 in my “What I’d Do as GM of All 32 Teams” draft as 
well. First of all, the rising salaries at WR have made this a premier position. We just saw Ja’Marr Chase sign for over $40M AAV. McMillan fills a massive need for the Panthers, too. Last year, 
Young really broke out at the end of the season despite throwing primarily to Adam Thielen (my 2024 #28 WR) and Jalen Coker (2024 #49 WR). Now, he gets a legit #1. From both a math and fit perspective, 
this is a slam dunk. He was in the late-teens in Mel Kiper and Daniel Jeremiah’s final big boards, but I like the player and am fine with a small reach. With pick #51, the Panthers took EDGE Nic Scourton. 
With pick #77, they took EDGE Princely Umanmielen. D.J. Wonnum graded out well for me last year, ranking 23rd. Wonnum is 28 and an upcoming free agent, So, there’s lots of uncertainty here. Adding both EDGES 
is fantastic work with respect to both positional value and long-term need.

I wanted the Panthers to find long-term fixes at WR, EDGE, and ILB. Out of those three, the two with significant positional value are WR and EDGE. They made the exact pick I would have at 8, then they added 
two EDGES. This was a slam dunk draft for the Panthers.

Looking forward to next year, the Panthers will be an interesting team to watch. I think that the offense will be pretty good. QB Bryce Young (2024 #19 QB) looked really strong the latter half of 
the season. The offensive line is very strong and they return all five starters. With the strong offensive line comes a good run game led by Chuba Hubbard (2024 #6 RB). In the passing game, the 
combination of McMillan on the outside and Thielen in the slot could really work. Jalen Coker or Xavier Legette will be the other starter on the outside (I liked Coker). The Tight End room isn’t 
great, led by Tommy Tremble (2024 #33 TE). All in all, I see a QB that looked very good to end the season, a strong offensive line, and a nice duo at WR. I think this offense could be really solid.

This defense will look very different from last year. Derrick Brown, their best interior defensive lineman, was out for essentially all of last season. Counting him, they added 4 new starters this 
offseason. The IDL will feature Derrick Brown (2023 #25 IDL), Tershawn Wharton (2024 #31 IDL), and Bobby Brown III (2024 #99 IDL). That’s not necessarily an elite unit, but it’s solid and a really 
nice improvement from last year. I spoke about the EDGE room above, but Wonnum graded as an around average starter for me. Adding in Scourton and Umanmielen creates a really exciting room. 
At inside linebacker, Josey Jewell (2024 #21 ILB) and Trevin Wallace (2024 #84 ILB) will be the starters. Again, it’s not a strength but won’t drag them down. At CB, Jaycee Horn (2024 #13 CB) is a 
great player. Opposite him will be Mike Jackson, my 2024 #45 CB. They don’t really have a defined Nickel, so it will be interesting to see what they do there. At safety, they added Tre’von Moehrig 
(2024 #16 S) to pair with Demani Richardson (2024 #71 S).

Depth-wise, they are pretty strong. Rico Dowdle (2024 #24 RB) should make an impact. IDL A’Shawn Robinson should be a nice contributor. I already talked about the additions of Scourton and Umanmielen, 
but EDGE Pat Jones II was also brought in and will play. Finally, they have ILB Christian Rozeboom and S Nick Scott.

Overall, this is a team on the rise. The offense could be really good if Bryce Young looks the way he did the latter half of last season. They’ve got the QB, the offensive line, and now a legit WR1 in 
Tet McMillan. I think the defense will still struggle. Despite the additions, they lack starpower outside of Derrick Brown and Jaycee Horn. They have a deep EDGE room, but no star talent. 
In the secondary, I don’t see a plan at Nickel and both CB2 Mike Jackson and S Demani Richardson are question marks. The team isn’t there yet, but you can easily see the path they are on.`,
},
'Jets': {
  offense: {
    QB: "Justin Fields",
    RB: "Breece Hall",
    WR1: "Garrett Wilson",
    WR2: "Allen Lazard",
    SWR: "Malachi Corley",
    TE1: "Mason Taylor (R)",
    TE2: "Jeremy Ruckert",
    LT: "Olu Fashanu",
    LG: "John Simpson",
    C: "Joe Tippmann",
    RG: "Alijah Vera-Tucker",
    RT: "Armand Membou (R)",
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
    { position: "CB", name: "Azaraye'h Thomas (R)" },
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
    RB: "Ashton Jeanty (R)",
    WR1: "Jakobi Meyers",
    WR2: "Jack Bech (R)",
    SWR: "Tre Tucker",
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
    CB2: "Eric Stokes",
    NB: "Darnay Holmes",
  },
  backups: [
    { position: "QB", name: "Aidan O'Connell" },
    { position: "RB", name: "Raheem Mostert" },
    { position: "OT", name: "Caleb Rogers (R)" },
    { position: "OT", name: "Charles Grant (R)" },
    { position: "DT", name: "Jonah Laulu" },
    { position: "EDGE", name: "Tyree Wilson" },
    { position: "EDGE", name: "Charles Snowden" },
    { position: "CB", name: "Darien Porter (R)" },
    { position: "CB", name: "Decamerion Richardson" },
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
    WR2: "Travis Hunter (R)",
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
    { position: "WR", name: "Dyami Brown" },
    { position: "WR", name: "Gabe Davis" },
    { position: "TE", name: "Hunter Long" },
    { position: "OG", name: "Wyatt Milum (R)" },
    { position: "DT", name: "DaVon Hamilton" },
    { position: "ILB", name: "Ventrell Miller" },
    { position: "CB", name: "Caleb Ransaw (R)" },
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
    WR2: "Kyle Williams (R)",
    SWR: "Demario Douglas",
    TE1: "Hunter Henry",
    TE2: "Austin Hooper",
    LT: "Will Campbell (R)",
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
    { position: "RB", name: "TreVeyon Henderson (R)" },
    { position: "RB", name: "Antonio Gibson" },
    { position: "WR", name: "Kayshon Boutte" },
    { position: "WR", name: "Kendrick Bourne" },
    { position: "WR", name: "Mack Hollins" },
    { position: "WR", name: "Ja'Lynn Polk" },
    { position: "OG", name: "Layden Robinson" },
    { position: "C", name: "Jared Wilson (R)" },
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
    DT1: "Darius Alexander (R)",
    NT: "Dexter Lawrence",
    DT2: "Rakeem Nunez-Roches",
    EDGE1: "Brian Burns",
    ILB1: "Bobby Okereke",
    ILB2: "Micah McFadden",
    EDGE2: "Abdul Carter (R)",
    CB1: "Paulson Adebo",
    FS: "Jevon Holland",
    SS: "Tyler Nubin",
    CB2: "Deonte Banks",
    NB: "Dru Phillips",
  },
  backups: [
    { position: "QB", name: "Jaxson Dart (R)" },
    { position: "RB", name: "Devin Singletary" },
    { position: "WR", name: "Jalin Hyatt" },
    { position: "WR", name: "Lil'Jordan Humphrey" },
    { position: "DT", name: "Roy Robertson-Harris" },
    { position: "DT", name: "Elijah Chatman" },
    { position: "DT", name: "Jeremiah Ledbetter" },
    { position: "EDGE", name: "Kayvon Thibodeaux" },
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
    RB: "Quinshon Judkins (R)",
    WR1: "Jerry Jeudy",
    WR2: "Cedric Tillman",
    SWR: "Jamari Thrash",
    TE1: "David Njoku",
    TE2: "Harold Fannin Jr (R)",
    LT: "Dawand Jones",
    LG: "Joel Bitonio",
    C: "Ethan Pocic",
    RG: "Wyatt Teller",
    RT: "Jack Conklin",
  },
  defense: {
    EDGE1: "Myles Garrett",
    DT1: "Mason Graham (R)",
    DT2: "Maliek Collins",
    EDGE2: "Isaiah McGuire",
    ILB1: "Carson Schwesinger (R)",
    ILB2: "Jordan Hicks",
    CB1: "Denzel Ward",
    FS: "Ronnie Hickman",
    SS: "Grant Delpit",
    CB2: "Martin Emerson Jr ",
    NB: "Greg Newsome II",
  },
  backups: [
    { position: "QB", name: "Dillon Gabriel (R)" },
    { position: "QB", name: "Shedeur Sanders (R)" },
    { position: "QB", name: "Kenny Pickett" },
    { position: "RB", name: "Jerome Ford" },
    { position: "RB", name: "Dylan Sampson (R)" },
    { position: "WR", name: "Diontae Johnson" },
    { position: "TE", name: "Blake Whiteheart" },
    { position: "OG", name: "Teven Jenkins" },
    { position: "DT", name: "Mike Hall Jr." },
    { position: "DT", name: "Shelby Harris" },
    { position: "EDGE", name: "Joe Tryon-Shoyinka" },
    { position: "EDGE", name: "Ogbo Okoronkwo" },
    { position: "ILB", name: "Mohamoud Diabate" },
    { position: "ILB", name: "Jerome Baker" },
    { position: "CB", name: "Cameron Mitchell" },
    { position: "IR", name: "Jeremiah Owusu-Koramoah" },
  ],
  draftReview: `
To begin the draft, the Browns traded picks #2, #104, and #200 for picks #5, #36, #126, and the Jaguars’ 2026 First Round pick. Fantastic. WR/CB Travis Hunter will likely be a great player, but this
is a QB trade-up package. When you can move off of a non-QB for this set of picks, you have to do it. Quite frankly, I don’t think the difference between Hunter and IDL Mason Graham, who they selected
#5, will be that large. Moving onto Graham, I love the pick. The Browns get a premier player at a premier position. When you talk about rebuilding a roster, the first step is the lines. A Defensive Line 
with Graham and EDGE Myles Garrett will be haunting for opposing offenses. This is great work by Andrew Berry and Co. With pick #33, Cleveland selected ILB Carson Schwesinger. This is a confusing pick for me.
Cleveland has much more pressing long-term needs at WR, OT, and CB. Certainly, this isn’t a vote of confidence in the health of Jeremiah Owusu-Koramoah, who I think is one of the best ILBs in the NFL. With pick 
#36, the Browns selected RB Quinshon Judkins. Again, I have trouble with this pick. In such a deep RB draft class, I really would’ve liked to see the Browns look at RB later 
(which they actually did with RB Dylan Sampson in the 4th). Schwesinger and Judkins may very well be great NFL players. That being said, the Browns are in all likelihood still without their QB of the future. 
If the goal is to draft a QB high in 2026, then they should be preparing a supporting cast to make his introduction to the NFL as easy as possible. The way you do that is to have a strong Offensive Line and Wide Receivers. 
Currently, the Offensive Line is in disarray as we look toward the future. Both starting Offensive Guards Wyatt Teller (age 31) and Joel Bitonio (age 34) are Free Agents following the season, as are starting 
Offensive Tackle Jack Conklin (age 31) and starting Center Ethan Pocic (age 30). The only other projected starter, Offensive Tackle Dawand Jones, has not yet proven to be a long-term starter. Both Teller and Bitonio 
may be back given their projected Void year cap hits, but the Offensive Tackles are worrisome. At Wide Receiver, only Jerry Jeudy has proven to be a long-term starter. So, this is not a team that is set-up 
to develop a Quarterback. With premier draft capital in picks #33 and #36, Cleveland had a great chance to start the process of cleaning this up. Opting for an off-ball Linebacker and a Running Back are very surprising
decisions to me. I will say, however, that Cleveland has a fantastic analytics department. There could certainly be things they are looking at internally that give them confidence in OT Dawand Jones, OG Zak Zinter, and 
WR Cedric Tillman. Or, their models could be telling them that their projected hit rates on Schwesinger and Judkins are so high that they were players they wouldn’t feel comfortable passing on. Still, I have trouble with 
an analytical Front Office selecting non-premier positions over more premier ones mid-rebuild, especially with a new Quarterback set to come in next season. Moving on, with pick #67 Cleveland selected TE Harold Fannin Jr. 
Fannin was a highly-debated prospect after leading the FBS in receptions but testing to just a 7.78 RAS (Relative Athletic Score). I like the idea of shooting for his upside here. Starting TE David Njoku is a Free Agent 
following the season, so we will see if Fannin can take over long-term or form a nice one-two punch with Njoku. Njoku has so much money tied up in Void years that it seems the latter is the more likely option. With pick #94, 
the Browns selected QB Dylan Gabriel. This was quite a surprise, but like I said Cleveland has a strong analytical department so maybe they are seeing something, and he does fit their mold of accurate QBs. I’ll never criticize a 
team for taking a shot on a young Quarterback. In the 4th round, the Browns took RB Dylan Sampson. I’m a big fan of this pick, and that reiterates my confusion with the Judkins pick. In a normal year, Sampson probably would have 
gone in day 2. I wish we had gotten to see him as a starter this season. Clearly, the Browns are gearing up to play good defense and run the ball next season. With their final pick, the Browns selected QB Shedeur Sanders 
in the 5th round. There may never again be a more discussed 5th round pick at the time of the pick. Sanders is another scheme fit for what the Browns are trying to do. They are looking for accurate QBs who can protect the ball. 
Sanders likely won’t make special plays, but he could grow into a very stable NFL QB, whether that is as a starter or a valuable backup. 


Looking towards next season, it’s difficult to project Cleveland’s offense given that we don’t know who will be playing QB. Still, there’s no reason to expect considerable improvement from last year. 
It is going to look different based on which QB starts. Either way, I think we’ll see a very run-first approach. If it is Joe Flacco, expect a lot of aggressive throws similar to 2023. If it is one of the 
rookies or Pickett, they’ll likely be asked to play smart and protect the ball. The Offensive Tackles could struggle. Neither projected starter, Conklin and Jones, has been very good. 
The Interior should be pretty good with Teller, Bitonio, and Pocic, which reaffirms that I think we’ll see a lot of running between the tackles with Judkins and Sampson. The Wide Receiver room is led by Jerry Jeudy, 
my 2024 #46 WR, who really turned it on late last season. Opposite him will be Cedric Tillman, my 2024 #79 WR. I project last year’s 5th round pick Jamari Thrash as the third WR, but it should be a competition. 
This is quite frankly not a good group and a major need heading into next year. The Tight End room should be good. David Njoku (2024 #29 TE, 2023 #11 TE) will be the #1, 
with 3rd-rounder Harold Fannin Jr. likely to play a solid amount. I expect a lot of 12 personnel. Finally, the RB room will be led by 2nd-rounder Quinshon Judkins, with Jerome Ford as a pass-catcher 
and 4th-rounder Dylan Sampson stealing some carries. I expect a ton of running through Judkins and Sampson as Cleveland attempts to play good defense and eat clock. 

On defense, I’m excited to see this group. The Interior Defensive Line should be really good. 5th overall pick Mason Graham will lead the way. Next to him will be Maliek Collins (2024 #18 IDL), who I 
think was a steal in FA at 2 years $20M. 2024 2nd round pick Mike Hall Jr. should push for a good chunk of playing time as well. On the EDGE, superstar and future Hall-of-Famer Myles Garrett leads the way. 
My model runs from 2021-2024. In those 4 years, Garrett ranks as my #4, #1, #2, and #1 EDGE. He was my 2022 and 2024 DPOY. Opposite him will be Isaiah McGuire, my 2024 #49 EDGE. 
If the 23 year-old McGuire can take a step forward this season, the Defensive Line could be the league’s best. Graham, Collins, Garrett, and McGuire form a lethal unit here. 
At Linebacker, it’s unclear what the health status of Jeremiah Owusu-Koramoah is. If he’s healthy, this is one of the best duos in the league. 
Assuming his health, JOK (2024 #3 ILB) will start next to #33 pick Carson Schwesinger. If JOK can’t go, it will be Jordan Hicks (2024 #50 ILB) in the second starting spot. 
The Secondary is the only worrisome group on the defense. CB1 will be Denzel Ward, who has really struggled the past few seasons after a great 2021 (2024 #81 CB, 2023 #49 CB, 2022 #68 CB, 2021 #6 CB). 
Ward is still just 28 years-old and has obvious talent, but they’ll need him to turn it around. CB2 will be Martin Emerson Jr, who struggled last year after a very strong 2023 (2024 #98 CB, 2023 #17 CB). 
In the Nickel will be Greg Newsome II (2024 #112 CB, 2023 #56 CB). The Browns have 3 very talented CBs who for whatever reason really struggled last season. With the help of what should be a great pass rush, 
Cleveland will hope the CBs can figure it out this year. The Safeties will be Grant Delpit (2024 #65 S) and Ronnie Hickman Jr (2024 #83 S). 
This will be Hickman’s first full year as a starting Safety, and he’s played well in limited time. I think this unit will be okay. The defense will depend on a bounce-back from the secondary. 
If the CBs can hone in on their talents, it could be a fantastic defense. I think it comes down to JOK’s health, McGuire, Ward, and Emerson Jr. 

I don’t think the Browns will be a contender because I just don’t see the offense being good enough to win big games. They could beat bad teams by playing great defense and draining the clock, 
but it’s hard to see them beating a lot of good teams. I think the offense will be most productive by prioritizing the run game and protecting the ball. It’s boring, but the goal should be for 
the defense to win them games. The defense could be really good. The DLine may be elite, and the linebackers too if JOK is healthy. The secondary will be the big question. 
They have a lot of talent with Ward, Emerson Jr, and Newsome II, but those guys just haven’t been putting it together lately. All in all, I’m a little higher on the Browns than the public but 
don’t expect any serious contention, especially in a difficult division.
` 
},
'Titans': {
  offense: {
    QB: "Cam Ward (R)",
    RB: "Tony Pollard",
    WR1: "Calvin Ridley",
    WR2: "Treylon Burks",
    SWR: "Tyler Lockett",
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
    { position: "QB", name: "Will Levis" },
    { position: "RB", name: "Tyjae Spears" },
    { position: "WR", name: "Van Jefferson" },
    { position: "EDGE", name: "Oluwafemi Oladejo (R)" },
    { position: "EDGE", name: "Lorenzo Carter" },
    { position: "CB", name: "Darrell Baker Jr." },
    { position: "S", name: "Kevin Winston Jr. (R)" },
    { position: "S", name: "Mike Brown" },
  ],
  draftPreview: `
Picks: 1, 35, 103, 120, 141, 167, 178, 188

Needs: QB, WR, TE, IDL, EDGE, ILB, CB

QB: Cam Ward is going to be the Titans starting quarterback. This is a need by technicality.

WR: Outside of Calvin Ridley, this is a really thin group with Treylon Burks and Tyler Lockett projected to start. They’ll want to add a weapon for their new QB early.

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
              <h2 className="text-2xl font-bold mb-4">
                NFL Draft {teams[selectedTeam].draftReview ? "Review + Season Preview" : "Preview"}: {selectedTeam}
                </h2>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 border border-gray-200 rounded">
                  {teams[selectedTeam].draftReview || teams[selectedTeam].draftPreview}
                </pre>
            </div>
          </>
        )}
      </div>
    );
  }
  