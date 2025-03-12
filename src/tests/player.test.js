import Player from "../scripts/player";

describe("Testing Player class", () => {
  const human = new Player("human");

  test("create human player", () => {
    expect(human.type).toMatch("human");
  });
  test("create human player board", () => {
    expect(human.gameboard.board).toHaveLength(20);
  });
});
