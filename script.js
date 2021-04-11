let hello = document.getElementById("b1");
hello.addEventListener("click", display);

function display() {
let name = prompt("Hello there! What's your name?");
let para = document.createElement("p");
  para.textContent = "Thanks for popping by, " + name + "! I hope you'll find some of this interesting!"
  document.body.appendChild(para);
}