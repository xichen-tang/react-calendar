import React, { createRef } from "react";
import { connect } from "react-redux";
import { setDate } from "../../../store/actions";
import { dayIDsInWeek, getResponsiveWidth } from "../../utils";
import { DATE_FORMAT } from "../../constant";
import moment from "moment";

class WeekView extends React.Component {
  getDaysFromWeek = (week) => {
    return dayIDsInWeek().map((d) => moment().week(week).day(d).date());
  };

  weekViewRef = createRef();

  isDayChecked = (day) => {
    const selectedDay = moment(this.props.selectedDate, DATE_FORMAT).date();
    return selectedDay === day;
  };

  onDayChange = (e) => {
    const selectedDay = e.target.value;
    const selected = moment(this.props.selectedDate, DATE_FORMAT);
    this.updateDate(selected.year(), selected.month(), selectedDay);
  };

  updateDate(yr, mon, day) {
    const selectedDate = moment(new Date(yr, mon, day), DATE_FORMAT);
    this.props.setDate(selectedDate);
  }

  render() {
    const width = getResponsiveWidth();
    const { selectedDate } = this.props;
    const weekNo = moment(selectedDate, DATE_FORMAT).isoWeek();
    const selectedDay = moment(selectedDate, DATE_FORMAT).date();

    const styleDayPosition = (id, day) => {
      if (Math.abs(day - selectedDay) > 6) {
        return {
          display: "none",
        };
      } else if (day === selectedDay) {
        return {
          transform: `translateX(${id * width}px`,
          borderRadius: "50%",
          color: "#ffffff",
          backgroundColor: "#0653b6",
          fontWeight: "bold",
        };
      } else {
        return {
          transform: `translateX(${id * width}px`,
        };
      }
    };

    return (
      <div ref={this.weekViewRef} className="week-view">
        <span className="week-no">{weekNo}</span>
        <div className="week-days d-flex">
          {this.getDaysFromWeek(weekNo).map((day, id) => (
            <label
              key={id}
              className="position-absolute day"
              style={styleDayPosition(id, day)}
            >
              <input
                type="radio"
                checked={this.isDayChecked(day)}
                onChange={this.onDayChange}
                value={day}
              />
              {day}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selectedDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDate: (date) => dispatch(setDate(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekView);
