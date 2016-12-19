'use strict';

var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    n = require('../index.js'),
    years = [
        'Y',
        'YY',
        'YYYY',
        '',
        'Y-MM-DD H:i:s a l',
        'HH:i:s',
        'h:i:s a',
        'd-m-y',
        't'
    ],
    months = [
        'M',
        'MM',
        'MMM',
        'month'
    ],
    ymd = [
        'Y-M-D',
        'YY-MM-D',
        'YYYY-MMM-DD',
        'Y-month-DD'
    ],
    ymdDay = [
        'Y-M-D l',
        'YY-MM-D l',
        'YYYY-MMM-DD l',
        'Y-month-DD l'
    ],
    all = [
        'Y-M-D l h:i:s a t',
        'Y-M-D l hh:i:s a',
        'YY-MM-D l h:i:s a',
        'YYYY-MMM-DD l h:i:s a',
        'Y-month-DD l h:i:s a'
    ],
    monthYears = [
        'Y-M',
        'Y-MM',
        'Y-MMM',
        'Y-month',
        'YY-M',
        'YY-MM',
        'YY-MMM',
        'YY-month',
        'YYYY-M',
        'YYYY-MM',
        'YYYY-MMM',
        'YYYY-month'
    ];



describe('##### DATE FORMAT #####', function() {

    it ('GET THE YEAR AND CUSTOM FORMAT', function () {

        years.forEach (function (txt) {
            var result = n.date(txt);
            expect(result).to.not.be.null;
        });
    });

    it ('GET THE MONTH', function () {

        months.forEach (function (txt) {
            var result = n.date(txt);
            expect(result).to.not.be.null;
        });
    });

    it ('Get Year and Month', function () {

        monthYears.forEach (function (txt) {
            var result = n.date(txt);
            expect(result).to.not.be.null;
        });
    });

    it ('Get Year and Month and Date', function () {

        ymd.forEach (function (txt) {
            var result = n.date(txt);
            expect(result).to.not.be.null;
        });
    });

    it ('Get Year and Month and Date and Day', function () {

        ymdDay.forEach (function (txt) {
            var result = n.date(txt);
            expect(result).to.not.be.null;
        });
    });

    it ('Get all FORMAT', function () {

        all.forEach (function (txt) {
            var result = n.date(txt);
            expect(result).to.not.be.null;
        });
    });  

});
