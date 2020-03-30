import React from "react";
import { connect } from "react-redux";
import { FLOW_MODES as modes, PAGE_INDEX } from "../../constant";
import { setPageID } from "../../../store/actions";

class MainHeader extends React.Component {
  render() {
    const { mode } = this.props;

    const CloseButton = (
      <div className="close-btn" onClick={() => this.props.gotoStartPage()}>
        <i className="fa fa-close"></i>
      </div>
    );
    return (
      <div className="main-header text-center">
        {mode === modes.flow1 && CloseButton}
        <label>{this.props.title}</label>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mode: state.mode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gotoStartPage: () => dispatch(setPageID(PAGE_INDEX.START_PAGE))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
