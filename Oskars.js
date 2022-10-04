function oscars(input) {
    let authorName = input[0];
    let authorCredits = Number(input[1]);
    let judgeCount = Number(input[2]);
 
    let totalScore = authorCredits;
 
    let judgeNameIndex = 3;
    let judgeScoreIndex = 4;
 
    for (let i = 0; i < judgeCount; i++) {
        let currentJudgeName = input[judgeNameIndex];
        let currentJudgeScore = Number(input[judgeScoreIndex]);
 
        if (!currentJudgeName || !currentJudgeScore) {
            break;
        }
 
        totalScore += (currentJudgeName.length * currentJudgeScore) / 2;
 
        if (totalScore > 1250.5) {
            break;
        }
 
        judgeNameIndex += 2;
        judgeScoreIndex += 2;
    }
 
    if (totalScore > 1250.5) {
        console.log(`Congratulations, ${authorName} got a nominee for leading role with ${(totalScore).toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${authorName} you need ${(1250.5 - totalScore).toFixed(1)} more!`);
    }
}
oscars((["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]));