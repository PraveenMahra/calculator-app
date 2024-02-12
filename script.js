let displayValue = "0";

function updateDisplay() {
  document.querySelector(".display").innerText = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }

  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

const buttonMap = [];

document.querySelectorAll(".btn").forEach((button) => {
  const key = button.getAttribute("data-key");
  if (key) {
    buttonMap[key] = button;
  }
});

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key in buttonMap) {
    const button = buttonMap[key];
    button.click();
  } else if (key === "Backspace") {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  } else if (key === "Enter") {
    calculate();
  }
});

updateDisplay();

document.addEventListener("DOMContentLoaded", function () {
  const themes = ["theme-1", "theme-2", "theme-3"];
  const themeButtons = document.querySelectorAll(".theme-btn button");
  const numbers = document.querySelectorAll(".theme-part p");

  function changeTheme(index) {
    document.body.classList.remove(...themes);

    document.body.classList.add(themes[index]);
  }

  themeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      changeTheme(index);
    });
  });

  numbers.forEach((number, index) => {
    number.addEventListener("click", () => {
      changeTheme(index);
    });
  });
});
