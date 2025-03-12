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
    }
  }
}
