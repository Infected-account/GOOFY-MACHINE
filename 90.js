const stars = document.getElementById("stars");
const shootingStars = document.getElementById("shootingStars");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const returnButton = document.getElementById("returnButton");


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/* =========================
   CREATE STARS
========================= */

function createStars() {

    for (let i = 0; i < 220; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        stars.appendChild(star);
    }
}


/* =========================
   SHOOTING STARS
========================= */

function createShootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 50 + "%";

    shootingStars.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1500);
}


function startShootingStars() {

    setInterval(() => {

        if (Math.random() < 0.35) {
            createShootingStar();
        }

    }, 2500);
}


/* =========================
   MAIN SEQUENCE
========================= */

async function begin() {

    createStars();

    startShootingStars();


    await wait(3500);

    line1.textContent = "SIGNAL RESTORED.";

    line1.classList.add("show");


    await wait(2500);

    line2.textContent = "90 CLICKS.";

    line2.classList.add("show");


    await wait(3000);

    line3.textContent = "YOU HAVE REACHED THE STARS.";

    line3.classList.add("show");


    await wait(3500);

    returnButton.classList.add("show");


    await wait(5000);

    createShootingStar();
}


/* =========================
   START
========================= */

begin();
