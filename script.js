initialize(16);

function initialize (size) {
  const container = document.querySelector('#canvas-container');

  for(i = 0; i < size; i++) {
    const content = document.createElement('div');
    content.classList.add('flex-column');
    container.appendChild(content);
    console.log("append columns");
    
  }

  const flexColumns = document.querySelectorAll('.flex-column');
  for (i = 0; i < flexColumns.length; i++) {
    for(j = 0; j < size; j++) {
      const contentSquares = document.createElement('div');
      contentSquares.classList.add('square-div');
      flexColumns[i].appendChild(contentSquares);
      console.log("append child to columns");
    }

  }
  
  const squares = document.querySelectorAll('.square-div');
  squares.forEach(function (square) {square.addEventListener('mouseover', () => {
    square.classList.toggle('hovered')
    });
  });

}
