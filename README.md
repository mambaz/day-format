# day-format

Npm package to print a javascript date and time with custom format

## Installation

Installation is easiest through npm:

`npm install day-format --save`

## Usage

```js


var n = require('day-format');

// n.date({format:'Y-MM-DD h:i:s a l',date:'Tue Jan 20 2016 15:8:5'}); // 2016-12-19 01:00:00 AM Monday
// 'format' optional fields and 'date' optional fields
// Year: Y or YY or YYYY  : e.g., 2016 or 16
// Month: M or MM or MMM or MONTH : e.g., 1 or 01 or Jan or January
// Date: D or DD : e.g., 1 or 01
// L : Day name : e.g., Sunday, Monday, ...
// Hour: h or hh : e.g., 01 or 13
// Minutes: 'i' : e.g., 30
// Seconds: 's' : e.g., 30
// AM/PM: 'a' : e.g., PM
// Timestamp: 't' : e.g., 1482135842497

// 2016-12-19 04:24:2 PM
// 2016-12-19 04:24:2 PM Monday
// 16:24:2
// 04:24:2 PM
// 19-12-2016
// 1482135842493

// Test cases
// dateTest = [
//     {
//         format : 'Y-MM-DD H:i:s a l',
//         date : '2015-10-24'
//     },
//     {
//         format : 'Y-MM-D',
//         date : '2016-10-24T00:00:00.000Z'
//     },
//     {
//         format : 'Y-MM-D',
//         date : 'Mon April 23 2012'
//     },
//     {
//         format : 'Y-MM-D h:i:s a',
//         date : 'Tue Jan 20 2016 11:18:05 GMT+0800 (SGT)'
//     },
//     {
//         format : 'Y-MM-D h:i:s a l',
//         date : 'Tue Jan 20 2016 15:8:5'
//     },
//     {
//         format : 'Y-MM-D h:i:s',
//         date : 'test testfsdf sdfsgdf'
//     },
//     {
//         format : 'DD-MM-YYYYYY'
//     },
//     {
//         format : 'h:i:s a l',
//         date : '2015-10-24'
//     },
//     {
//         format : 'h:i:s a l',
//         date : ''
//     },
//     {

//     },
//     {
//         format : 't',
//         date : 'Tue Jan 20 2016 15:8:5'
//     }
// ];

// Response:
// ===========
// 
// 2015-10-24 08:00:00 AM Saturday
// 2016-10-24
// 2012-04-23
// 2016-01-20 11:18:05 AM
// 2016-01-20 03:08:05 PM Wednesday
// 2016-12-20 11:44:29
// Invalid Date Format
// 08:00:00 AM Saturday
// 11:44:29 AM Tuesday
// 2016-12-20 11:44:29 AM
// 1453273685000

```

