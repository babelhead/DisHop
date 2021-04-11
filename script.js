let hello = document.getElementById("b1");
hello.addEventListener("click", whatsYourName);
function whatsYourName() {
    prompt("Hello there! What's your name?");
}
let para = document.createElement("p");
para.textContent = "Thanks for popping by" + whatsYourName + "! I hope you'll find some of this interesting!"
document.body.appendChild(para); 
