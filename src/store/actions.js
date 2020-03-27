import {
  ADD_TIME_SLOTS_SUCCESS,
  ADD_TIME_SLOTS_FAILURE,
  ADD_TIME_SLOTS_STARTED,
  PAGE_NAVIGATION,
  SAVE_DATE,
  SAVE_DATE_IN_FORMAT
} from "./types";
import axios from "axios";

export const getAvailableTimeSlots = () => {
  return dispatch => {
    dispatch(addTimeSlotStarted());

    axios
      .get(`http://localhost:3000/static/appendix-b.json`)
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
