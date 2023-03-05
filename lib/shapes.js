function Square(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fill = color;
}

function Circle(cx, cy, r, color) {
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.fill = color;
}

function Triangle(color) {
    this.points = "150, 20 242, 180 58, 180";
    this.fill = color;
}

//triangle example: 
{/* <svg 
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg" >

  <polygon points="150, 20 242, 180 58, 180" fill="purple"/>

  <text x="150" y="165" font-size="60" text-anchor="middle" fill="blue">SVG</text>

</svg> */}

//square example:
{/* <svg 
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg" >

  <rect x="70" y="20" width="160" height="160" fill="purple" />

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="yellow">SVG</text>

</svg> */}

//circle example:
{/* <svg 
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg" >

  <circle cx="150" cy="100" r="80" fill="purple" />

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="yellow">SVG</text>

</svg> */}
