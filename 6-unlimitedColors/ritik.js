const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID;
console.log(randomcolor());
const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changebgcolor, 1000);
  }
  function changebgcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};
// console.log(Math.floor(Math.random()*16));
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
