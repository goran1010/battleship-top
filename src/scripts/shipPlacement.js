import Ship from "./ship";

function checkValidityOfCoor(coor, board) {
  if (coor.x > 18 || coor.x < 1 || coor.y > 18 || coor.y < 1) {
    return -1;
  }
  let boardUp = board[coor.x][coor.y + 1];
  let boardDown = board[coor.x][coor.y - 1];
  let boardRight = board[coor.x + 1][coor.y];
  let boardLeft = board[coor.x - 1][coor.y];
  let boardExactCoor = board[coor.x][coor.y];

  if (!boardExactCoor && !boardUp && !boardRight && !boardDown && !boardLeft) {
    return true;
  }
  return false;
}

function placeSS(type, coor, board) {
  let validity = checkValidityOfCoor(coor, board);
  if (validity === true) {
    board[coor.x][coor.y] = new Ship(type);
    return;
  }
  if (validity === false) {
    throw new Error(
      "Invalid placement, there is a ship at or next to this coordinate"
    );
  }
  throw new Error("Invalid placement, out of Gameboard bounds");
}

function placeDD(type, coor, board, rotation) {
  let validity = checkValidityOfCoor(coor, board);
  if (validity === true) {
    if (rotation === "hor") {
      let coor2 = { x: coor.x + 1, y: coor.y };
      let validity2 = checkValidityOfCoor(coor2, board);
      if (validity2 === true) {
        board[coor.x][coor.y] = new Ship(type);
        board[coor.x + 1][coor.y] = board[coor.x][coor.y];
        return;
      }
      if (validity2 === false) {
        throw new Error(
          "Invalid placement, there is a ship at or next to this coordinate"
        );
      }
    }

    if (rotation === "ver") {
      let coor2 = { x: coor.x, y: coor.y + 1 };
      let validity2 = checkValidityOfCoor(coor2, board);
      if (validity2 === true) {
        board[coor.x][coor.y] = new Ship(type);
        board[coor.x][coor.y + 1] = board[coor.x][coor.y];
        return;
      }
      if (validity2 === false) {
        throw new Error(
          "Invalid placement, there is a ship at or next to this coordinate"
        );
      }
    }
  }
  if (validity === false) {
    throw new Error(
      "Invalid placement, there is a ship at or next to this coordinate"
    );
  }
  throw new Error("Invalid placement, out of Gameboard bounds");
}

function placeCL(type, coor, board, rotation) {
  let validity = checkValidityOfCoor(coor, board);
  if (validity === true) {
    if (rotation === "hor") {
      let coor2 = { x: coor.x + 1, y: coor.y };
      let validity2 = checkValidityOfCoor(coor2, board);
      if (validity2 === true) {
        let coor3 = { x: coor.x - 1, y: coor.y };
        let validity3 = checkValidityOfCoor(coor3, board);
        if (validity3 === true) {
          board[coor.x][coor.y] = new Ship(type);
          board[coor.x + 1][coor.y] = board[coor.x][coor.y];
          board[coor.x - 1][coor.y] = board[coor.x][coor.y];
          return;
        }
        if (validity3 === false) {
          throw new Error(
            "Invalid placement, there is a ship at or next to this coordinate"
          );
        }
      }
      if (validity2 === false) {
        throw new Error(
          "Invalid placement, there is a ship at or next to this coordinate"
        );
      }
    }
    if (rotation === "ver") {
      let coor2 = { x: coor.x, y: coor.y + 1 };
      let validity2 = checkValidityOfCoor(coor2, board);
      if (validity2 === true) {
        let coor3 = { x: coor.x, y: coor.y - 1 };
        let validity3 = checkValidityOfCoor(coor3, board);
        if (validity3 === true) {
          board[coor.x][coor.y] = new Ship(type);
          board[coor.x][coor.y + 1] = board[coor.x][coor.y];
          board[coor.x][coor.y - 1] = board[coor.x][coor.y];
          return;
        }
        if (validity3 === false) {
          throw new Error(
            "Invalid placement, there is a ship at or next to this coordinate"
          );
        }
      }
      if (validity2 === false) {
        throw new Error(
          "Invalid placement, there is a ship at or next to this coordinate"
        );
      }
    }
  }
  if (validity === false) {
    throw new Error(
      "Invalid placement, there is a ship at or next to this coordinate"
    );
  }
  throw new Error("Invalid placement, out of Gameboard bounds");
}

function placeBB(type, coor, board, rotation) {
  let validity = checkValidityOfCoor(coor, board);
  if (validity === true) {
    if (rotation === "hor") {
      let coor2 = { x: coor.x + 1, y: coor.y };
      let validity2 = checkValidityOfCoor(coor2, board);
      if (validity2 === true) {
        let coor3 = { x: coor.x - 1, y: coor.y };
        let validity3 = checkValidityOfCoor(coor3, board);
        if (validity3 === true) {
          let coor4 = { x: coor.x + 2, y: coor.y };
          let validity4 = checkValidityOfCoor(coor4, board);
          if (validity4 === true) {
            board[coor.x][coor.y] = new Ship(type);
            board[coor.x + 1][coor.y] = board[coor.x][coor.y];
            board[coor.x - 1][coor.y] = board[coor.x][coor.y];
            board[coor.x + 2][coor.y] = board[coor.x][coor.y];
            return;
          }
          if (validity4 === false) {
            throw new Error(
              "Invalid placement, there is a ship at or next to this coordinate"
            );
          }
        }
        if (validity3 === false) {
          throw new Error(
            "Invalid placement, there is a ship at or next to this coordinate"
          );
        }
      }
      if (validity2 === false) {
        throw new Error(
          "Invalid placement, there is a ship at or next to this coordinate"
        );
      }
    }
    if (rotation === "ver") {
      let coor2 = { x: coor.x, y: coor.y + 1 };
      let validity2 = checkValidityOfCoor(coor2, board);
      if (validity2 === true) {
        let coor3 = { x: coor.x, y: coor.y - 1 };
        let validity3 = checkValidityOfCoor(coor3, board);
        if (validity3 === true) {
          let coor4 = { x: coor.x, y: coor.y + 2 };
          let validity4 = checkValidityOfCoor(coor4, board);
          if (validity4 === true) {
            board[coor.x][coor.y] = new Ship(type);
            board[coor.x][coor.y + 1] = board[coor.x][coor.y];
            board[coor.x][coor.y - 1] = board[coor.x][coor.y];
            board[coor.x][coor.y + 2] = board[coor.x][coor.y];
            return;
          }
          if (validity4 === false) {
            throw new Error(
              "Invalid placement, there is a ship at or next to this coordinate"
            );
          }
        }
        if (validity3 === false) {
          throw new Error(
            "Invalid placement, there is a ship at or next to this coordinate"
          );
        }
      }
      if (validity2 === false) {
        throw new Error(
          "Invalid placement, there is a ship at or next to this coordinate"
        );
      }
    }
  }
  if (validity === false) {
    throw new Error(
      "Invalid placement, there is a ship at or next to this coordinate"
    );
  }
  throw new Error("Invalid placement, out of Gameboard bounds");
}

export { placeBB, placeCL, placeDD, placeSS };
