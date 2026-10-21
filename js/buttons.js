const btnCont = document.getElementById("keyboard");
const btnFrag = document.createDocumentFragment();

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

digits.forEach((digit) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "digit-btn";
  btn.textContent = digit;

  if (digit === 0) {
    btn.classList.add("digit-btn-wide");
  }

  btn.addEventListener("click", () => NumberAns(digit));
  btnFrag.appendChild(btn);
});

btnCont.appendChild(btnFrag);
