const ageInput = document.getElementById("age");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const maleRadio = document.getElementById("Male");
const femaleRadio = document.getElementById("Female");
const calculateBtn = document.querySelector(".calculate");
const resultDisplay = document.getElementById("result");
const commentDisplay = document.querySelector(".comment");

const calculateBMI = () => {
  const age = ageInput.value;
  const height = heightInput.value;
  const weight = weightInput.value;
  const isMale = maleRadio.checked;
  const isFemale = femaleRadio.checked;

  if (!age || !height || !weight || (!isMale && !isFemale)) {
    showError("Please fill all fields");
    return;
  }

  if (isNaN(age) || isNaN(height) || isNaN(weight)) {
    showError("Please enter valid numbers");
    return;
  }

  const ageNum = Number(age);
  const heightNum = Number(height);
  const weightNum = Number(weight);

  if (ageNum < 2 || ageNum > 120) {
    showError("Age must be between 2-120");
    return;
  }

  if (heightNum < 50 || heightNum > 250) {
    showError("Height must be between 50-250 cm");
    return;
  }

  if (weightNum < 2 || weightNum > 300) {
    showError("Weight must be between 2-300 kg");
    return;
  }

  const heightInMeters = heightNum / 100;
  const bmi = weightNum / (heightInMeters * heightInMeters);
  const roundedBMI = bmi.toFixed(2);

  let category;
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  resultDisplay.textContent = roundedBMI;
  commentDisplay.textContent = category;
  setResultColor(bmi);
};
const showError = (message) => {
  resultDisplay.textContent = "Error";
  commentDisplay.textContent = message;
  resultDisplay.style.color = "red";
};
const resetForm = () => {
  resultDisplay.textContent = "00.00";
  commentDisplay.textContent = "";
};

calculateBtn.addEventListener("click", calculateBMI);
ageInput.addEventListener("input", resetForm);
heightInput.addEventListener("input", resetForm);
weightInput.addEventListener("input", resetForm);
maleRadio.addEventListener("change", resetForm);
femaleRadio.addEventListener("change", resetForm);

resetForm();
