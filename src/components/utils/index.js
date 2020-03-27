import moment from "moment";

import {
  DANISH_MONTHS as months,
  DANISH_WEEKS as weeks,
  DAYS_COUNT_IN_WEEK as dayCount
} from "../constant";

export const formatDate = (year, month, week, day) => {
  return `${weeks[week - 1]} ${day}. ${months[month]} ${year}`;
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
    weekNo: moment().week()
  };
};

export const initCurDate = () => {
  return moment(new Date()).format("MM/DD/YYYY");
};

export const initCurDateFormat = () => {
  const dateInFormat = formatDate(
    getCurDate().year,
    getCurDate().month,
    getCurDate().week,
    getCurDate().day
  );
  return dateInFormat;
};
