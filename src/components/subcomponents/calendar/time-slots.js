import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setPageID } from "../../../store/actions";
import { PAGE_INDEX } from "../../constant";

export default function TimeSlots(props) {
  const dispatch = useDispatch();

  const handleClickTimeSlot = () =>
    dispatch(setPageID(PAGE_INDEX.SEARCH_CUSTOMER));

  function timeSlots() {
    if (!props.timeSlots) return [];
    let timeSlots = Object.keys(props.timeSlots).map((slot) => {
      return {
        start: moment(props.timeSlots[slot].start).format("HH:mm"),
        end: moment(props.timeSlots[slot].end).format("HH:mm"),
      };
    });
    return timeSlots;
  }

  const renderTimeSlot = timeSlots().map((slot, id) => (
    <div key={id} className="slot text-center" onClick={handleClickTimeSlot}>
      {slot.start} - {slot.end}
    </div>
  ));

  return <div className="px-4 time-slots">{renderTimeSlot}</div>;
}
