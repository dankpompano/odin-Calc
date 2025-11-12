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
  return a / b;
}

function mult(a, b) {
  return a * b;
}

let num1 = null,
  num2 = null,
  operand = "",
  currentInput = "";

function operate(a, b, operand) {
  if (operand === "+") return add(a, b);
  else if (operand === "-") return subtract(a, b);
  else if (operand === "/") return div(a, b);
  else if (operand === "%") return mod(a, b);
  else if (operand === "*") return mult(a, b);
}

function populateDisplay() {
  const inputScreen = document.querySelector("#inputScreen");
  const numbers = document.querySelectorAll(".numbers .buttons");
  const operators = document.querySelectorAll(".operators .buttons");

  numbers.forEach((button) => {
    //puts the numbers on the screen
    button.addEventListener("click", () => {
      currentInput += button.value;
      inputScreen.innerText = currentInput;
    });
  });

  operators.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "Clear") {
        //if clear button is clicked
        currentInput = "";
        inputScreen.innerText = currentInput;
        num1 = null;
        num2 = null;
        operand = "";
        currentInput = "";
        inputScreen.innerText = "";
      } else if (button.value === "=") {
        if (num1 !== null && operand !== "") {
          num2 = parseFloat(currentInput);
          const result = operate(num1, num2, operand);
          inputScreen.innerText = result;
        }
      } else {
        if (num1 === null) {
          num1 = parseFloat(currentInput);
          operand = button.value;
          currentInput = "";
        }
      }

      console.log(num1);
      console.log(operand);
      console.log(num2);
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
}
generateButtons();
populateDisplay();
