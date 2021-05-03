let hello = document.getElementById("b1");
hello.addEventListener("click", display);

function display() {
let name = prompt("Hello there! What's your name?");
let para = document.createElement("p");
  if(name === "" || name === " " ) {
  para.textContent = "OK, you might not want to tell me your name, but thanks anyway for popping by! I hope you'll find some of this interesting."
  document.body.appendChild(para);
  } else {
    para.textContent = "Thanks for popping by, " + name + "! I hope you'll find some of this interesting!"
    document.body.appendChild(para);
  }
}

function genereTexte() {
  let verbes = ["frotte", "détends", "épluche", "caresse", "déplie", "découpe", "raffine", "lave", "branche", "touche"];
  let objecs = ["la carotte", "le chocolat", "les narines", "les mots d'amour", "les haricots", "la patate", "l'oignon", "la culotte", "la bouteille", "l'oreiller"];
  let verbe = Math.round(Math.random() * 10);
  let objet = Math.round(Math.random() * 10);
  return(verbes[verbe] + "-moi " + objects[object]);
  }

function display() {
  let texte = genereTexte();
  let para = document.createElement("p");
  para.textContent = texte;
  document.body.appendChild(para);
  }