import React from "react";

export default function BackCalendar(props) {
  return (
    <div
      className="back-calendar d-flex justify-content-center"
      onClick={props.onClick}
    >
      <div className="back-btn"></div>
      <div className="back-label">{props.label}</div>
    </div>
  );
}
