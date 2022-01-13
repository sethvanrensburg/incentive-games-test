/* eslint-disable max-len, no-console */

// We import the object from the data file. Inside that object there is a function to get players data
const data = require('./data');

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code

const formatPlayerInfo = playerArr => {
  let outputStr = '';

  for (let i = 0; i < playerArr.length; i++) {
    const { name, lastname, position } = playerArr[i];

    outputStr += `
        PLAYER ${i + 1}
        NAME: ${name}
        LASTNAME: ${lastname}
        POSITION ${position}`;
  }

  console.log(outputStr);
};

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code

const formatPlayerNames = playerArr => {
  const playerNameArr = playerArr.map(player => player.name);
  const sortedPlayerNameArr = playerNameArr.sort((a, b) => b.length - a.length);
  console.log(sortedPlayerNameArr);
};

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals
 * Output example -> Goals per match: 2.19
 */

// Your code

const averageGoalsPerGame = playerArr => {
  // get player scoring chances and convert any integers given as a string into an integer
  let playerScoringChanceArr = playerArr.map(player => player.scoringChance);
  playerScoringChanceArr = playerScoringChanceArr.map(scoringChance => parseInt(scoringChance, 10));

  // add together all integers in array and divide by 100
  const scoringChanceSum = playerScoringChanceArr.reduce((a, b) => a + b, 0);
  const scoringChanceSumPerGame = scoringChanceSum / 100;
  console.log(scoringChanceSumPerGame);
};

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code

const getPlayerPosition = (playerArr, playerName) => {
  const player = playerArr.find(playerObj => playerObj.name === playerName);
  console.log(player.position);
};

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

const randomMatchSimulation = playerArr => {
  const playerCount = playerArr.length;
  const team1 = [];
  const team2 = [];

  // team selection - loop over player array, picking a member for both teams each time
  for (let i = 0; i < playerCount / 2; i++) {
    // select random player for team 1
    const randomTeam1Selection = Math.floor(Math.random() * playerArr.length);
    team1.push(playerArr[randomTeam1Selection]);
    playerArr.splice(randomTeam1Selection, 1);

    // select random player for team 2
    const randomTeam2Selection = Math.floor(Math.random() * playerArr.length);
    team2.push(playerArr[randomTeam2Selection]);
    playerArr.splice(randomTeam2Selection, 1);
  }

  // score calculator
  const roundedScoreCalculator = team => {
    // get player scoring chances and convert any integers given as a string into an integer
    let playerScoringChanceArr = team.map(player => player.scoringChance);
    playerScoringChanceArr = playerScoringChanceArr.map(scoringChance => parseInt(scoringChance, 10));

    // add together all integers in array, divide by 100, and round to nearest integer
    const scoringChanceSum = playerScoringChanceArr.reduce((a, b) => a + b, 0);
    const scoringChanceSumPerGame = scoringChanceSum / 100;
    const roundedScoringChanceSumPerGame = Math.round(scoringChanceSumPerGame);
    return roundedScoringChanceSumPerGame;
  };

  // calculate scores
  const roundedTeam1Score = roundedScoreCalculator(team1);
  const roundedTeam2Score = roundedScoreCalculator(team2);
  let result = roundedTeam1Score >= roundedTeam2Score ? 'TEAM 1 WINS' : 'TEAM 2 WINS';
  if (roundedTeam1Score === roundedTeam2Score) {
    result = 'DRAW';
  }

  // log teams and results
  console.log(`
TEAM 1 PLAYERS:
${team1.map(player => player.name).join('\n')}

TEAM 2 PLAYERS:
${team2.map(player => player.name).join('\n')}

MATCH RESULTS
TEAM 1: ${roundedTeam1Score}
TEAM 2: ${roundedTeam2Score}

RESULT:
${result}
    `);
};
