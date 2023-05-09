function getAverage(scores) {
    let sum = 0
    let numScores = scores.length;
    for(let i = 0; i < numScores; i++) {
        sum += scores[i].score;
    }
    return sum;
}

let myScores = [{score: 92}, {score: 98}, {score: 84}, {score: 76}, {score: 89}, {score: 99}, {score: 100}];
let yourScores = [{score: 82}, {score: 98}, {score: 94}, {score: 88}, {score: 92}, {score: 100}, {score: 100}];

let average = getAverage(myScores);
let totalAverage = (average / 7);
console.log("My score average was a " + totalAverage.toFixed(2));
average = getAverage(yourScores);
totalAverage = (average / 7);
console.log("Your score average was a " + totalAverage.toFixed(2));