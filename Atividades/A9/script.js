const box = document.getElementById("box");
const controls = document.getElementById("controls");
const widthRange = document.getElementById("width-range");
const heightRange = document.getElementById("height-range");
const backgroundColorPicker = document.getElementById("background-color-picker");


function updateCssInfo() {
  const cssInfo = document.getElementById("css-info");
  const computedStyle = window.getComputedStyle(box);
  const width = computedStyle.getPropertyValue("width");
  const height = computedStyle.getPropertyValue("height");
  const backgroundColor = computedStyle.getPropertyValue("background-color");

cssInfo.innerHTML = `width: ${width};<br>
                     height: ${height};<br>
                     background-color: ${backgroundColor};<br>`;
}


widthRange.addEventListener("input", function(event) {
box.style.width = event.target.value + "px";
updateCssInfo();

});

heightRange.addEventListener("input", function(event) {
box.style.height = event.target.value + "px";
updateCssInfo();

});

backgroundColorPicker.addEventListener("input", function(event) {
box.style.backgroundColor = event.target.value;
updateCssInfo();

});


updateCssInfo();
