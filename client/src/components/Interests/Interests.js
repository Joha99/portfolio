import "./Interests.scss";
import $ from "jquery";
import React, { useEffect, useState } from "react";

const Interests = () => {
  useEffect(() => {}, []);
  const interests = [
    "Docker",
    "React Spring",
    "GraphQL",
    "MySQL / PostGres",
    "CSS Animations",
  ];

  return (
    <div className="interests">
      <div className="heading">
        <h1>tools im learning</h1>
      </div>

      <ul className="tools">
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
