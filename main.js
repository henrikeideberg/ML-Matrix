/*  Matrix calculations in javascript
 *  Henrik Eideberg
 */
"use strict";

function helloWorld() {
  console.log("Hello World");
}

function matrixAddSubScMultiDiv() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    }
  }
}

function defineMatrix() {
  onAccordionButtonClick();
  var a = math.matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);
  console.log(a);
}

function onAccordionButtonClick() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    }
  }
}