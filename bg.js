const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; // color = color + hex[Math.floor(Math.random()*16)]
  }
  return color;
};
// randomColor()
// console.log("random color value is",randomColor())
//console.log(Math.floor(Math.random()*16))

let intervalTime;
console.log("interval time ",intervalTime)
const startChangingBgColor = function () {
  intervalTime = setInterval(()=>{document.body.style.backgroundColor = randomColor()}, 1000);
  console.log(intervalTime)
};
// function changeBgColor() {
//   document.body.style.backgroundColor = randomColor();
// }

const stopchangigBgColor = function () {
  clearInterval(intervalTime);
};
const startButton = document.querySelector("#start");
console.log(startButton);
startButton.addEventListener("click", startChangingBgColor);

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", stopchangigBgColor);
