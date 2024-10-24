function setup() {
  createCanvas(400, 500);
  background(214,209, 202); 
  noLoop();
}

function draw() {
  let numSquares = 100; 
  let squareSize = 20; 
  let paddingy = 10;  
  let paddingx = 2;

  let gridCols = 10;
  let gridRows = 10;

  let gridWidth = width / 2;
  let gridHeight = height / 2;

  let offsetX = width / 4;
  let offsetY = height / 4;

  let alpha = 175; 

  let numelem = (numSquares / gridRows);
  let halfnum = numelem / 2;

  for (let i = 0; i < numSquares; i++) {
    let col = i % gridCols;
    let row = floor(i / gridCols);
    let delta = abs(((col < halfnum) ? 0 : numelem - 1) - col);
    let randy = paddingy + delta;

    let x = offsetX + col * (gridWidth / gridCols) + random(-paddingx, paddingx);
    let y = offsetY + row * (gridHeight / gridRows) + 10 * delta + random( 0 , randy);

    fill(0, 0, 0, alpha); 
    noStroke();
    
    rect(x, y, squareSize, squareSize);
  }
}
