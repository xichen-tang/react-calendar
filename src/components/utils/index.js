import moment from "moment";
import { isMobile } from "react-device-detect";
import { MODAL_WIDTH, WIDTH_PERCENTAGE } from "../constant";

import {
  DANISH_MONTHS as months,
  DANISH_WEEKS as weeks,
  DAYS_COUNT_IN_WEEK as dayCount,
  DATE_FORMAT,
} from "../constant";

export const formatDate = (year, month, week, day) => {
  if (week > 0) return `${weeks[week - 1]} ${day}. ${months[month]} ${year}`;
  return `${weeks[6]} ${day}. ${months[month]} ${year}`;
};

export const DAYS_LIST_IN_WEEK = [1, 2, 3, 4, 5, 6, 7];

export const dayIDsInWeek = () => {
  let idArr = [];
  for (let i = 1; i <= dayCount; i++) idArr.push(i);
  return idArr;
};

export const getCurDate = () => {
  return {
    year: moment().year(),
    month: moment().month(),
    week: moment().day(),
    day: moment().date(),
    weekNo: moment().isoWeek(),
  };
};

export const initCurDate = () => {
  return moment().format(DATE_FORMAT);
};

export const getResponsiveWidth = () => {
  return isMobile
    ? window.screen.width * WIDTH_PERCENTAGE
    : MODAL_WIDTH * WIDTH_PERCENTAGE;
};
