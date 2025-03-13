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
    this.currentNumberOfShips = { ss: 0, dd: 0, cl: 0, bb: 0 };
    this.maxNumberOfShips = { ss: 4, dd: 3, cl: 2, bb: 1 };
  }

  placeShip(type, coor, rotation) {
    switch (type) {
      case "ss":
        if (this.currentNumberOfShips.ss >= this.maxNumberOfShips.ss)
          throw new Error("Max number of submarines reached");
        let result = placeSS(type, coor, this.board, rotation);
        if (result === true) {
          this.currentNumberOfShips.ss++;
          return result;
        }

      case "dd":
        if (this.currentNumberOfShips.dd >= this.maxNumberOfShips.dd)
          throw new Error("Max number of destroyers reached");
        let result2 = placeDD(type, coor, this.board, rotation);
        if (result2 === true) {
          this.currentNumberOfShips.dd++;
          return result2;
        }

      case "cl":
        if (this.currentNumberOfShips.cl >= this.maxNumberOfShips.cl)
          throw new Error("Max number of cruisers reached");
        let result3 = placeCL(type, coor, this.board, rotation);
        if (result3 === true) {
          this.currentNumberOfShips.cl++;
          return result3;
        }

      case "bb":
        if (this.currentNumberOfShips.bb >= this.maxNumberOfShips.bb)
          throw new Error("Max number of battleships reached");
        let result4 = placeBB(type, coor, this.board, rotation);
        if (result4 === true) {
          this.currentNumberOfShips.bb++;
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
    this.misses.forEach((miss) => {
      if (miss.x === coor.x && miss.y === coor.y) {
        throw new Error("Already missed here");
      }
    });
    this.hits.forEach((hit) => {
      if (hit.x === coor.x && hit.y === coor.y) {
        throw new Error("Already hit here");
      }
    });

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
