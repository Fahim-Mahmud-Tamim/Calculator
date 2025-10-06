let display = document.getElementById("display");
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += op;
}

function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// 🌙 Dark Mode Toggle
toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});
