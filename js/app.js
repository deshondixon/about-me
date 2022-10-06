'use strict';

function whatsName() {

  let username = prompt('What is your name?');
  alert('Hello ' + username + ' !');
  //console.log(username);

}
whatsName();

//--------------------------------------------------------
function aboutME(){

  let aboutME = prompt('Do you want to know about me?').toLowerCase();

  if (aboutME === 'yes' || aboutME === 'y') {
    alert('My favorite food is Spaghetti!');
  //console.log('My favorite food is Spaghetti!');
  } else if (aboutME === 'no' || aboutME === 'n') {
    alert('Wow that hurts.');
  //console.log('Wow that hurts.');
  } else {
    alert('Just answer Yes or a No');
  //console.log('Just answer Yes or a No');
  }
}
aboutME();
//----------------------------------------------------------------------------

function fanAnime(){

  let fanAnime = prompt('Do you think i am a fan of anime?').toLowerCase();

  if (fanAnime === 'yes' || fanAnime === 'y') {
    alert('Yes tokyo ghoul is my favorite!');
  //console.log('Yes tokyo ghoul is my favorite!');
  } else if (fanAnime === 'no' ||fanAnime === 'n') {
    alert('You would be wrong actually!');
  //console.log('You would be wrong actually!');
  } else {
    alert('Just answer Yes or a No');
  //console.log('Just answer Yes or a No');
  }
}
fanAnime();
//-----------------------------------------------------------------------------

function aboutTuesdays(){

  let aboutTuesdays = prompt('What about tuesday?').toLowerCase();

  if (aboutTuesdays === 'yes' || aboutTuesdays === 'y') {
    alert('Yeah I got all my mistakes out on Monday lol');
  //console.log('Yeah I got all my mistakes out on Monday lol');
  } else if (aboutTuesdays === 'no' || aboutTuesdays === 'n') {
    alert('Sorta right but me and tuesdays have no beef.');
  //console.log('Sorta right but me and tuesdays have no beef.');
  } else {
    alert('Just answer Yes or a No');
  //console.log('Just answer Yes or a No');
  }
}
aboutTuesdays();
//-------------------------------------------------------------------

function youSICK(){

  let youSICK = prompt('Are you sick of my questions?').toLowerCase();

  if (youSICK === 'yes' || youSICK === 'y') {
    alert('Well im sick of you too!');
  //console.log('Well im sick of you too!');
  } else if (youSICK === 'no' || youSICK === 'n') {
    alert('Awe thank you for being so kind and understanding :D');
  //console.log('Awe thank you for being so kind and understanding :D');
  } else {
    alert('I must have fried you brain.');
  //console.log('I must have fried you brain.');
  }
}
youSICK();

//-----------------------------------------------------------------------------------------

function enterSITE(){

  let enterSITE = prompt('Wanna enter the site?').toLowerCase();

  if (enterSITE === 'yes' || enterSITE === 'y') {
    alert('YAY! Thank for tolerating all my questioning!');
  //console.log('YAY! Thank for tolerating all my questioning!');
  } else if (enterSITE === 'no' || enterSITE === 'n') {
    alert('I can understand i have asked a lot of questions :(');
  //console.log('I can understand i have asked a lot of questions :(');
  } else {
    alert('Whatever I will let you in anyways >:(');
  //console.log('Whatever I will let you in anyways >:(');
  }
}
enterSITE();
