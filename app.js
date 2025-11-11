function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return -b - -a;
}

function mod(a, b) {
  return b % a;
}

function div(a, b) {
  return b / a;
}

function mult(a, b) {
  return a * b;
}

let a, b, operand;

function operate(a, b, opperand) {}

function populateDisplay() {
  const inputScreen = document.querySelector("#inputScreen");
  const numbers = document.querySelectorAll(".numbers .buttons");
  const operators = document.querySelectorAll(".operators .buttons");

  numbers.forEach((button) => {
    button.addEventListener("click", () => {
      //   console.log(button.value);
      inputScreen.innerText = button.value;
    });
  });

  operators.forEach((button) => {
    button.addEventListener("click", () => {
      //   console.log(button.value);
      inputScreen.innerText = button.value;
    });
  });
}

function generateButtons() {
  const inputArea = document.querySelector(".inputArea");
  const inputs = document.createElement("div");
  inputs.classList.add("numbers");

  for (let i = 0; i < 10; ++i) {
    const buttons = document.createElement("button");
    buttons.classList.add("buttons");
    buttons.innerText = i;
    buttons.value = i;
    inputs.appendChild(buttons);
  }
  const operators = document.querySelector(".operators");
  inputArea.insertBefore(inputs, operators);
  populateDisplay();
}
generateButtons();
// populateDisplay();
