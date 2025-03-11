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

function checkValidityOfCoor(type, coor, board, rotation = "hor") {
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
  throw new Error(
    "Invalid placement, there is a ship at or next to this coordinate"
  );
}

function placeSS(type, coor, board) {
  checkValidityOfCoor(type, coor, board);
  board[coor.x][coor.y] = new Ship(type);
}

function placeDD(type, coor, board, rotation) {
  checkValidityOfCoor(type, coor, board, rotation);
  board[coor.x][coor.y] = new Ship(type);
  if (rotation === "hor") {
    board[coor.x + 1][coor.y] = board[coor.x][coor.y];
    return;
  }
  if (rotation === "ver") {
    board[coor.x][coor.y + 1] = board[coor.x][coor.y];
    return;
  }
}

export default class Gameboard {
  constructor() {
    this.board = createEmptyBoard();
  }

  placeShip(type, coor, rotation) {
    if (type === "ss") {
      placeSS(type, coor, this.board);
      return;
    }
    if (type === "dd") {
      placeDD(type, coor, this.board, rotation);
      return;
    }
  }
}
