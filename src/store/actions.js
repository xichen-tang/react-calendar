import {
  ADD_APPOINTMENT_STARTED,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_FAILURE,
  ADD_TIME_SLOTS_SUCCESS,
  ADD_TIME_SLOTS_FAILURE,
  ADD_TIME_SLOTS_STARTED,
  PAGE_NAVIGATION,
  SAVE_DATE,
  SAVE_DATE_IN_FORMAT
} from "./types";
import axios from "axios";

// should replace with ENVIRONMENT VARs
export const API_URL = "http://localhost:3000/static/";

export const getAvailableAppointments = () => {
  return dispatch => {
    dispatch(addAppointmentStarted());
    axios
      .get(`${API_URL}appendix-a.json`)
      .then(res => {
        dispatch(addAppointmentSuccess(res.data));
      })
      .catch(err => {
        dispatch(addAppointmentFailure(err.message));
      });
  };
};

export const getAvailableTimeSlots = () => {
  return dispatch => {
    dispatch(addTimeSlotStarted());
    axios
      .get(`${API_URL}appendix-b.json`)
      .then(res => {
        dispatch(addTimeSlotSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTimeSlotFailure(err.message));
      });
  };
};

export const setPageID = id => ({
  type: PAGE_NAVIGATION,
  payload: id
});

export const setDate = date => ({
  type: SAVE_DATE,
  payload: date
});

export const setDateInFormat = date => ({
  type: SAVE_DATE_IN_FORMAT,
  payload: date
});

export const addAppointmentStarted = () => ({
  type: ADD_APPOINTMENT_STARTED
});

export const addAppointmentSuccess = res => ({
  type: ADD_APPOINTMENT_SUCCESS,
  payload: {
    ...res
  }
});

export const addAppointmentFailure = err => ({
  type: ADD_APPOINTMENT_FAILURE,
  payload: {
    ...err
  }
});

export const addTimeSlotStarted = () => ({
  type: ADD_TIME_SLOTS_STARTED
});

export const addTimeSlotSuccess = res => ({
  type: ADD_TIME_SLOTS_SUCCESS,
  payload: {
    ...res
  }
});

export const addTimeSlotFailure = err => ({
  type: ADD_TIME_SLOTS_FAILURE,
  payload: {
    ...err
  }
});
