const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]


const ulEl = document.createElement("ul");
document.body.appendChild(ulEl);
// const teamEl = document.createElement("li");
// teamEl.innerText = warriorsGames[0].awayTeam.team;
// ulEl.appendChild(teamEl);
// const teamEl2 = document.createElement("li");
// teamEl2.innerText = warriorsGames[0].homeTeam.team;
// ulEl.appendChild(teamEl2);


for (let game of warriorsGames){
  const {homeTeam, awayTeam} = game;
  const gameLi =document.createElement("li");
  const teamLine = ` ${homeTeam.team} @ ${awayTeam.team} `;
  const homeScore = homeTeam.isWinner? `<b>${homeTeam.points}</b>` : `${homeTeam.points}`
  const awayScore = awayTeam.isWinner? `<b>${awayTeam.points}</b>` : `${awayTeam.points}`
  const scoreLine = `${homeScore}-${awayScore}`;
  gameLi.innerHTML = teamLine + scoreLine;
  let colorClass = ((homeTeam.isWinner && (homeTeam.team === "Golden State"))
   || (awayTeam.isWinner && (awayTeam === "Golden State"))) ?
     "win" : "loss"
  gameLi.classList.add(colorClass);

  
  ulEl.appendChild(gameLi);  
}

