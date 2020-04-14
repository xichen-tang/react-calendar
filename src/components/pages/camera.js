import React from "react";
import Camera from "react-html5-camera-photo";
import { connect } from "react-redux";
import { setPageID, setPhoto } from "../../store/actions";
import { PAGE_INDEX } from "../constant";

class CameraView extends React.Component {
  handleTakePhoto = (dataUri) => {
    this.props.setPhoto(dataUri);
    this.props.onClickTakePicture();
  };

  render() {
    return (
      <div className="camera">
        <Camera
          onTakePhotoAnimationDone={(dataUri) => {
            return this.handleTakePhoto(dataUri);
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPhoto: (dataUri) => dispatch(setPhoto(dataUri)),
    onClickTakePicture: () =>
      dispatch(setPageID(PAGE_INDEX.TERMS_AND_CONDITIONS)),
  };
};

export default connect(null, mapDispatchToProps)(CameraView);
