var _ = require('lodash');


/**
 * [getDate Get current date and time]
 * @param  {[Date]} date [description]
 * @return {[Date]}      [description]
 */
function getDate (date) {

    if (date === undefined || !_.isDate(date)) {
        date = new Date();
    }

    
    return date;
}

//Find Char position and return all indexes (array)
exports.getIndexes = function (str, char) {

    var indices = [];
    for(var i=0; i<str.length;i++) {
        if (str[i] === char) indices.push(i);
    }
    return indices;
}

//Return formatted year if date exist
exports.mapYear = function (date, data, indexes, format) {

    var date = getDate(date),
        result,
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;

    if (r === true && indexesLength > 0 && indexesLength < 5) {

        var d = new Date(date),
            y = d.getFullYear();

        if (indexesLength === 2) {
            y = y.toString().substr(2,2);
        }

        result = format.replace(data, y);
        return result;

    } else {
        return 'Invalid Date Format';
    }
}

//Return formatted month if date exist
exports.mapMonth = function (date, data, indexes, format) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;

    if ( data === "MONTH" ) { //MONTH
        return format.replace(data, month_name(new Date(date)));
    }

    if (r === true && indexesLength > 0 && indexesLength < 4) { // M, MM, MMM

        var d = new Date(date),
            m = d.getMonth() + 1;

        if (indexesLength === 1) {

            return format.replace(data, m);

        } else if (indexesLength === 3) {

            return format.replace(data, month_name(new Date(date)).substr(0, 3));

        } else {

            m = (m.toString().length < 2) ? ('0' + m) : m;
            return format.replace(data, m);

        }

    } else {

        return 'Invalid Date Format';
    }

}

//Return formatted date if date format exist
exports.mapDate = function (date, data, indexes, format) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if (r === true && indexesLength > 0 && indexesLength < 3) { // D, DD

        var d = new Date(date),
            day = d.getDate();

        if (indexesLength === 1) {

            return format.replace(data, day);

        } else {

            day = (day.toString().length < 2) ? ('0' + day) : day;
            return format.replace(data, day);
        }

    } else {
        return 'Invalid Date Format';
    }

}

//Return formatted Day (Sunday to Saturday) if date exist
exports.mapDay = function (date, data, indexes, format) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "L" && r === true && indexesLength > 0 && indexesLength < 2) { //DAY

        return format.replace(data, day_name(new Date(date)));

    } else {

        return 'Invalid Date Format';
    }

}

//Return formatted hours if date exist
exports.mapHour = function (date, data, indexes, format) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( (data === "H") || (r === true && indexesLength > 0 && indexesLength < 3)) { //HOUR

        var hours = date.getHours();

        if (indexesLength === 1) {

            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            hours = hours < 10 ? '0'+hours : hours;

            return format.replace(data, hours);

        } else {

           return format.replace(data, hours);

        }

    } else {

        return 'Invalid Date Format';
    }

}

//Return formatted minutes if date exist
exports.mapMinutes = function (date, data, indexes, format) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "I" && r === true && indexesLength === 1) { //minutes

        var minutes = date.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;

        return format.replace(data, minutes);

    } else {

        return 'Invalid Date Format';
    }

}

//Return seconds if date format exist
exports.mapSeconds = function (date, data, indexes, format) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "S" && r === true && indexesLength === 1) { //DAY

        var seconds = date.getSeconds();
        seconds = (seconds.toString().length < 2) ? ('0' + seconds) : seconds;

        return format.replace(data, seconds);

    } else {

        return 'Invalid Date Format';
    }

}

//Return AM/PM
exports.mapMeridiem = function (date, data, indexes, format) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "A" && r === true && indexesLength === 1) { //DAY

        var hours = date.getHours(),
            ampm = hours >= 12 ? 'PM' : 'AM';

        return format.replace(data, ampm);

    } else {

        return 'Invalid Date Format';
    }

}

// Return Timestamp
exports.mapTimestamp = function (date, data, indexes, format) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "T" && r === true && indexesLength === 1) { //TIME

        var n = date.getTime();

        return format.replace(data, n);

    } else {

        return 'Invalid Date Format';
    }

}


var day_name = function (dt) {  
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[dt.getDay()];
}

var month_name = function (dt) {  
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];  
    return mlist[dt.getMonth()];
}
