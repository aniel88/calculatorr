const number = document.querySelectorAll(".number");
const showText = document.querySelector(".show-text2");
const clearBtn = document.querySelector(".clear");
const showTextWriteen = document.querySelector(".show-text1");
let x;
let y;
let calculat;
let impartire = 0;
let inmultire = 0;
let adunare = 0;
let scadere = 0;
function calculate(x, y, operatie) {
  if (operatie == "adunare") return x + y;
  if (operatie == "scadere") return x - y;
  if (operatie == "inmultire") return x * y;
  if (operatie == "impartire") return x / y;
}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    if (Number(number[i].textContent) == number[i].textContent) {
      if (number[i].textContent == "0") {
        if (!showText.textContent == "")
          showText.textContent += number[i].textContent;
      } else showText.textContent += number[i].textContent;
    }
    if (Number(showTextWriteen.textContent) == showTextWriteen.textContent)
      if (number[i].textContent == Number(number[i].textContent)) {
        showTextWriteen.textContent = "...";
        showText.textContent = " ";
        showText.textContent += number[i].textContent;
      }
    if (number[i].textContent === "Clear") {
      showText.textContent = " ";
      showTextWriteen.textContent = " ";
    }
    if (number[i].textContent === "*") {
      if (!showText.textContent == " ") {
        x = Number(showText.textContent);
        showTextWriteen.textContent = showText.textContent + "*";
        showText.textContent = " ";
        inmultire = true;
      }
    }
    if (number[i].textContent === "/") {
      if (!showText.textContent == " ") {
        x = Number(showText.textContent);
        showTextWriteen.textContent = showText.textContent + "/";
        showText.textContent = " ";
        impartire = true;
      }
    }
    if (number[i].textContent === "+") {
      if (!showText.textContent == " ") {
        x = Number(showText.textContent);
        showTextWriteen.textContent = showText.textContent + "+";
        showText.textContent = " ";
        adunare = true;
      }
    }
    if (number[i].textContent === "-")
      if (showTextWriteen.textContent === "...") showText.textContent = "-";
      else {
        x = Number(showText.textContent);
        showTextWriteen.textContent = showText.textContent + "-";
        showText.textContent = " ";
        scadere = true;
      }
    if (number[i].textContent === "=") {
      if (!showText.textContent == " ") {
        y = Number(showText.textContent);
        showTextWriteen.textContent = " ";
        showText.textContent = "";
        if (inmultire == true) {
          showText.textContent = Number(calculate(x, y, "inmultire"));
          inmultire = false;
        }
        if (impartire == true) {
          showText.textContent = "";
          showText.textContent = Number(calculate(x, y, "impartire"));
          impartire = false;
        }
        if (adunare == true) {
          showText.textContent = "";
          showText.textContent = Number(calculate(x, y, "adunare"));
          adunare = false;
        }
        if (scadere == true) {
          showText.textContent = "";
          showText.textContent = Number(calculate(x, y, "scadere"));
          scadere = false;
        }
      }
    }
  });
}

clearBtn.addEventListener("click", function () {
  showText.textContent = "";
  showTextWriteen.textContent = "...";
});
