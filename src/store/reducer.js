import {
  ADD_APPOINTMENT_STARTED,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_FAILURE,
  ADD_TIME_SLOTS_STARTED,
  ADD_TIME_SLOTS_SUCCESS,
  ADD_TIME_SLOTS_FAILURE,
  PAGE_NAVIGATION,
  SAVE_DATE,
  SAVE_DATE_IN_FORMAT,
  SET_FLOW_MODE
} from "./types";
import { FLOW_MODES } from "../components/constant";
import { initCurDate, initCurDateFormat } from "../components/utils";

const initialState = {
  mode: FLOW_MODES.initial,
  loading: false,
  error: null,
  appointments: [],
  timeSlots: [],
  pageID: 0,
  selectedDate: initCurDate(),
  dateInFormat: initCurDateFormat()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLOW_MODE:
      return {
        ...state,
        mode: action.payload
      };
    case PAGE_NAVIGATION:
      return {
        ...state,
        pageID: action.payload
      };
    case SAVE_DATE:
      return {
        ...state,
        selectedDate: action.payload
      };
    case SAVE_DATE_IN_FORMAT:
      return {
        ...state,
        dateInFormat: action.payload
      };
    case ADD_TIME_SLOTS_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_TIME_SLOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        timeSlots: action.payload
      };

    case ADD_TIME_SLOTS_FAILURE:
      return {
        ...state,
        error: action.payload.err
      };
    case ADD_APPOINTMENT_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        appointments: action.payload
      };

    case ADD_APPOINTMENT_FAILURE:
      return {
        ...state,
        error: action.payload.err
      };
    default:
      return state;
  }
};

export default reducer;
