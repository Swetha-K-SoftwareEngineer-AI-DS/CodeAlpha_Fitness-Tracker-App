let activities = JSON.parse(localStorage.getItem("activities")) || [];

displayActivities();

function addActivity() {

    let steps = document.getElementById("steps").value;
    let exercise = document.getElementById("exercise").value;
    let duration = document.getElementById("duration").value;
    let calories = document.getElementById("calories").value;

    if (steps === "" || exercise === "" || duration === "" || calories === "") {
        alert("Please fill all fields");
        return;
    }

    let activity = {
        steps,
        exercise,
        duration,
        calories
    };

    activities.push(activity);

    localStorage.setItem("activities", JSON.stringify(activities));

    displayActivities();
    let totalSteps = 0;
let totalCalories = 0;
let totalDuration = 0;

    activities.forEach(function(activity) {
        totalSteps += parseInt(activity.steps);
        totalCalories += parseInt(activity.calories);
        totalDuration += parseInt(activity.duration);
    });

    document.getElementById("totalSteps").textContent = totalSteps;
    document.getElementById("totalCalories").textContent = totalCalories;
    document.getElementById("totalDuration").textContent = totalDuration;

    document.getElementById("steps").value = "";
    document.getElementById("exercise").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("calories").value = "";
}

function displayActivities() {
    function deleteActivity(index){

    activities.splice(index,1);

    localStorage.setItem(
        "activities",
        JSON.stringify(activities)
    );

    displayActivities();

}

    let output = "";

    activities.forEach(function(activity, index){

        output += `
<div class="activity-card">

    <h3>${activity.exercise}</h3>

    <p>Steps: ${activity.steps}</p>

    <p>Duration: ${activity.duration} minutes</p>

    <p>Calories Burned: ${activity.calories}</p>

    <button onclick="deleteActivity(${index})">
        Delete
    </button>

    <hr>

</div>
`;
    });

    document.getElementById("activityList").innerHTML = output;
}