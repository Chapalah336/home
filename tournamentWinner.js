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