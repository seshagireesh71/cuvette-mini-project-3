// Append values to the display
function appendToDisplay(value) {
    document.getElementById("calcDisplay").value += value;
}

// Delete the last character from the display
function deleteLast() {
    let currentDisplay = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = currentDisplay.slice(0, -1);
}

// Reset the display to empty
function resetDisplay() {
    document.getElementById("calcDisplay").value = '';
}

// Calculate the result
function calculateResult() {
    let expression = document.getElementById("calcDisplay").value;
    try {
        let result = eval(expression);
        document.getElementById("calcDisplay").value = result;
    } catch (error) {
        document.getElementById("calcDisplay").value = 'Error';
    }
}