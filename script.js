const container = document.querySelector("#container");
var currentPoke;
var imgName = document.createElement("p");

function showImage(src) {
    container.replaceChildren();
    var img = document.createElement("img");
    img.src = src;
    img.width = 300;
    img.height = 300;
    img.setAttribute("style", "margin-left: auto; margin-right: auto");
    container.appendChild(img);

    // var imgName = document.createElement("p");
    imgName.textContent = getImgName(src);
    imgName.setAttribute("style", "font-size: 22px; width: 200px; margin-left: auto; margin-right: auto;");
    // container.appendChild(imgName);
    currentPoke = imgName.textContent;
}

const reveal = document.querySelector("#reveal");
reveal.addEventListener("click", function () {
    container.appendChild(imgName);
});

function getImgName(src) {
    var imgName = src.slice(7);
    imgName = imgName.slice(0, imgName.length - 4);
    imgName = imgName.charAt(0).toUpperCase() + imgName.slice(1);
    return imgName;
}

function randomNum() {
    return Math.floor(Math.random() * allPoke.length);
}

let randNum;
const newPoke = document.querySelector("#newPoke");
newPoke.addEventListener("click", function () {
    if (allPoke.length == 0) {
        container.replaceChildren();
        var fillerImg = document.createElement("img");
        fillerImg.src = "images/pokeball.png";
        fillerImg.setAttribute("style", "width: 300px; height: 300px; margin-left: auto; margin-right: auto");
        container.appendChild(fillerImg);
    }
    else {
        randNum = randomNum();
        showImage(allPoke[randNum].value);
        allPoke.splice(randNum, 1);
    }
});

const submit = document.querySelector("#submit");
const answerContainer = document.querySelector("#answerContainer");
submit.addEventListener("click", function () {
    var guess = document.querySelector("#guess");
    if ((guess.value).toUpperCase() == currentPoke.toUpperCase()) {
        answerContainer.replaceChildren();
        var answer = document.createElement("p");
        answer.textContent = "Correct!"
        answer.setAttribute("style", "font-size: 22px;");
        answerContainer.appendChild(answer);
    }
    else {
        answerContainer.replaceChildren();
        var answer = document.createElement("p");
        answer.textContent = "Wrong!"
        answer.setAttribute("style", "font-size: 22px;");
        answerContainer.appendChild(answer);
    }
});


let poke1 = document.createElement("img");
poke1.value = "images/bulbasaur.png";

let poke2 = document.createElement("img");
poke2.value = "images/ivysaur.png";

let poke3 = document.createElement("img");
poke3.value = "images/venasaur.png";

let poke4 = document.createElement("img");
poke4.value = "images/charmander.png";

let poke5 = document.createElement("img");
poke5.value = "images/charmeleon.png";

let poke6 = document.createElement("img");
poke6.value = "images/charizard.png";

let poke7 = document.createElement("img");
poke7.value = "images/squirtle.png";

let poke8 = document.createElement("img");
poke8.value = "images/wartortle.png";

let poke9 = document.createElement("img");
poke9.value = "images/blastoise.png";



const allPoke = [poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8, poke9];