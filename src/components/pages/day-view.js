import React from "react";
import moment from "moment";
import WeekLine from "../subcomponents/calendar/week-line";
import MainHeader from "../subcomponents/header/main-header";
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
  setPageID,
  setFlowMode
} from "../../store/actions";
import BackCalendar from "../subcomponents/button/back-calendar";

class DayView extends React.Component {
  componentDidMount() {
    const {
      getAvailableTimeSlots,
      getAvailableAppointments,
      setFlowMode1,
      setFlowMode2
    } = this.props;
    getAvailableTimeSlots();
    getAvailableAppointments();
    this.checkFlowisOne() ? setFlowMode1() : setFlowMode2();
  }

  checkFlowisOne() {
    const { mode } = this.props;
    return mode === modes.flow1;
  }

  render() {
    const {
      onBackMonth1,
      onBackMonth2,
      timeSlots,
      selectedDate,
      appointments
    } = this.props;

    const month = moment(selectedDate).month();
    const headerByFlow = this.checkFlowisOne()
      ? HEADERS.calendar
      : HEADERS.testDriveDate;

    const HeaderView = <MainHeader title={headerByFlow} />;

    const onBackMonth = () =>
      this.checkFlowisOne() ? onBackMonth1() : onBackMonth2();

    const WeeksView = (
      <div className="weeks-view">
        <WeekLine />
        <WeekView />
      </div>
    );

    const MainView = (
      <>
        <BackCalendar onClick={onBackMonth} label={months[month]} />
        {WeeksView}
        <SelectedDate />
      </>
    );

    const SlotsView = this.checkFlowisOne() ? (
      <Appointments appointments={appointments} />
    ) : (
      <TimeSlots timeSlots={timeSlots} />
    );

    return (
      <div className="p-4 text-center vh-100">
        {HeaderView}
        {MainView}
        {SlotsView}
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
    setFlowMode1: () => dispatch(setFlowMode(modes.flow1)),
    setFlowMode2: () => dispatch(setFlowMode(modes.flow2)),
    onBackMonth1: () => dispatch(setPageID(PAGE_INDEX.MONTH_VIEW_1_2)),
    onBackMonth2: () => dispatch(setPageID(PAGE_INDEX.MONTH_VIEW_2_2)),
    getAvailableAppointments: () => dispatch(getAvailableAppointments()),
    getAvailableTimeSlots: () => dispatch(getAvailableTimeSlots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayView);
