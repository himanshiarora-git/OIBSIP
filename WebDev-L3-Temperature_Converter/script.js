// Get HTML elements

const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertBtn =
    document.getElementById("convertBtn");

const resetBtn =
    document.getElementById("resetBtn");

const errorMessage =
    document.getElementById("errorMessage");

const celsiusResult =
    document.getElementById("celsiusResult");

const fahrenheitResult =
    document.getElementById("fahrenheitResult");

const kelvinResult =
    document.getElementById("kelvinResult");


// Convert button

convertBtn.addEventListener("click", function () {

    // Get input value

    const inputValue =
        temperatureInput.value.trim();

    const selectedUnit =
        unitSelect.value;


    // Clear previous error

    errorMessage.textContent = "";


    // -------------------------------
    // Empty Input Validation
    // -------------------------------

    if (inputValue === "") {

        errorMessage.textContent =
            "Please enter a temperature value.";

        clearResults();

        return;
    }


    // -------------------------------
    // Numeric Validation
    // -------------------------------

    if (isNaN(inputValue)) {

        errorMessage.textContent =
            "Please enter a valid numeric value.";

        clearResults();

        return;
    }


    const temperature =
        Number(inputValue);


    // Variable to store Celsius value

    let celsius;


    // -------------------------------
    // Convert input to Celsius
    // -------------------------------

    if (selectedUnit === "Celsius") {

        celsius = temperature;

    }

    else if (selectedUnit === "Fahrenheit") {

        celsius =
            (temperature - 32) * 5 / 9;

    }

    else if (selectedUnit === "Kelvin") {

        celsius =
            temperature - 273.15;

    }


    // -------------------------------
    // Absolute Zero Validation
    // -------------------------------

    if (celsius < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        clearResults();

        return;
    }


    // -------------------------------
    // Convert Celsius to all units
    // -------------------------------

    const fahrenheit =
        (celsius * 9 / 5) + 32;

    const kelvin =
        celsius + 273.15;


    // -------------------------------
    // Display Results
    // -------------------------------

    celsiusResult.textContent =
        formatNumber(celsius) + " °C";

    fahrenheitResult.textContent =
        formatNumber(fahrenheit) + " °F";

    kelvinResult.textContent =
        formatNumber(kelvin) + " K";

});


// -------------------------------
// Reset Button
// -------------------------------

resetBtn.addEventListener("click", function () {

    temperatureInput.value = "";

    unitSelect.value = "Celsius";

    errorMessage.textContent = "";

    clearResults();

});


// -------------------------------
// Real-time Input Validation
// -------------------------------

temperatureInput.addEventListener("input", function () {

    const value =
        temperatureInput.value.trim();


    if (value === "") {

        errorMessage.textContent = "";

        return;
    }


    if (isNaN(value)) {

        errorMessage.textContent =
            "Please enter numbers only.";

    }

    else {

        errorMessage.textContent = "";

    }

});


// -------------------------------
// Clear Results
// -------------------------------

function clearResults() {

    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";
}


// -------------------------------
// Format Number
// -------------------------------

function formatNumber(value) {

    return Number(value.toFixed(2));

}