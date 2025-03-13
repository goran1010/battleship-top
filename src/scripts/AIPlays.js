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
  try {
    let type = "bb";
    let result;
    do {
      result = computer.gameboard.placeShip(
        type,
        randomCoor(),
        randomRotation()
      );
    } while (result !== true);
    console.log(result);
    type = "cl";
    for (let i = 0; i < 2; i++) {
      do {
        result = computer.gameboard.placeShip(
          type,
          randomCoor(),
          randomRotation()
        );
      } while (result !== true);
    }
    console.log(result);
    type = "dd";
    for (let i = 0; i < 3; i++) {
      do {
        result = computer.gameboard.placeShip(
          type,
          randomCoor(),
          randomRotation()
        );
      } while (result !== true);
    }
    console.log(result);
    type = "ss";
    for (let i = 0; i < 4; i++) {
      do {
        result = computer.gameboard.placeShip(
          type,
          randomCoor(),
          randomRotation()
        );
      } while (result !== true);
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export function AIAttack() {
  //get random coor , care to not get coor where hits or misses already
  attackShips(coor, "computer");
}
