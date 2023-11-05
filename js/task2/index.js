

function calculateGrade() {
    const mark = parseFloat(prompt("Enter the student's mark:"));

    if (isNaN(mark)) {
        alert("Please enter a valid number for the mark.");
        return;
    }

    let grade;

    if (mark < 50) {
        grade = "FAIL";
    } else if (mark >= 50 && mark <= 59) {
        grade = "D";
    } else if (mark >= 60 && mark <= 69) {
        grade = "C";
    } else if (mark >= 70 && mark <= 79) {
        grade = "B";
    } else if (mark >= 80 && mark <= 89) {
        grade = "A";
    } else if (mark >= 90 && mark <= 100) {
        grade = "A+";
    } else {
        alert("Invalid mark. Mark should be between 0 and 100.");
        return;
    }

    alert(`Student's mark: ${mark}, Grade: ${grade}`);
}

calculateGrade();

