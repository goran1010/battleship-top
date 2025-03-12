import renderDOM from "./DOM.js";
import Player from "./player.js";

export default function playGame() {
  const human = new Player("human");
  const computer = new Player("computer");

  renderDOM(human, computer);
}
