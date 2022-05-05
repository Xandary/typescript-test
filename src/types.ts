//type definition

/*enum DayName {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}

enum MonthName {
  JANUARY = "January",
  FEBRUARY = "February",
  MARCH = "March",
  APRIL = "April",
  MAY = "May",
  JUNE = "June",
  JULY = "July",
  AUGUST = "August",
  SEPTEMBER = "September",
  OCTOBER = "October",
  NOVEMBER = "November",
  DECEMBER = "December",
}*/

export type CalendarDate = {
  day: number;
  //dayName: DayName;
  month: number;
  //monthName: MonthName;
  year: number;
};

export type CalendarTime = {
  hour: number;
  minute: number;
  second: number;
};

type Duration = {
  begginingTime: CalendarTime;
  endTime: CalendarTime;
};

export type Appointment = {
  title: string;
  description: string;
  date: CalendarDate;
  time: Duration;
};
