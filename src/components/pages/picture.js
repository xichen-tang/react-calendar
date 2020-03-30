import React from "react";
import Camera from "react-html5-camera-photo";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
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

    // not tested on mobile
    setTimeout(() => {
      this.props.onClickTakePicture();
    }, 5000);
  };

  handleTakePhoto = dataUri => {
    // save the image uri
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

    return (
      <div className="p-4 position-relative">
        <MainHeader title={HEADERS.takePicture} />
        {DescriptionView}
        {ContinueButton}
        {isShownCamera && CameraView}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickTakePicture: () =>
      dispatch(setPageID(PAGE_INDEX.TERMS_AND_CONDITIONS))
  };
};

export default connect(null, mapDispatchToProps)(Picture);
