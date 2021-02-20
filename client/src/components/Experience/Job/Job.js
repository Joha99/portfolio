import "./Job.scss";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Job = ({ company, title, start, end, desc }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [dates, setDates] = useState("");

  useEffect(() => {
    setDates(
      `${start.getMonth()}/${start.getFullYear()} to ${end.getMonth()}/${end.getFullYear()}`
    );
  }, [start, end]);

  return (
    <section className="job">
      <div className="company">
        <span className="company-name">{company}</span>
        <ExpandMoreIcon onClick={() => setShowInfo(!showInfo)} />
      </div>

      {showInfo && (
        <div className="info">
          <div className="title">{title}</div>
          <div className="dates">{dates}</div>
          <div className="desc">{desc}</div>
        </div>
      )}
    </section>
  );
};

export default Job;
