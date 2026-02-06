    const display = document.getElementById("display");

    function appendValue(value) {
        display.value = display.value + value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            display.value = Function("return " + display.value)();
        } catch (e) {
            display.value = "Error";
        }
    }
