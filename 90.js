const starsContainer =
    document.getElementById("stars");

const shootingStarsContainer =
    document.getElementById("shootingStars");

const line1 =
    document.getElementById("line1");

const line2 =
    document.getElementById("line2");

const line3 =
    document.getElementById("line3");


// =========================
// CREATE STARS
// =========================

function createStars() {

    const starCount = 220;

    for (let i = 0; i < starCount; i++) {

        const star =
            document.createElement("div");

        star.classList.add("star");


        const size =
            Math.random() * 2.5 + 0.5;


        const x =
            Math.random() * 100;


        const y =
            Math.random() * 100;


        const twinkleTime =
            Math.random() * 4 + 2;


        const minimumOpacity =
            Math.random() * 0.2 + 0.1;


        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.left =
            x + "%";

        star.style.top =
            y + "%";


        star.style.setProperty(
            "--twinkle-time",
            twinkleTime + "s"
        );


        star.style.setProperty(
            "--min-opacity",
            minimumOpacity
        );


        star.style.animationDelay =
            Math.random() * 5 + "s";


        starsContainer.appendChild(star);

    }

}


// =========================
// WAIT FUNCTION
// =========================

function wait(milliseconds) {

    return new Promise(resolve => {

        setTimeout(resolve, milliseconds);

    });

}


// =========================
// SHOOTING STAR
// =========================

function createShootingStar() {

    const shootingStar =
        document.createElement("div");

    shootingStar.classList.add(
        "shooting-star"
    );


    shootingStar.style.left =
        Math.random() * 100 + "%";


    shootingStar.style.top =
        Math.random() * 60 + "%";


    shootingStarsContainer.appendChild(
        shootingStar
    );


    setTimeout(() => {

        shootingStar.remove();

    }, 1600);

}


// =========================
// RANDOM SHOOTING STARS
// =========================

function startShootingStars() {

    setInterval(() => {

        if (Math.random() < 0.65) {

            createShootingStar();

        }

    }, 3500);

}


// =========================
// MAIN SEQUENCE
// =========================

async function begin()
    
    line3.classList.add("show"); {
   
    await wait(3500);

    document.getElementById("returnButton").classList.add("show");

    createStars();

    startShootingStars();


    // Wait for the universe to appear

    await wait(3500);


    line1.textContent =
        "SIGNAL RESTORED.";

    line1.classList.add("show");


    await wait(2500);


    line2.textContent =
        "90 CLICKS.";

    line2.classList.add("show");


    await wait(3000);


    line3.textContent =
        "YOU HAVE REACHED THE STARS.";

    line3.classList.add("show");


    await wait(5000);


    // One particularly dramatic shooting star

    createShootingStar();

}


// Start everything

begin();
