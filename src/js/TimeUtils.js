import moment from "moment";
import I18n from "./I18n.js";

class TimeUtils {

    static formatUnixSecondsAgo(unixSeconds) {

        // check if date is known
        if(unixSeconds > 0){
            return TimeUtils.getTimeAgoShortHand(moment.unix(unixSeconds).toDate());
        }

        return I18n.t("time.unknown");

    }

    static formatMessageTimestamp(unixMilliseconds) {

        // convert millis to moment date
        const date = moment.unix(unixMilliseconds / 1000);

        // check if message date is same as today
        const isSameDate = date.isSame(moment(), 'day');

        // short format for messages from today
        if(isSameDate){
            return date.format("hh:mm A");
        }

        // long format for all other messages
        return date.format("DD/MMM/YYYY hh:mm A");

    }

    static secondsToDateTimeString(unixSeconds) {
        const date = moment.unix(unixSeconds);
        return date.format("DD/MMM/YYYY hh:mm A");
    }

    static millisecondsToDateTimeString(unixMilliseconds) {
        const date = moment.unix(unixMilliseconds / 1000);
        return date.format("DD/MMM/YYYY hh:mm A");
    }

    static getTimeAgoShortHand(date) {

        // get duration between now and provided date
        const duration = moment.duration(moment().diff(date));

        // years
        const years = Math.floor(duration.asYears());
        if(years > 0){
            return I18n.t(years === 1 ? "time.yearAgo" : "time.yearsAgo", { count: years });
        }

        // months
        const months = Math.floor(duration.asMonths());
        if(months > 0){
            return I18n.t(months === 1 ? "time.monthAgo" : "time.monthsAgo", { count: months });
        }

        // weeks
        const weeks = Math.floor(duration.asWeeks());
        if(weeks > 0){
            return I18n.t(weeks === 1 ? "time.weekAgo" : "time.weeksAgo", { count: weeks });
        }

        // days
        const days = Math.floor(duration.asDays());
        if(days > 0){
            return I18n.t(days === 1 ? "time.dayAgo" : "time.daysAgo", { count: days });
        }

        // hours
        const hours = Math.floor(duration.asHours());
        if(hours > 0){
            return I18n.t(hours === 1 ? "time.hourAgo" : "time.hoursAgo", { count: hours });
        }

        // minutes
        const minutes = Math.floor(duration.asMinutes());
        if(minutes > 0){
            return I18n.t(minutes === 1 ? "time.minAgo" : "time.minsAgo", { count: minutes });
        }

        return I18n.t("time.now");

    };

}

export default TimeUtils;
