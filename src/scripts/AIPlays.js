function randomRotation() {
  if (Math.random() > 0.5) {
    return "hor";
  }
  return "ver";
}
function randomCoor() {
  let coorX = Math.floor(Math.random() * 13 + 1);
  let coorY = Math.floor(Math.random() * 13 + 1);
  return { x: coorX, y: coorY };
}

export function AIshipPlace(computer) {
  let bb =
    computer.gameboard.maxNumberOfShips.bb -
    computer.gameboard.currentNumberOfShips.bb;
  let cl =
    computer.gameboard.maxNumberOfShips.cl -
    computer.gameboard.currentNumberOfShips.cl;
  let dd =
    computer.gameboard.maxNumberOfShips.dd -
    computer.gameboard.currentNumberOfShips.dd;
  let ss =
    computer.gameboard.maxNumberOfShips.ss -
    computer.gameboard.currentNumberOfShips.ss;

  const ships = [
    { type: "bb", count: bb },
    { type: "cl", count: cl },
    { type: "dd", count: dd },
    { type: "ss", count: ss },
  ];

  for (const ship of ships) {
    for (let i = 0; i < ship.count; i++) {
      let placed = false;
      while (!placed) {
        try {
          placed = computer.gameboard.placeShip(
            ship.type,
            randomCoor(),
            randomRotation()
          );
        } catch (error) {}
      }
    }
  }
}

function getCoor(human) {
  let possibleCoor = [];
  for (let x = 1; x < 14; x++) {
    for (let y = 1; y < 14; y++) {
      possibleCoor.push({ x: x, y: y });
    }
  }

  possibleCoor = possibleCoor.filter((coor) => {
    return (
      !human.gameboard.misses.some(
        (miss) => miss.x === coor.x && miss.y === coor.y
      ) &&
      !human.gameboard.hits.some((hit) => hit.x === coor.x && hit.y === coor.y)
    );
  });

  let randomIndex = Math.floor(Math.random() * possibleCoor.length);

  return possibleCoor[randomIndex];
}

export function AIAttack(human) {
  try {
    const coor = getCoor(human);
    human.gameboard.receiveAttack(coor);
  } catch (error) {
    console.log(error);
  }
}
