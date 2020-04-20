import React, { useState } from "react";
import DurationPicker from "react-duration-picker";
import { BrowserView, MobileView } from "react-device-detect";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import FlowInput from "../subcomponents/input/flow-input";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  PAGE_INDEX,
  HEADERS,
  INPUT_LABELS,
  BUTTON_LABELS,
  PERSONAL_MODES,
  BUTTON_MODES,
} from "../constant";

function LastInformation(props) {
  const [mode, setMode] = useState(PERSONAL_MODES[0]);
  const [durationPickerVisibility, showDurationPicker] = useState(false);
  const [durationHours, setHours] = useState(0);
  const [durationMinutes, setMinutes] = useState(0);

  const onModeChange = (e) => {
    setMode(e.target.value);
  };

  const onChange = (duration) => {
    setHours(duration.hours);
    setMinutes(duration.minutes);
  };

  const closeDuration = () => {
    showDurationPicker(false);
  };

  const showDuration = () => {
    showDurationPicker(true);
  };

  const onChangeDuration = () => {
    showDuration();
  };

  const isChecked = (newMode) => {
    return mode === newMode;
  };

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

  const styleMode = (m) => {
    return mode === m ? { backgroundColor: "#1c69d4", color: "#ffffff" } : {};
  };

  const ModeButtonsView = (
    <div className="d-flex justify-content-around personal-business p-4">
      {PERSONAL_MODES.map((m, i) => (
        <label className="mode-btn" key={i} style={styleMode(m)}>
          <input
            type="radio"
            checked={isChecked(m)}
            onChange={onModeChange}
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
        onChange={onChange}
        initialDuration={{ hours: 0, minutes: 30 }}
        maxHours={3}
      />
      <button className="close-duration" onClick={closeDuration}>
        Close
      </button>
    </div>
  );

  const DurationView = (
    <div className="duration text-center">
      {durationPickerVisibility && DurationPickerView}
      <div className="flow-input" onClick={showDuration}>
        <input
          type="none"
          placeholder={INPUT_LABELS.duration}
          onChange={onChangeDuration}
          value={`${durationHours}:${durationMinutes}`}
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
          onClick={props.onClickContinue}
        />
      </MobileView>
      <BrowserView>
        <GeneralButton
          label={BUTTON_LABELS.saveAndClose}
          mode={BUTTON_MODES.confirm}
          onClick={props.onClickSaveAndClose}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onClickContinue: () => dispatch(setPageID(PAGE_INDEX.PICTURE)),
    onClickSaveAndClose: () => dispatch(setPageID(PAGE_INDEX.START_PAGE)),
  };
};

export default connect(null, mapDispatchToProps)(LastInformation);
