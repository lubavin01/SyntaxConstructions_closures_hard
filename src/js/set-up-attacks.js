export default function setUpAttacks(characters, shield = true) {
  return characters.map((victim) => (
    (damage) => {
      // console.log( `${victim.name} attacked for ${damage} damage` );

      if (shield) {
        let victimDamage = Math.floor(damage / characters.length) + (damage % characters.length);
        let restDamage = damage - victimDamage;

        if (victim.health < victimDamage) {
          victimDamage = victim.health;
          restDamage = damage - victimDamage;
        }

        let victimDamaged = false;
        characters.forEach((item, idx) => {
          if (item === victim) {
            /* eslint-disable no-param-reassign */
            item.health -= victimDamage;
            victimDamaged = true;

            console.log(`${item.name} took ${victimDamage} damage, health = ${item.health}`);
          } else {
            // correction if victim is not damaged yet
            const restCharacters = characters.length - idx - (victimDamaged ? 0 : 1);
            let currentDamage = Math.floor(restDamage / restCharacters)
              + (restDamage % restCharacters);
            if (item.health < currentDamage) {
              currentDamage = item.health;
            }
            item.health -= currentDamage;
            restDamage -= currentDamage;
            // console.log(`${item.name} took ${currentDamage} damage, health = ${item.health}`);
          }
        });
      } else {
        victim.health -= damage;
        if (victim.health < 0) {
          victim.health = 0;
        }
        // console.log(`${victim.name} took ${damage} damage, health = ${victim.health}`);
      }
    }
  ));
}
