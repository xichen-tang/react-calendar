import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import MonthLine from "../subcomponents/calendar/month-line";
import WeekLine from "../subcomponents/calendar/week-line";
import WeekNoLine from "../subcomponents/calendar/week-no-line";
import InfiniteScroll from "react-infinite-scroller";
import { HEADERS, CURRENT_DATE_FORMAT as date } from "../constant";

export default class MonthView extends React.Component {
  state = {
    hasMore: true,
    months: []
  };

  componentDidMount() {
    let months = [date.month];
    this.setState({ months: months });
  }

  loadMonths = () => {
    let { months, hasMore } = this.state;
    let lastMonth = months[months.length - 1];
    let nextMonth,
      isMore = hasMore;

    if (lastMonth === 11) {
      isMore = false;
    } else {
      nextMonth = lastMonth + 1;
      months.push(nextMonth);
    }
    this.setState({ months: months, hasMore: isMore });
  };

  render() {
    const loader = (
      <div className="loader" key={0}>
        Loading...
      </div>
    );

    var months = [];
    const { hasMore } = this.state;

    this.state.months.map((month, i) =>
      months.push(
        <div className="text-center" key={i}>
          <WeekNoLine year={date.year} month={month} />
          <MonthLine year={date.year} month={month} />
        </div>
      )
    );

    const MonthView = (
      <div className="month-view position-relative">
        <InfiniteScroll
          pageStart={0}
          loadMore={() => this.loadMonths()}
          hasMore={hasMore}
          loader={loader}
          useWindow={false}
        >
          {months}
        </InfiniteScroll>
      </div>
    );

    const WeekLineView = (
      <div className="text-center pl-3">
        <WeekLine />
      </div>
    );

    return (
      <div className="p-3">
        <MainHeader title={HEADERS.testDriveDate} />
        {WeekLineView}
        {MonthView}
      </div>
    );
  }
}
