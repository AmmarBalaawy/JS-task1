
function calculateCircumference() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));

    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }

    const circumference = 2 * Math.PI * radius;

    alert(`The circumference of the circle with radius ${radius} is approximately ${circumference.toFixed(2)}.`);
}

calculateCircumference();
