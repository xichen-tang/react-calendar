import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import BackCalendar from "../subcomponents/button/back-calendar";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import { HEADERS, PAGE_INDEX } from "../constant";
import GeneralButton from "../subcomponents/button/general-btn";
class ViewAppointment extends React.Component {
  render() {
    const {
      onBackDayView,
      gotoAppointmentView1,
      gotoAppointmentView2,
      mode
    } = this.props;

    const HeaderView = <MainHeader title={HEADERS.calendar} />;

    const BackView = (
      <BackCalendar onClick={onBackDayView} label={"Mandag 1. februar"} />
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

    const ButtonsView = () => {
      if (mode === 1) {
        return (
          <div className="appointment-btns text-center mt-5">
            <div className="">Ændre aftale</div>
            <div className="">Slet aftale</div>
          </div>
        );
      } else if (mode === 2) {
        return (
          <div className="appointment-btns text-center">
            <div className="" onClick={gotoAppointmentView2}>
              Skift tidspunkt
            </div>
            <div className="">Se køreseddel</div>
            <div className="">Se kørekort</div>
            <div className="">Slet prøvekørsel</div>
          </div>
        );
      } else {
        return (
          <div className="appointment-btns text-center">
            <div className="times">
              <div className="time">Fra mandag 1. februar kl 01:00</div>
              <div className="time">Til mandag 1. februar kl 01:30</div>
            </div>
            <GeneralButton
              label="Opdater køreseddel"
              mode="confirm"
              onClick={gotoAppointmentView1}
            />
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

const mapDispatchToProps = dispatch => {
  return {
    onBackDayView: () => dispatch(setPageID(PAGE_INDEX.DAY_VIEW_1_2)),
    gotoAppointmentView2: () => dispatch(setPageID(PAGE_INDEX.APPOINTMENT_2_2)),
    gotoAppointmentView1: () => dispatch(setPageID(PAGE_INDEX.APPOINTMENT_2_1))
  };
};

export default connect(null, mapDispatchToProps)(ViewAppointment);
