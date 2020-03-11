import '../assets/stylesheets/reset.css';
import '../assets/stylesheets/main.css';

const canvasElement = document.getElementById("myCanvas");
canvasElement.width = 1200;
canvasElement.height = 600;

const ctx = canvasElement.getContext("2d");
ctx.fillStyle = "purple";
ctx.fillRect(0, 0, 50, 50);

ctx.beginPath();
ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();
