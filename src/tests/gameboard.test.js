import Gameboard from "../scripts/gameboard";

describe("Testing gameboard class", () => {
  const playerBoard = new Gameboard();
  let type = "ss";
  let coor = { x: 3, y: 7 };

  expect(playerBoard.placeShip(type, coor));
});
