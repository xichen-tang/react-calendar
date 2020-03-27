import React from "react";
import DurationPicker from "react-duration-picker";
import { BrowserView, MobileView } from "react-device-detect";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import FlowInput from "../subcomponents/input/flow-input";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  HEADERS,
  INPUT_LABELS,
  BUTTON_LABELS,
  PERSONAL_MODES,
  BUTTON_MODES
} from "../constant";

class LastInformation extends React.Component {
  state = {
    mode: "",
    showDurationPicker: false,
    hours: 0,
    minutes: 0
  };

  componentDidMount() {
    this.setState({ mode: PERSONAL_MODES[0] });
  }

  onModeChange = e => {
    this.setState({ mode: e.target.value });
  };

  onChange = duration => {
    const { hours, minutes } = duration;
    this.setState({ hours, minutes });
  };

  closeDuration = () => {
    this.setState({ showDurationPicker: false });
  };

  showDuration = () => {
    this.setState({ showDurationPicker: true });
  };

  onChangeDuration = () => {
    this.showDuration();
  };

  isChecked = mode => {
    return this.state.mode === mode;
  };

  render() {
    const { mode, showDurationPicker } = this.state;

    const PersonalInfoView = (
      <div className="last-information pt-5 px-4">
        <div className="personal-info">
          <label>{INPUT_LABELS.name}</label>
        </div>
        <div className="personal-info">
          <label>{INPUT_LABELS.address}</label>
        </div>
        <div className="personal-info">
          <label>{INPUT_LABELS.cityZipcode}</label>
        </div>
      </div>
    );

    const PersonalInputView = (
      <div className="personal-input">
        <FlowInput label={INPUT_LABELS.phone} />
        <FlowInput label={INPUT_LABELS.email} />
      </div>
    );

    const styleMode = m => {
      return mode === m ? { backgroundColor: "#1c69d4", color: "#ffffff" } : {};
    };

    const ModeButtonsView = (
      <div className="d-flex justify-content-around personal-business p-4">
        {PERSONAL_MODES.map((m, i) => (
          <label className="mode-btn" key={i} style={styleMode(m)}>
            <input
              type="radio"
              checked={this.isChecked(m)}
              onChange={this.onModeChange}
              value={m}
            />
            {BUTTON_LABELS[m]}
          </label>
        ))}
      </div>
    );

    const MoreDriversView = (
      <div className="d-flex justify-content-center m-4">
        <i className="fa fa-plus m-1 more-driver"></i>
        <span className="ml-2">{BUTTON_LABELS.addMoreDrivers}</span>
      </div>
    );

    const DurationPickerView = (
      <div>
        <DurationPicker
          onChange={this.onChange}
          initialDuration={{ hours: 0, minutes: 30 }}
          maxHours={3}
        />
        <button className="close-duration" onClick={this.closeDuration}>
          Close
        </button>
      </div>
    );

    const DurationView = (
      <div className="duration text-center">
        {showDurationPicker && DurationPickerView}
        <div className="flow-input" onClick={this.showDuration}>
          <input
            type="none"
            placeholder={INPUT_LABELS.duration}
            onChange={this.onChangeDuration}
            value={`${this.state.hours}:${this.state.minutes}`}
          />
        </div>
      </div>
    );

    const ConfirmView = (
      <div className="text-center mt-3">
        <MobileView>
          <GeneralButton
            label={BUTTON_LABELS.continue}
            mode={BUTTON_MODES.confirm}
            onClick={this.props.onClickContinue}
          />
        </MobileView>
        <BrowserView>
          <GeneralButton
            label={BUTTON_LABELS.saveAndClose}
            mode={BUTTON_MODES.confirm}
            onClick={this.props.onClickSaveAndClose}
          />
        </BrowserView>
      </div>
    );

    return (
      <div className="p-4">
        <MainHeader title={HEADERS.missingInformation} />
        {PersonalInfoView}
        {PersonalInputView}
        {ModeButtonsView}
        {MoreDriversView}
        {DurationView}
        {ConfirmView}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickContinue: () => dispatch(setPageID(13)),
    onClickSaveAndClose: () => dispatch(setPageID(0))
  };
};

export default connect(null, mapDispatchToProps)(LastInformation);
