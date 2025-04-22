let currentValue = '';

function appendValue(value) {
    currentValue += value;
    document.getElementById('output').value = currentValue;
}

function clearOutput() {
    currentValue = '';
    document.getElementById('output').value = '';
}

function calculate() {
    if (currentValue === '') return;
    
    try {
        const result = eval(currentValue);
        document.getElementById('output').value = result;
        currentValue = result.toString();
    } catch (error) {
        document.getElementById('output').value = 'Error';
        currentValue = '';
    }
}