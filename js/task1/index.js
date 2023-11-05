
function calculate() {
    const operation = prompt("Enter an operation (+, -, *, /):");
    const num1 = parseFloat(prompt("Enter Number 1:"));
    const num2 = parseFloat(prompt("Enter Number 2:"));
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation. Please use +, -, *, or /.");
            return;
    }

    alert(`Operation: ${operation}, Number 1: ${num1}, Number 2: ${num2}, Result: ${result}`);
}

calculate();
