let display = document.getElementById("value");
let nodeList = document.getElementsByTagName("span");

let button = Array.from(nodeList);

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator(btn, display);
  });
});

const calculator = (btn, display) => {
  switch (btn.innerHTML) {
    case "Clear":
      clean(display);
      break;
    case " = ":
      calculate(display);
      break;
    default:
      update(display, btn);
      break;
  }
};

const clean = (display) => {
  display.innerHTML = "";
};

const calculate = (display) => {
  display.innerHTML = eval(display.innerHTML);
};

const update = (display, btn) => {
  if (display.innerHTML == 0) {
    display.innerHTML = "";
  }
  display.innerHTML += btn.innerHTML;
};
