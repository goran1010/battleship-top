import restartGame, {
  allowAttack,
  attackShips,
  placeShips,
} from "./playGameLogic";

export const placeShip = document.querySelector(".place-ship");

const restartGameButton = document.querySelector(".restart");
restartGameButton.addEventListener("click", () => {
  restartGame();
  gameStarted.classList.remove("started");
  gameStarted.textContent = "Start Attacking";
});

const gameStarted = document.querySelector(".play");
gameStarted.addEventListener("click", () => {
  if (allowAttack() === true) {
    gameStarted.classList.add("started");
    gameStarted.textContent = "Attacking...";
  }
});

placeShip.addEventListener("click", () => {
  const coor = {
    x: +document.querySelector("#coor-x").value,
    y: +document.querySelector("#coor-y").value,
  };

  const rotation = document.querySelector("#rotation").value;
  const type = document.querySelector("#type").value;

  placeShips(type, coor, rotation);
});

const humanBoard = document.querySelector(".human-container");
humanBoard.addEventListener("click", (e) => {
  const rotation = document.querySelector("#rotation").value;
  const type = document.querySelector("#type").value;
  let coorX = +e.target.getAttribute("data-x");
  let coorY = +e.target.getAttribute("data-y");
  const coor = { x: coorX, y: coorY };

  placeShips(type, coor, rotation);
});

const computerBoard = document.querySelector(".computer-container");
computerBoard.addEventListener("click", (e) => {
  let coorX = +e.target.getAttribute("data-x");
  let coorY = +e.target.getAttribute("data-y");
  const coor = { x: coorX, y: coorY };

  attackShips(coor, "human");
});
