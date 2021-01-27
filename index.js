import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const cupfinals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === 'Final';
}); 
//(a) Home Team name for 2014 world cup final

// console.log(cupfinals2014[0]['Home Team Name']);

//(b) Away Team name for 2014 world cup final

// console.log(cupfinals2014[0]['Away Team Name']);

//(c) Home Team goals for 2014 world cup final

// console.log(cupfinals2014[0]['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final

// console.log(cupfinals2014[0]['Away Team Goals']);

//(e) Winner of 2014 world cup final */

// console.log(cupfinals2014[0]['Win conditions'].split(" ")[0]);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/


function getFinals(fifaData) {
 const cupfinals = fifaData.filter(function(item){
   return item.Stage === 'Final';
}); 
 return cupfinals;
}
// console.log(getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(data, getFinalsCB) {
    const yearNeed = getFinalsCB(data); 
  
    return yearNeed.map((element) => element.Year);
  
   
    


}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(data, getFinalsCB) {
    const winwin = [];
    const winners = getFinalsCB(data);
    
    winners.forEach((team, i) => {
        if(team['Home Team Goals'] >  team['Away Team Goals']){
        winwin.push(winners[i]['Home Team Name']);
        }
        else{
             winwin.push(winners[i]['Away Team Name']);
        }
    });
    return winwin;
}

// function getWinners(array, finalsCallback) {
//     const winners = [];
//     const teams = finalsCallback(array);
//     teams.forEach((team,index) => {
//         if (team["Home Team Goals"] > team["Away Team Goals"]) {
//             winners.push(teams[index]["Home Team Name"]);
//         } else {
//             winners.push(teams[index]["Away Team Name"]);
//         }
//     });
//     return winners;
// }




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(data, getYearsCB, getWinnersCB) {
    const finalsYear = getYearsCB(data, getFinals);
    const winners = getWinnersCB(data, getFinals);

    return finalsYear.map((year, i) =>{

   

        return `In ${finalsYear[i]}, ${winners[i]} won the world cup!`;
 });
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinalsCB) {
    const totalHomeGoals = getFinalsCB.reduce((oldb, index) => oldb + index['Home Team Goals'], 0);
    const totalAwayGoals = getFinalsCB.reduce((oldb, index) => oldb + index['Away Team Goals'], 0);
    const totalFinals = getFinalsCB.length;
    return ((totalHomeGoals + totalAwayGoals)/totalFinals).toFixed(2);
}
console.log(getAverageGoals(getFinals(fifaData)));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    // const pais = data.reduce((data, i)=>{i["Home Team Initials"]});
    
    // return pais;
// const countryData = data.filter(function(item){
//     return item["Home Team Initials"] === teamInitials || item["Away Team Initials"] === teamInitials;
// });
// const countryGoals = countryData.filter(function(item){
//     return item["Home Team Goals"] ===
// });

    
 }

// const countrys = fifaData.filter(function(item){
//     return item["Home Team Initials"] === "BRA" || item["Away Team Initials"] === "BRA";
// });
// console.log(getCountryWins(fifaData, "BRA"));
// console.log(getCountryWins(fifaData, "NED"));
// console.log(fifaData.reduce(a,b) => )

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
