// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });


function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/artmellopez/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/jan-artmel-lopez-47b190232/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/Janartmel", "_blank");
    }
    if (x == 4) {
        window.open("https://www.facebook.com/janartmellopez/", "_blank");
    }
}