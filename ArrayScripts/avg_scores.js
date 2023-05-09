let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

let numMyScores = myScores.length;
    for(let i = 0; i<numMyScores; i++) {
        console.log(myScores[i]);
    }

let numYourScores = yourScores.length;
    for(let i = 0; i<numYourScores; i++) {
        console.log(yourScores[i]);
    }

function getMyAverage() {
    let myScoresAverage = ((myScores[0] + myScores [1] + myScores [2] + myScores [3] + myScores [4] + myScores [5] + myScores [6]) / myScores.length)
    console.log(myScoresAverage.toFixed(2))
}

function getYourAverage() {
    let yourScoresAverage = ((yourScores[0] + yourScores [1] + yourScores [2] + yourScores [3] + yourScores [4] + yourScores [5] + yourScores [6]) / yourScores.length)
    console.log(yourScoresAverage.toFixed(2))
}

console.log(getMyAverage())
console.log(getYourAverage())