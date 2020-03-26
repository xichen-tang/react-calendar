import React, { useState } from "react";
import Calendar from "./components/main";
import Modal from "react-modal";
import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";

Modal.setAppElement("#modal");

const customStyles = {
  content: {
    width: "375px",
    height: "667px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function App() {
  const [calendarIsOpen, setIsOpen] = useState(false);

  function openCalendar() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const MobileCalendarView = (
    <MobileView>{calendarIsOpen && <Calendar />}</MobileView>
  );

  const BrowseCalendarView = (
    <BrowserView>
      <Modal
        isOpen={calendarIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Calendar"
      >
        <Calendar />
      </Modal>
    </BrowserView>
  );

  return (
    <>
      <button className="open-calendar" onClick={openCalendar}>
        Open Calendar
      </button>
      {BrowseCalendarView}
      {MobileCalendarView}
    </>
  );
}

export default App;
