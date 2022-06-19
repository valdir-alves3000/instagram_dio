const screenshot = document.querySelector("#screenshot");

let img = 1;

setInterval(() => {
  img++;
  if (img > 3) img = 1;
  screenshot.src = `./images/screenshot${img}.png`;
}, 2000);
