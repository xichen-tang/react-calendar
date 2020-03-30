import React from "react";
import moment from "moment";
import WeekLine from "../subcomponents/calendar/week-line";
import MainHeader from "../subcomponents/header/main-header";
import BackMonth from "../subcomponents/button/back-month";
import WeekView from "../subcomponents/calendar/week-view";
import SelectedDate from "../subcomponents/calendar/selected-date";
import TimeSlots from "../subcomponents/calendar/time-slots";
import Appointments from "../subcomponents/calendar/appointments";
import {
  PAGE_INDEX,
  HEADERS,
  DANISH_MONTHS as months,
  FLOW_MODES as modes
} from "../constant";
import { connect } from "react-redux";
import {
  getAvailableAppointments,
  getAvailableTimeSlots,
  setPageID
} from "../../store/actions";

class DayView extends React.Component {
  componentDidMount() {
    this.props.getAvailableTimeSlots();
    this.props.getAvailableAppointments();
  }

  render() {
    const {
      onBackMonth,
      timeSlots,
      dateInFormat,
      selectedDate,
      appointments,
      mode
    } = this.props;

    const month = moment(new Date(selectedDate)).month();
    const day = moment(new Date(selectedDate)).date();
    const weekNo = moment(new Date(selectedDate)).week();

    const TopView = (
      <>
        <MainHeader title={HEADERS.testDriveDate} />
        <BackMonth onClick={onBackMonth} month={months[month]} />
        <WeekLine />
        <WeekView week={weekNo} day={day} />
        <SelectedDate date={dateInFormat} />
      </>
    );

    const MiddleView =
      mode === modes.flow2 ? (
        <TimeSlots timeSlots={timeSlots} />
      ) : (
        <Appointments appointments={appointments} />
      );

    return (
      <div className="p-4 text-center vh-100">
        {TopView}
        {MiddleView}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timeSlots: state.timeSlots,
    appointments: state.appointments,
    selectedDate: state.selectedDate,
    dateInFormat: state.dateInFormat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBackMonth: () => dispatch(setPageID(PAGE_INDEX.MONTH_VIEW_2_2)),
    getAvailableAppointments: () => dispatch(getAvailableAppointments()),
    getAvailableTimeSlots: () => dispatch(getAvailableTimeSlots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayView);
