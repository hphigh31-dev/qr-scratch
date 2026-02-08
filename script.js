const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 200;

ctx.fillStyle = "#999";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#fff";
ctx.font = "20px Arial";
ctx.fillText("SCRATCH HERE", 75, 110);

let isDrawing = false;

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", scratch);

canvas.addEventListener("touchstart", () => isDrawing = true);
canvas.addEventListener("touchend", () => isDrawing = false);
canvas.addEventListener("touchmove", scratch);

function scratch(e) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, 18, 0, Math.PI * 2);
  ctx.fill();
}
