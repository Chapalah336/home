competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python","HTML"],
]
results = [0, 0, 1]

function WhoIstournamentWinner(comp) {
    var hashMap = new Map();
    var tounrnWin = "";
    hashMap.set(awayTeam, 0);
    hashMap.set(homeTeam, 0);
    for (var i = 0; i < comp.length; i++){
        var [awayTeam, homeTeam] = comp[i];
        if (results[i] === 0) {
            hashMap.set(homeTeam, hashMap.get(homeTeam) + 3);
        } 
        else {
            hashMap.set(awayTeam, hashMap.get(awayTeam) + 3);
        }
       if (hashMap.get(homeTeam) > hashMap.get(awayTeam)) {
       tounrnWin = homeTeam;
       }
       else {
        tounrnWin = awayTeam;
       }
    }
    return tounrnWin;
} 
WhoIstournamentWinner(competitions);
console.log(WhoIstournamentWinner(competitions));