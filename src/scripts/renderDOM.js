const container = document.querySelector(".container");
const computerContainer = document.querySelector(".computer-container");
const humanContainer = document.querySelector(".human-container");

export default function renderBoards(human, computer) {
  computerContainer.innerHTML = "";
  humanContainer.innerHTML = "";
  renderComputerBoard(computer);
  renderHumanBoard(human);
  renderMisses(human, computer);
  renderHits(human, computer);
}

function renderMisses(human, computer) {
  const missesOnComputer = Array.from(
    document.querySelectorAll(".computer-square")
  );

  computer.gameboard.misses.forEach((miss) => {
    missesOnComputer.forEach((square) => {
      if (
        +square.getAttribute("data-x") === miss.x &&
        +square.getAttribute("data-y") === miss.y
      ) {
        square.classList.add("miss");
      }
    });
  });

  const missesOnHuman = Array.from(document.querySelectorAll(".human-square"));

  human.gameboard.misses.forEach((miss) => {
    missesOnHuman.forEach((square) => {
      if (
        +square.getAttribute("data-x") === miss.x &&
        +square.getAttribute("data-y") === miss.y
      ) {
        square.classList.add("miss");
      }
    });
  });
}

function renderHits(human, computer) {
  const hitsOnComputer = Array.from(
    document.querySelectorAll(".computer-square")
  );

  computer.gameboard.hits.forEach((hit) => {
    hitsOnComputer.forEach((square) => {
      if (
        +square.getAttribute("data-x") === hit.x &&
        +square.getAttribute("data-y") === hit.y
      ) {
        square.classList.add("hit");
      }
    });
  });

  const hitsOnHuman = Array.from(document.querySelectorAll(".human-square"));

  human.gameboard.hits.forEach((hit) => {
    hitsOnHuman.forEach((square) => {
      if (
        +square.getAttribute("data-x") === hit.x &&
        +square.getAttribute("data-y") === hit.y
      ) {
        square.classList.add("hit");
      }
    });
  });
}

function renderComputerBoard(computer) {
  computer.gameboard.board.forEach((column, indexX) => {
    let temp = document.createElement("div");
    column.forEach((row, indexY) => {
      const div = document.createElement("div");
      if (row !== null) {
        div.classList.add("has-ship");
      }
      div.classList.add("computer-square");
      div.setAttribute("data-x", indexX);
      div.setAttribute("data-y", indexY);
      temp.appendChild(div);
    });
    computerContainer.appendChild(temp);
  });
  container.append(computerContainer);
}

function renderHumanBoard(human) {
  human.gameboard.board.forEach((column, indexX) => {
    let temp = document.createElement("div");
    column.forEach((row, indexY) => {
      const div = document.createElement("div");
      if (row !== null) {
        div.classList.add("has-ship");
      }
      div.setAttribute("data-x", indexX);
      div.setAttribute("data-y", indexY);
      div.classList.add("human-square");
      temp.appendChild(div);
    });
    humanContainer.appendChild(temp);
  });
  container.append(humanContainer);
}
