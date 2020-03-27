import React from "react";
import moment from "moment";
import WeekLine from "../subcomponents/calendar/week-line";
import MainHeader from "../subcomponents/header/main-header";
import BackMonth from "../subcomponents/button/back-month";
import WeekView from "../subcomponents/calendar/week-view";
import SelectedDate from "../subcomponents/calendar/selected-date";
import TimeSlots from "../subcomponents/calendar/time-slots";
import { HEADERS, DANISH_MONTHS as months } from "../constant";
import { connect } from "react-redux";
import { getAvailableTimeSlots, setPageID } from "../../store/actions";

class DayView extends React.Component {
  componentDidMount() {
    this.props.getAvailableTimeSlots();
  }

  render() {
    const { onBackMonth, timeSlots, dateInFormat, selectedDate } = this.props;

    const month = moment(new Date(selectedDate)).month();
    const day = moment(new Date(selectedDate)).date();
    const weekNo = moment(new Date(selectedDate)).week();

    return (
      <div className="p-4 text-center vh-100">
        <MainHeader title={HEADERS.testDriveDate} />
        <BackMonth onClick={onBackMonth} month={months[month]} />
        <WeekLine />
        <WeekView week={weekNo} day={day} />
        <SelectedDate date={dateInFormat} />
        <TimeSlots timeSlots={timeSlots} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timeSlots: state.timeSlots,
    selectedDate: state.selectedDate,
    dateInFormat: state.dateInFormat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBackMonth: () => dispatch(setPageID(7)),
    getAvailableTimeSlots: () => dispatch(getAvailableTimeSlots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayView);
