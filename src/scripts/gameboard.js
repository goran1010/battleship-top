import { placeBB, placeCL, placeDD, placeSS } from "./shipPlacement";

function createEmptyBoard() {
  let board = Array.from({ length: 15 }, () => Array(15).fill(null));
  return board;
}

export default class Gameboard {
  constructor() {
    this.board = createEmptyBoard();
    this.misses = [];
    this.hits = [];
    this.numberOfShips = { ss: 0, dd: 0, cl: 0, bb: 0 };
  }

  placeShip(type, coor, rotation) {
    switch (type) {
      case "ss":
        let result = placeSS(type, coor, this.board, rotation);
        if (result === true) {
          this.numberOfShips.ss++;
          return result;
        }

      case "dd":
        let result2 = placeDD(type, coor, this.board, rotation);
        if (result2 === true) {
          this.numberOfShips.dd++;
          return result2;
        }

      case "cl":
        let result3 = placeCL(type, coor, this.board, rotation);
        if (result3 === true) {
          this.numberOfShips.cl++;
          return result3;
        }

      case "bb":
        let result4 = placeBB(type, coor, this.board, rotation);
        if (result4 === true) {
          this.numberOfShips.bb++;
          return result4;
        }

      default:
        throw new Error("Unknown ship type");
    }
  }

  receiveAttack(coor) {
    if (coor.x < 0 || coor.x > 15 || coor.y < 0 || coor.y > 15) {
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
