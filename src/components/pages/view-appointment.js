import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import BackCalendar from "../subcomponents/button/back-calendar";
import moment from "moment";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  HEADERS,
  PAGE_INDEX,
  DANISH_MONTHS as months,
  DANISH_WEEKS as weeks
} from "../constant";
import GeneralButton from "../subcomponents/button/general-btn";

class ViewAppointment extends React.Component {
  state = {
    inputType: "text",
    viewTimeChange: false
  };

  convertInputType = () => {
    this.setState({ inputType: "datetime-local" });
  };

  onClickChangeTime = () => {
    this.setState({ viewTimeChange: true });
  };

  onClickCloseTime = () => {
    this.setState({ viewTimeChange: false, inputType: "text" });
  };

  render() {
    const { onBackDayView, selectedDate, mode } = this.props;

    const HeaderView = <MainHeader title={HEADERS.calendar} />;

    // Mandag 1. februar
    const mon = moment(selectedDate).month();
    const wk = moment(selectedDate).day();
    const day = moment(selectedDate).date();
    const BackView = (
      <BackCalendar
        onClick={onBackDayView}
        label={`${weeks[wk]} ${day}. ${months[mon]}`}
      />
    );

    const DetailView = (
      <div className="appointment-info">
        <div className="info">
          <p className="font-weight-bold">Navn Navnesen</p>
          <p className="">Tlf: 1234 5678</p>
        </div>
        <div className="info">
          <p className="">Mandag 1. februar 2020</p>
          <p className="">Fra 01:00 til 01:30</p>
        </div>
        <div className="info">
          <p className="">BMW 320i Sedan Connected</p>
          <p className="">Reg.nr: BL 24</p>
        </div>
        <div className="info">
          <p className="">Oprettet af: Mikkel Bredal</p>
        </div>
      </div>
    );

    const { inputType, viewTimeChange } = this.state;

    const beforeDateTimeView = (
      <>
        <div className="apt-btn" onClick={this.onClickChangeTime}>
          Skift tidspunkt
        </div>
        <div className="apt-btn">Se køreseddel</div>
        <div className="apt-btn">Se kørekort</div>
        <div className="apt-btn">Slet prøvekørsel</div>
      </>
    );

    const updateDateTimeView = (
      <>
        <div className="times">
          <div className="date-time-picker">
            <input
              placeholder="Fra mandag 1. februar kl 01:00"
              type={inputType}
              onFocus={this.convertInputType}
            />
          </div>
          <div className="date-time-picker">
            <input
              placeholder="Fra mandag 1. februar kl 01:00"
              type={inputType}
              onFocus={this.convertInputType}
            />
          </div>
        </div>
        <GeneralButton
          label="Opdater køreseddel"
          mode="confirm"
          onClick={this.onClickCloseTime}
        />
      </>
    );

    const ButtonsView = () => {
      if (mode === 1) {
        return (
          <div className="appointment-btns text-center mt-5">
            <div className="apt-btn">Ændre aftale</div>
            <div className="apt-btn">Slet aftale</div>
          </div>
        );
      } else {
        return (
          <div className="appointment-btns text-center">
            {viewTimeChange ? updateDateTimeView : beforeDateTimeView}
          </div>
        );
      }
    };

    return (
      <div className="p-4">
        {HeaderView}
        {BackView}
        {DetailView}
        {ButtonsView()}
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
    onBackDayView: () => dispatch(setPageID(PAGE_INDEX.DAY_VIEW_1_2))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAppointment);
