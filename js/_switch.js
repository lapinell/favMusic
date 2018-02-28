"use strict";

let asc = document.getElementById("asc");
let desc = document.getElementById("desc");
let none = document.getElementById("none");
let vert = document.getElementById("vert");
let horz = document.getElementById("horz");

asc.addEventListener("change", function() {console.log('Asc selected');});
desc.addEventListener("change", function() {console.log('desc selected');});
none.addEventListener("change", function() {console.log('none selected');});
vert.addEventListener("change", function() {console.log('vert selected');});
horz.addEventListener("change", function() {console.log('horz selected');});

