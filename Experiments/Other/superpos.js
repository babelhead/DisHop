let gallery = document.querySelector("#gallery");
let image = document.querySelector(".image");
let newDiv = document.createElement("image");
let newImage = document.createElement("img");
let i = Math.floor((Math.random())*43);

// why doesn't the newDiv stay and the next one comes on top? how to make them stay rather than be replaced on each new event?
image.addEventListener('mousemove', () => {
    let n = 1;
    let i = Math.floor((Math.random())*41 +1);
    newImage.src="media/"+i+".jpg";
    newDiv.append(newImage);
    gallery.append(newDiv);
    newDiv.zIndex="1"+n;
    n += 1;
   /* newImage.addEventListener('mousemove', () => {
        let i = Math.floor((Math.random())*43+1);
        newImage.src="media/"+i+".jpg";
        newDiv.append(newImage);
        gallery.append(newDiv);
    }) */
})

/*gallery.addEventListener('mouseout', () => {
    newImage.src="media/"+i+".jpg";
    newDiv.appendChild(newImage);
    gallery.appendChild(newDiv);
})

/* node = document.querySelector(".diapo")
for (let i=1; i<4; i++) {
  let img = new Image();
  img.src="favorite-"+i+".jpg";
  node.appendChild(img);
}

// gallery.addEventListener("click", addImage() {
   // gallery.appendChild(newDiv);
    // function randomImg(){
        // let img = Math.floor(Math.random) * 42 + 1;
        // newImage.src = "media/" + img + ".jpg";
      //  newDiv.appendChilds(newImage);
  //  }
// });
// img.src="media/2.jpg";


		/**
		* Affiche une image au hasard.
		* chemin chemin vers le r�pertoire des fichiers ex 'images/'
		* maxIndice indice de la plus grande image ex 20
		* extension extension de l'image ex '.jpg'
		* codeSupplementaire code qu'on peut rajouter dans le html de l'mage ex 'alt="mon image"
		* nbChiffres le nombre de chiffres du nom de l'image (typiquement 2 ou 3), si non
		*   precise on prendra 3
		*/

function imageAuHasard(chemin, maxIndice, extension ,codeSupplementaire, nbChiffres) {
	var indexImage = Math.floor((Math.random() * maxIndice ) + 1,5);
	var indexImageString = indexImage.toString();
	while ( indexImageString.length < nbChiffres )	{
		indexImageString = "0" + indexImageString ;
	}
	document.write('<img  src="' + chemin + indexImageString + extension + '"');
			document.write("\/>");
		}