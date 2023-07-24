const value = document.querySelector(".value");
const regex = /^(?:\.){0,1}[^.]*$/;
const calculator = {
  displayValue: "",
  operator: null,
  firstOperand: null,
  secondOperand: null,
  total: null,
  waitingForSecondOperand: false,
  finished: false,
  occurence: true,
  point: true,
};

function operate() {
  if (calculator.operator === "+") {
    calculator.total = calculator.firstOperand + calculator.secondOperand;
  }
  if (calculator.operator === "-") {
    calculator.total = calculator.firstOperand - calculator.secondOperand;
  }
  if (calculator.operator === "*") {
    calculator.total = calculator.firstOperand * calculator.secondOperand;
  }
  if (calculator.operator === "/") {
    calculator.total = calculator.firstOperand / calculator.secondOperand;
  }
}
function number(num) {
  if (calculator.finished === true) {
    value.innerHTML = "";
    calculator.finished = false;
    document.querySelector(".operator").innerHTML = "";
    value.insertAdjacentHTML("beforeend", num);
    calculator.waitingForSecondOperand = false;
  } else {
    value.insertAdjacentHTML("beforeend", num);
  }
}
document.querySelector(".one").addEventListener("click", function () {
  number(1);
});
document.querySelector(".two").addEventListener("click", function () {
  number(2);
});
document.querySelector(".three").addEventListener("click", function () {
  number(3);
});
document.querySelector(".four").addEventListener("click", function () {
  number(4);
});
document.querySelector(".five").addEventListener("click", function () {
  number(5);
});
document.querySelector(".six").addEventListener("click", function () {
  number(6);
});
document.querySelector(".seven").addEventListener("click", function () {
  number(7);
});
document.querySelector(".eight").addEventListener("click", function () {
  number(8);
});
document.querySelector(".nine").addEventListener("click", function () {
  number(9);
});
document.querySelector(".zero").addEventListener("click", function () {
  number(0);
});
document.querySelector(".ac").addEventListener("click", function () {
  value.innerHTML = "";
  document.querySelector(".operator").innerHTML = "";
});
document.querySelector(".ans").addEventListener("click", function () {
  if (calculator.finished === true) {
    value.innerHTML = "";
    calculator.finished = false;
    document.querySelector(".operator").innerHTML = "Ans";
    value.innerHTML = calculator.total;
    calculator.waitingForSecondOperand = true;
  } else {
    value.innerHTML = calculator.total;
  }
});
document.querySelector(".del").addEventListener("click", function () {
  const initialValue = value.innerHTML;
  value.innerHTML = initialValue.substring(0, initialValue.length - 1);
});
document.querySelector(".ac").addEventListener("click", function () {});

document.querySelector(".point").addEventListener("click", function () {
  if (regex.test(value.innerHTML) === true) {
    number(".");
  }
});

document.querySelector(".plus").addEventListener("click", function () {
  document.querySelector(".operator").innerHTML = "+";
  calculator.firstOperand = parseFloat(value.innerHTML);
  value.innerHTML = "";
  calculator.waitingForSecondOperand = true;
  calculator.operator = "+";
});
document.querySelector(".minus").addEventListener("click", function () {
  document.querySelector(".operator").innerHTML = "-";
  calculator.firstOperand = parseFloat(value.innerHTML);
  value.innerHTML = "";
  calculator.waitingForSecondOperand = true;
  calculator.operator = "-";
});

document.querySelector(".times").addEventListener("click", function () {
  document.querySelector(".operator").innerHTML = "*";
  calculator.firstOperand = parseFloat(value.innerHTML);
  value.innerHTML = "";
  calculator.waitingForSecondOperand = true;
  calculator.operator = "*";
});
document.querySelector(".divide").addEventListener("click", function () {
  document.querySelector(".operator").innerHTML = "/";
  calculator.firstOperand = parseFloat(value.innerHTML);
  value.innerHTML = "";
  calculator.waitingForSecondOperand = true;
  calculator.operator = "/";
});
document.querySelector(".exp").addEventListener("click", function () {
  document.querySelector(".operator").innerHTML = "^";
  calculator.firstOperand = parseFloat(value.innerHTML);
  value.innerHTML = "";
  calculator.waitingForSecondOperand = true;
  calculator.operator = "^";
});
document.querySelector(".equals").addEventListener("click", function () {
  if (
    calculator.operator === "+" &&
    calculator.waitingForSecondOperand === true
  ) {
    calculator.secondOperand = parseInt(value.innerHTML);
    calculator.total = calculator.firstOperand + calculator.secondOperand;
    value.innerHTML = calculator.total;
    calculator.finished = true;
    calculator.occurence = true;
    document.querySelector(".operator").innerHTML = "";
  } else if (
    calculator.operator === "-" &&
    calculator.waitingForSecondOperand === true
  ) {
    calculator.secondOperand = parseInt(value.innerHTML);
    calculator.total = calculator.firstOperand - calculator.secondOperand;
    value.innerHTML = calculator.total;
    calculator.finished = true;
    calculator.occurence = true;
    document.querySelector(".operator").innerHTML = "";
  } else if (
    calculator.operator === "*" &&
    calculator.waitingForSecondOperand === true
  ) {
    calculator.secondOperand = parseInt(value.innerHTML);
    calculator.total = calculator.firstOperand * calculator.secondOperand;
    value.innerHTML = calculator.total;
    calculator.finished = true;
    calculator.occurence = true;
    document.querySelector(".operator").innerHTML = "";
  } else if (
    calculator.operator === "/" &&
    calculator.waitingForSecondOperand === true
  ) {
    calculator.secondOperand = parseInt(value.innerHTML);
    calculator.total = calculator.firstOperand / calculator.secondOperand;
    value.innerHTML = calculator.total;
    calculator.finished = true;
    calculator.occurence = true;
    document.querySelector(".operator").innerHTML = "";
  } else if (
    calculator.operator === "^" &&
    calculator.waitingForSecondOperand === true
  ) {
    calculator.secondOperand = parseInt(value.innerHTML);
    calculator.total = calculator.firstOperand ** calculator.secondOperand;
    value.innerHTML = calculator.total;
    calculator.finished = true;
    calculator.occurence = true;
    document.querySelector(".operator").innerHTML = "";
  }
});
