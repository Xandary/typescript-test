"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var utils_1 = require("../utils");
var Calendar = /** @class */ (function () {
    function Calendar(calendarDates, calendarCurrentTime, appointments, isDayRange) {
        this.calendarDates = calendarDates;
        this.calendarCurrentTime = calendarCurrentTime;
        this.appointments = appointments;
        this.isDayRange = isDayRange;
        var _a = utils_1.fetchDate(), calDate = _a.calDate, calTime = _a.calTime;
        this.calendarDates = [calDate];
        this.calendarCurrentTime = calTime;
        this.appointments = [];
        this.isDayRange = true;
    }
    Calendar.prototype.getDate = function () {
        return this.calendarDates;
    };
    Calendar.prototype.getCurrentTime = function () {
        return this.calendarCurrentTime;
    };
    Calendar.prototype.getAppointments = function () {
        return this.appointments;
    };
    Calendar.prototype.getRange = function () {
        return this.isDayRange;
    };
    Calendar.prototype.setAppointment = function (appointment) {
        if (utils_1.dateTimeValidation(appointment.date, appointment.time.begginingTime) ||
            utils_1.dateTimeValidation(appointment.date, appointment.time.endTime)) {
            throw new Error("Time or Date are not valid inputs for the appointment");
        }
        this.appointments.push(appointment);
    };
    Calendar.prototype.setNewRange = function () {
        this.isDayRange = !this.isDayRange;
        ///const {calDate} = fetchDate()
        //this.isDayRange? this.calendarDates = [calDate] : this.calendarDates.push[]
    };
    return Calendar;
}());
exports.Calendar = Calendar;
