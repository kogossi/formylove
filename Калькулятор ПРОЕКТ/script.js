let currentNumber = "";
let previousNumber = "";
let operation = null;

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (previousNumber !== "") {
    calculate();
  }

  operation = op;
  previousNumber = currentNumber; // Обновите значение previousNumber на значение текущего числа
  currentNumber = ""; // Обнулите значение текущего числа, учтите тип данных, который мы используем в калькуляторе
}

function calculate() {
  let result;

  let prev = parseFloat(previousNumber);
  let curr = parseFloat(currentNumber);

  if (operation == "+") {
    result = prev + curr;
  } else if (operation == "-") {
    result = prev - curr;
  } else if (operation == "*") {
    result = prev * curr;
  } else if (operation == "/") {
    if (curr == "0") {
      result = "ошибка";
    } else {
      result = prev / curr;
    }
  }

  currentNumber = result.toString(); // Измените название переменной на переменную, в которой будет храниться результат
  operation = null;
  previousNumber = "";
  updateDisplay();
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = currentNumber || "0";
}
