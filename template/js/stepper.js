//const MyStepper = document.getElementById("my-input");
function getIdFromStepper(id) {
  return id;
}

function Stepper(btn, input) {
  const MyStepper = document.getElementById(input);
  let min = MyStepper.getAttribute("min");
  let max = MyStepper.getAttribute("max");
  let val = MyStepper.getAttribute("value");
  console.log(val);
  let newValue = btn == "increment" ? ++val : --val;
  if (newValue >= min && newValue <= max) {
    MyStepper.setAttribute("value", newValue);
  }
}
