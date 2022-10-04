'use strict';

console.log('hi');

let booleanValue = true;

if (booleanValue) {
  console.log('if condition is true this will print in the console')

/* 

&& - is the 'logical and'
One false with an && and it will not run

|| - is the "logical or" (double pipe)
One true and it will run

! - 'logical not' often called 'bang'


*/

let trueValue = true;
let falseValue = false;

if (trueValue || falseValue) {
  console.log
}

let username = prompt('What is your name?');
  alert('Hello ' + username + ' !')
  //console.log(username);

let aboutME = prompt('Do you want to know about me?').toLowerCase();

if (aboutME === 'yes' || aboutME === 'y') {
  alert('My favorite food is Spaghetti!');
  //console.log('My favorite food is Spaghetti!');
} else if (aboutME === 'no' || 
aboutME === 'n') {
  alert('Wow that hurts.');
  //console.log('Wow that hurts.');
} else { 
  alert('Just answer Yes or a No');
  //console.log('Just answer Yes or a No');
}
//----------------------------------------------------------------------------

let fanAnime = prompt('Do you think i am a fan of anime?').toLowerCase();

if (fanAnime === 'yes' || fanAnime === 'y') {
  alert('Yes tokyo ghoul is my favorite!');
  //console.log('Yes tokyo ghoul is my favorite!');
} else if (fanAnime === 'no' || 
fanAnime === 'n') {
  alert('You would be wrong actually!');
  //console.log('You would be wrong actually!');
} else { 
  alert('Just answer Yes or a No');
  //console.log('Just answer Yes or a No');
}
//-----------------------------------------------------------------------------

let aboutTuesdays = prompt('What about tuesday?').toLowerCase();

if (aboutTuesdays === 'yes' || aboutTuesdays === 'y') {
  alert('Yeah I got all my mistakes out on Monday lol');
  //console.log('Yeah I got all my mistakes out on Monday lol');
} else if (aboutTuesdays === 'no' || 
aboutTuesdays === 'n') {
  alert('Sorta right but me and tuesdays have no beef.');
  //console.log('Sorta right but me and tuesdays have no beef.');
} else { 
  alert('Just answer Yes or a No');
  //console.log('Just answer Yes or a No');
}
//-------------------------------------------------------------------

let enterSITE = prompt('Wanna enter the site?').toLowerCase();

if (enterSITE === 'yes' || enterSITE === 'y') {
  alert('YAY! Thank for tolerating all my questioning!');
  //console.log('YAY! Thank for tolerating all my questioning!');
} else if (enterSITE === 'no' || 
enterSITE === 'n') {
  alert('I can understand i have asked a lot of questions :(');
  //console.log('I can understand i have asked a lot of questions :(');
} else { 
  alert('Whatever I will let you in anyways >:(');
  //console.log('Whatever I will let you in anyways >:(');
}
}
