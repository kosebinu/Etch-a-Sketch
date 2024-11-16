document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const resetButton = document.getElementById("resetButton");
    const resetPageButton = document.getElementById("resetPageButton");

    function createGrid(size) {
        container.innerHTML = '';
        const squareSize = 960 / size;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = randomRGB();
            });

            container.appendChild(square);
        }
    }

    function randomRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    resetButton.addEventListener("click", () => {
        let gridSize = prompt("Enter grid size (maximum of 100):");
        if (gridSize === null) return;
        gridSize = parseInt(gridSize);

        if (!gridSize || gridSize < 1 || gridSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }

        createGrid(gridSize);
    });

    resetPageButton.addEventListener("click", () => {
        location.reload(); // Reload the page
    });

    createGrid(16);
});
