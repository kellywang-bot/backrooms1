let flameExtinguish = false;
    
const flames = [
        "flame1",
        "flame2",
        "flame3",
        "flame4",
        "flame5",
        "flame6"
    ];

function randomFlame(id) {
    const flame = document.getElementById(id);

    const X = window.innerWidth;
    const Y = window.innerHeight;

    const randomX = Math.floor(Math.random() *  X);
    const randomY = Math.floor(Math.random() * Y);

    flame.style.position = "absolute";
    flame.style.left = randomX + "px";
    flame.style.top = randomY + "px";

    console.log(id, randomX, randomY);
};

randomFlame ("flame1");
randomFlame ("flame2");
randomFlame ("flame3");
randomFlame ("flame4");
randomFlame ("flame5");
randomFlame ( "flame6");




function extinguish(id){
    const flame = document.getElementById(id);
    flame.style.opacity = .33;
    flame.style.height = "0%";
    flame.style.transition = "all 2s";
}


function extinguishID(id) {
    const flame = document.getElementById(id);
    flame.addEventListener("mouseenter", () => extinguish(id));
}

extinguishID ("flame1");
extinguishID ("flame2");
extinguishID ("flame3");
extinguishID ("flame4");
extinguishID ("flame5");
extinguishID ("flame6");


document.getElementById("flame").addEventListener("mouseout", function() {
    if (flameDoc.style.height > '0%'){
            document.getElementById("flame").style.opacity = 1;
            document.getElementById("flame").style.height = "10%";
    }

});
        
