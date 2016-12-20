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
        var monthName = false;
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
                    formatResponse = $.mapYear(d, data, yIndices, formatResponse);
                }

                if (data === 'MONTH' && monthName === false) {
                    formatResponse = $.mapMonthName(d, data, formatResponse);
                    monthName = true;
                }

                if (!_.isEmpty(mIndices) && !_.includes(customDateFormat, 'MONTH')) { 
                    formatResponse = $.mapMonth(d, data, mIndices, formatResponse);
                }

                if (!_.isEmpty(dIndices)) {
                    formatResponse = $.mapDate(d, data, dIndices, formatResponse);
                }

                if (!_.isEmpty(dayIndices)) {
                    formatResponse = $.mapDay(d, data, dayIndices, formatResponse);
                }

                if (!_.isEmpty(hourIndices) && data !== 'MONTH') {
                    formatResponse = $.mapHour(d, data, hourIndices, formatResponse);
                }

                if (!_.isEmpty(minIndices)) {
                    formatResponse = $.mapMinutes(d, data, minIndices, formatResponse);
                }

                if (!_.isEmpty(secIndices)) {
                    formatResponse = $.mapSeconds(d, data, secIndices, formatResponse);
                }

                if (!_.isEmpty(meridiemIndices)) {
                    formatResponse = $.mapMeridiem(d, data, meridiemIndices, formatResponse);
                }

                if (!_.isEmpty(timestampIndices) && data !== 'MONTH') {
                    formatResponse = $.mapTimestamp(d, data, timestampIndices, formatResponse);
                }
                

               
            

        });
        
    }
    return formatResponse;
}
