import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { setPageID } from "../../../store/actions";
import "./time-slot.css";

class TimeSlots extends React.Component {
  timeSlots() {
    if (!this.props.timeSlots) return [];
    let timeSlots = Object.keys(this.props.timeSlots).map(slot => {
      return {
        start: moment(this.props.timeSlots[slot].start).format("HH:mm"),
        end: moment(this.props.timeSlots[slot].end).format("HH:mm")
      };
    });
    return timeSlots;
  }

  render() {
    const renderTimeSlot = this.timeSlots().map((slot, id) => (
      <div
        key={id}
        className="slot text-center"
        onClick={this.props.onClickTimeSlot}
      >
        {slot.start} - {slot.end}
      </div>
    ));
    return <div className="px-4 slots">{renderTimeSlot}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickTimeSlot: () => dispatch(setPageID(9))
  };
};

export default connect(null, mapDispatchToProps)(TimeSlots);
