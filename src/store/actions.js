import {
  ADD_TIME_SLOTS_SUCCESS,
  ADD_TIME_SLOTS_FAILURE,
  ADD_TIME_SLOTS_STARTED,
  PAGE_NAVIGATION
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
