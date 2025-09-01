 let display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let firstOperand = "";

    function appendNumber(num) {
      currentInput += num;
      display.innerText = currentInput;
    }

    function clearDisplay() {
      currentInput = "";
      operator = "";
      firstOperand = "";
      display.innerText = "0";
    }

    function backspace() {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || "0";
    }

    function chooseOperation(op) {
      if (currentInput === "") return;
      firstOperand = currentInput;
      operator = op;
      currentInput = "";
    }

    function compute() {
      if (currentInput === "" || firstOperand === "") return;
      let result;
      let num1 = parseFloat(firstOperand);
      let num2 = parseFloat(currentInput);
      switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        case "%": result = num1 % num2; break;
        default: return;
      }
      display.innerText = result;
      console.log(`Result: ${result}`);
      currentInput = result.toString();
      operator = "";
      firstOperand = "";
    }

    function calculateSquare() {
      if (currentInput === "") return;
      let num = parseFloat(currentInput);
      let result = num * num;
      display.innerText = result;
      console.log(`Square: ${result}`);
      currentInput = result.toString();
    }

    function calculateCube() {
      if (currentInput === "") return;
      let num = parseFloat(currentInput);
      let result = num * num * num;
      display.innerText = result;
      console.log(`Cube: ${result}`);
      currentInput = result.toString();
    }

    function calculateFactorial() {
      if (currentInput === "") return;
      let num = parseInt(currentInput);
      function fact(n) {
        return n <= 1 ? 1 : n * fact(n - 1);
      }
      let result = fact(num);
      display.innerText = result;
      console.log(`Factorial: ${result}`);
      currentInput = result.toString();
    }

    function checkEven() {
      if (currentInput === "") return;
      let num = parseInt(currentInput);
      let result = num % 2 === 0 ? "Even" : "Not Even";
      display.innerText = result;
      console.log(result);
    }

    function checkOdd() {
      if (currentInput === "") return;
      let num = parseInt(currentInput);
      let result = num % 2 !== 0 ? "Odd" : "Not Odd";
      display.innerText = result;
      console.log(result);
    }
