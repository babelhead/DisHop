let ajouter = document.querySelector("#b1")//getElementById("b1");
            ajouter.addEventListener('click', ajout);
            function ajout() {
                let para = document.createElement('p');
                para.textContent = genereTexte(); 
                /*function genereTexte() {
                let verbes = ["Frotte", "Détends", "Épluche", "Caresse", "Déplie", "Découpe", "Raffine", "Lave", "Branche", "Touche", "Gratte"];
                let objets = ["la carotte", "le chocolat", "les narines", "les mots d'amour", "les haricots", "la patate", "l'oignon", "la culotte", "la bouteille", "l'oreiller", "la grappe"];
                let verbe = Math.round(Math.random() * 10);
                let objet = Math.round(Math.random() * 10);
                return(verbes[verbe] + "-moi " + objets[objet]);
                } */
                document.body.appendChild(para);
            }
            
  function genereTexte() {
  let verbes = ["frotte", "détends", "épluche", "caresse", "déplie", "découpe", "raffine", "lave", "branche", "touche", "démonte", "gratte", "raccords", "montre", "glisse"];
  let objects = ["la carotte", "le chocolat", "les narines", "les mots d'amour", "les haricots", "la patate", "l'oignon", "la culotte", "la bouteille", "l'oreiller", "le caillou", "le goutte de lait", "les poils"];
  let verbe = Math.round(Math.random() * 15);
  let object = Math.round(Math.random() * 13);
  return(verbes[verbe] + "-moi " + objects[object]);
  }

  /* need to add a function/formatting to limit the lines to the screen size, 
or make the page scroll down automatically when new lines appear, leaving the button visible on top --> */
