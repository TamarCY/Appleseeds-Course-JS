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




const makeChart = (games) => {
    const ulEl = document.createElement("ul");
    for (let game of games){
    const {homeTeam, awayTeam} = game;
    const {points: hpoints, team: hteam} = homeTeam;
    const {points: apoints, team: ateam} = awayTeam;
    const gameLi =document.createElement("li");
    const teamLine = ` ${hteam} @ ${ateam} `;
    let scoreLine = getScoreLine (game);
    gameLi.innerHTML = teamLine + scoreLine;
    let colorClass = ((homeTeam.isWinner && (hteam === "Golden State"))
    || (awayTeam.isWinner && (ateam === "Golden State"))) ?
        "win" : "loss";
    gameLi.classList.add(colorClass);
    ulEl.appendChild(gameLi);  
    } 
    return ulEl   
}

const getScoreLine = ({homeTeam, awayTeam}) => {
    const {points: hpoints, team: hteam} = homeTeam;
    const {points: apoints, team: ateam} = awayTeam;
    const homeScore = homeTeam.isWinner? `<b>${hpoints}</b>` : `${hpoints}`
    const awayScore = awayTeam.isWinner? `<b>${apoints}</b>` : `${apoints}`
    const scoreLine = `${homeScore}-${awayScore}`;
    return scoreLine
} 

 const chart = makeChart(warriorsGames)

document.body.appendChild(chart);
