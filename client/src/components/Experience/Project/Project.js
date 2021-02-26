import "./Project.scss";
import { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Project = ({ title, tech, desc }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="project">
      <div className="overview" onClick={() => setShowInfo(!showInfo)}>
        <span className="title">{title}</span>
      </div>

      {showInfo && (
        <div className="info">
          <div className="desc">{desc}</div>
          <br />
          <div className="tech">{tech}</div>
        </div>
      )}
    </section>
  );
};

export default Project;
