const redgreen = document.getElementById("level");
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mult(x) {
  let ret = 1;
  while (x > 0) {
    ret *= x % 10;
    x = Math.floor(x / 10);
  }
  return ret;
}

let mycode = mult(code),
  code = getRandomInt(1, 999);
while (mycode === 0) {
  code = getRandomInt(1, 999);
  mycode = mult(code);
}

function changeColor(nowAnswer) {
  let nowMult = mult(nowAnswer);

  let safeFraction = 0.0;
  if (nowMult <= mycode) safeFraction = nowMult / mycode;
  else if (nowMult < mycode * 2)
    safeFraction = Math.abs(nowMult - mycode) / mycode;
  else safeFraction = 0.0;
  console.log(nowMult + " " + mycode + " " + safeFraction);

  const hue = safeFraction * 120;
  redgreen.style.backgroundColor = `hsl(${hue}, 100%, 45%)`;
}

function win() {
  const arr = document.querySelectorAll("button");

  arr.forEach((btn) => {
    btn.disabled = true;
  });

  const title = document.querySelector("h1");
  title.textContent = "YOU WIN!!";
}
