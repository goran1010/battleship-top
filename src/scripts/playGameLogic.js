import renderBoards from "./renderDOM.js";
import Player from "./player.js";
import { placeShip } from "./gameUI.js";
import { AIAttack, AIshipPlace } from "./AIPlays.js";

const result = document.querySelector("h1");

export let human = new Player("human");
export let computer = new Player("computer");

let startAttacking = false;
let isGameOver = false;

export default function restartGame() {
  try {
    result.textContent = "Playing...";
    isGameOver = false;
    human = new Player("human");
    computer = new Player("computer");
    startAttacking = false;
    AIshipPlace(computer);

    renderBoards(human, computer);
  } catch (error) {
    console.log(error);
  }
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
    allowAttack();
    renderBoards(human, computer);
  } catch (error) {
    console.log(error);
  }
}

export function placeShipsRandomly() {
  if (startAttacking === true) return;
  AIshipPlace(human);
  allowAttack();
  renderBoards(human, computer);
}

let receiver;
export function attackShips(coor, attacker) {
  if (isGameOver === true) return;
  if (attacker === "human") {
    receiver = computer;
  } else {
    receiver = human;
  }

  if (startAttacking === false) return;
  try {
    receiver.gameboard.receiveAttack(coor);
    if (receiver.gameboard.allShipsSunk() === true) {
      gameOver(receiver);
    }
    if (attacker === "human") {
      AIAttack(human);
      if (human.gameboard.allShipsSunk() === true) {
        gameOver(human);
      }
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
