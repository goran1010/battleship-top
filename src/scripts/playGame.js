import renderDOM from "./renderDOM.js";
import Player from "./player.js";

export default function restartGame() {
  const human = new Player("human");
  const computer = new Player("computer");

  renderDOM(human, computer);
}
