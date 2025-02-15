competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python","HTML"],
]
results = [0, 0, 1]

function WhoIstournamentWinner(comp) {
    var hashMap = {};
    var tounrnWin = "";
    var winner ="";
    var currentPoints = 0
    for (var i = 0; i < comp.length; i++){
        var [homeTeam, awayTeam] = comp[i];
        if (results[i] === 0) {
            winner = awayTeam;
        } 
        else {
            winner = homeTeam;
        }
        if (!hashMap[winner]) {
            hashMap[winner] = 0
        }
        hashMap[winner] += 3;
       if (hashMap[winner] > currentPoints) {
        currentPoints = hashMap[winner];
        tounrnWin = winner;
      }
    }
    return tounrnWin;
} 
WhoIstournamentWinner(competitions);
console.log(WhoIstournamentWinner(competitions));

