import React from "react";
import "./week-line.css";

export default class WeekLine extends React.Component {
  render() {
    const weeks = ["M", "T", "C", "T", "F", "L", "S"];
    const width = 37;
    const styleWeekLine = id => {
      return {
        transform: `translateX(${id * width}px)`
      };
    };

    return (
      <div className="weeks">
        {weeks.map((week, id) => (
          <div
            className="position-absolute week"
            key={id}
            style={styleWeekLine(id)}
          >
            {week}
          </div>
        ))}
      </div>
    );
  }
}
