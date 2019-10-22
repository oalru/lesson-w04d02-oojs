export default class Animal {
    constructor(name, type, age, sound, hasPassport = false){
        this.name = name;
        this.type = type;
        this.age = age;
        this.sound = sound;
        this.hasPassport = hasPassport;
    };
    getOlder(){
        this.age += 1;
        console.log('Age:', this.age);
    };
    makeSound(){
        return `${this.sound}! Hello, I'm a ${this.type} And I'm ${this.age} years old.`;
    };
};