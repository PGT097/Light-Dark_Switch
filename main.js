"use strict";
const body = document.querySelector("body");
const h2 = document.createElement("h2");
const button = document.createElement("button");
const paragraph = document.createElement("p");

body.append(h2);
body.append(button);
body.append(paragraph);
body.style.backgroundColor = "black";

h2.textContent = "Dark/Light Mode Switcher";
h2.style.color = "white";

button.style.background = "black";
button.style.width = "50px";
button.style.height = "50px";
button.textContent = "🌛";

paragraph.textContent = "Just press the button above to toggle!";
paragraph.style.color = "White";

button.addEventListener("click", () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    h2.style.color = "black";
    paragraph.style.color = "black";
    button.style.backgroundColor = "black";
  } else if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
    h2.style.color = "white";
    paragraph.style.color = "white";
    button.style.backgroundColor = "white";
  }
});
