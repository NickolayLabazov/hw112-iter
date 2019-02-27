export default class Team {
  constructor() {
    this.hero = [
      {
        name: 'Лучник', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25, damage: 20,
      },
      {
        name: 'Мечник', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10, damage: 25,
      },
      {
        name: 'Безсмертный', health: 50, level: 1, type: 'Undead', attack: 10, defence: 40, damage: 20,
      },
      {
        name: 'Маг', health: 50, level: 1, type: 'Magician', attack: 25, defence: 25, damage: 30,
      },
    ];
  }

  [Symbol.iterator]() {
    const compare = (persA, persB) => {
      const strongA = persA.health + persA.defence;
      const abilitiesA = persA.attack + persA.damage;
      const strongB = persB.health + persB.defence;
      const abilitiesB = persB.attack + persB.damage;
      if (strongA === strongB) { return abilitiesB - abilitiesA; }
      return strongA - strongB;
    };

    const hero = this.hero.sort(compare);
    let current = 0;
    return {
      next() {
        if (current < hero.length) {
          const done = false;
          const value = hero[current];
          console.log(value);
          current += 1;
          return {
            done, value,
          };
        } return { done: true };
      },
    };
  }
}
