import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const final2014 = fifaData.filter(function(item){
    return item["Year"] === 2014 && item["Stage"] === "Final";
        
});

console.log(
    `"(a)" ${final2014[0]["Home Team Name"]} "(b)" ${final2014[0]["Away Team Name"]} "(c)" ${final2014[0]["Home Team Goals"]} "(d)" ${final2014[0]["Away Team Goals"]} "(e)" ${final2014[0]["Win conditions"]}`);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const onlyFinalsData = data.filter(function(item){
        return item["Stage"] === "Final";
    });
    
    return onlyFinalsData;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals){
    let years = getFinals.map(getFinals => getFinals["Year"]);
    return years;
}

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals, data) {
    return getFinals(data).map(match => match["Home Team Goals"] > match["Away Team Goals"] ? match["Home Team Name"] : match["Away Team Name"])
};

console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {

    const finWinners = getWinners;
    const finYear = getYears;

    const output = finWinners.map(function(item, index){
        return `In ${finYear[index]}, ${item} won the world cup!`
    });

    return output;

};

console.log(getWinnersByYear(getWinners(getFinals, fifaData), getYears(fifaData)));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeAvgGoals = data.reduce(function(accumulator, item){
        return (accumulator + item["Home Team Goals"]) / data.length
    }, 0);
    let awayAvgGoals = data.reduce(function(accumulator, item){
        return (accumulator + item["Away Team Goals"]) / data.length
    }, 0);
    return `Avg. Home Goals: ${homeAvgGoals} - Avg. Away Goals: ${awayAvgGoals}`
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
