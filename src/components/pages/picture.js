import React from "react";
import "react-html5-camera-photo/build/css/index.css";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import {
  DESCRIPTIONS,
  BUTTON_LABELS,
  BUTTON_MODES,
  HEADERS,
} from "../constant";
import { setPageID } from "../../store/actions";
import { PAGE_INDEX } from "../constant";

class Picture extends React.Component {
  onClickCameraView = () => {
    this.props.goToCameraView();
  };

  render() {
    const DescriptionView = (
      <div className="description p-4">{DESCRIPTIONS.takePicture}</div>
    );

    const ContinueButton = (
      <div className="continue-button text-center">
        <GeneralButton
          label={BUTTON_LABELS.camera}
          mode={BUTTON_MODES.confirm}
          onClick={this.onClickCameraView}
        />
      </div>
    );

    const MainView = (
      <>
        <MainHeader title={HEADERS.takePicture} />
        {DescriptionView}
        {ContinueButton}
      </>
    );

    return <div className="p-4 position-relative w-100 vh-100">{MainView}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToCameraView: () => dispatch(setPageID(PAGE_INDEX.CAMERA_VIEW)),
  };
};

export default connect(null, mapDispatchToProps)(Picture);
