import React from "react";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import { PAGE_INDEX, BUTTON_LABELS } from "../constant";

class StartPage extends React.Component {
  render() {
    const AddAppointmentButton = (
      <div className="d-flex justify-content-center start-button">
        <button
          onClick={this.props.onClickAddAppointment}
          className="main-btn border-0"
        >
          {BUTTON_LABELS.addAppointment}
        </button>
      </div>
    );

    const StartCalendarButton = (
      <div className="d-flex justify-content-center start-button">
        <button
          onClick={this.props.onStartCalendar}
          className="main-btn border-0"
        >
          {BUTTON_LABELS.startCalendar}
        </button>
      </div>
    );
    return (
      <>
        {AddAppointmentButton}
        {StartCalendarButton}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickAddAppointment: () => dispatch(setPageID(PAGE_INDEX.DAY_VIEW_2_2)),
    onStartCalendar: () =>
      dispatch(dispatch(setPageID(PAGE_INDEX.DAY_VIEW_1_2)))
  };
};

export default connect(null, mapDispatchToProps)(StartPage);
