import React from "react";
import Camera from "react-html5-camera-photo";
import { connect } from "react-redux";
import { setPageID, setPhoto } from "../../store/actions";
import { PAGE_INDEX } from "../constant";

function CameraView(props) {
  const handleTakePhoto = (dataUri) => {
    props.setPhoto(dataUri);
    props.onClickTakePicture();
  };

  return (
    <div className="camera">
      <Camera
        onTakePhotoAnimationDone={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPhoto: (dataUri) => dispatch(setPhoto(dataUri)),
    onClickTakePicture: () =>
      dispatch(setPageID(PAGE_INDEX.TERMS_AND_CONDITIONS)),
  };
};

export default connect(null, mapDispatchToProps)(CameraView);
