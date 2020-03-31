import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import FlowInput from "../subcomponents/input/flow-input";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  HEADERS,
  BUTTON_LABELS,
  BUTTON_MODES,
  PAGE_INDEX,
  SUB_HEADERS
} from "../constant";

class NewAppointment extends React.Component {
  render() {
    const {
      appointmentTime,
      dateInFormat,
      gotoStartPage,
      gotoDayView
    } = this.props;

    const HeaderView = <MainHeader title={HEADERS.calendar} />;

    const startTimeLabel =
      dateInFormat.slice(0, -4) + "kl " + appointmentTime.startTime;
    const endTimeLabel =
      dateInFormat.slice(0, -4) + "kl " + appointmentTime.endTime;

    const InputsView = (
      <div className="input-fields p-3 text-center">
        <label className="appointment-title">
          {SUB_HEADERS.appointmentSubject}
        </label>
        <FlowInput label={startTimeLabel} mode="datetime" />
        <FlowInput label={endTimeLabel} mode="datetime" />
      </div>
    );

    const ButtonView = (
      <div className="text-center mt-3">
        <GeneralButton
          label={BUTTON_LABELS.save}
          mode={BUTTON_MODES.confirm}
          onClick={gotoStartPage}
        />
        <GeneralButton
          label={BUTTON_LABELS.cancel}
          mode={BUTTON_MODES.manual}
          onClick={gotoDayView}
        />
      </div>
    );

    return (
      <div className="p-4">
        {HeaderView}
        {InputsView}
        {ButtonView}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dateInFormat: state.dateInFormat,
    appointmentTime: state.appointmentTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gotoStartPage: () => dispatch(setPageID(PAGE_INDEX.START_PAGE)),
    gotoDayView: () => dispatch(setPageID(PAGE_INDEX.DAY_VIEW_1_2))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAppointment);
