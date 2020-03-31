import React from "react";

export default class BackCalendar extends React.Component {
  render() {
    return (
      <div
        className="back-calendar d-flex justify-content-center"
        onClick={this.props.onClick}
      >
        <div className="back-btn"></div>
        <div className="back-label">{this.props.label}</div>
      </div>
    );
  }
}
