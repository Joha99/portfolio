import "./Interests.scss";
import $ from "jquery";
import React, { useEffect, useState } from "react";

const Interests = () => {
  const interests = [
    { name: "Docker", url: "./images/docker.png" },
    { name: "React Spring", url: "./images/react-spring.png" },
    { name: "GraphQL", url: "./images/graphql.png" },
    { name: "PostGres", url: "./images/postgres.png" },
    { name: "Python", url: "./images/python.png" },
  ];

  useEffect(() => {}, []);

  return (
    <div className="interests">
      <div className="heading">
        <h1>tools im learning in 2021</h1>
      </div>

      <ul className="tools">
        {interests.map((item, index) => (
          <li key={index} className="tool">
            <img src={item.url} alt="image" className="tool__img" />
            <span className="tool__name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
