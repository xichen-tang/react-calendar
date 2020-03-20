import React from "react";
import WeekLine from "../subcomponents/calendar/week-line";
import MainHeader from "../subcomponents/header/main-header";
import BackMonth from "../subcomponents/button/back-month";
import WeekView from "../subcomponents/calendar/week-view";
import SelectedDate from "../subcomponents/calendar/selected-date";
import TimeSlots from "../subcomponents/calendar/time-slots";
import { months, weeks } from "../constant";
import { connect } from "react-redux";
import { getAvailableTimeSlots, setPageID } from "../../store/actions";
import moment from "moment";

class DayView extends React.Component {
  componentDidMount() {
    this.props.getAvailableTimeSlots();
  }

  getCurrentDate = () => {
    const week = moment().day();
    const day = moment().date();
    const month = moment().month();
    const year = moment().year();
    return `${weeks[week - 1]} ${day}. ${months[month]} ${year}`;
  };

  render() {
    return (
      <div className="p-4">
        <MainHeader title="Hvornår skal kunden prøvekøre?" />
        <BackMonth
          onClick={this.props.onBackMonth}
          month={months[moment().month()]}
        />
        <WeekLine />
        <WeekView week={moment(new Date()).week()} />
        <SelectedDate date={this.getCurrentDate()} />
        <TimeSlots timeSlots={this.props.timeSlots} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timeSlots: state.timeSlots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBackMonth: () => dispatch(setPageID(7)),
    getAvailableTimeSlots: () => dispatch(getAvailableTimeSlots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayView);
