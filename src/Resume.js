// Resume.js
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
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
        "Created and updated troubleshooting guides and training materials, boosting team efficiency and knowledge sharing.",
        "Developed and executed patching procedures for various products, including backups, upgrade scripts, deployments, data updates, reboots, and failovers.",
        "Monitored and managed operational systems such as SCADA, ADMS, EMS, and GMS.",
        "Worked with Windows and Linux servers.",
        "Provided remote technical support for SCADA systems, ensuring customer control systems remained reliable and well-maintained."
      ]
    },
    {
      company: "Aperture Pet & Life, Golden Valley",
      role: "IT Integration Analyst",
      date: "May 2023 - Aug 2023",
      responsibilities: [
        "Developed, improved and maintained the following applications: Sage, Fastfetch, Proship and BRS-Sync (facilitates communication between systems like Magento and Sage).",
        "Identified and developed software and/or hardware solutions that improve business workflows",
        "Automated ERP, Picking, and Shipping software processes using Python.",
        "Integrated company data using ETL practices.",
        "Assisted business users with writing report and identifying any table needed for reporting",
        "Worked with IT Integration Manager to identify Integration and Operations department needs "
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
        "Marketed company’s promotions",
        "Handled large financial payments and records",
        "Trained and mentored new employees",
        "Organized all operations, focusing on quality and consistency",
        "Used Tech efficiently for communication across departments"
      ]
    }
  ];

  return (
    <div className="resume-container">
  {/* your resume content */}
      <aside className="sidebar">
        <h2>Skills</h2>
        <ul>
          {["JavaScript", "Python", "HTML / CSS", "React", "VMs", "Patching"].map(skill => (
            <li key={skill} className="skill-item">{skill}</li>
          ))}
        </ul>

        <h2>Tools & Technologies</h2>
        <ul>
          {["Linux", "Windows OS", "Data Visualization", "MS Word, Excel & Access", "SQL / ETL", "Git", "CLI"].map(tool => (
            <li key={tool} className="skill-item">{tool}</li>
          ))}
        </ul>
        <a
          href={process.env.PUBLIC_URL + '/resume.pdf'}
          download="Mohamed_Ali_Resume.pdf"
          className="glow-download-btn"
          aria-label="Download Resume PDF"
        >
          <FaDownload style={{ marginRight: 10 }} />
          Download Resume
</a>

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
