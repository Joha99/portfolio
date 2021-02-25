import "./Experience.scss";
import Job from "./Job/Job";
import Project from "./Project/Project";
import { useState, useEffect } from "react";
import { jobs } from "../../data/jobs";
import { projects } from "../../data/projects";

const Experience = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setMyJobs(jobs);
    setMyProjects(projects);
  }, []);

  return (
    <div className="experience">
      <div className="experience__grid">
        <nav className="experience__nav">
          <button onClick={() => setTab(0)} className="experience__nav--btn"><span>Work</span></button>
          <button onClick={() => setTab(1)} className="experience__nav--btn"><span>Projects</span></button>
        </nav>

        <div className="descriptions">
          {tab === 0 && (
            <div className="jobs">
              {myJobs.map((job, index) => {
                return <Job key={index} {...job} />;
              })}
            </div>
          )}
          {tab === 1 && (
            <div className="projects">
              {myProjects.map((project, index) => {
                return <Project key={index} {...project} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
