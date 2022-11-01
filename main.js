"use strict";
const body = document.querySelector("body");
const h2 = document.createElement("h2");
const paragraph = document.createElement("p");
const img = document.createElement("img");

body.append(h2);
body.append(img);
body.append(paragraph);

body.style.backgroundColor = "black";

h2.textContent = "Dark/Light Mode Switcher";
h2.style.color = "white";
img.src = "https://cdn-icons-png.flaticon.com/512/180/180700.png";
img.style.filter = "invert(1)";
img.style.width = "50px";
img.style.height = "50px";

paragraph.textContent = "Just press the button above to toggle!";
paragraph.style.color = "White";

img.addEventListener("click", () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    h2.style.color = "black";
    paragraph.style.color = "black";
    img.style.filter = "invert(0)";
  } else if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
    h2.style.color = "white";
    paragraph.style.color = "white";
    img.style.filter = "invert(1)";
  }
});
