import React, { createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../../../store/actions";
import { dayIDsInWeek, getResponsiveWidth } from "../../utils";
import { DATE_FORMAT } from "../../constant";
import moment from "moment";

export default function WeekView() {
  const selectedDate = useSelector((state) => state.selectedDate);
  let weekViewRef = createRef();
  const width = getResponsiveWidth();
  const weekNo = moment(selectedDate, DATE_FORMAT).isoWeek();
  const selectedDay = moment(selectedDate, DATE_FORMAT).date();
  const dispatch = useDispatch();

  const getDaysFromWeek = (week) =>
    dayIDsInWeek().map((d) => moment().week(week).day(d).date());
  const isDayChecked = (day) =>
    moment(selectedDate, DATE_FORMAT).date() === day;
  const onDayChange = (e) => {
    const selectedDay = e.target.value;
    const selected = moment(selectedDate, DATE_FORMAT);
    updateDate(selected.year(), selected.month(), selectedDay);
  };
  const updateDate = (yr, mon, day) => {
    const selectedDate = moment(new Date(yr, mon, day), DATE_FORMAT);
    dispatch(setDate(selectedDate));
  };
  const styleDayPosition = (id, day) => {
    if (Math.abs(day - selectedDay) > 6) {
      return {
        display: "none",
      };
    } else if (day === selectedDay) {
      return {
        transform: `translateX(${id * width}px`,
        borderRadius: "50%",
        color: "#ffffff",
        backgroundColor: "#0653b6",
        fontWeight: "bold",
      };
    } else {
      return {
        transform: `translateX(${id * width}px`,
      };
    }
  };

  return (
    <div ref={weekViewRef} className="week-view">
      <span className="week-no">{weekNo}</span>
      <div className="week-days d-flex">
        {getDaysFromWeek(weekNo).map((day, id) => (
          <label
            key={id}
            className="position-absolute day"
            style={styleDayPosition(id, day)}
          >
            <input
              type="radio"
              checked={isDayChecked(day)}
              onChange={onDayChange}
              value={day}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
}
