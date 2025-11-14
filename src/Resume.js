// Resume.js
import React, { useState } from 'react';
import './Resume.css';

function Resume() {
  // State to control which experience sections are open
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // List of jobs for mapping
  const jobs = [
    {
      company: "Open Systems International",
      role: "Technical Support Engineer",
      date: "Aug 2023 - Present",
      responsibilities: [
        "Handled system patching, license updates, and environment setup.",
        "Created and updated troubleshooting guides and training materials.",
        "Developed and executed patching procedures including backups, upgrades, deployments, reboots, and failovers.",
        "Monitored and managed operational systems such as SCADA, ADMS, EMS, and GMS.",
        "Worked with Windows and Linux servers.",
        "Provided remote technical support for SCADA systems."
      ]
    },
    {
      company: "Aperture Pet & Life, Golden Valley",
      role: "IT Integration Analyst",
      date: "May 2023 - Aug 2023",
      responsibilities: [
        "Developed and maintained applications: Sage, Fastfetch, Proship, BRS-Sync.",
        "Automated ERP, Picking, and Shipping software processes using Python.",
        "Integrated company data using ETL practices.",
        "Assisted business users with reporting."
      ]
    },
    {
      company: "Data Glacier, Remote",
      role: "Data Analyst Intern",
      date: "Dec 2022 - Mar 2023",
      responsibilities: [
        "Completed multi-project internship in data science and analytics.",
        "Worked with cross-functional teams to gather requirements and analyze business problems."
      ]
    },
    {
      company: "SCSU IS Club, St. Cloud",
      role: "Webmaster",
      date: "Jan 2022 - May 2022",
      responsibilities: [
        "Maintained website and resolved web errors.",
        "Managed server performance and uploaded content."
      ]
    },
    {
      company: "Sam's Club, St. Cloud",
      role: "Retail Sales Specialist",
      date: "Jun 2020 - May 2022",
      responsibilities: [
        "Marketed promotions and processed large financial transactions.",
        "Trained new employees and ensured operational efficiency."
      ]
    }
  ];

  return (
    <div className="resume-wrapper">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <h2>Skills</h2>
        <ul>
          {["JavaScript", "Python", "HTML / CSS", "React"].map(skill => (
            <li key={skill} className="skill-item">{skill}</li>
          ))}
        </ul>

        <h2>Tools & Technologies</h2>
        <ul>
          {["Linux", "Data Visualization", "MS Word, Excel & Access", "SQL / ETL"].map(tool => (
            <li key={tool} className="skill-item">{tool}</li>
          ))}
        </ul>

         <button
            className="download-btn"
            onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Mohamed_Ali_Resume.pdf';
                link.click();
    }}
  >
    Download Resume
  </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header>
          <h1>Mohamed Ali</h1>
        </header>

        <section>
          <h2>Professional Experience</h2>
          {jobs.map((job, index) => (
            <div key={index} className="job-section">
              <h3 onClick={() => toggleSection(index)} className="job-title">
                {job.company} - {job.role} ({job.date})
              </h3>
              {openSections[index] && (
                <ul className="job-responsibilities">
                  {job.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Resume;
