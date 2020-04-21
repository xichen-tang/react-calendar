import React, { useState } from "react";
import MainHeader from "../subcomponents/header/main-header";
import BackCalendar from "../subcomponents/button/back-calendar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  HEADERS,
  PAGE_INDEX,
  DANISH_MONTHS as months,
  DANISH_WEEKS as weeks,
  DATE_FORMAT,
} from "../constant";
import GeneralButton from "../subcomponents/button/general-btn";

export default function ViewAppointment(props) {
  const [inputType, setInputType] = useState("text");
  const [timeChangeVisibility, setTimeChangeVisibility] = useState(false);
  const selectedDate = useSelector((state) => state.selectedDate);
  const mon = moment(selectedDate, DATE_FORMAT).month();
  const wk = moment(selectedDate, DATE_FORMAT).day();
  const day = moment(selectedDate, DATE_FORMAT).date();
  const aptDate = `${weeks[wk]} ${day}. ${months[mon]}`;
  const yr = moment(selectedDate, DATE_FORMAT).year();
  const from = "01:00";
  const to = "01:30";

  const dispatch = useDispatch();
  const convertInputType = () => setInputType("datetime-local");
  const onClickChangeTime = () => setTimeChangeVisibility(true);
  const onClickCloseTime = () => setTimeChangeVisibility(false);
  const onBackDayView = () => dispatch(setPageID(PAGE_INDEX.DAY_VIEW_1_2));

  const HeaderView = <MainHeader title={HEADERS.calendar} />;
  const BackView = <BackCalendar onClick={onBackDayView} label={aptDate} />;
  const DetailView = (
    <div className="appointment-info">
      <div className="info">
        <p className="font-weight-bold">Navn Navnesen</p>
        <p className="">Tlf: 1234 5678</p>
      </div>
      <div className="info">
        <p className="">
          {aptDate} {yr}
        </p>
        <p className="">
          Fra {from} til {to}
        </p>
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
  const beforeDateTimeView = (
    <>
      <div className="apt-btn" onClick={onClickChangeTime}>
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
            onFocus={convertInputType}
          />
        </div>
        <div className="date-time-picker">
          <input
            placeholder="Fra mandag 1. februar kl 01:00"
            type={inputType}
            onFocus={convertInputType}
          />
        </div>
      </div>
      <GeneralButton
        label="Opdater køreseddel"
        mode="confirm"
        onClick={onClickCloseTime}
      />
    </>
  );
  const ButtonsView =
    props.mode === 1 ? (
      <div className="appointment-btns text-center mt-5">
        <div className="apt-btn">Ændre aftale</div>
        <div className="apt-btn">Slet aftale</div>
      </div>
    ) : (
      <div className="appointment-btns text-center">
        {timeChangeVisibility ? updateDateTimeView : beforeDateTimeView}
      </div>
    );

  return (
    <div className="p-4">
      {HeaderView}
      {BackView}
      {DetailView}
      {ButtonsView}
    </div>
  );
}
