const MyStepper = document.getElementById("my-input");

function Stepper(btn){
    let min = MyStepper.getAttribute("min");
    let max = MyStepper.getAttribute("max");
    let val = MyStepper.getAttribute("value");
    console.log(val)
    let newValue = (btn == "increment") ? ++val  : --val;
    if(newValue >= min && newValue <= max ) {
        MyStepper.setAttribute("value", newValue)
    }
 
    
}
