"use strict";
let logo = document.querySelector(".logo");
let active = document.querySelectorAll(".active");
let dropList = document.querySelector("#dropdown");
let icon = document.querySelector("#icon");
let div = document.querySelector("#colorDiv")
 
active.forEach((active) => {
   let letters = word.textContent.split("");
   word.textContent = "";
   letters.forEach((letter) => {
	let span = document.createElement("span");
	span.textContent = letter;
	span.className = "letter";
	active.append(span);
   });
});