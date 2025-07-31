function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);

        if (result === Infinity || result === -Infinity) {
            display.value = "Division by zero is not allowed";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Erreur";
    }
}