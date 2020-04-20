import React from "react";
import { getResponsiveWidth } from "../../utils";
import { ONE_LETTER_WEEKS as weeks } from "../../constant";

export default function WeekLine() {
  const width = getResponsiveWidth();

  const styleWeekLine = (id) => {
    return {
      transform: `translateX(${id * width}px)`,
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
