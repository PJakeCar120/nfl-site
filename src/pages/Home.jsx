import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Papa from "papaparse";

const YEARS = ["2021", "2022", "2023", "2024"];
const POSITIONS = ["QB", "RB", "WR", "TE", "IDL", "EDGE", "CB", "S"];

const Home = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const combined = [];
      await Promise.all(
        POSITIONS.flatMap((pos) =>
          YEARS.map(
            (year) =>
              new Promise((resolve) => {
                Papa.parse(`/assets/${pos}ScoreResults${year}.csv`, {
                  download: true,
                  header: true,
                  complete: (res) => {
                    res.data.forEach((row) => {
                      if (row.Name) {
                        combined.push({
                          year,
                          position: pos,
                          name: row.Name,
                          rank: row.Rank,
                          ...Object.fromEntries(
                            Object.entries(row).filter(
                              ([key]) => key !== "Name" && key !== "Rank"
                            )
                          ),
                        });
                      }
                    });
                    resolve();
                  },
                });
              })
          )
        )
      );
      setAllData(combined);
    };

    loadData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-6 pb-16 text-[15px] leading-relaxed box-border">

        {/* Intro */}
        <h1 className="text-sm font-bold text-gray-800 mb-2">
          My name is Jake Cardonick and I am a third-year college student at the University of Chicago 
          majoring in Statistics, Economics, and Data Science. You can call me Jake – or another nerd ruining sports.
        </h1>

        <p className="text-gray-600 mt-4 text-base leading-relaxed">
          I'm currently looking for an internship from the beginning of August through the end of September.
          If interested, please email <strong>jcardonick@uchicago.edu</strong>.
          I love talking football — feel free to reach out with any questions, improvements, or future projects you'd like to see. 
          Note: All data is sourced from FantasyPoints and ProFootballFocus. 
        </p>

        <p className="text-sm text-gray-600 mt-10">
          You can also follow me on Twitter at{" "}
          <a
            href="https://twitter.com/JakeCar120"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800 transition"
          >
            @JakeCar120
          </a>{" "}
          for more football takes and nerdy insights.
        </p>

        {/* Projects */}
        <div className="mt-10">
          <h2 className="text-base font-semibold mb-2 text-gray-800">📌 Featured Projects</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
  <li>
    <Link to="/lineup" className="underline text-blue-600 hover:text-blue-800 transition">
      Team Pages
    </Link>
  </li>
  <li>
    <Link to="/guess-similarity" className="underline text-blue-600 hover:text-blue-800 transition">
      Player Similarity Game
    </Link>
  </li>
  <li>
    <Link to="/rankings" className="underline text-blue-600 hover:text-blue-800 transition">
      2021–2024 Analytical Rankings
    </Link>
  </li>
  <li>
    <Link to="/awards" className="underline text-blue-600 hover:text-blue-800 transition">
      Awards
    </Link>
  </li>
  <li>
    <Link to="/whobetta" className="underline text-blue-600 hover:text-blue-800 transition">
      Player Comparison
    </Link>
  </li>
  <li>
    <Link to="/charts" className="underline text-blue-600 hover:text-blue-800 transition">
      Analytics Charts
    </Link>
  </li>
  <li>
    <Link to="/projects/contract-market" className="underline text-blue-600 hover:text-blue-800 transition">
      Positional Contract Markets
    </Link>
  </li>
  <li>
    <Link to="/contracts" className="underline text-blue-600 hover:text-blue-800 transition">
      Extension Projections
    </Link>
  </li>
</ul>


        </div>

        {/* Philosophy */}
        <div className="mt-10">
          <h2 className="text-base font-semibold mb-2 text-gray-800">🏗️ My Thoughts on How to Build a Successful NFL Franchise</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Think long-term.</li>
            <li>Win on the margins.</li>
            <li>Consider positional value.</li>
            <li>Don’t be reactionary.</li>
            <li>Know you can never have enough linemen.</li>
            <li>Value cash today more than cash tomorrow.</li>
            <li>Know coaches matter more than you’d think.</li>
            <li>Know pressure wins championships.</li>
            <li>Extend players early.</li>
            <li>Chase upside.</li>
            <li>Trade back in the draft.</li>
          </ul>
        </div>

        {/* Bottom-right aligned image inside content */}
        <div style={{ position: "relative", height: "0px" }}>
          <img
            src="/assets/FootballAnalyticsNerd.png"
            alt="Football Analytics Nerd"
            className="bottom-image"
            style={{
              width: "500px",
              height: "500px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
