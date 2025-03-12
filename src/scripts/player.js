import Gameboard from "./gameboard";

export default class Player {
  constructor(type = computer) {
    this.type = type;
    this.gameboard = new Gameboard();
  }
}
