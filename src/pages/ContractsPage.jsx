import { useState } from "react";
import contractProjections from "../assets/contractProjections";

export default function ContractsPage() {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">💰 Contract Projections</h1>

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
