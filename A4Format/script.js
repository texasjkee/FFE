const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

function clearCanvas(canvas) {
  canvas.width = canvas.width;
};

context.beginPath();
context.moveTo(0, 500);
context.lineTo(200,200);
context.lineTo(0,200);

context.strokeStyle = 'green';
context.lineWidth = 40;
context.stroke();

context.beginPath();
context.moveTo(0, 500);
context.lineTo(0,200);

context.strokeStyle = 'red';
context.lineWidth = 40;
context.stroke();