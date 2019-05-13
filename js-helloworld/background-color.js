console.log("BG in the house");

var selectElement = document.getElementById("selectElement");

selectElement.addEventListener("change", selectElementChanged);

function selectElementChanged() {
  // console.log(selectElement.value);
  document.body.style.backgroundColor = selectElement.value;
};