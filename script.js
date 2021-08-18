let hexArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let hex = "";
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", changeColor);

function changeColor() {
  hex = "";

  for (let index = 0; index < 6; index++) {
    const element = Math.floor(Math.random() * hexArray.length);
    // console.log(element)

    hex += hexArray[element];
    // console.log(hexArray[element])
  }

  document.getElementById("hexcode").innerHTML = `${hex}`;
  document.body.style.backgroundColor = "#" + `${hex}`;

  changeHeaderColor();
}

function changeHeaderColor() {
  let firstHeading = document.getElementsByTagName("h1")[0];
  let secondHeading = document.getElementsByTagName("h2")[0];
  let body = document.getElementsByTagName("body")[0];

  if (body.style.backgroundColor > 60) {
    firstHeading.style.color = "#000";
    secondHeading.style.color = "#000";
  } else {
    firstHeading.style.color = "#fff";
    secondHeading.style.color = "#fff";
  }
}
