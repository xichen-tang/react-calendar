import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import FlowInput from "../subcomponents/input/flow-input";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  HEADERS,
  SUB_HEADERS,
  BUTTON_LABELS,
  INPUT_LABELS,
  BUTTON_MODES
} from "../constant";

class LicensePlate extends React.Component {
  render() {
    // temporal data
    const options = ["BL 29", "FY 20", "BW 51 10", "BL 28"];

    const LicensePlateView = (
      <div className="options text-center">
        <div className="options-header p-3">
          {SUB_HEADERS.latestLicensePlates}
        </div>
        {options.map((option, id) => (
          <div key={id} className="option p-3">
            {option}
          </div>
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
    onClickContinue: () => dispatch(setPageID(12))
  };
};

export default connect(null, mapDispatchToProps)(LicensePlate);
