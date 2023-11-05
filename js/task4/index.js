
function compareAndDisplay() {
    const x = parseFloat(prompt("Enter the value of x:"));
    const y = parseFloat(prompt("Enter the value of y:"));

    if (isNaN(x) || isNaN(y)) {
        alert("Please enter valid numbers for x and y.");
        return;
    }

    if (x > y) {
        alert("Hello World");
        console.log("Hello World");
        document.getElementById("result").textContent = "Hello World";
    } else {
        alert("Goodbye");
        console.log("Goodbye");
        document.getElementById("result").textContent = "Goodbye";
    }
}

compareAndDisplay();
