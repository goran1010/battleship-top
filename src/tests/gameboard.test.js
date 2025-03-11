import Gameboard from "../scripts/gameboard";

describe("Testing basic submarine placement", () => {
  const gameboard = new Gameboard();
  test("gameboard is an object", () => {
    expect(gameboard).toEqual(expect.any(Object));
  });

  test("board is an array with 10 elements", () => {
    expect(gameboard.board).toHaveLength(10);
  });

  let type = "ss";
  let coor = { x: 3, y: 7 };

  gameboard.placeShip(type, coor);

  test("placed sub coor on board is not null", () => {
    expect(gameboard.board[coor.x][coor.y]).not.toBe(null);
  });

  test("placed sub coor on board is an object", () => {
    expect(gameboard.board[coor.x][coor.y]).toEqual(expect.any(Object));
  });

  test("placed sub coor on board's object's type is correct", () => {
    expect(gameboard.board[coor.x][coor.y].type).toMatch("ss");
  });

  test("placed another submarine on the same submarine coor", () => {
    expect(() => gameboard.placeShip(type, coor)).toThrow(
      "Invalid placement, there is a ship at or next to this coordinate"
    );
  });

  let coor2 = { x: 4, y: 7 };
  test("placed another submarine right next to previous submarine", () => {
    expect(() => gameboard.placeShip(type, coor2)).toThrow(
      "Invalid placement, there is a ship at or next to this coordinate"
    );
  });
});

describe("Testing basic destroyer placement", () => {
  const gameboard = new Gameboard();

  let type = "dd";
  let coor = { x: 6, y: 9 };
  let rotation = "hor" || "ver";

  gameboard.placeShip(type, coor, rotation);

  test("is destroyer taking exact place on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y].type).toMatch("dd");
  });

  test("is destroyer taking second spot on board correctly", () => {
    expect(gameboard.board[coor.x + 1][coor.y].type).toMatch("dd");
  });
});
