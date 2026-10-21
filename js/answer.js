const ansCont = document.getElementById("answer");
const ansFrag = document.createDocumentFragment();

for (let i = 0; i < COL; i++) {
  const part = document.createElement("div");
  part.className = "answer-part";
  part.textContent = 0;

  ansFrag.appendChild(part);
}

ansCont.appendChild(ansFrag);
