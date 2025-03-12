import Gameboard from "../scripts/gameboard";

describe("Testing basic submarine placement", () => {
  const gameboard = new Gameboard();
  test("gameboard is an object", () => {
    expect(gameboard).toEqual(expect.any(Object));
  });

  test("board is an array with 20 elements", () => {
    expect(gameboard.board).toHaveLength(20);
  });

  test("board's first element is an array with 20 elements", () => {
    expect(gameboard.board[0]).toHaveLength(20);
  });

  let type = "ss";
  let coor = { x: 3, y: 7 };

  gameboard.placeShip(type, coor);

  test("coor next to submarine should be null", () => {
    expect(gameboard.board[2][7]).toBe(null);
  });

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

  let coor3 = { x: 19, y: 7 };
  test("placed another submarine right next to edge of gameboard", () => {
    expect(() => gameboard.placeShip(type, coor3)).toThrow(
      "Invalid placement, out of Gameboard bounds"
    );
  });
});

describe("Testing basic destroyer placement", () => {
  const gameboard = new Gameboard();

  let type = "dd";
  let coor = { x: 6, y: 7 };
  let rotation = "hor";

  gameboard.placeShip(type, coor, rotation);

  test("is destroyer taking exact place on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y].type).toMatch("dd");
  });

  test("is destroyer taking second spot on board", () => {
    expect(gameboard.board[coor.x + 1][coor.y].type).toMatch("dd");
  });

  let coor2 = { x: 18, y: 7 };
  test("checking if destroyer's second spot checks validity of board edge", () => {
    expect(() => gameboard.placeShip(type, coor2, rotation)).toThrow(
      "Invalid placement, out of Gameboard bounds"
    );
  });
});

describe("Testing basic cruiser placement", () => {
  const gameboard = new Gameboard();

  let type = "cl";
  let coor = { x: 1, y: 2 };
  let rotation = "ver";

  gameboard.placeShip(type, coor, rotation);

  test("is cruiser taking exact place on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y].type).toMatch("cl");
  });

  test("is cruiser taking second spot on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y + 1].type).toMatch("cl");
  });

  test("is cruiser taking third spot on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y - 1].type).toMatch("cl");
  });
});

describe("Testing basic battleship placement", () => {
  const gameboard = new Gameboard();

  let type = "bb";
  let coor = { x: 3, y: 4 };
  let rotation = "ver";

  gameboard.placeShip(type, coor, rotation);

  test("is battleship taking exact place on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y].type).toMatch("bb");
  });

  test("is battleship taking second spot on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y + 1].type).toMatch("bb");
  });

  test("is battleship taking third spot on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y - 1].type).toMatch("bb");
  });

  test("is battleship taking fourth spot on board correctly", () => {
    expect(gameboard.board[coor.x][coor.y + 2].type).toMatch("bb");
  });

  let coor2 = { x: 3, y: 2 };

  test("is battleship overlapping correctly vertically by throwing error", () => {
    expect(() => gameboard.placeShip(type, coor2, rotation)).toThrow(
      "Invalid placement, there is a ship at or next to this coordinate"
    );
  });

  let rotation2 = "hor";
  let coor3 = { x: 4, y: 2 };
  test("is battleship overlapping correctly horizontally by throwing error", () => {
    expect(() => gameboard.placeShip(type, coor3, rotation2)).toThrow(
      "Invalid placement, there is a ship at or next to this coordinate"
    );
  });
});

describe("Receive attack function", () => {
  let coor = { x: 0, y: 0 };
  const gameboard = new Gameboard();
  let coor2 = { x: 4, y: 4 };
  gameboard.placeShip("bb", coor2, "hor");
  let coor3 = { x: 3, y: 4 };

  test("invalid x coordinates for attack", () => {
    expect(() => gameboard.receiveAttack({ x: 34, y: 5 })).toThrow(
      "Invalid coordinates. Out of gameboard bounds."
    );
  });

  test("invalid y coordinates for attack", () => {
    expect(() => gameboard.receiveAttack({ x: 5, y: 25 })).toThrow(
      "Invalid coordinates. Out of gameboard bounds."
    );
  });

  test("miss attack", () => {
    expect(gameboard.receiveAttack(coor)).toBe(false);
  });

  test("hit direct attack", () => {
    expect(gameboard.receiveAttack(coor2)).toBe(true);
  });
  test("hit second square attack", () => {
    expect(gameboard.receiveAttack(coor3)).toBe(true);
  });
});

describe("Check if isSunk is working", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip("ss", { x: 4, y: 4 });
  gameboard.receiveAttack({ x: 4, y: 4 });

  test("hitting and sinking a submarine", () => {
    expect(gameboard.board[4][4].isSunk()).toBe(true);
  });

  gameboard.placeShip("cl", { x: 10, y: 10 }, "hor");

  test("checking does board know all of it's ships are not sunk", () => {
    expect(gameboard.allShipsSunk()).toBe(false);
  });
});

describe("Check if all ships are sunk", () => {
  const gameboard = new Gameboard();

  gameboard.placeShip("cl", { x: 10, y: 10 }, "hor");
  gameboard.receiveAttack({ x: 10, y: 10 });
  gameboard.receiveAttack({ x: 11, y: 10 });
  gameboard.receiveAttack({ x: 9, y: 10 });

  test("checking does board know all of it's ships are sunk", () => {
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
