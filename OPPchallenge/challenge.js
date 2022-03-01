// Create a class called pokemon with a constructer that takes in a name, type, and attack
// Create a method for this class that console logs that the pokemon used its attack ex: "Pickachu, used Thunderbolt"
// Instantiate 2 new pokemon then use the attack method for both of them.

class Pokemon {
    constructor(name, type, attack){
        this.name = name;
        this.type = type;
        this.attack = attack
    }
    pokeAttack() {
        return `${this.name} used ${this.attack} to attack!`
      }
}
const poke1 = new Pokemon('Pickachu', 'electric', 'thunderbolt')
console.log(poke1.pokeAttack());
const poke2 = new Pokemon('Elekid', 'electric', 'thunderbolt')
console.log(poke2.pokeAttack());
const poke3 = new Pokemon('Luray', 'electric', 'thunderbolt')
console.log(poke3.pokeAttack());