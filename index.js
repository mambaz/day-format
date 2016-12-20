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
                

                formatResponse = (!_.isEmpty(yIndices)) ? $.mapYear(d, data, yIndices, formatResponse) : formatResponse;            

                formatResponse = (!_.isEmpty(mIndices)) ? $.mapMonth(d, data, mIndices, formatResponse) : formatResponse;            

                formatResponse = (!_.isEmpty(dIndices)) ? $.mapDate(d, data, dIndices, formatResponse) : formatResponse;            

                formatResponse = (!_.isEmpty(dayIndices)) ? $.mapDay(d, data, dayIndices, formatResponse) : formatResponse;            

                formatResponse = (!_.isEmpty(hourIndices)) ? $.mapHour(d, data, hourIndices, formatResponse) : formatResponse;            

                formatResponse = (!_.isEmpty(minIndices)) ? $.mapMinutes(d, data, minIndices, formatResponse) : formatResponse;            

                formatResponse = (!_.isEmpty(secIndices)) ? $.mapSeconds(d, data, secIndices, formatResponse) : formatResponse;            

                formatResponse = (!_.isEmpty(meridiemIndices)) ? $.mapMeridiem(d, data, meridiemIndices, formatResponse) : formatResponse;            

                formatResponse = (!_.isEmpty(timestampIndices)) ? $.mapTimestamp(d, data, timestampIndices, formatResponse) : formatResponse;
            

        });
        
    }
    return formatResponse;
}
