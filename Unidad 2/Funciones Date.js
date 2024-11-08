let now = new Date();
console.log( now );

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date2 = new Date("2017-01-26");
alert(date2);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

let date3 = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date3 ); // 1.01.2011, 02:03:04.567

/*
Access date components
There are methods to access the year, month and so on from the Date object:

getFullYear()
Get the year (4 digits)
getMonth()
Get the month, from 0 to 11.
getDate()
Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
Get the corresponding time components.

Additionally, we can get a day of week:

getDay()
Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.
All the methods above return the components relative to the local time zone.

There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".

If your local time zone is shifted relative to UTC, then the code below shows different hours:
*/

// current date
let date4 = new Date();

// the hour in your current time zone
alert( date4.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
alert( date4.getUTCHours() );

// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
alert( new Date().getTimezoneOffset() );

/*
Setting date components
The following methods allow to set date/time components:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

As we can see, some methods can set multiple components at once, for example setHours. The components that are not mentioned are not modified.

For instance:
*/
let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.

let date5 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date5); // ...is 1st Feb 2013!

let date6 = new Date(2016, 1, 28);
date.setDate(date6.getDate() + 2);

alert( date6 ); // 1 Mar 2016

let date7 = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date7 ); // shows the correct date

let date8 = new Date(2016, 0, 2); // 2 Jan 2016

date8.setDate(1); // set day 1 of month
alert( date8 );

date8.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date8 ); // 31 Dec 2015

let date9 = new Date();
alert(+date9); // the number of milliseconds, same as date.getTime()

let start1 = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end1 = new Date(); // end measuring time

alert( `The loop took ${end1 - start1} ms` );

let start2 = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end2 = Date.now(); // done

alert( `The loop took ${end2 - start2} ms` ); // subtract numbers, not dates

// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  // or
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }

  function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );
  