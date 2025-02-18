//your JS code here. If required.
const colorBoard = document.getElementById('color-board');

// Create 800 boxes
for (let i = 0; i < 800; i++) {
    const box = document.createElement('div');
    box.classList.add('square');
    colorBoard.appendChild(box);
}