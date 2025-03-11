function getLength(type) {
  switch (type) {
    case "ss":
      return 1;
    case "dd":
      return 2;
    case "cl":
      return 3;
    case "bb":
      return 4;
    default:
      throw new Error("Unknown Ship type !");
  }
}

export default class Ship {
  constructor(type) {
    this.type = type;
    this.length = getLength(this.type);
    this.hits = 0;
    this.sunk = false;
  }

  isHit() {
    if (this.hits >= this.length) {
      throw new Error("Ship has received max number of hits");
    }
    this.hits++;
  }
  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
    }
    return this.sunk;
  }
}
