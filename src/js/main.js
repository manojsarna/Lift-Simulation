const invalidChars = ["+", "-", "e"];
const inputFloors = document.getElementById("ms-floor-input");
const inputLifts = document.getElementById("ms-lift-input");
inputFloors.addEventListener("keydown", (e) => {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
inputLifts.addEventListener("keydown", (e) => {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
console.log(inputFloors.value, inputLifts.value);
