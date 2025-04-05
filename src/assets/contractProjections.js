const contractProjections = {
    "Charles Cross": `NFL Extension Candidate: #Seahawks Charles Cross
  
  Comparables (age at signing, contract length):  
  • Braden Smith (24, 4): 9.59% cap at signing  
  • Kolton Miller (25, 3): 9.86%  
  • Brian O'Neill (25, 5): 10.14%    
  
  AAV Range: $26.8M–$28.3M  
  • Spotrac projection: 4 years for $64.6M  
  • **My projection: 4 years for $110M (9.85%)**  
  Would make Cross the 4th highest-paid OT in the NFL by AAV.`,
  
    "Connor McGovern": `NFL Extension Candidate: #Bills Connor McGovern
  
  Comparables (age at signing, contract length):  
  • Garrett Bradbury (27, 3): 2.34% cap at signing  
  • Hjalte Froholdt (28, 2): 2.35%  
  • Robert Hainsey (26, 3): 2.51%  
  • Aaron Brewer (26, 3): 2.74%
  
  AAV Range: $6.5M–$7.7M  
  • Spotrac projection: 3 years, $23.2M  
  • **My projection: 3 years, $21.3M (2.54%)**  
  Would be the 8th highest-paid C in the NFL by AAV.`,
  
    "Devin Lloyd": `NFL Extension Candidate: #Jaguars Devin Lloyd
  
  Comparables (age at signing, contract length):  
  • Bobby Okereke (26, 4): 4.45% cap at signing  
  • Patrick Queen (24, 3): 5.34%  
  • Jamien Sherwood (25, 3): 5.37%  
  • Nick Bolton (25, 3): 5.37%
  
  AAV Range: $12.4M–$15M  
  • Spotrac projection: 3 years for $27.3M  
  • **My projection: 3 years for $43.8M (5.23%)**  
  Would make Lloyd the 7th highest-paid ILB in the NFL by AAV.`,
  
    "George Kittle": `NFL Extension Candidate: #49ers George Kittle
  
  Comparables (age at signing, contract length):  
  • Travis Kelce (34, 2): 6.71% cap at signing  
  • Travis Kelce (30 (previous), 4): 7.22%
  
  AAV Range: $18.7M– $20.2M  
  • Spotrac projection: 2 years for $32.6M  
  • **My projection: 3 years for $58.3M (6.96%)**  
  Would make Kittle the highest-paid TE in the NFL by AAV.`,
  
    "Jakobi Meyers": `NFL Extension Candidate: #Raiders Jakobi Meyers
  
  Comparables (age at signing, contract length):  
  • Tyler Lockett (31, 2): 5.81% cap at signing  
  • Chris Godwin (29, 3): 7.76%
  
  Obviously, this is a gross interval. Meyers fits in a dead zone in the WR market.  
  AAV Range: $16.2M–$21.7M  
  • Spotrac projection: 2 years for $34.8M  
  • **My projection: 3 years for $59.6M (7.12%)**  
  Would make Meyers the 20th highest-paid WR in the NFL by AAV.`,
  
    "James Cook": `NFL Extension Candidate: #Bills James Cook
  
  Comparables (age at signing):  
  • Chuba Hubbard (25): 3.25% cap at signing  
  • Rhamondre Stevenson (26): 3.5%  
  • Josh Jacobs (26): 4.7%  
  
  AAV Range: $9.1M–$13.1M  
  • Spotrac projection: 4 years, $40.8M  
  • **My projection: 4 years, $49.2M (4.41%)**  
  Would be the 4th highest-paid RB in the NFL.`,
  
    "Joe Thuney": `NFL Extension Candidate: #Bears Joe Thuney
  
  Comparables (age at signing, contract length):  
  • Zack Martin (32, 2): 8.2% cap at signing
  
  This is the first time I've only had one comparable for a player, but Thuney profiles VERY similar to Martin. This puts Thuney at $22.9M AAV.  
  • Spotrac projection: 2 years for $40.6M  
  • **My projection: 2 years for $45.8M (8.20%)**  
  Would make Thuney the 2nd highest-paid OG in the NFL.`,
  
    "Kaleb McGary": `NFL Extension Candidate: #Falcons Kaleb McGary
  
  Comparables (age at signing):  
  • Ronnie Stanley (30.9): 7.16% cap at signing  
  • Jack Conklin (28): 7.2%  
  • Mike McGlinchey (28): 7.78%  
  • Dion Dawkins (29): 7.84%  
  • Garett Bolles (32): 8.03%
  
  AAV Range: $20M–$22.4M  
  • Spotrac projection: 3 years for $51.8M  
  • **My projection: 3 years for $65.7M (7.84%)**  
  Would make McGary the 8th highest-paid OT in the NFL.`,
  
    "Kenneth Walker": `NFL Extension Candidate: #Seahawks Kenneth Walker
  
  Comparables (age at signing, contract length):  
  • Chuba Hubbard (25, 4): 3.25% cap at signing  
  • Rhamondre Stevenson (26, 4): 3.52%  
  • Josh Jacobs (26, 4): 4.7%
  
  AAV Range: $9.1M–$13.1M  
  I lean much stronger towards the Jacobs side of the interval here.  
  • Spotrac projection: 4 years for $41.6M  
  • **My projection: 4 years for $49.2M (4.41%)**  
  Would make Walker the 4th highest-paid RB in the NFL by AAV.`,
  
    "Kerby Joseph": `NFL Extension Candidate: #Lions Kerby Joseph
  
  Comparables (age at signing, contract length):  
  • Xavier McKinney (24, 4): 6.56% cap at signing  
  • Antoine Winfield Jr. (25, 4): 8.23%  
  • Minkah Fitzpatrick (25, 4): 8.84%  
  • Derwin James (25, 4): 9.19%
  
  AAV Range: $18.3M–$25.7M  
  • Spotrac projection: 4 years, $92.9M  
  Joseph is one of the trickier projections. Last season, he was the best S in football. However, his first two seasons were not nearly at the same level as this year.  
  • **My projection: 4 years for $91.6 (8.20%)M**  
  Would make Joseph the highest-paid S in the NFL by AAV.`,
  
    "Kwity Paye": `NFL Extension Candidate: #Colts Kwity Paye
  
  Comparables (age at signing, contract length):  
  • Sam Hubbard (25, 4): 5.48% cap at signing  
  • Dayo Odeyingbo (25, 3): 5.73%  
  • Carl Granderson (26, 4): 5.78%  
  • Jonathon Cooper (26, 4): 5.87%
  
  AAV Range: $15.3M–$16.4M  
  • Spotrac projection: 4 years for $59.4M  
  • **My projection: 4 years for $65.1M (5.83%)**  
  Would make Paye the 19th highest-paid EDGE in the NFL by AAV.`,
  
    "Kyle Hamilton": `NFL Extension Candidate: #Ravens Kyle Hamilton
  
  Comparables (age at signing):  
  • Antoine Winfield Jr. (25): 8.23% cap at signing  
  • Minkah Fitzpatrick (25): 8.84%  
  • Derwin James (25): 9.19%  
  
  AAV Range: $22.97M–$25.7M  
  • Spotrac projection: 3 years for $60.8M  
  • **My projection: 4 years for $98M (8.78%)**  
  Would make Hamilton the highest-paid S in the NFL by AAV.`,
  
    "Micah Parsons": `NFL Extension Candidate: #Cowboys Micah Parsons
  
  Comparables (age at signing):  
  • Myles Garrett (29): 14.33% cap at signing  
  • Nick Bosa (25): 15.12%  
  • T.J. Watt (26): 15.34%  
  
  AAV Range: $40M–$42.8M  
  • Spotrac projection: 4 years, $146.7M  
  • **My projection: 4 years, $171.3M (matches Watt’s 15.34%)**  
  Would be the highest-paid EDGE (and non-QB) in the NFL by AAV.`,
  
    "T.J. Watt": `NFL Extension Candidate: #Steelers T.J. Watt
  
  Comparables (age at signing):  
  • Maxx Crosby (27): 12.71% cap at signing  
  • Myles Garrett (29): 14.33%
  
  AAV Range: $35.5M–$40M  
  • Spotrac projection: 4 years for $129M  
  • **My projection: 3 years for $113.2M**  
  Would make Watt the 2nd highest-paid EDGE in the NFL by AAV.`,
  
    "Trent McDuffie": `NFL Extension Candidate: #Chiefs Trent McDuffie
  
  Comparables (age at signing, contract length):  
  • Patrick Surtain (24, 4): 9.4% cap at signing  
  • Denzel Ward (25, 5): 9.65%  
  • Marlon Humphrey (23, 5): 9.84%  
  • Jaire Alexander (24, 4): 10.09% 
  
  AAV Range: $26.2M–$28.2M  
  • Spotrac projection: 3 years for $73M  
  • **My projection: 4 years for $107.2M (9.60%)**  
  Would make McDuffie the 2nd highest-paid CB in the NFL by AAV.`,
  
    "Tyler Linderbaum": `NFL Extension Candidate: #Ravens Tyler Linderbaum
  
  Comparables (age at signing, contract length):  
  • Erik McCoy (24, 5): 5.76% cap at signing  
  • Creed Humphrey (25, 4): 7.05%  
  • Frank Ragnow (24, 4): 7.4%
  
  AAV Range: $16.1M–$20.7M  
  • Spotrac projection: 3 years for $48.2M  
  • **My projection: 4 years for $73.9M (6.62%)**  
  Would make Linderbaum the highest-paid C in the NFL by AAV.`,
  
    "Tyler Smith": `NFL Extension Candidate: #Cowboys Tyler Smith
  
  Comparables (age at signing, contract length):  
  • Quinn Meinerz (25, 4): 7.05% cap at signing  
  • Sam Cosmi (25, 4): 7.24%
  
  AAV Range: $19.7M–$20.2M  
  • Spotrac projection: 4 years for $76.4M  
  • **My projection: 4 years for $80.4M (7.20%)**  
  Would make Smith the 4th highest-paid OG in the NFL by AAV.`,

    "Aidan Hutchinson": `NFL Extension Candidate: #Lions Aidan Hutchinson
  
  Comparables (age at signing, contract length):
  • Myles Garrett (24–first contract, 5): 12.61% cap at signing
  • Nick Bosa (25, 5): 15.12%
  
  This puts Hutchinson between $35.2M–$42.2M AAV. The timing of this contract will be very important. If signed this offseason, it will be closer to Garrett. If signed next offseason, it will be closer to Bosa. I believe he will be extended this offseason.
  
  • Spotrac projection: 4 years for $122.1M  
  • **My projection: 5 years for $183M (13.11%)**  
  Would make Hutchinson the 2nd highest-paid EDGE in the NFL by AAV.`,
  
    "Rasheed Walker": `NFL Extension Candidate: #Packers Rasheed Walker
  
  Comparables (age at signing, contract length):
  • Jonah Williams (26, 2): 5.87% cap at signing
  • Joseph Noteboom (26, 3): 6.4%
  • Alaric Jackson (26, 3): 6.81%
  
  AAV Range: $16.4M–$19M  
  • Spotrac projection: 4 years for $71.2M  
  • **My projection: 3 years for $55.3M (6.60%)**  
  Would make Walker the 20th highest-paid OT in the NFL.`,
  
    "Cade Otton": `NFL Extension Candidate: #Buccaneers Cade Otton
  
  Comparables (age at signing, contract length):
  • Noah Fant (26, 2): 4.11% cap at signing  
  • Pat Freiermuth (25, 4): 4.74%
  
  AAV Range: $11.5M–$13.2M  
  • Spotrac projection: 3 years for $36.6M  
  • **My projection: 3 years for $37M (4.42%)**  
  Would make Otton the 8th highest-paid TE in the NFL.`,
  
    "Trey McBride": `NFL Extension Candidate: #Cardinals Trey McBride
  
  Comparables (age at signing):
  • T.J. Hockenson (26): 7.34% cap at signing
  • George Kittle (26): 7.57%
  • Mark Andrews (24): 7.67%
  • Dallas Goedert (25): 7.81%
  
  AAV Range: $20.5M–$21.8M  
  • Spotrac projection: 4 years for $71.8M  
  • **My projection: 4 years for $78M (6.98%)**  
  Would make Mcbride the highest-paid TE in the NFL by AAV.

  **Update: McBride signed for 4 years, $76M. I think this is a great contract for Arizona, as I predicted on March 12th (https://x.com/JakeCar120/status/1899845574116974717): "This projection would have McBride at 6.98% of the cap, below my interval. However, I suspect that because McBride will still become the highest-paid TE ever, he will accept less than I believe to be his fair market-value.**"`,

  
  
    "Cam Jurgens": `NFL Extension Candidate: #Eagles Cam Jurgens
  
  Comparables (age at signing):
  • Tyler Biadasz (26): 3.82% cap at signing
  • Austin Corbett (26): 4.2%
  • Lloyd Cushenberry (26): 4.89%
  
  AAV Range: $10.7M–$13.7M  
  • Spotrac projection: 3 years for $24.9M  
  • **My projection: 3 years for $33.6M (4.01%)**  
  Would make Jurgens the 6th highest-paid C in the NFL.`,
  
    "Bernhard Raimann": `NFL Extension Candidate: #Colts Bernhard Raimann
  
  Comparables (age at signing):
  • Jordan Mailata (27): 8.61% cap at signing  
  • Ryan Ramcyzk (26): 10.52%
  
  AAV Range: $24M–$29.4M  
  • Spotrac projection: 3 years for $61.9M  
  • **My projection: 4 years for $102.2M (9.15%)**  
  Would make Raimann the 5th highest-paid OT in the NFL.`,
  
    "Zach Tom": `NFL Extension Candidate: #Packers Zach Tom
  
  Comparables (age at signing):
  • Braden Smith (24): 9.59% cap at signing
  • Kolton Miller (25): 9.86%
  • Brian O'Neill (25): 10.14%
  
  AAV Range: $26.8M–$28.3M  
  • Spotrac projection: 4 years for $86.7M  
  • **My projection: 4 years for $111.7M (10.00%)**  
  Would make Tom the 3rd highest-paid OT in the NFL.`,
  
    "Nik Bonitto": `NFL Extension Candidate: #Broncos Nik Bonitto
  
  Comparables (age at signing):    
  • Greg Rousseau (24): 7.16% cap at signing
  • Jonathon Greenard (26): 7.44%
  • Alex Highsmith (25): 7.56%
  
  This puts Bonitto between $20M–$21.1M AAV. 
  • Spotrac projection: 4 years for $102M  
  • **My projection: 4 years for $84.4M (7.56%)**  
  This would make Bonitto the 10th highest-paid EDGE in the NFL.`,
    
    "Kyler Gordon": `NFL Extension Candidate: #Bears Kyler Gordon
  
  Comparables (age at signing):   
  • Kenny Moore (28): 3.92% cap at signing  
  • Taron Johnson (27): 4.01%
  • Nate Hobbs (25.6): 4.3%
  
  This puts Gordon between $10.9M–$12M AAV. 
  • Spotrac projection: 3 years for $33.4M  
  • **My projection: 3 years for $35.1M (4.19%)**`,
    
    "Rashawn Slater": `NFL Extension Candidate: #Chargers Rashawn Slater
  
  Comparables (age at signing):     
  • Christian Darrisaw (25): 10.18% cap at signing  
  • Andrew Thomas (24): 10.45% 
  • Penei Sewell (23): 10.96%
  • Tristan Wirfs (25): 11.01%
  
  This puts Slater between $28.4M–$30.7M AAV. 
  • Spotrac projection: 5 years for $127.5M  
  • **My projection: 5 years for $142M (10.17%)**  
  This would make Slater the highest-paid OT in the NFL by AAV.`,
    
    "Garrett Wilson": `NFL Extension Candidate: #Jets Garrett Wilson
  
  Comparables (age at signing):     
  • Nico Collins (25): 9.49% cap at signing
  • DeVonta Smith (25): 9.79%
  • Jaylen Waddle (25): 11.06%
  • Deebo Samuel (25): 11.46%
  
  This puts Wilson between $26.5M–$32M AAV. 
  • Spotrac projection: 3 years for $69.7M  
  • **My projection: 3 years for $92.6M (11.06%)**  
  This would make Wilson the 4th highest-paid WR in the NFL by AAV.`
  };
  



  
  export default contractProjections;
  