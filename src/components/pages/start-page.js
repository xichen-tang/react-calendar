import React from "react";
import { useDispatch } from "react-redux";
import { setPageID } from "../../store/actions";
import { PAGE_INDEX, BUTTON_LABELS } from "../constant";

export default function StartPage() {
  const dispatch = useDispatch();
  const handleClickAddAppointment = () =>
    dispatch(setPageID(PAGE_INDEX.DAY_VIEW_2_2));
  const handleStartCalendar = () =>
    dispatch(setPageID(PAGE_INDEX.DAY_VIEW_1_2));

  const AddAppointmentButton = (
    <div className="d-flex justify-content-center start-button">
      <button onClick={handleClickAddAppointment} className="main-btn border-0">
        {BUTTON_LABELS.addAppointment}
      </button>
    </div>
  );
  const StartCalendarButton = (
    <div className="d-flex justify-content-center start-button">
      <button onClick={handleStartCalendar} className="main-btn border-0">
        {BUTTON_LABELS.startCalendar}
      </button>
    </div>
  );

  return (
    <>
      {AddAppointmentButton}
      {StartCalendarButton}
    </>
  );
}
