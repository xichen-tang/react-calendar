import React from "react";
import { connect } from "react-redux";
import { FLOW_MODES as modes, PAGE_INDEX } from "../../constant";
import { setPageID } from "../../../store/actions";

function MainHeader(props) {
  const { mode } = props;

  const CloseButton = (
    <div className="close-btn" onClick={() => props.gotoStartPage()}>
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

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gotoStartPage: () => dispatch(setPageID(PAGE_INDEX.START_PAGE)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
