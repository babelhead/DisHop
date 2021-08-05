const text = document.querySelector(".text");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "<span>";
}
let char = 0;
let timer = setInterval(onTick, 5);
function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
} 

function complete(){
    clearInterval(timer);
    timer = null;
   
    var node = document.createElement("p");
    var textnode1 = document.createTextNode("The method’s possible uses remain very limited with this unwanted side effect. Then on another try today I realize that in fact the splitting method itself doesn’t remove the spaces like I thought, and if I change the display mode of the span from inline-block to inline, then the spaces do remain in place. Except that this removes the slide up effect (as you see here…), which the default inline span cannot handle. I have no idea why the display method would affect the spaces, if they are accounted for like any other character in the split array. But I guess this is where you really need to understand the ins and outs of each option and property, to understand the implications and potential side effects, incompatibilities, etc. It’s not necessarily straightforward to integrate this method into an existing div structure, for instance, with its formatting and all – like this page, again because the existing formatting might be in conflict with the format needed for the method. Or here, for instance, I wanted to include a hyperlink in the first line of the paragraph, but since the method involves taking the content of the paragraph, breaking it down to characters and then displaying the paragraph adding one character a time and deleting the original paragraph to avoid duplication, the hyperlink disappears in the process – it’s not part of the content, since it’s included in a href tag, so it won’t appear in the array of characters to display, and the original text will have disappeared. The only solution therefore seems to either include the link as text – which means it won’t be clickable, but at least copy-pasteable – or to include it outside the animated paragraph. (This is what I ended up doing, as you can see.) Another thing with this method is that it will also remove any additional formatting inside the animated content (< span>, < i>, < b>, etc.) so I couldn’t mark the mark-up language terms with a different font, for instance.");         // Create a text node
    var textnode2 = document.createTextNode("Also, it seems to slow down the page a lot, the background image takes ages to load, and now that I added a paragraph before this one in the same article, the animation seems to have slowed down too, even though I actually speeded it up in the script. (Now I've reduced the size of the background image and it seems to load fine again, and the animation goes with a good speed too.)");
    node.appendChild(textnode1);                              // Append the text to <li>
    document.getElementById("week29").appendChild(node);
}