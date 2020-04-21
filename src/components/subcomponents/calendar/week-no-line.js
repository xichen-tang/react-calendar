import React from "react";
import moment from "moment";

export default function WeekNoLine(props) {
  function getWeeksNoArray(year, month) {
    const nextWeekNo = moment(new Date(year, month + 1, 0)).isoWeek();
    const prevWeekNo = moment(new Date(year, month, 1)).isoWeek();
    let weeksNoArr = [];

    if (nextWeekNo < prevWeekNo) {
      for (let i = 1; i <= nextWeekNo; i++) {
        weeksNoArr.push(i);
      }
    } else {
      for (let i = prevWeekNo; i <= nextWeekNo; i++) {
        weeksNoArr.push(i);
      }
    }

    return weeksNoArr;
  }

  const { year, month } = props;
  const height = 42;

  const stylePositionHrs = (id) => {
    return { transform: `translateY(${height * (id + 1)}px)` };
  };

  const WeeksNoView = getWeeksNoArray(year, month).map((week, id) => (
    <div key={id} style={stylePositionHrs(id)}>
      <div className="hr-line"></div>
      <span className="week-no">{week}</span>
    </div>
  ));

  return <div className="hrs">{WeeksNoView}</div>;
}
