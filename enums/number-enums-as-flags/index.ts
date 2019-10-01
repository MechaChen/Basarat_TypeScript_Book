enum AnimalFlags {
    None        = 0,
    HasClaws    = 1 << 0,   // 0001
    CanFly      = 1 << 1,   // 0010
    EatsFish    = 1 << 2,   // 0100
    Endangered  = 1 << 3,   // 1000
}

// console.log(AnimalFlags.None);          // 0
// console.log(AnimalFlags.Endangered);    // 1
// console.log(AnimalFlags.Endangered);    // 2
// console.log(AnimalFlags.Endangered);    // 4
// console.log(AnimalFlags.Endangered);    // 8

type Animal = {
    flags: AnimalFlags;
}

function printAnimalAbilities(animal: Animal) {
    var animalFlags = animal.flags;

    if (animalFlags & AnimalFlags.HasClaws) {
        console.log('animal has claws');
    }
    
    if (animalFlags & AnimalFlags.CanFly) {
        console.log('animal can fly');
    }
    
    if (animalFlags == AnimalFlags.None) {
        console.log('nothing');
    }
}

let animal: Animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal);   // nothing

animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal);   // aniaml has claws

animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal);   // nothing

animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal);   // animal has claws, animal can fly
