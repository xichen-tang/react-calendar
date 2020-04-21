import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import WeekLine from "../subcomponents/calendar/week-line";
import MainHeader from "../subcomponents/header/main-header";
import WeekView from "../subcomponents/calendar/week-view";
import SelectedDate from "../subcomponents/calendar/selected-date";
import TimeSlots from "../subcomponents/calendar/time-slots";
import Appointments from "../subcomponents/calendar/appointments";
import {
  PAGE_INDEX,
  HEADERS,
  DANISH_MONTHS as months,
  FLOW_MODES as modes,
  DATE_FORMAT,
} from "../constant";
import {
  getAvailableAppointments,
  getAvailableTimeSlots,
  setPageID,
  setFlowMode,
} from "../../store/actions";
import BackCalendar from "../subcomponents/button/back-calendar";

export default function DayView(props) {
  const timeSlots = useSelector((state) => state.timeSlots);
  const selectedDate = useSelector((state) => state.selectedDate);
  const month = moment(selectedDate, DATE_FORMAT).month();
  const dispatch = useDispatch();
  const checkFlowisOne = () => props.mode === modes.flow1;
  const headerByFlow = checkFlowisOne()
    ? HEADERS.calendar
    : HEADERS.testDriveDate;

  const onBackMonth = () =>
    checkFlowisOne()
      ? dispatch(setPageID(PAGE_INDEX.MONTH_VIEW_1_2))
      : dispatch(setPageID(PAGE_INDEX.MONTH_VIEW_2_2));

  useEffect(() => {
    dispatch(getAvailableTimeSlots());
    dispatch(getAvailableAppointments());
    checkFlowisOne()
      ? dispatch(setFlowMode(modes.flow1))
      : dispatch(setFlowMode(modes.flow2));
  });

  const HeaderView = <MainHeader title={headerByFlow} />;
  const MainView = (
    <>
      <BackCalendar onClick={onBackMonth} label={months[month]} />
      <div className="weeks-view">
        <WeekLine />
        <WeekView />
      </div>
      <SelectedDate />
    </>
  );
  const SlotsView = checkFlowisOne() ? (
    <Appointments />
  ) : (
    <TimeSlots timeSlots={timeSlots} />
  );

  return (
    <div className="p-4 text-center vh-100">
      {HeaderView}
      {MainView}
      {SlotsView}
    </div>
  );
}
