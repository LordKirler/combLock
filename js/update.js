let now = 0;
const screen = document.querySelectorAll(".answer-part");

function NumberAns(newDigit) {
  now *= 10;
  now += newDigit;
  now %= 10 ** 5;

  ScreenUpd();
  if (now === code) win();
}

function ScreenUpd() {
  let x = now,
    DEL = 10 ** 4;
  screen.forEach((element) => {
    element.textContent = Math.floor(x / DEL);
    x %= DEL;
    DEL /= 10;
  });

  changeColor(now);
}
