/**Calculates the average number of minutes exercised per day over a period.
 * @param {number[]} exerciseMinutes - Array of #'s for minutes exercised each day.
 * @returns {number} - Average minutes exercised per day.
 */
function calculateAverageExercise(exerciseMinutes) {
    if (exerciseMinutes.length === 0) {
        return 0; // Return 0 if the array is empty
    }

}

let weeklyExercise = [30, 45, 60, 0, 90, 30, 60]; // Minutes exercised each day over a week
let averageDailyExercise = calculateAverageExercise(weeklyExercise);
console.log(`Average daily exercise: ${averageDailyExercise} minutes`); //console would print sverage of 45



//We can all use some extra movement throughout the week with our sedintary lives.
//I wanted my project to motivate me to get a bit more steps in through
//the week.