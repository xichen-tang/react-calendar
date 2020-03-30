import React from "react";
import { setDate, setPageID } from "../../../store/actions";
import { connect } from "react-redux";
import moment from "moment";
import {
  PAGE_INDEX,
  DANISH_MONTHS as months,
  DAYS_INDEX as days
} from "../../constant";

class MonthLine extends React.Component {
  handleClickDay = id => {
    const selectedYear = this.props.year;
    const selectedMon = this.props.month;
    const selectedDay = this.getDaysArray(selectedYear, selectedMon)[id].day;
    const selectedDate = moment(
      new Date(selectedYear, selectedMon, selectedDay)
    ).format("MM/DD/YYYY");
    this.props.setDate(selectedDate);
    this.props.goToDayPage();
  };

  getDaysInMonth = (year, month) => {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
  };

  getDaysArray = (year, month) => {
    let weekNo = 0;
    let index = days[new Date(year, month, 1).toString().split(" ")[0]];
    let daysArray = [];
    const width = 37;
    const height = 42;

    for (let i = 0, l = this.getDaysInMonth(year, month); i < l; i++) {
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

  render() {
    const { year, month } = this.props;

    const HeaderView = <label className="month-header">{months[month]}</label>;

    const DaysView = (
      <div className="days">
        {this.getDaysArray(year, month).map((dayObj, id) => (
          <div
            key={id}
            className="position-absolute"
            style={dayObj.position}
            onClick={() => this.handleClickDay(id)}
          >
            {dayObj.day}
          </div>
        ))}
      </div>
    );

    return (
      <>
        {HeaderView}
        {DaysView}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDate: date => dispatch(setDate(date)),
    goToDayPage: () => dispatch(setPageID(PAGE_INDEX.DAY_VIEW_2_2))
  };
};

export default connect(null, mapDispatchToProps)(MonthLine);
