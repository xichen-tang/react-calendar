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

  const handleCameraError = (err) => {
    if (props.pageID === PAGE_INDEX.CAMERA_VIEW) {
      console.log(err);
      setTimeout(() => {
        props.onClickTakePicture();
      }, 3000);
    }
  };

  return (
    <div className="camera">
      <Camera
        onTakePhotoAnimationDone={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
        onCameraError={(error) => handleCameraError(error)}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { pageID: state.pageID };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPhoto: (dataUri) => dispatch(setPhoto(dataUri)),
    onClickTakePicture: () =>
      dispatch(setPageID(PAGE_INDEX.TERMS_AND_CONDITIONS)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraView);
