let playerScore = 0;
let cpuScore = 0;
let gameOver = false;
let waiting = false;

async function GameLogic() {
  updateScreen("🏁Que empiece el juego🏁");

  while (!gameOver) {
    let playerPick;
    let playerIcon;
    playerPick = await getPlayerChoice();
    let roundMessage = "";

    switch (playerPick) {
      case "rock":
        roundMessage += "🃏Player1 💎<br>";
        playerIcon = "💎";
        break;
      case "paper":
        roundMessage += "🃏Player1 🧻<br>";
        playerIcon = "🧻";
        break;
      case "scissors":
        roundMessage += "🃏Player1 ✂<br>";
        playerIcon = "✂";
        break;
      default:
        roundMessage += "🃏Player1 💎<br>";
        break;
    }

    const cpuPick = getCpuChoice();
    let cpuIcon;
    switch (cpuPick) {
      case "rock":
        roundMessage += "🤖CPU 💎<br>";
        cpuIcon = "💎";
        break;
      case "paper":
        roundMessage += "🤖CPU 🧻<br>";
        cpuIcon = "🧻";
        break;
      case "scissors":
        roundMessage += "🤖CPU ✂<br>";
        cpuIcon = "✂";
        break;
      default:
        roundMessage += "🤖CPU ✂<br>";
        break;
    }

    const result = determineWinner(playerPick, cpuPick);
    roundMessage +=
      (result === "player"
        ? `${playerIcon} gana a ${cpuIcon}`
        : result === "cpu"
        ? `${playerIcon} pierde contra ${cpuIcon}`
        : `${playerIcon} empate ${cpuIcon}`) + "<br>";

    if (result === "player") {
      playerScore++;
    } else if (result === "cpu") {
      cpuScore++;
    }

    if (playerScore > cpuScore) {
      roundMessage += `👑Player: ${playerScore}, CPU: ${cpuScore}<br>`;
    } else if (playerScore < cpuScore) {
      roundMessage += `Player: ${playerScore}, 👑CPU: ${cpuScore}<br>`;
    } else {
      roundMessage += `👑Player: ${playerScore}, 👑CPU: ${cpuScore}<br>`;
    }

    updateScreen(roundMessage);

    if (playerScore >= 3 || cpuScore >= 3) {
      gameOver = true;
      updateScreen(
        playerScore >= 3
          ? "¡Los humanos vuelven a ganar👏🤺👪!"
          : "¡Los robots son mas fuertes que nosostros👾☠🥺!"
      );
    }
  }
}

function getPlayerChoice() {
  return new Promise((resolve) => {
    waiting = true;
    document.getElementById("rock").onclick = function () {
      if (waiting) {
        resolve("rock");
        waiting = false;
      }
    };
    document.getElementById("paper").onclick = function () {
      if (waiting) {
        resolve("paper");
        waiting = false;
      }
    };
    document.getElementById("scissors").onclick = function () {
      if (waiting) {
        resolve("scissors");
        waiting = false;
      }
    };
  });
}

function getCpuChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function determineWinner(player, cpu) {
  if (player === cpu) {
    return "draw";
  }
  if (
    (player === "rock" && cpu === "scissors") ||
    (player === "paper" && cpu === "rock") ||
    (player === "scissors" && cpu === "paper")
  ) {
    return "player";
  }
  return "cpu";
}

function updateScreen(message) {
    let tableDiv = document.getElementById("table");
    
    let roundBox = document.createElement("div");
    roundBox.classList.add("box");
    
    let paragraph = document.createElement("p");
    paragraph.innerHTML = message;

    roundBox.appendChild(paragraph);

    tableDiv.appendChild(roundBox);
    
    
    setTimeout(() => {
        paragraph.classList.add("show");
    }, 100); 
}

GameLogic();
