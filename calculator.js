const heightInput = document.querySelector(".bmi__input--height");
const weightInput = document.querySelector(".bmi__input--weight");
const calculateBtn = document.querySelector(".bmi__calculate-button");
const resultValue = document.querySelector(".bmi__result-value");
const resultComment = document.querySelector(".bmi__comment");
const ageInput = document.querySelector(".bmi__input--age");
const genderInputs = document.querySelectorAll(".bmi__radio");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultValue.textContent = "Invalid input";
    resultComment.textContent = "Please enter valid height and weight.";
    return;
  }

  const bmi = weight / (height / 100) ** 2;
  resultValue.textContent = bmi.toFixed(2);

  if (bmi < 18.5) {
    resultComment.textContent = "Underweight";
    resultValue.style.color = "#FF0000";
  } else if (bmi < 25) {
    resultComment.textContent = "Normal weight";
    resultValue.style.color = "#00FF00";
  } else if (bmi < 30) {
    resultComment.textContent = "Overweight";
    resultValue.style.color = "#FFFF00";
  } else {
    resultComment.textContent = "Obesity";
    resultValue.style.color = "#FF0000";
  }

  heightInput.value = "";
  weightInput.value = "";
  ageInput.value = "";
  genderInputs.forEach((input) => {
    input.checked = false;
  });
});
