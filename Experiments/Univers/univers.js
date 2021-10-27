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
})
