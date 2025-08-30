const grid = document.getElementById("grid");
const resetBtn = document.getElementById("reset");
const resetAllBtn = document.getElementById("resetAll");

const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#A66DD4"];
let colorIndex = 0;
let history = []; 

for (let i = 0; i < 60; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.addEventListener("click", () => {
        const newColor = colors[colorIndex % colors.length];
        circle.style.background = newColor;
        colorIndex++;
        history.push(circle);
    });

    circle.addEventListener("dblclick", () => {
        circle.style.background = "white";
    });

    circle.addEventListener("mouseover", (e) => {
        if (e.buttons === 1) { // left mouse button held
            const newColor = colors[colorIndex % colors.length];
            circle.style.background = newColor;
            colorIndex++;
            history.push(circle);
        }
    });

    grid.appendChild(circle);
}

resetBtn.addEventListener("click", () => {
    const last = history.pop();
    if (last) {
        last.style.background = "white";
    }
});

resetAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".circle").forEach(circle => {
        circle.style.background = "white";
    });
    history = [];
});
