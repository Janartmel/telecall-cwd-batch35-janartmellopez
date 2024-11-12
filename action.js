// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });
links[4].addEventListener("click", () => { openlink(5) });
links[5].addEventListener("click", () => { openlink(6) });
links[6].addEventListener("click", () => { openlink(7) });
links[7].addEventListener("click", () => { openlink(8) });
links[8].addEventListener("click", () => { openlink(9) });

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

    if (x == 5) {
        window.open("https://www.instagram.com/artmellopez/", "_blank");
    }
    if (x == 6) {
        window.open("https://www.linkedin.com/in/jan-artmel-lopez-47b190232/", "_blank");
    }
    if (x == 7) {
        window.open("https://github.com/Janartmel", "_blank");
    }
    if (x == 8) {
        window.open("https://www.facebook.com/janartmellopez/", "_blank");
    }
}

