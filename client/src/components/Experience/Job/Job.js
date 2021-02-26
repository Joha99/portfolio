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
      <div className="company" onClick={() => setShowInfo(!showInfo)}>
        <div className="company__name">{company}</div>
      </div>

      {showInfo && (
        <div className="work">
          <div className="work__title">{title}</div>
          <div className="work__dates">{dates}</div>
          <div className="work__desc">{desc}</div>
        </div>
      )}
    </section>
  );
};

export default Job;
