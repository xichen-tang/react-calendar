import React from "react";
import SimpleViewSlider from "react-view-slider/simple";
import StartPage from "./pages/start-page";
import MonthView from "./pages/month-view";
import DayView from "./pages/day-view";
import ManualCustomer from "./pages/manual-customer";
import SearchCustomer from "./pages/search-customer";
import LicensePlate from "./pages/license-plate";
import Picture from "./pages/picture";
import TermsConditions from "./pages/terms-conditions";
import Signature from "./pages/signature";
import Success from "./pages/success";
import LastInformation from "./pages/last-information";
import { connect } from "react-redux";
import "./main.css";

class Calendar extends React.Component {
  render() {
    const { pageID } = this.props;
    const pages = [
      <StartPage />,
      null,
      null,
      null,
      null,
      null,
      null,
      <MonthView />,
      <DayView />,
      <SearchCustomer />,
      <ManualCustomer />,
      <LicensePlate />,
      <LastInformation />,
      <Picture />,
      <TermsConditions />,
      <Signature />,
      <Success />
    ];
    return (
      <div className="main">
        <SimpleViewSlider>
          <div key={pageID}>{pages[pageID]}</div>
        </SimpleViewSlider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageID: state.pageID
  };
};

export default connect(mapStateToProps, null)(Calendar);
