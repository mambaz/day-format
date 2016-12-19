# day-format

Npm package to print a javascript date and time with custom format

## Installation

Installation is easiest through npm:

`npm install day-format --save`

## Usage

```js


var n = require('day-format');

// n.date('Y-MM-DD h:i:s a l'); // 2016-12-19 01:00:00 AM Monday
// Format Fields
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


```

