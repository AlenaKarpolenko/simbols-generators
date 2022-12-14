


export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...all) {
    for (const key of all) {
      this.members.add(key);
    }
  }

  * [Symbol.iterator]() {
    const affiliation = Array.from(this.members.values());
    for (let i = 0; i < affiliation.length; i += 1) {
      yield affiliation[i];
    }
  }
}