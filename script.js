let counter = 0;
const counterDisplay = document.getElementById("counter");

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * window.innerWidth + "px";
    star.onclick = () => {
        counter++;
        counterDisplay.textContent = counter;
        star.remove();
    };
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 3000);
}

setInterval(createStar, 1000);