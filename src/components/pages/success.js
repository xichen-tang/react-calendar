import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { setPageID } from "../../store/actions";
import { connect } from "react-redux";
import {
  DESCRIPTIONS,
  BUTTON_LABELS,
  HEADERS,
  BUTTON_MODES
} from "../constant";

class Success extends React.Component {
  render() {
    const DescriptionView = (
      <div className="p-5">
        <p>{DESCRIPTIONS.success}</p>
      </div>
    );

    const SuccessButton = (
      <div className="continue-button text-center">
        <GeneralButton
          label={BUTTON_LABELS.close}
          mode={BUTTON_MODES.confirm}
          onClick={this.props.onClickDone}
        />
      </div>
    );

    return (
      <div className="p-4">
        <MainHeader title={HEADERS.done} />
        {DescriptionView}
        {SuccessButton}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickDone: () => dispatch(setPageID(0))
  };
};

export default connect(null, mapDispatchToProps)(Success);
