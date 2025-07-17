const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("click", (e) => {
  e.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;

  if (!height || height <= 0 || isNaN(height)) {
    results.textContent = "Please enter a valid height";
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    results.textContent = "Please enter a valid weight";
  } else {
    const bmi = weight / ((height / 100) ** 2).toFixed(2);
    results.innerHTML = `<span> Your BMI: ${bmi}`;
  }
});
