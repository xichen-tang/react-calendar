import React from "react";
import moment from "moment";
import WeekLine from "../subcomponents/calendar/week-line";
import MainHeader from "../subcomponents/header/main-header";
import BackMonth from "../subcomponents/button/back-month";
import WeekView from "../subcomponents/calendar/week-view";
import SelectedDate from "../subcomponents/calendar/selected-date";
import TimeSlots from "../subcomponents/calendar/time-slots";
import { setDate } from "../../store/actions";
import {
  HEADERS,
  CURRENT_DATE_FORMAT as dateFormat,
  DANISH_MONTHS as months,
  DANISH_WEEKS as weeks
} from "../constant";
import { connect } from "react-redux";
import { getAvailableTimeSlots, setPageID } from "../../store/actions";

class DayView extends React.Component {
  state = {
    weekNo: 0,
    formatDate: "", // need for date format written in Danish
    date: {
      month: 0, // need for back month button
      day: 0 // need for week-view props
    }
  };

  componentDidMount() {
    this.props.getAvailableTimeSlots();
    this.props.setDate(
      moment(
        new Date(dateFormat.year, dateFormat.month, dateFormat.day)
      ).format("MM/DD/YYYY")
    );
    this.updateState(); // update either date is selected or not
  }

  updateState() {
    let date, weekNo, year, month, week, day;
    if (this.props.selectedDate.length > 0) {
      weekNo = this.getSelectedDateWeekNo();
      year = moment(this.getSelectedDate()).year();
      month = moment(this.getSelectedDate()).month();
      week = moment(this.getSelectedDate()).day();
      day = moment(this.getSelectedDate()).date();
      date = this.formatDate(year, month, week, day);
      this.setState({
        weekNo: weekNo,
        formatDate: date,
        date: { month: month, day: day }
      });
    } else {
      date = this.formatDate(
        dateFormat.year,
        dateFormat.month,
        dateFormat.week,
        dateFormat.day
      );
      this.setState({
        weekNo: dateFormat.weekNo,
        formatDate: date,
        date: { month: dateFormat.month, day: dateFormat.day }
      });
    }
  }

  formatDate = (year, month, week, day) => {
    return `${weeks[week - 1]} ${day}. ${months[month]} ${year}`;
  };

  getSelectedDateWeekNo() {
    return moment(this.props.selectedDate).week();
  }

  getSelectedDate() {
    return moment(this.props.selectedDate);
  }

  render() {
    const { onBackMonth, timeSlots } = this.props;
    const { weekNo, formatDate, date } = this.state;

    return (
      <div className="p-4 text-center">
        <MainHeader title={HEADERS.testDriveDate} />
        <BackMonth onClick={onBackMonth} month={months[date.month]} />
        <WeekLine />
        <WeekView week={weekNo} day={date.day} />
        <SelectedDate date={formatDate} />
        <TimeSlots timeSlots={timeSlots} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timeSlots: state.timeSlots,
    selectedDate: state.selectedDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBackMonth: () => dispatch(setPageID(7)),
    setDate: date => dispatch(setDate(date)),
    getAvailableTimeSlots: () => dispatch(getAvailableTimeSlots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayView);
