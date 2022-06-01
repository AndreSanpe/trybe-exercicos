const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => {
    let damage = 15+(Math.floor(Math.random()*(Object.values(dragon)[1]-15)))
    return damage
  };
  console.log('Dragon '+dragonDamage());

  const warriorDamage = () => {
    let damage = Object.values(warrior)[1]+(Math.floor(Math.random()*((Object.values(warrior)[1])*(Object.values(warrior)[2]))))
    return damage
  };
  console.log('warrior '+warriorDamage());

  const mageDamageAndDama = () => {
      let damage = Object.values(mage)[1]+(Math.floor(Math.random()*((Object.values(mage)[1])*2)));
      if(Object.values(mage)[2] < 15){
          return "Não possui mana suficiente"
      }
      let mana = Object.values(mage)[2] - 15;
      return {
          damage, mana
      }
  }
  console.table(mageDamageAndDama());

  const gameActions = {
      warrior: (warriorDamage) => {
        let points = warriorDamage;
        dragon['healthPoints'] = dragon.healthPoints - points
        return dragon['healthPoints']
      }
    // Crie as HOFs neste objeto.
  };

  console.log(gameActions.warrior(warriorDamage()));