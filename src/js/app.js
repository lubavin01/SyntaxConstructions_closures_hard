import setUpAttacks from './set-up-attacks';

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const attacks = setUpAttacks(characters, true);

// attacks[1](9);
attacks[1](20);
attacks[1](20);

console.log(characters);
