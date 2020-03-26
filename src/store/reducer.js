import {
  ADD_TIME_SLOTS_STARTED,
  ADD_TIME_SLOTS_SUCCESS,
  ADD_TIME_SLOTS_FAILURE,
  PAGE_NAVIGATION,
  SAVE_DATE
} from "./types";

const initialState = {
  loading: false,
  error: null,
  timeSlots: [],
  pageID: 0,
  selectedDate: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
