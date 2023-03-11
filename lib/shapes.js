class Shape {
  constructor(color) {
  this.fill = color
}}

exports.Square = class Square extends Shape {
  constructor (color) {
    super(color);
    this.x = 70;
    this.y = 20;
    this.width = 160;
    this.height = 160;
}}

exports.Circle = class Circle extends Shape {
  constructor (color) {
    super(color);  
    this.cx = 150;
    this.cy = 100;
    this.r = 80;
}}

exports.Triangle = class Triangle extends Shape {
  constructor (color) {
    super(color);
    this.points = "150, 20 242, 180 58, 180";
}}