// competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python","HTML"],
// ]
// results = [0, 0, 1]

// function WhoIstournamentWinner(comp) {
//     var hashMap = new Map();
//     var tounrnWin = "";
//     var winner ="";
//     var currentPoints = 0
//     for (var i = 0; i < comp.length; i++){
//         var [homeTeam, awayTeam] = comp[i];
//         if (results[i] === 0) {
//             winner = awayTeam;
//             hashMap.set(winner, (hashMap.get(winner) || 0) + 3);
//         } 
//         else {
//             winner = homeTeam;
//             hashMap.set(winner, (hashMap.get(winner) || 0) + 3);
//         }
//         console.log(hashMap)
//        var Points = hashMap.get(winner);
//        if (Points > currentPoints) {
//         currentPoints = Points;
//         tounrnWin = winner;
//       }
//     }
//     return tounrnWin;
// } 
// WhoIstournamentWinner(competitions);
// console.log(WhoIstournamentWinner(competitions));

competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python","HTML"],
]
results = [0, 0, 1]
function WhoIstournamentWinner(comp, res) {
    result = {
        winnerteam : "",
        currentPoints : 0
    };
    for (var i = 0; i < comp.length; i++) {
        var [homeTeam, awayTeam] = comp[i];
        var winner;
        if (res[i] === 0) {
            winner = awayTeam;
            result[winner] = (result[winner] || 0) + 3;
        } else {
            winner = homeTeam;
            result[winner] = (result[winner] || 0) + 3;
        }
        if (result[winner] > result.currentPoints) {
            result.currentPoints = result[winner];
            result.winnerteam = winner;
        }
            console.log(result)
    }
    return result.winnerteam;
}
console.log(WhoIstournamentWinner(competitions, results));