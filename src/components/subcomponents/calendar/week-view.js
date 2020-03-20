import React, { createRef } from "react";
import "./week-view.css";
import moment from "moment";

export default class DayView extends React.Component {
  daysRef = createRef();

  getDaysFromWeek = week => {
    return [...Array(7).keys()].map(d =>
      moment()
        .week(week)
        .day(d)
        .date()
    );
  };

  onDayClicked = id => {
    const count = this.daysRef.current.getElementsByClassName("selected")
      .length;
    if (count > 0) this.clearDayStyle();
    this.daysRef.current.children[id].classList.add("selected");
  };

  clearDayStyle = () => {
    [...this.daysRef.current.children].map(child => {
      return child.classList.remove("selected");
    });
  };

  render() {
    const width = 37;
    const styleDayPosition = id => {
      return {
        transform: `translateX(${id * width}px`
      };
    };

    return (
      <div className="week-view">
        <span className="week-no">{this.props.week}</span>
        <div ref={this.daysRef} className="week-days text-center">
          {this.getDaysFromWeek(this.props.week).map((day, id) => (
            <div
              key={id}
              className="position-absolute day"
              onClick={() => this.onDayClicked(id)}
              style={styleDayPosition(id)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
