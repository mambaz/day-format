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
exports.mapYear = function (date, data, indexes) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;

    if (r === true && indexesLength > 0) {

        var d = new Date(date),
            y = d.getFullYear();

        if (indexesLength === 2) {
            y = y.toString().substr(2,2);
        }

        return y;

    } else {
        return '';
    }
}

//Return formatted month if date exist
exports.mapMonth = function (date, data, indexes) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false,
        result = '';

    if (r === true && indexesLength > 0 && indexesLength < 4) { // M, MM, MMM

        var d = new Date(date),
            m = d.getMonth() + 1;

        if (indexesLength === 1) {

            result = m;

        } else if (indexesLength === 3) {

            result = month_name(new Date(date)).substr(0, 3);

        } else {

            m = (m.toString().length < 2) ? ('0' + m) : m;
            result = m;

        }

        return result;

    } else {

        return '';
    }

}

//Return formatted month if date exist
exports.mapMonthName = function (date, data) {

    if ( data === "MONTH" ) { //MONTH
        return month_name(new Date(date));
    } else {

        return '';
    }

}

//Return formatted date if date format exist
exports.mapDate = function (date, data, indexes) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if (r === true && indexesLength > 0 && indexesLength < 3) { // D, DD

        var d = new Date(date),
            day = d.getDate();

        if (indexesLength === 1) {

            return day;

        } else {

            day = (day.toString().length < 2) ? ('0' + day) : day;
            return day;
        }

    } else {
        return '';
    }

}

//Return formatted Day (Sunday to Saturday) if date exist
exports.mapDay = function (date, data, indexes) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "L" && r === true && indexesLength > 0 && indexesLength < 2) { //DAY

        return day_name(new Date(date));

    } else {

        return '';
    }

}

//Return formatted hours if date exist
exports.mapHour = function (date, data, indexes) {

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

            return hours;

        } else {

           return hours;

        }

    } else {

        return '';
    }

}

//Return formatted minutes if date exist
exports.mapMinutes = function (date, data, indexes) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "I" && r === true && indexesLength === 1) { //minutes

        var minutes = date.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;

        return minutes;

    } else {

        return '';
    }

}

//Return seconds if date format exist
exports.mapSeconds = function (date, data, indexes) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "S" && r === true && indexesLength === 1) { //DAY

        var seconds = date.getSeconds();
        seconds = (seconds.toString().length < 2) ? ('0' + seconds) : seconds;

        return seconds;

    } else {

        return '';
    }

}

//Return AM/PM
exports.mapMeridiem = function (date, data, indexes) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "A" && r === true && indexesLength === 1) { //DAY

        var hours = date.getHours(),
            ampm = hours >= 12 ? 'PM' : 'AM';

        return ampm;

    } else {

        return '';
    }

}

// Return Timestamp
exports.mapTimestamp = function (date, data, indexes) {

    var date = getDate(date),
        indexesLength = indexes.length,
        compareData = (indexesLength > 1) ? _.range(_.head(indexes), _.last(indexes)+1) : indexes;
        r = (JSON.stringify(indexes) === JSON.stringify(compareData) ) ? true : false;


    if ( data === "T" && r === true && indexesLength === 1) { //TIME

        var n = date.getTime();

        return n;

    } else {

        return '';
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

exports.finalResponseMapping = function (data, specialChar) {
    var result = '',
        i = 0;

    for (var prop in data) {

        var splChar = specialChar[i] || ' ';
        result = result + data[prop] + splChar;
        i = i+1;

    }
    return result.trim();
}

