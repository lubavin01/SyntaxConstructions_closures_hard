import setUpAttacks from '../set-up-attacks.js';

test('attack маг - 16 damage', () => {
  const characters = [
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 20 },
    { name: 'мечник', health: 10 },
  ];

  const attack = setUpAttacks(characters, true);

  attack[0](16);

  expect(characters).toEqual([
    { name: 'маг', health: 4 },
    { name: 'лучник', health: 15 },
    { name: 'мечник', health: 5 },
  ]);

})


test('attack маг - 35 damage, shield on', () => {
  const characters = [
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 20 },
    { name: 'мечник', health: 10 },
  ];

  const attack = setUpAttacks(characters, true);

  attack[0](35);

  expect(characters).toEqual([
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 7 },
    { name: 'мечник', health: 0 },
  ]);

});

test('attack лучник - 25 damage, shield off', () => {
  const characters = [
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 20 },
    { name: 'мечник', health: 10 },
  ];

  const attack = setUpAttacks(characters, false);

  attack[1](25);

  expect(characters).toEqual([
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 10 },
  ]);

})

