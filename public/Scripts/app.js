/**********************************/
/*        Java Script File        */
/*      Bhavna Pulliahgari        */
/*          300931671             */
/*       16th February, 2019      */
/**********************************/

"use strict";

//IIFE
(function() {
  let mylocalVar = 0;
  function Start() {
    console.log(`App started...${mylocalVar}`);
  }

  window.addEventListener("load", Start);
})();
