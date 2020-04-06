import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID, setPhoto } from "../../store/actions";
import {
  PAGE_INDEX,
  DESCRIPTIONS,
  BUTTON_LABELS,
  BUTTON_MODES,
  HEADERS
} from "../constant";

class Picture extends React.Component {
  state = {
    isShownCamera: false
  };

  showCamera = () => {
    this.setState({ isShownCamera: true });
  };

  handleTakePhoto = dataUri => {
    if (!this.state.isShownCamera) return;
    this.props.setPhoto(dataUri);
    this.props.onClickTakePicture();
  };

  render() {
    const { isShownCamera } = this.state;

    const DescriptionView = (
      <div className="description p-4">{DESCRIPTIONS.takePicture}</div>
    );

    const ContinueButton = (
      <div className="continue-button text-center">
        <GeneralButton
          label={BUTTON_LABELS.camera}
          mode={BUTTON_MODES.confirm}
          onClick={this.showCamera}
        />
      </div>
    );

    const CameraView = (
      <div className="camera">
        <Camera
          onTakePhoto={dataUri => {
            this.handleTakePhoto(dataUri);
          }}
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

    return (
      <div className="p-4 position-relative w-100 vh-100">
        {isShownCamera && CameraView}
        {!isShownCamera && MainView}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPhoto: dataUri => dispatch(setPhoto(dataUri)),
    onClickTakePicture: () =>
      dispatch(setPageID(PAGE_INDEX.TERMS_AND_CONDITIONS))
  };
};

export default connect(null, mapDispatchToProps)(Picture);
