const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}
function cleardisplay() {
  display.value = "";
}
function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
    display.value='';
  }
}

function popfromdisplay() {
     display.value = display.value.slice(0, -1);
}
