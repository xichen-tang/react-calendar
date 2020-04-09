import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../../utils";
import { DATE_FORMAT } from "../../constant";
import moment from "moment";

class SelectedDate extends React.Component {
  render() {
    const { selectedDate } = this.props;
    const yr = moment(selectedDate, DATE_FORMAT).year();
    const mon = moment(selectedDate, DATE_FORMAT).month();
    const wk = moment(selectedDate, DATE_FORMAT).day();
    const day = moment(selectedDate, DATE_FORMAT).date();

    return (
      <div className="date text-center p-3">{formatDate(yr, mon, wk, day)}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selectedDate,
  };
};

export default connect(mapStateToProps, null)(SelectedDate);
