import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import FlowInput from "../subcomponents/input/flow-input";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  PAGE_INDEX,
  HEADERS,
  SUB_HEADERS,
  BUTTON_LABELS,
  INPUT_LABELS,
  BUTTON_MODES
} from "../constant";

class LicensePlate extends React.Component {
  state = {
    option: ""
  };

  onOptionChange = e => {
    this.setState({ option: e.target.value });
  };

  isChecked = option => {
    return this.state.option === option;
  };

  render() {
    const { option } = this.state;
    // temporal data
    const options = ["BL 29", "FY 20", "BW 51 10", "BL 28"];

    const styleOption = opt => {
      return option === opt
        ? { backgroundColor: "#1c69d4", color: "#ffffff" }
        : {};
    };

    const LicensePlateView = (
      <div className="options text-center">
        <div className="options-header p-3">
          {SUB_HEADERS.latestLicensePlates}
        </div>
        {options.map((option, id) => (
          <label key={id} className="option p-3" style={styleOption(option)}>
            <input
              type="radio"
              checked={this.isChecked(option)}
              onChange={this.onOptionChange}
              value={option}
            />
            {option}
          </label>
        ))}
      </div>
    );

    const ContinueButton = (
      <div className="mt-4">
        <GeneralButton
          onClick={this.props.onClickContinue}
          label={BUTTON_LABELS.continue}
          mode={BUTTON_MODES.confirm}
        />
      </div>
    );

    return (
      <div className="p-4 text-center">
        <MainHeader title={HEADERS.enterSamplePlateToMount} />
        <FlowInput label={INPUT_LABELS.samplePlate} />
        {LicensePlateView}
        {ContinueButton}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickContinue: () => dispatch(setPageID(PAGE_INDEX.LAST_INFORMATIONS))
  };
};

export default connect(null, mapDispatchToProps)(LicensePlate);
