export default function renderDOM(human, computer) {
  const container = document.querySelector(".container");

  const computerContainer = document.querySelector(".computer-container");
  const humanContainer = document.querySelector(".human-container");
  computer.gameboard.board.forEach((column, indexX) => {
    let temp = document.createElement("div");
    column.forEach((row, indexY) => {
      const div = document.createElement("div");
      if (row !== null) {
        div.textContent = "X";
      }
      div.className = "square";
      div.setAttribute("data-x", indexX);
      div.setAttribute("data-y", indexY);
      temp.appendChild(div);
    });
    computerContainer.appendChild(temp);
  });

  human.gameboard.board.forEach((column, indexX) => {
    let temp = document.createElement("div");
    column.forEach((row, indexY) => {
      const div = document.createElement("div");
      if (row !== null) {
        div.textContent = "X";
      }
      div.setAttribute("data-x", indexX);
      div.setAttribute("data-y", indexY);
      div.className = "square";
      temp.appendChild(div);
    });
    humanContainer.appendChild(temp);
  });
  container.append(computerContainer, humanContainer);
}
