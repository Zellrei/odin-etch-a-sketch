initialize(16);


function initialize (size) {
  const container = document.querySelector('#canvas-container');

  for(i = 0; i < size*size; i++) {
    const content = document.createElement('div');
    content.classList.add('square-div');
    container.appendChild(content);
    console.log("append child");
  }
  
}