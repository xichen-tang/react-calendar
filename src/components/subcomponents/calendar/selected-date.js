import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../../utils";
import moment from "moment";

class SelectedDate extends React.Component {
  render() {
    const { selectedDate } = this.props;
    const yr = moment(selectedDate).year();
    const mon = moment(selectedDate).month();
    const wk = moment(selectedDate).day();
    const day = moment(selectedDate).date();

    return (
      <div className="date text-center p-3">{formatDate(yr, mon, wk, day)}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDate: state.selectedDate
  };
};

export default connect(mapStateToProps, null)(SelectedDate);
