import React from "react";
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
import { pageIDs } from "./constant";

class Calendar extends React.Component {
  render() {
    return (
      <>
        {this.props.pageID === pageIDs[0].PAGE_ID && <StartPage />}
        {this.props.pageID === pageIDs[7].PAGE_ID && <MonthView />}
        {this.props.pageID === pageIDs[8].PAGE_ID && <DayView />}
        {this.props.pageID === pageIDs[9].PAGE_ID && <SearchCustomer />}
        {this.props.pageID === pageIDs[10].PAGE_ID && <ManualCustomer />}
        {this.props.pageID === pageIDs[11].PAGE_ID && <LicensePlate />}
        {this.props.pageID === pageIDs[12].PAGE_ID && <LastInformation />}
        {this.props.pageID === pageIDs[13].PAGE_ID && <Picture />}
        {this.props.pageID === pageIDs[14].PAGE_ID && <TermsConditions />}
        {this.props.pageID === pageIDs[15].PAGE_ID && <Signature />}
        {this.props.pageID === pageIDs[16].PAGE_ID && <Success />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageID: state.pageID
  };
};

export default connect(mapStateToProps, null)(Calendar);
