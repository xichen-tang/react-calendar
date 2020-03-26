import React, { createRef } from "react";
import { connect } from "react-redux";
import { setDate } from "../../../store/actions";
import { DAYS_LIST_IN_WEEK as days } from "../../constant";
import moment from "moment";

class WeekView extends React.Component {
  daysRef = createRef();

  componentDidMount() {
    // this.initStyleDay(); // select day automatically
  }

  initStyleDay() {
    const id = this.getDaysFromWeek(this.props.week).indexOf(this.props.day);
    if (!id) return;
    this.daysRef.current.children[id].classList.add("selected");
  }

  getDaysFromWeek = week => {
    return days.map(d =>
      moment()
        .week(week)
        .day(d)
        .date()
    );
  };

  onDayClicked = (id, day) => {
    const count = this.daysRef.current.getElementsByClassName("selected")
      .length;
    if (count > 0) this.clearDayStyle();
    this.daysRef.current.children[id].classList.add("selected");

    const year = moment(this.props.selectedDate).year();
    const month = moment(this.props.selectedDate).month();
    const date = moment(new Date(year, month, day)).format("MM/DD/YYYY");
    this.props.setDate(date);
  };

  clearDayStyle = () => {
    [...this.daysRef.current.children].map(child => {
      return child.classList.remove("selected");
    });
  };

  render() {
    const width = 37;
    const styleDayPosition = id => {
      return {
        transform: `translateX(${id * width}px`
      };
    };

    return (
      <div className="week-view">
        <span className="week-no">{this.props.week}</span>
        <div ref={this.daysRef} className="week-days text-center">
          {this.getDaysFromWeek(this.props.week).map((day, id) => (
            <div
              key={id}
              className="position-absolute day"
              onClick={() => this.onDayClicked(id, day)}
              style={styleDayPosition(id)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDate: state.selectedDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDate: date => dispatch(setDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekView);
