import { placeBB, placeCL, placeDD, placeSS } from "./shipPlacement";

function createEmptyBoard() {
  const array = [];
  for (let i = 0; i < 20; i++) {
    array.push([]);
    array.forEach((element) => {
      for (let j = 0; j < 20; j++) {
        element.push(null);
      }
    });
  }
  return array;
}

export default class Gameboard {
  constructor() {
    this.board = createEmptyBoard();
    this.misses = [];
    this.hits = [];
  }

  placeShip(type, coor, rotation) {
    switch (type) {
      case "ss":
        placeSS(type, coor, this.board, rotation);
        break;
      case "dd":
        placeDD(type, coor, this.board, rotation);
        break;
      case "cl":
        placeCL(type, coor, this.board, rotation);
        break;
      case "bb":
        placeBB(type, coor, this.board, rotation);
        break;
      default:
        throw new Error("Unknown ship type");
    }
  }

  receiveAttack(coor) {
    if (coor.x < 0 || coor.x > 20 || coor.y < 0 || coor.y > 20) {
      throw new Error("Invalid coordinates. Out of gameboard bounds.");
    }
    if (this.board[coor.x][coor.y] === null) {
      this.misses.push(coor);
      return false;
    }
    this.hits.push(coor);
    this.board[coor.x][coor.y].isHit();
    return true;
  }

  allShipsSunk() {
    let result = true;
    this.board.forEach((x) => {
      x.forEach((ship) => {
        if (ship !== null) {
          if (ship.sunk === false) {
            result = false;
          }
        }
      });
    });
    return result;
  }
}
