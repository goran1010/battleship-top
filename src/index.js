import "./style.css";
import addFavicon from "./addFavicon/addFavicon.js";
import Player from "./scripts/player.js";

const human = new Player("human");

human.gameboard.placeShip("dd", { x: 17, y: 2 }, "hor");
human.gameboard.receiveAttack({ x: 17, y: 2 });
human.gameboard.receiveAttack({ x: 18, y: 2 });
human.gameboard.receiveAttack({ x: 8, y: 2 });

human.gameboard.placeShip("ss", { x: 1, y: 1 }, "hor");
human.gameboard.receiveAttack({ x: 1, y: 1 });

human.gameboard.placeShip("cl", { x: 11, y: 11 }, "hor");
human.gameboard.receiveAttack({ x: 11, y: 11 });
human.gameboard.receiveAttack({ x: 12, y: 11 });
human.gameboard.receiveAttack({ x: 10, y: 11 });

human.gameboard.placeShip("bb", { x: 4, y: 4 }, "ver");
human.gameboard.receiveAttack({ x: 4, y: 4 });
human.gameboard.receiveAttack({ x: 4, y: 5 });
human.gameboard.receiveAttack({ x: 4, y: 3 });
human.gameboard.receiveAttack({ x: 4, y: 6 });

console.log(human);
console.log(human.gameboard.allShipsSunk());
