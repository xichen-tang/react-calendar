import React from "react";
import Camera from "react-html5-camera-photo";
import { useSelector, useDispatch } from "react-redux";
import { setPageID, setPhoto } from "../../store/actions";
import { PAGE_INDEX } from "../constant";

export default function CameraView() {
  const dispatch = useDispatch();
  const pageID = useSelector((state) => state.pageID);

  const handleTakePhoto = (dataUri) => {
    dispatch(setPhoto(dataUri));
    dispatch(setPageID(PAGE_INDEX.TERMS_AND_CONDITIONS));
  };
  const handleCameraError = (err) => {
    if (pageID === PAGE_INDEX.CAMERA_VIEW) {
      console.log(err);
      setTimeout(() => {
        dispatch(setPageID(PAGE_INDEX.TERMS_AND_CONDITIONS));
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
