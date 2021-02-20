import "./Interests.scss";
import $ from "jquery";
import React, { useEffect, useState } from "react";

const Interests = () => {
  useEffect(() => {
    var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
      radius = "17em", //distance from center
      start = -90, //shift start from 0
      $elements = $("li:not(:first-child)"),
      // $elements = $("li"),
      numberOfElements = type === 1 ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
      slice = (360 * type) / numberOfElements;

    $elements.each(function (i) {
      var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;

      $self.css({
        transform:
          "rotate(" +
          rotate +
          "deg) translate(" +
          radius +
          ") rotate(" +
          rotateReverse +
          "deg)",
      });
    });
  }, []);

  return (
    <div className="interests">
      <ul className="tools">
        <li>
          <h1>tools im learning</h1>
        </li>
        <li>
          <span>Docker</span>
        </li>
        <li>
          <span>React.js</span>
        </li>
        <li>
          <span>Postgres</span>
        </li>
        <li>
          <span>MongoDB</span>
        </li>
        <li>
          <span>GraphQL</span>
        </li>
        <li>
          <span>jQuery</span>
        </li>
      </ul>
    </div>
  );
};

export default Interests;
