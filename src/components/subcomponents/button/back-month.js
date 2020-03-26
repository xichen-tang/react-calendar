import React from "react";

export default class BackMonth extends React.Component {
  render() {
    return (
      <div
        className="back-month position-relative"
        onClick={this.props.onClick}
      >
        <i className="back-btn"></i>
        <span className="month-text">{this.props.month}</span>
      </div>
    );
  }
}
