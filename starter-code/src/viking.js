// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){
        this.health = this.health - theDamage;
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage){
        this.health = this.health - theDamage;
        if(this.health > 0 ){
            return "NAME has received DAMAGE points of damage"
        }
        else if (this.health = 0) {
            return "NAME has died in act of combat"
        }
    }




}



// Saxon
class Saxon {}

// War
class War {}
