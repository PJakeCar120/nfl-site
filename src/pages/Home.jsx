import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 'qb2024',
        title: '2024 QB Rankings'
      },
      {
        id: 'wr2024',
        title: '2024 WR Rankings'
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
      </div>
    </div>
  );
};

export default Home;
