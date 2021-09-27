var modal = document.getElementById("myModal");
var frame = document.getElementById("frame");
var text1 = document.getElementsByClassName("text1");
var close = document.getElementById("close");
var img01 = document.getElementById("img01-title");
var img02 = document.getElementById("img02-title");
var img03 = document.getElementById("img03-title");
var img04 = document.getElementById("img04-title");
var img05 = document.getElementById("img05-title");
var img06 = document.getElementById("img06-title");
var img07 = document.getElementById("img07-title");
var img08 = document.getElementById("img08-title");
var img09 = document.getElementById("img09-title");
var img10 = document.getElementById("img10-title");

img01.onclick = function () {
  modal.style.display = "block";
  frame.src = "image01.html";
};
img02.onclick = function () {
  modal.style.display = "block";
  frame.src = "image02.html";
};
img03.onclick = function () {
  modal.style.display = "block";
  frame.src = "image03.html";
};
img04.onclick = function () {
  modal.style.display = "block";
  frame.src = "image04.html";
};
img05.onclick = function () {
  modal.style.display = "block";
  frame.src = "image05.html";
};
img06.onclick = function () {
  modal.style.display = "block";
  frame.src = "image06.html";
};
img07.onclick = function () {
  modal.style.display = "block";
  frame.src = "image07.html";
};
img08.onclick = function () {
  modal.style.display = "block";
  frame.src = "image08.html";
};
img09.onclick = function () {
  modal.style.display = "block";
  frame.src = "image09.html";
};
img10.onclick = function () {
  modal.style.display = "block";
  frame.src = "image10.html";
};

modal.onclick = function () {
  modal.style.display = "none";
};

close.onclick = function () {
  modal.style.display = "none";
};