import React from "react";
import "./month-line.css";
import { months } from "../../constant";
import moment from "moment";
import { setPageID } from "../../../store/actions";
import { connect } from "react-redux";

class MonthLine extends React.Component {
  daysIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  getDaysInMonth = (year, month) => {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
  };

  getDaysArray = (year, month) => {
    let index,
      i,
      l,
      daysArray,
      weekNo = 0;
    index = this.daysIndex[
      new Date(year, month - 1, 1).toString().split(" ")[0]
    ];
    daysArray = [];
    const width = 37;
    const height = 42;

    for (i = 0, l = this.getDaysInMonth(year, month - 1); i < l; i++) {
      daysArray.push({
        day: i + 1,
        weekNo: weekNo,
        weekIndex: index++,
        position: {
          width: width + "px",
          height: height + "px",
          transform: `translate(${(index - 1) * width}px, ${weekNo * height}px)`
        }
      });

      if (index === 7) {
        index = 0;
        weekNo++;
      }
    }

    return daysArray;
  };

  weeksOfMonth() {
    let weeksOfMonth = [1, 2];
    ////////////////////////
    return weeksOfMonth;
  }

  render() {
    const height = 42;
    const stylePositionHrs = id => {
      return { transform: `translateY(${height * id + 10}px)` };
    };

    const WeekViewLines = this.weeksOfMonth(this.props.month).map(
      (week, id) => (
        <div
          className="hrs position-absolute"
          key={id}
          style={stylePositionHrs(id)}
        >
          <div className="hr-line"></div>
          <span className="week-no">{week}</span>
        </div>
      )
    );

    return (
      <div className="">
        <label className="month-header">{months[this.props.month - 1]}</label>
        {WeekViewLines}
        <div className="days">
          {this.getDaysArray(this.props.year, this.props.month).map(
            (dayObj, id) => (
              <div
                key={id}
                className="position-absolute"
                style={dayObj.position}
                onClick={this.props.onClickDay}
              >
                {dayObj.day}
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickDay: () => dispatch(setPageID(8))
  };
};

export default connect(null, mapDispatchToProps)(MonthLine);
