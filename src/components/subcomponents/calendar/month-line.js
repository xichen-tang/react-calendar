import React from "react";
import { setDate, setPageID } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  PAGE_INDEX,
  DANISH_MONTHS as months,
  DAYS_INDEX as days,
  DAYS_COUNT_IN_WEEK,
  FLOW_MODES as modes,
  DATE_FORMAT,
} from "../../constant";
import { getResponsiveWidth } from "../../utils";

export default function MonthLine(props) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);
  const checkFlowisOne = () => mode === modes.flow1;
  const handleClickDay = (id) => {
    const selectedYear = props.year;
    const selectedMon = props.month;
    const selectedDay = getDaysArray(selectedYear, selectedMon)[id].day;
    const selectedDate = moment(
      new Date(selectedYear, selectedMon, selectedDay),
      DATE_FORMAT
    );

    dispatch(setDate(selectedDate));
    if (checkFlowisOne()) dispatch(setPageID(PAGE_INDEX.DAY_VIEW_1_2));
    else dispatch(setPageID(PAGE_INDEX.DAY_VIEW_2_2));
  };

  const getDaysInMonth = (year, month) => {
    let monthStart = new Date(year, month, 1);
    let monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
  };

  const getDaysArray = (year, month) => {
    let weekNo = 0;
    let index = days[new Date(year, month, 1).toString().split(" ")[0]];
    let daysArray = [];
    const width = getResponsiveWidth();
    const height = 42;

    for (let i = 0, l = getDaysInMonth(year, month); i < l; i++) {
      daysArray.push({
        day: i + 1,
        weekNo: weekNo,
        weekIndex: index++,
        position: {
          width: width + "px",
          height: height + "px",
          transform: `translate(${(index - 1) * width}px, ${
            weekNo * height
          }px)`,
        },
      });

      if (index === DAYS_COUNT_IN_WEEK) {
        index = 0;
        weekNo++;
      }
    }

    return daysArray;
  };

  const { year, month } = props;

  const HeaderView = <label className="month-header">{months[month]}</label>;

  const DaysView = (
    <div className="days">
      {getDaysArray(year, month).map((dayObj, id) => (
        <div
          key={id}
          className="position-absolute"
          style={dayObj.position}
          onClick={() => handleClickDay(id)}
        >
          {dayObj.day}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {HeaderView}
      {DaysView}
    </>
  );
}
