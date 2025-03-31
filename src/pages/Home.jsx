import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

import contractProjections from '../assets/contractProjections';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState('');


  useEffect(() => {
    setProjects([
      {
        id: 'qb2024',
        title: '2024 QB Rankings'
      },
      {
        id: 'qb2023',
        title: '2023 QB Rankings'
      },
      {
        id: 'qb2022',
        title: '2022 QB Rankings'
      },
      {
        id: 'qb2021',
        title: '2021 QB Rankings'
      },
      {
        id: 'wr2024',
        title: '2024 WR Rankings'
      },
      {
        id: 'wr2023',
        title: '2023 WR Rankings'
      },
      {
        id: 'wr2022',
        title: '2022 WR Rankings'
      },
      {
        id: 'wr2021',
        title: '2021 WR Rankings'
      },
      {
        id: 'bdb2025',
        title: 'Big Data Bowl 2025',
        pdfUrl: '/assets/BDB2025-14.pdf'
      },
      {
        id: '2025coaches',
        title: '2025 NFL Head Coaching Candidate Rankings',
        pdfUrl: '/assets/NFL Head Coaching Candidates 2025 2.pdf'
      },
      {
        id: 'draftroi',
        title: 'What NFL Positions Have the Highest Return on 1st Round Picks (2013-2019)?',
        pdfUrl: '/assets/NFL First Round Draft Pick ROI 2013-2019 Report.pdf'
      },
      {
        id: 'offseasonTutorial',
        title: 'Video of Dashboard I Built This Offseason for Free Agency/Draft',
        videoUrl: '/assets/OffseasonDashboardTutorial.mp4'
      },
      {
        id: 'ohc',
        title: 'The Argument for Offensive Head Coaches',
        pdfUrl: '/assets/OHC.pdf'
      }
    ]);
  }, []);

  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 pt-0 pb-4">
        <h1 className="text-base font-bold text-gray-800 mb-2">
          My name is Jake Cardonick and I am a third-year college student at the University of Chicago 
          majoring in Statistics, Economics, and Data Science. You can call me Jake, or another nerd ruining sports.
        </h1>
        <p className="text-gray-600 mb-6">
          Below are some of my favorite NFL projects. I am currently looking for an internship from the beginning of August through the end of September. If interested, please email jcardonick@uchicago.edu. I love talking football, so please feel free to reach out with any questions, improvements, or future projects you'd like to see as well!
        </p>
  
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
  
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            📄 Contract Projections
          </h2>
  
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Select a player:
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSelectedPlayer(e.target.value)}
            value={selectedPlayer}
          >
            <option value="">— Choose a player —</option>
            {Object.keys(contractProjections)
              .sort((a, b) => a.split(' ').slice(-1)[0].localeCompare(b.split(' ').slice(-1)[0]))
              .map((player) => (
                <option key={player} value={player}>{player}</option>
            ))}

          </select>
  
          {selectedPlayer && (
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-md text-gray-800 leading-relaxed text-sm">
              {contractProjections[selectedPlayer].split('\n').map((line, index) => {
                const isMyProjection = line.includes('My projection');
                const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                return (
                  <p
                    key={index}
                    className={`mb-2 ${isMyProjection ? 'text-green-600 font-bold' : ''}`}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
  
  
};

export default Home;
