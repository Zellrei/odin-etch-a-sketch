initialize(20);

function initialize (size) {
  const btnStart = document.getElementById('btn-start');
  let value = size;
  btnStart.addEventListener('click', () => {
    
    value = Number(window.prompt("Grid size ?", "16")); 
    clearCanvas();
    if (value > 100) {value = 100};
    startGame (value);
  });
}    
  
function startGame (size) {
  const container = document.querySelector('#canvas-container');
  

  for(i = 0; i < size; i++) {
    const content = document.createElement('div');
    content.classList.add('flex-column');
    container.appendChild(content);
  }

  const flexColumns = document.querySelectorAll('.flex-column');
  for (i = 0; i < flexColumns.length; i++) {
    for(j = 0; j < size; j++) {
      const contentSquares = document.createElement('div');
      contentSquares.classList.add('square-div');
      flexColumns[i].appendChild(contentSquares);
    }

  }
  
  const squares = document.querySelectorAll('.square-div');
  squares.forEach(function (square) {square.addEventListener('mouseover', () => {

    if (!square.classList.contains('colored')) {
      let rgbColorRed = Math.floor(Math.random() * 255) + 1;
      let rgbColorGreen = Math.floor(Math.random() * 255) + 1;
      let rgbColorBlue = Math.floor(Math.random() * 255) + 1;
      square.setAttribute('style', `background-color : rgb(${rgbColorRed}, ${rgbColorGreen}, ${rgbColorBlue})`);
      square.classList.add('colored');
      
    } else {
      let squareColor = square.style.backgroundColor;
      let squareColorArr = squareColor.slice(
        squareColor.indexOf("(") + 1, 
        squareColor.indexOf(")")
    ).split(", ");
      square.setAttribute('style', `background-color : rgb(${squareColorArr[0]*0.9}, ${squareColorArr[1]*0.9}, ${squareColorArr[2]*0.9})`);

    }
    });
  });

}

function clearCanvas () {
  const container = document.getElementById("canvas-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}