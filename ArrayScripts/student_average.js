let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

function studentAverage(allStudents) {

    let numOfStudents = allStudents.length;

    average = 0;

        for (i = 0; i < numOfStudents; i++) {
            let students = allStudents[i];
            let numOfScores = students.scores.length;
            let total = 0;
                
                for (s = 0; s < numOfScores; s++){
                    total += students.scores[s];
                }
                average = total / numOfScores;
                
            console.log(`Student ${i} average score: ${average.toFixed(2)} `);
        }
}

studentAverage(students);
