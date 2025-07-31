window.onload = function () {
    document.getElementById("binaryResult").textContent = "";
};

function convertToBinary() {
    const decimalInput = document.getElementById("decimalInput").value.trim();
    const resultElement = document.getElementById("binaryResult");

    if (!/^\d+$/.test(decimalInput)) {
        resultElement.textContent = "";
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);

    if (decimalNumber < 0) {
        resultElement.textContent = "";
        return;
    }

    const binary = decimalNumber.toString(2);

    resultElement.textContent = `Représentation binaire : ${binary}`;
}