const reveals = document.querySelectorAll(".reveal");
const header = document.querySelector(".main-header");

function onScroll() {
    const windowHeight = window.innerHeight;

    // 🔁 Reveal sections (sube y baja)
    reveals.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        const elementBottom = section.getBoundingClientRect().bottom;
        const revealPoint = 150;

        if (
            elementTop < windowHeight - revealPoint &&
            elementBottom > revealPoint
        ) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    // 🌄 Parallax header (JS, funciona también en mobile)
    const scrollY = window.scrollY;
    header.style.backgroundPositionY = scrollY * 0.5 + "px";
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
