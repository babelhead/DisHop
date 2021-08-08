
const launch = document.getElementById("launchAnim").onmouseover = function(){launchAnim()};
/* adding a simple mouseover makes that the animation relaunches on each hover over..
it gives an interesting effect as the animation relaunches on different points in the text, so it becomes not linear. 
But now the question id how to limit this to just one action without requiring a click...*/

function launchAnim(){
    const text = document.querySelector(".text");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";
    
    for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "<span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 25);
    function onTick(){
        const span = text.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if(char === splitText.length * 2){
        complete();
        return;
        }
    } 

    function complete(){
        clearInterval(timer);
        timer = null;
    }
}

