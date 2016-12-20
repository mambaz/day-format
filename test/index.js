'use strict';

var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    n = require('../index.js'),
    dateTest = [
        {},
        {
            format : 'DD-MM-YYYY' // Current Date
        },
        {
            format : 'DD-MM-YYYY h:i:s a l t' // Current Date
        },
        {
            format : 'Y-MM-DD H:i:s a l',
            date : '2015-10-24'
        },
        {
            format : 'Y-month-DD H:i:s a l',
            date : '2015-10-24'
        },
        {
            format : 'Y-mmm-DD H:i:s a l',
            date : '2015-10-24'
        },
        {
            format : 'Y-MM-D',
            date : '2016-10-24T00:00:00.000Z'
        },
        {
            format : 'Y-MM-D',
            date : 'Mon April 23 2012'
        },
        {
            format : 'Y-MM-D h:i:s a',
            date : 'Tue Jan 20 2016 11:18:05 GMT+0800 (SGT)'
        },
        {
            format : 'Y-MM-D h:i:s a l',
            date : 'Tue Jan 20 2016 15:8:5'
        },
        {
            format : 'Y-MM-D h:i:s',
            date : 'test testfsdf sdfsgdf'
        },
        {
            format : 'DD-MM-YYYYYY'
        },
        {
            format : 'h:i:s a l',
            date : '2015-10-24'
        },
        {
            format : 'h:i:s a l',
            date : ''
        },        
        {
            format : 't',
            date : 'Tue Jan 20 2016 15:8:5'
        },        
        {
            format : 'dfsdfdsfsdf',
            date : 'fdsgfhsdgf'
        },        
        {
            test : 'dfsdfdsfsdf',
            testts : 'fdsgfhsdgf'
        }
    ];

describe('##### DATE FORMAT #####', function() {

    it ('GET THE YEAR AND CUSTOM FORMAT', function () {

        dateTest.forEach (function (txt) {
            var result = n.date(txt);
            console.log(txt);
            console.log(result);
            expect(result).to.not.be.null;
        });
    });

});


