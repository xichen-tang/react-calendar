import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils";
import { DATE_FORMAT } from "../../constant";
import moment from "moment";

export default function SelectedDate() {
  const selectedDate = useSelector((state) => state.selectedDate);
  const yr = moment(selectedDate, DATE_FORMAT).year();
  const mon = moment(selectedDate, DATE_FORMAT).month();
  const wk = moment(selectedDate, DATE_FORMAT).day();
  const day = moment(selectedDate, DATE_FORMAT).date();

  return (
    <div className="date text-center p-3">{formatDate(yr, mon, wk, day)}</div>
  );
}
