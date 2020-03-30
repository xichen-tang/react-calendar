import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { setPageID } from "../../../store/actions";
import { SLOT_CONFIG, COLOR_SCHEMA, PAGE_INDEX } from "../../constant";

class Appointments extends React.Component {
  appointments() {
    const { appointments } = this.props;
    if (!appointments) return [];
    return Object.keys(appointments).map(key => {
      return {
        start: appointments[key].event.start,
        end: appointments[key].event.end,
        subject: appointments[key].event.subject,
        internal: appointments[key].event.internal,
        car: appointments[key].event.car
      };
    });
  }

  // From no idea what the api response supposed to be,
  // let's assume you get response start / end time as like "12:00" / "12:30"

  getStartPosFrom(e) {
    if (!e) return 0;
    let split = e.start.split(":");
    const mins = this.convertToMins(split);
    const pxPerMin = SLOT_CONFIG.heightPerThirtyMins / SLOT_CONFIG.nextSlot;
    return pxPerMin * mins;
  }

  getHeightFrom(e) {
    if (!e) return 0;
    const startMins = this.convertToMins(e.start.split(":"));
    const endMins = this.convertToMins(e.end.split(":"));
    const pxPerMin = SLOT_CONFIG.heightPerThirtyMins / SLOT_CONFIG.nextSlot;
    return pxPerMin * Math.abs(endMins - startMins);
  }

  convertToMins(arr) {
    const minsPerHour = 60;
    return parseInt(arr[0] * minsPerHour) + parseInt(arr[1]);
  }

  onClickAppointment = (event, e) => {
    event.stopPropagation();
    if (e.car.isRegistered === true) this.props.gotoAppointmentView1();
    else this.props.gotoAppointmentView2();
  };

  onClickOutside = e => {
    this.props.gotoNewAppointment();
  };

  render() {
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

    const styleEvent = event => {
      let heightOfEventItem = this.getHeightFrom(event);
      let startPosOfEventItem = this.getStartPosFrom(event);
      const backgroundColorOfEvent =
        event.internal === true
          ? COLOR_SCHEMA.blueBackground
          : COLOR_SCHEMA.greyBackground;
      const paddingTop = 16;
      return {
        transform: `translateY(${startPosOfEventItem + paddingTop}px)`,
        height: `${heightOfEventItem}px`,
        backgroundColor: `${backgroundColorOfEvent}`
      };
    };

    const styleHrLines = {
      marginBottom: `${SLOT_CONFIG.heightPerThirtyMins - 1}px`
    };

    const AppointmentsView = (
      <div className="appointment">
        <ul className="views" onClick={e => this.onClickOutside(e)}>
          {this.appointments().map((event, i) => (
            <div
              key={i}
              className="event-view"
              style={styleEvent(event)}
              onClick={e => this.onClickAppointment(e, event)}
            >
              <span>{event.subject}</span>
            </div>
          ))}
          {slots().map(i => (
            <li key={i} className="hr-line" style={styleHrLines}>
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    );

    return <div className="appointments">{AppointmentsView}</div>;
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gotoNewAppointment: () => dispatch(setPageID(PAGE_INDEX.NEW_APPOINTMENT)),
    gotoAppointmentView1: () => dispatch(setPageID(PAGE_INDEX.APPOINTMENT_1)),
    gotoAppointmentView2: () => dispatch(setPageID(PAGE_INDEX.APPOINTMENT_2_1))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
