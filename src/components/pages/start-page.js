import React from "react";
import StartButton from "../subcomponents/button/start-button";
import { buttonLabels } from "../constant";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";

class StartPage extends React.Component {
  render() {
    return (
      <>
        <StartButton
          onClick={this.props.onClickAddAppointment}
          label={buttonLabels[0]}
        />
        <StartButton
          onClick={this.props.onStartCalendar}
          label={buttonLabels[1]}
        />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickAddAppointment: () => dispatch(setPageID(8)),
    onStartCalendar: () => dispatch(dispatch(setPageID(2)))
  };
};

export default connect(null, mapDispatchToProps)(StartPage);
