/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculatekg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();

  // Check if the fields have a value
  if (calculateCm.value === "" || calculatekg.value === "") {
    // Add and remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // Show message
    calculateMessage.textContent = "Fill in the Height and Weight 👨‍💻";

    // Remove message three seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    // BMI formula
    const cm = calculateCm.value / 100,
      kg = calculatekg.value,
      bmi = Math.round(kg / (cm * cm), 2);

    // Show your health status
    if (bmi < 18.5) {
      // Add and remove color
      calculateMessage.classList.remove(
        "color-green",
        "color-orange",
        "color-red"
      );
      calculateMessage.classList.add("color-blue");

      // Show message
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      // Add and remove color
      calculateMessage.classList.remove(
        "color-blue",
        "color-red",
        "color-orange"
      );
      calculateMessage.classList.add("color-green");

      // Show message
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 😊`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      // Add and remove color
      calculateMessage.classList.remove(
        "color-blue",
        "color-green",
        "color-red"
      );
      calculateMessage.classList.add("color-orange");

      // Show message
      calculateMessage.textContent = `Your BMI is ${bmi} and you are Overweight 😟`;
    } else {
      // Add and remove color
      calculateMessage.classList.remove(
        "color-blue",
        "color-green",
        "color-orange"
      );
      calculateMessage.classList.add("color-red");

      // Show message
      calculateMessage.textContent = `Your BMI is ${bmi} and you are Obese 😱`;
    }

    // To clear the input fields
    calculateCm.value = "";
    calculatekg.value = "";

    // Remove message four seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);



