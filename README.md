# day-format

Npm package to print a javascript date and time with custom format

## Installation

Installation is easiest through npm:

`npm install day-format --save`

## Usage

```js


var n = require('day-format');

// all option fields are case-insensitive
// ======================================
// n.date({format:'Y-MM-DD h:i:s a',date:'Tue Jan 20 2016 15:8:5'}); // 2016-01-20 11:18:05 AM
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


// ##### DATE FORMAT #####
// {}
// 2016-12-20 05:53:08 PM

// { format: 'DD-MM-YYYY' }
// 20-12-2016

// { format: 'DD-MM-YYYY h:i:s a l t' }
// 20-12-2016 05:53:08 PM Tuesday 1482227588877

// { format: 'Y-MM-DD H:i:s a l', date: '2015-10-24' }
// 2015-10-24 08:00:00 AM Saturday

// { format: 'Y-month-DD H:i:s a l', date: '2015-10-24' }
// 2015-October-24 08:00:00 AM Saturday

// { format: 'Y-mmm-DD H:i:s a l', date: '2015-10-24' }
// 2015-Oct-24 08:00:00 AM Saturday

// { format: 'Y-MM-D', date: '2016-10-24T00:00:00.000Z' }
// 2016-10-24

// { format: 'Y-MM-D', date: 'Mon April 23 2012' }
// 2012-04-23

// { format: 'Y-MM-D h:i:s a',
//   date: 'Tue Jan 20 2016 11:18:05 GMT+0800 (SGT)' }
// 2016-01-20 11:18:05 AM

// { format: 'Y-MM-D h:i:s a l', date: 'Tue Jan 20 2016 15:8:5' }
// 2016-01-20 03:08:05 PM Wednesday

// { format: 'Y-MM-D h:i:s', date: 'test testfsdf sdfsgdf' }
// 2016-12-20 05:53:08

// { format: 'DD-MM-YYYYYY' }
// 20-12-2016

// { format: 'h:i:s a l', date: '2015-10-24' }
// 08:00:00 AM Saturday

// { format: 'h:i:s a l', date: '' }
// 05:53:08 PM Tuesday

// { format: 't', date: 'Tue Jan 20 2016 15:8:5' }
// 1453273685000

// { format: 'dfsdfdsfsdf', date: 'fdsgfhsdgf' }
//   (empty)

// { test: 'dfsdfdsfsdf', testts: 'fdsgfhsdgf' }
// 2016-12-20 05:53:08 PM

```

