import { useState } from "react";
import contractProjections from "../assets/contractProjections";

export default function ContractsPage() {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">💰 Contract Projections</h1>
      <p className="text-gray-700 text-sm mb-6">
  These contract projections are built using a data-driven framework that evaluates player performance grades, age, and historical contract data to estimate future deals. 
  Projections are based on how comparable players performed prior to signing their past contracts — not how they look today. 
  I create a confidence band for each player using my own grading system alongside PFF grades, identifying high-end and low-end comps. 
  Rather than relying on raw AAV (Average Annual Value), all projections are scaled to cap % at signing — a more stable and predictive metric given year-to-year cap growth. 
  Final projections are calculated as a weighted combination of comparables within the confidence band, adjusted for position-specific trends, contract length norms, and market conditions.
</p>


      <label className="block text-sm font-medium text-gray-600 mb-2">
        Select a player:
      </label>
      <select
        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSelectedPlayer(e.target.value)}
        value={selectedPlayer}
      >
        <option value="">— Choose a player —</option>
        {Object.keys(contractProjections)
          .sort((a, b) => a.localeCompare(b))
          .map((player) => (
            <option key={player} value={player}>
              {player}
            </option>
          ))}
      </select>

      {selectedPlayer && (
        <div className="bg-gray-100 border border-gray-300 p-4 rounded-md text-sm text-gray-800 leading-relaxed">
          {contractProjections[selectedPlayer].split("\n").map((line, index) => {
            const isBold = /\*\*(.*?)\*\*/.test(line);
            const html = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            return (
              <p
                key={index}
                className={`mb-2 ${isBold ? "text-green-700 font-semibold" : ""}`}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
