import { Appointment, CalendarDate, CalendarTime } from "../types";
import { dateTimeValidation, fetchDate } from "../utils";

export class Calendar {
  constructor(
    private calendarDates?: CalendarDate[],
    private calendarCurrentTime?: CalendarTime,
    private appointments?: Appointment[],
    private isDayRange?: boolean
  ) {
    const { calDate, calTime } = fetchDate();
    this.calendarDates = [calDate];
    this.calendarCurrentTime = calTime;
    this.appointments = [];
    this.isDayRange = true;
  }

  getDate() {
    return this.calendarDates;
  }

  getCurrentTime() {
    return this.calendarCurrentTime;
  }
  getAppointments() {
    return this.appointments;
  }
  getRange() {
    return this.isDayRange;
  }

  setAppointment(appointment: Appointment) {
    if (
      dateTimeValidation(appointment.date, appointment.time.begginingTime) ||
      dateTimeValidation(appointment.date, appointment.time.endTime)
    ) {
      throw new Error("Time or Date are not valid inputs for the appointment");
    }
    this.appointments.push(appointment);
  }
  setNewRange() {
    this.isDayRange = !this.isDayRange;
    ///const {calDate} = fetchDate()
    //this.isDayRange? this.calendarDates = [calDate] : this.calendarDates.push[]
  }
}
