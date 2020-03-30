import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { SLOT_CONFIG } from "../../constant";

class Appointments extends React.Component {
  appointments() {
    const { appointments } = this.props;
    if (!appointments) return [];
    return Object.keys(appointments).map(key => {
      return {
        start: appointments[key].event.start,
        end: appointments[key].event.end,
        subject: appointments[key].event.subject
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
      const paddingTop = 16;
      return {
        transform: `translateY(${startPosOfEventItem + paddingTop}px)`,
        height: `${heightOfEventItem}px`
      };
    };

    const styleSlots = {
      lineHeight: `${SLOT_CONFIG.heightPerThirtyMins}px`
    };

    const styleHrLines = {
      marginBottom: `${SLOT_CONFIG.heightPerThirtyMins - 1}px`
    };

    const AppointmentsView = (
      <div className="appointment">
        {/* <ul className="slots col-3" style={styleSlots}>
          {slots().map((slot, i) => (
            <li key={i}>{slot}</li>
          ))}
        </ul> */}
        <ul className="views">
          {this.appointments().map((event, i) => (
            <div key={i} className="event-view" style={styleEvent(event)}>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
