const board = document.getElementById('board-pixel');

for(let i = 0; i < 25; i += 1){
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    board.appendChild(pixelDiv);
}
