import { CalendarDate, CalendarTime } from "./types";

export function fetchDate(): { calDate: CalendarDate; calTime: CalendarTime } {
  const date = new Date();
  const cTime: CalendarTime = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  const cDate: CalendarDate = {
    day: date.getDay() + 1,
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
  return { calDate: cDate, calTime: cTime };
}

export function dateTimeValidation(
  calDate?: CalendarDate,
  calTime?: CalendarTime
) {
  if (
    calDate.day < 1 ||
    calDate.month < 1 ||
    calDate.month > 12 ||
    calDate.year < 2022
  ) {
    if (
      (calDate.month == 1 ||
        calDate.month == 3 ||
        calDate.month == 5 ||
        calDate.month == 7 ||
        calDate.month == 8 ||
        calDate.month == 10 ||
        calDate.month == 12) &&
      calDate.day > 31
    ) {
      return false;
    } else {
      if (
        (calDate.month == 4 ||
          calDate.month == 6 ||
          calDate.month == 9 ||
          calDate.month == 7 ||
          calDate.month == 9 ||
          calDate.month == 11) &&
        calDate.day > 30
      ) {
        return false;
      } else {
        if (calDate.day > 28) return false;
      }
    }
  }
  if (
    calTime.hour < 0 ||
    calTime.hour > 24 ||
    calTime.minute < 0 ||
    calTime.minute > 60 ||
    calTime.second < 0 ||
    calTime.second > 60
  )
    return false;
  return true;
}
