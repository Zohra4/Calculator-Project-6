// variables for display and all buttons
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  // for-loop to check all buttons on a click event
  item.onclick = () => {
    if (item.id == "clear") {
      // by pressing clear button, the display will be cleared
      display.innerText = "";
    } else if (item.id == "delete") {
      // by pressing delete button, the string length of display will be reduced by one
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      // by pressing equal and display is filled, the calculation (evalution) of display content is made
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      // by pressing equal and display is empty, the output will be "please enter your numbers!"
      display.innerText = "please enter your numbers!";
      setTimeout(() => (display.innerText = ""), 2000); // the output will be showned in display for 2000ms
    } else {
      display.innerText += item.id; // content of each pressed button is added to the display
    }
  };
});