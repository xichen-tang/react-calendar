import React from "react";
import { connect } from "react-redux";
import { setDateInFormat, setDate } from "../../../store/actions";
import { dayIDsInWeek, formatDate } from "../../utils";
import moment from "moment";

class WeekView extends React.Component {
  state = {
    selectedDate: ""
  };

  getDaysFromWeek = week => {
    return dayIDsInWeek().map(d =>
      moment()
        .week(week)
        .day(d)
        .date()
    );
  };

  isDayChecked = day => {
    return this.props.day === day;
  };

  onDayChange = e => {
    const day = e.target.value;
    let selected = moment(this.props.selectedDate);
    this.updateDate(selected.year(), selected.month(), day);
    this.updateDateInFormat(
      selected.year(),
      selected.month(),
      selected.day(),
      day
    );
  };

  updateDateInFormat(yr, mon, wk, day) {
    const dateInFormat = formatDate(yr, mon, wk, day);
    this.props.setDateInFormat(dateInFormat);
  }

  updateDate(yr, mon, day) {
    const selectedDate = moment(new Date(yr, mon, day)).format("MM/DD/YYYY");
    this.props.setDate(selectedDate);
  }

  render() {
    const width = 37;
    const { day } = this.props;
    const styleDayPosition = (id, selectedDay) => {
      return day === selectedDay
        ? {
            transform: `translateX(${id * width}px`,
            borderRadius: "50%",
            color: "#ffffff",
            backgroundColor: "#0653b6",
            fontWeight: "bold"
          }
        : {
            transform: `translateX(${id * width}px`
          };
    };

    return (
      <div className="week-view">
        <span className="week-no">{this.props.week}</span>
        <div className="week-days d-flex">
          {this.getDaysFromWeek(this.props.week).map((day, id) => (
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

const mapStateToProps = state => {
  return {
    selectedDate: state.selectedDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDateInFormat: date => dispatch(setDateInFormat(date)),
    setDate: date => dispatch(setDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekView);
