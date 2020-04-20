import React, { createRef } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { setPageID, setTimeSlot } from "../../../store/actions";
import {
  SLOT_CONFIG,
  COLOR_SCHEMA,
  PAGE_INDEX,
  MINS_PER_HOUR,
  DATE_FORMAT,
} from "../../constant";

function Appointments(props) {
  let appointmentsRef = createRef();

  function getAppointmentsBySelectedDate() {
    const { appointments, selectedDate } = props;
    if (!selectedDate) return [];
    if (!Array.isArray(appointments)) {
      return convertToArray(appointments).filter((event) => {
        return (
          moment(event.start.split("T")[0], DATE_FORMAT).date() ===
          moment(selectedDate, DATE_FORMAT).date()
        );
      });
    }
    return [];
  }

  const convertToArray = (obj) => {
    return Object.keys(obj).map((key) => {
      return {
        start: obj[key].event.start,
        end: obj[key].event.end,
        subject: obj[key].event.subject,
        internal: obj[key].event.internal,
        car: obj[key].event.car,
      };
    });
  };

  function getStartPosFrom(e) {
    if (!e) return 0;
    const mins = convertToMins(e.start.split("T")[1].split(":"));
    const pxPerMin = SLOT_CONFIG.heightPerThirtyMins / SLOT_CONFIG.nextSlot;
    return pxPerMin * mins;
  }

  function getHeightFrom(e) {
    if (!e) return 0;

    // const direction =
    //   moment(e.start.split("T")[0], DATE_FORMAT) >
    //   moment(e.end.split("T")[0], DATE_FORMAT)
    //     ? -1
    //     : 1;
    // console.log(direction);
    const startMins = convertToMins(e.start.split("T")[1].split(":"));
    const endMins = convertToMins(e.end.split("T")[1].split(":"));
    const pxPerMin = SLOT_CONFIG.heightPerThirtyMins / SLOT_CONFIG.nextSlot;
    return pxPerMin * Math.abs(endMins - startMins);
  }

  function convertToMins(arr) {
    return parseInt(arr[0] * MINS_PER_HOUR) + parseInt(arr[1]);
  }

  const onClickAppointment = (event, e) => {
    event.stopPropagation();
    if (e.car.isRegistered === true) props.gotoAppointmentView1();
    else props.gotoAppointmentView2();
  };

  const onClickOutside = (e) => {
    const paddingOffset = 16;
    const offsetTop = appointmentsRef.current.offsetTop;
    const scrollTop = appointmentsRef.current.firstElementChild.scrollTop;
    const timeSlot = calculateTimeFromPos(
      e.pageY - offsetTop - paddingOffset + scrollTop
    );
    props.setTimeSlot(timeSlot);
    props.gotoNewAppointment();
  };

  function calculateTimeFromPos(offsetY) {
    const step = Math.floor(offsetY / SLOT_CONFIG.heightPerThirtyMins);
    const timeObj = {
      startTime: `${
        Math.floor(step / 2) > 9
          ? Math.floor(step / 2)
          : "0" + Math.floor(step / 2)
      }:${step % 2 > 0 ? "30" : "00"}`,
      endTime: `${
        Math.ceil(step / 2) > 9
          ? Math.ceil(step / 2)
          : "0" + Math.ceil(step / 2)
      }:${step % 2 > 0 ? "00" : "30"}`,
    };
    return timeObj;
  }

  const slots = () => {
    let slots = [];

    let slotTime = moment(SLOT_CONFIG.startTime, "HH:mm");
    let endTime = moment(SLOT_CONFIG.endTime, "HH:mm");
    while (slotTime < endTime) {
      slots.push(slotTime.format("HH:mm"));
      slotTime = slotTime.add(SLOT_CONFIG.nextSlot, "minutes");
    }
    return slots;
  };

  const styleEvent = (event) => {
    let heightOfEventItem = getHeightFrom(event);
    let startPosOfEventItem = getStartPosFrom(event);
    const backgroundColorOfEvent =
      event.internal === true
        ? COLOR_SCHEMA.blueBackground
        : COLOR_SCHEMA.greyBackground;
    const paddingTop = 16;
    return {
      transform: `translateY(${startPosOfEventItem + paddingTop}px)`,
      height: `${heightOfEventItem}px`,
      backgroundColor: `${backgroundColorOfEvent}`,
    };
  };

  const styleHrLines = {
    marginBottom: `${SLOT_CONFIG.heightPerThirtyMins - 1}px`,
  };

  const AppointmentsView = (
    <div className="appointment">
      <ul className="views" onClick={(e) => onClickOutside(e)}>
        {getAppointmentsBySelectedDate().map((event, i) => (
          <div
            key={i}
            className="event-view"
            style={styleEvent(event)}
            onClick={(e) => onClickAppointment(e, event)}
          >
            <span>{event.subject}</span>
          </div>
        ))}

        {slots().map((i) => (
          <li key={i} className="hr-line" style={styleHrLines}>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="appointments" ref={appointmentsRef}>
      {AppointmentsView}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selectedDate,
    appointments: state.appointments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gotoNewAppointment: () => dispatch(setPageID(PAGE_INDEX.NEW_APPOINTMENT)),
    gotoAppointmentView1: () => dispatch(setPageID(PAGE_INDEX.APPOINTMENT_1)),
    gotoAppointmentView2: () => dispatch(setPageID(PAGE_INDEX.APPOINTMENT_2)),
    setTimeSlot: (timeObj) => dispatch(setTimeSlot(timeObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
