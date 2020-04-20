import React from "react";
import SimpleViewSlider from "react-view-slider/simple";
import StartPage from "./pages/start-page";
import MonthView from "./pages/month-view";
import DayView from "./pages/day-view";
import ManualCustomer from "./pages/manual-customer";
import SearchCustomer from "./pages/search-customer";
import LicensePlate from "./pages/license-plate";
import Picture from "./pages/picture";
import CameraView from "./pages/camera";
import TermsConditions from "./pages/terms-conditions";
import Signature from "./pages/signature";
import Success from "./pages/success";
import LastInformation from "./pages/last-information";
import NewAppointment from "./pages/new-appointment";
import AppointmentView from "./pages/view-appointment";
import { connect } from "react-redux";
import { FLOW_MODES } from "./constant";
import "./main.css";

function Calendar(props) {
  const { pageID } = props;
  const pages = [
    <StartPage />,
    <MonthView />,
    <MonthView />,
    <DayView mode={FLOW_MODES.flow1} />,
    <DayView mode={FLOW_MODES.flow2} />,
    <SearchCustomer />,
    <ManualCustomer />,
    <LicensePlate />,
    <LastInformation />,
    <Picture />,
    <CameraView />,
    <TermsConditions />,
    <Signature />,
    <NewAppointment />,
    <AppointmentView mode={1} />,
    <AppointmentView mode={2} />,
    <Success />,
  ];

  return (
    <div className="main">
      <SimpleViewSlider>
        <div key={pageID}>{pages[pageID]}</div>
      </SimpleViewSlider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pageID: state.pageID,
  };
};

export default connect(mapStateToProps, null)(Calendar);
