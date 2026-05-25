console.log("SHAKUMBA 2.0 SYSTEM ONLINE");


// EXPLORE BUTTON

const button = document.querySelector("#exploreBtn");

button.addEventListener("click", function () {

    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });

});



// HERO TITLE TYPING EFFECT

const heroTitle = document.querySelector("#heroTitle");

const text = "Welcome to Onwabile Ngxabazi Portfolio";
let index = 0;

function typeEffect() {

    if (index < text.length) {

        heroTitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 70);

    }

}

typeEffect();

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

});