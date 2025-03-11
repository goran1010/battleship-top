import Ship from "../scripts/ship";

describe("Testing submarine class of Ship", () => {
  const ss = new Ship("ss");

  test("Submarine length", () => {
    expect(ss.length).toBe(1);
  });

  ss.isHit();
  test("Submarine hits 1", () => {
    expect(ss.hits).toBe(1);
  });
  expect(ss.isSunk()).toBe(true);

  test("Submarine hits 2", () => {
    expect(() => ss.isHit()).toThrow("Ship has received max number of hits");
  });
  expect(ss.isSunk()).toBe(true);
});

describe("Testing destroyer class of Ship", () => {
  const dd = new Ship("dd");

  test("Destroyer length", () => {
    expect(dd.length).toBe(2);
  });

  dd.isHit();
  dd.isHit();
  test("Destroyer hits 2", () => {
    expect(dd.hits).toBe(2);
  });

  expect(dd.isSunk()).toBe(true);
});

describe("Testing cruiser class of Ship", () => {
  const cl = new Ship("cl");

  test("Cruiser length", () => {
    expect(cl.length).toBe(3);
  });

  expect(cl.isSunk()).toBe(false);
});

describe("Testing battleship class of Ship", () => {
  const bb = new Ship("bb");

  test("Battleship length", () => {
    expect(bb.length).toBe(4);
  });
});

describe("Testing unknown type of Ship", () => {
  test("Battleship length", () => {
    expect(() => new Ship("ship")).toThrow("Unknown Ship type");
  });
});
