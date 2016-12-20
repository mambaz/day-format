var _ = require('lodash'),
    $ = require('./service');

/**
 * Get the date and time
 * @param   {String}        Date custom format
 * @returns {String}        return Date String
 */

module.exports.date = function (options) {

    var customDateFormat = options.format || null,
        d = ((!!options.date) && (options.date.constructor === String)) ? new Date(options.date) : new Date();

    d = ( isNaN(d) === false ) ? d : new Date();

    if (customDateFormat === undefined || _.isEmpty(customDateFormat)) {
        customDateFormat = 'Y-M-D H:I:S A'; // 2016-12-12 Monday 01:00:00 AM
    }

    var formatResponse = customDateFormat = (customDateFormat) ? customDateFormat.toUpperCase().trim() : null;

    if (customDateFormat) {

        customDateFormat = customDateFormat.split(/[^A-Za-z]/);

        var splChar = formatResponse.replace(/[A-Za-z]+/g, ''),
            monthName = false,
            response = [];

        customDateFormat.forEach (function(data) {

            var yIndices = $.getIndexes (data, 'Y'), // YEAR
                mIndices = $.getIndexes (data, 'M'), // MONTH
                dIndices = $.getIndexes (data, 'D'), // DATE
                dayIndices = $.getIndexes (data, 'L'), // DAY NAME
                hourIndices = $.getIndexes (data, 'H'), // HOUR
                minIndices = $.getIndexes (data, 'I'), // MINUTES
                secIndices = $.getIndexes (data, 'S'), // SECONDS
                meridiemIndices = $.getIndexes (data, 'A'), // AM/PM
                timestampIndices = $.getIndexes (data, 'T'); // TIMESTAMP
                
                if (!_.isEmpty(yIndices)) {
                    response[data] = $.mapYear(d, data, yIndices);
                } else if (data === 'MONTH' && monthName === false) {
                    response[data] = $.mapMonthName(d, data);
                    monthName = true;
                } else if (!_.isEmpty(mIndices) && !_.includes(customDateFormat, 'MONTH')) { 
                    response[data] = $.mapMonth(d, data, mIndices);
                } else if (!_.isEmpty(dIndices)) {
                    response[data] = $.mapDate(d, data, dIndices);
                } else if (!_.isEmpty(dayIndices)) {
                    response[data] = $.mapDay(d, data, dayIndices);
                } else if (!_.isEmpty(hourIndices) && data !== 'MONTH') {
                    response[data] = $.mapHour(d, data, hourIndices);
                } else if (!_.isEmpty(minIndices)) {
                    response[data] = $.mapMinutes(d, data, minIndices);
                } else if (!_.isEmpty(secIndices)) {
                    response[data] = $.mapSeconds(d, data, secIndices);
                } else if (!_.isEmpty(meridiemIndices)) {
                    response[data] = $.mapMeridiem(d, data, meridiemIndices);
                } else if (!_.isEmpty(timestampIndices) && data !== 'MONTH') {
                    response[data] = $.mapTimestamp(d, data, timestampIndices);
                }             

        });


        var result = $.finalResponseMapping (response, splChar);
        
    }
    return result;
}
