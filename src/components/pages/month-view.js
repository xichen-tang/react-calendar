import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import MonthLine from "../subcomponents/calendar/month-line";
import WeekLine from "../subcomponents/calendar/week-line";
import WeekNoLine from "../subcomponents/calendar/week-no-line";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { HEADERS, FLOW_MODES as modes } from "../constant";
import { getCurDate } from "../utils";

class MonthView extends React.Component {
  state = {
    hasMore: true,
    months: []
  };

  componentDidMount() {
    let months = [getCurDate().month];
    this.setState({ months: months });
  }

  checkFlowisOne() {
    const { mode } = this.props;
    return mode === modes.flow1;
  }

  loadMonths = () => {
    let { months, hasMore } = this.state;
    let lastMonth = months[months.length - 1];
    let nextMonth,
      isMore = hasMore;

    const endMonthOfYear = 11;
    if (lastMonth === endMonthOfYear) {
      isMore = false;
    } else {
      nextMonth = lastMonth + 1;
      months.push(nextMonth);
    }
    this.setState({ months: months, hasMore: isMore });
  };

  render() {
    const headerByFlow = this.checkFlowisOne()
      ? HEADERS.calendar
      : HEADERS.testDriveDate;

    const HeaderView = <MainHeader title={headerByFlow} />;

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
          <WeekNoLine year={getCurDate().year} month={month} />
          <MonthLine year={getCurDate().year} month={month} />
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
      <div className="p-4 vh-100">
        {HeaderView}
        {WeekLineView}
        {MonthView}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mode: state.mode
  };
};

export default connect(mapStateToProps, null)(MonthView);
