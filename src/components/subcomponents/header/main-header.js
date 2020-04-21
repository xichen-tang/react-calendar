import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FLOW_MODES as modes, PAGE_INDEX } from "../../constant";
import { setPageID } from "../../../store/actions";

export default function MainHeader(props) {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const handleCloseButton = () => dispatch(setPageID(PAGE_INDEX.START_PAGE));

  const CloseButton = (
    <div className="close-btn" onClick={handleCloseButton}>
      <i className="fa fa-close"></i>
    </div>
  );
  return (
    <div className="main-header text-center">
      {mode === modes.flow1 && CloseButton}
      <label>{props.title}</label>
    </div>
  );
}
