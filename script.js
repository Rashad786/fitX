const workouts = [
    {
      name: "Push-Ups",
      description: "A classic upper body strength exercise.",
      details: "Works your chest, shoulders, and triceps. Aim for 3 sets of 15 reps.",
      image: "push ups.gif"
      
    },
    {
      name: "Squats",
      description: "A lower body powerhouse move.",
      details: "Targets glutes, quads, and hamstrings. Aim for 3 sets of 20 reps.",
      image: "Squats.gif"
    },
    {
      name: "Plank",
      description: "Core-strengthening static hold.",
      details: "Hold for 30-60 seconds, keeping your body straight.",
      image: "planks.gif"
    },
    {
      name: "Deadlift",
      description: "A great core endurance exercise.",
      details: "Perform for 10-12 reps in set and aim for 2 sets perweek",
      image: "deadlift.gif"
    }
  ];
  
  const container = document.getElementById("workout-container");
  
  workouts.forEach(workout => {
    const card = document.createElement("div");
    card.classList.add("workout-card");
  
    card.innerHTML = `
      <img src="${workout.image}" alt="${workout.name}" class="workout-image" style="width: 200px; height: 200px;">
      <h2>${workout.name}</h2>
      <p>${workout.description}</p>
      <div class="details">${workout.details}</div>
      <button>Show Details</button>
    `;
  
    const button = card.querySelector("button");
    const details = card.querySelector(".details");
  
    button.addEventListener("click", () => {
      details.style.display = details.style.display === "block" ? "none" : "block";
      button.textContent = details.style.display === "block" ? "Hide Details" : "Show Details";
    });
  
    container.appendChild(card);
  });