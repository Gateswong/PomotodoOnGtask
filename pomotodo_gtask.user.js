// ==UserScript==
// @name                Pomotodo.com on Google Task
// @namespace	        http://
// @description	        Enable Pomoto.com on Google Task Page
// @include				https://mail.google.com/tasks/ig?*&pomotodo=1
// @include				https://mail.google.com/tasks/ig?pomotodo=1
// ==/UserScript==

// var gtaskFrame = document.getElementsByTagName("iFrame");
// gtaskFrame[0].height = '305';
// gtaskFrame[0].width = '100%';
// gtaskFrame[0].frameBorder = '0';
document.getElementsByTagName("body")[0].innerHTML = '';

var pomotodoContainer = document.createElement("div");
pomotodoContainer.style.zIndex = "99";
pomotodoContainer.setAttribute("width", "100%");
pomotodoContainer.setAttribute("height", "100%");
pomotodoContainer.style.Position = "absolute";

var pomotodoFrame = document.createElement("iFrame");
pomotodoFrame.id = "pomotodo";
pomotodoFrame.setAttribute("width", "100%");
pomotodoFrame.setAttribute("height", "100%");
pomotodoFrame.frameBorder = '0';
pomotodoFrame.style.Position = "absolute";
pomotodoFrame.src = "http://pomotodo.com";

var body = document.getElementsByTagName('body');
body[0].appendChild(pomotodoContainer);
pomotodoContainer.appendChild(pomotodoFrame);