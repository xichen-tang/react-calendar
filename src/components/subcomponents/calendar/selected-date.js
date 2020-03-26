import React from "react";

export default class SelectedDate extends React.Component {
  render() {
    return <div className="date text-center p-3">{this.props.date}</div>;
  }
}
