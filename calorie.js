// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("calorie-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const age = parseInt(document.getElementById("age").value);
        const gender = document.getElementById("gender").value;
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const activityLevel = document.getElementById("activity-level").value;

        if (isNaN(age) || isNaN(weight) || isNaN(height)) {
            alert("Please enter valid inputs.");
            return;
        }

        // Calculate BMR
        let bmr;
        if (gender === "male") {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === "female") {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Calculate daily calorie needs based on activity level
        let calorieNeeds;
        switch (activityLevel) {
            case "sedentary":
                calorieNeeds = bmr * 1.2;
                break;
            case "light":
                calorieNeeds = bmr * 1.375;
                break;
            case "moderate":
                calorieNeeds = bmr * 1.55;
                break;
            case "active":
                calorieNeeds = bmr * 1.725;
                break;
            case "extra":
                calorieNeeds = bmr * 1.9;
                break;
            default:
                calorieNeeds = bmr;
                break;
        }

        // Display the result
        resultDiv.innerHTML = `<h2>Daily Calorie Needs: ${calorieNeeds.toFixed(2)} calories</h2>`;
    });
});
