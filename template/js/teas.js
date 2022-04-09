const radios = document.getElementsByName("milk");

for (var i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
    document.write(radios[i], "radio button is selected");
    console.log(radios[i].value);
    break;
  }
}
