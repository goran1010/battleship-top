import Ship from "./ship";

function createEmptyBoard() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push([]);
    array.forEach((element) => {
      for (let j = 0; j < 10; j++) {
        element.push(null);
      }
    });
  }
  return array;
}

function checkValidityOfCoor(type, coor, rotation = "ver", board) {
  let boardUp = board[coor.x][coor.y + 1];
  let boardDown = board[coor.x][coor.y - 1];
  let boardRight = board[coor.x + 1][coor.y];
  let boardLeft = board[coor.x - 1][coor.y];
  let boardExactCoor = board[coor.x][coor.y];

  if (coor.x > 10 || coor.x < 0 || coor.y > 10 || coor.y < 0) {
    throw new Error("Invalid placement, out of Gameboard bounds");
  }
  if (!boardExactCoor && !boardUp && !boardRight && !boardDown && !boardLeft) {
    return true;
  }
  return false;
}

export default class Gameboard {
  constructor() {
    this.board = createEmptyBoard();
  }

  placeShip(type, coor, rotation) {
    if (checkValidityOfCoor(type, coor, rotation, this.board) === false) {
      throw new Error(
        "Invalid placement, there is a ship at or next to this coordinate"
      );
    }
    // switch (type) {
    //   case "ss":
    //     placeSS();
    //   case "dd":
    //     placeDD();
    //   case "cl":
    //     placeCL();
    //   case "bb":
    //     placeBB();
    // }
  }
}
