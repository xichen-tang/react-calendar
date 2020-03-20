import React from "react";
import "./license-plate.css";
import MainHeader from "../subcomponents/header/main-header";
import FlowInput from "../subcomponents/input/flow-input";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";

class LicensePlate extends React.Component {
  render() {
    const options = ["BL 29", "FY 20", "BW 51 10", "BL 28"];
    const header = "Seneste anvendte prøveplader";

    return (
      <div className="p-4 text-center">
        <MainHeader title="Indtast den prøveplade du vil montere på bilen" />
        <FlowInput label="Prøveplade" />
        <div className="options text-center">
          <div className="options-header p-3">{header}</div>
          {options.map((option, id) => (
            <div key={id} className="option p-3">
              {option}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <GeneralButton
            onClick={this.props.onClickContinue}
            label="Fortsæt"
            mode="choose"
          />
        </div>
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
