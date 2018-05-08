function animal(type, pet, fierceness){
    this.type = type;
    this.pet = pet;
    this.fierceness = fierceness;
}
module.exports = [new animal("giraffe", false, 4), new animal("zebra", false, 8), new animal("lion", false, 10), new animal("dog", true, 4), new animal("cat", true, 2)];