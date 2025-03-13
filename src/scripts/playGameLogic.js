import renderBoards from "./renderDOM.js";
import Player from "./player.js";
import { placeShip } from "./gameUI.js";

const result = document.querySelector("h1");

let human = new Player("human");
let computer = new Player("computer");

let startAttacking = false;
let isGameOver = false;

export default function restartGame() {
  result.textContent = "Playing...";
  isGameOver = false;
  human = new Player("human");
  computer = new Player("computer");
  startAttacking = false;
  // computer.gameboard.placeShip("ss", { x: 1, y: 1 });
  renderBoards(human, computer);
}

export function allowAttack() {
  try {
    if (
      human.gameboard.maxNumberOfShips.bb ===
        human.gameboard.currentNumberOfShips.bb &&
      human.gameboard.maxNumberOfShips.cl ===
        human.gameboard.currentNumberOfShips.cl &&
      human.gameboard.maxNumberOfShips.dd ===
        human.gameboard.currentNumberOfShips.dd &&
      human.gameboard.maxNumberOfShips.bb ===
        human.gameboard.currentNumberOfShips.bb
    ) {
      startAttacking = true;
      return true;
    }
    throw new Error("Required number of ships not placed on board");
  } catch (error) {
    console.log(error);
  }
}

export function placeShips(type, coor, rotation) {
  if (startAttacking === true) return;
  try {
    human.gameboard.placeShip(type, coor, rotation);
    renderBoards(human, computer);
  } catch (error) {
    console.log(error);
  }
}

let receiver;
export function attackShips(coor, attacker) {
  if (isGameOver === true) return;
  if (attacker === "human") {
    receiver = computer;
  } else {
    receiver = human;
  }

  // if (startAttacking === false) return;
  try {
    receiver.gameboard.receiveAttack(coor);
    if (receiver.gameboard.allShipsSunk() === true) {
      gameOver(receiver);
    }
    renderBoards(human, computer);
  } catch (error) {
    console.log(error);
  }
}

function gameOver(loser) {
  isGameOver = true;
  if (loser.type === "computer") result.textContent = "You won !";
  else result.textContent = "You lost !";
  return true;
}
