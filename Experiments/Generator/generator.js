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