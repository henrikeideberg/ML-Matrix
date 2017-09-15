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
  document.getElementById("defineMatrix").innerHTML = "value1<br>value2";
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