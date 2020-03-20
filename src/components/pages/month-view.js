import React from "react";
import WeekLine from "../subcomponents/calendar/week-line";
import MonthLine from "../subcomponents/calendar/month-line";
// import InfiniteScroll from "react-infinite-scroller";
import "./month-view.css";

export default class MonthView extends React.Component {
  state = {};

  loadFunc() {}

  weeksOfYear() {
    return [];
  }

  render() {
    const getMonths = [...Array(12).keys()];
    const title = "Hvornår skal kunden prøvekøre?";
    const MonthViewHeader = (
      <label className="title text-center w-100 pb-4">{title}</label>
    );
    const MonthView = (
      <div className="month">
        {getMonths.map((month, index) => (
          <MonthLine key={index} year={2020} month={month + 1} />
        ))}
      </div>
    );

    return (
      <div className="p-3">
        {MonthViewHeader}
        <WeekLine />
        <div className="month-view position-relative">
          {/* <InfiniteScroll pageStart={0} loadMore={this.loadFunc} hasMore={true}> */}
          {MonthView}
          {/* </InfiniteScroll> */}
        </div>
      </div>
    );
  }
}
