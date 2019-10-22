'use strict';

import Animal from './animal.js'
import * as Helpers from './helper.js'
import Atm from './atm.js';
import RecordAlbum from './recordAlbum.js';

console.log(Helpers.add(500,500));
console.log(Helpers.getRandom());


// const celica = {
//     model: 'Toy-Yoda Celica',
//     color: 'red',
//     fuel: 100,
//     drive: () => {
//         this.fuel--;
//     },
//     refuel: () => {
// 		this.fuel = 100;
// 	}
// };
// const civic = {
// 	model: 'Honda Civic',
// 	color: 'hotpink',
// 	fuel: 100,
// 	drive: () => {
// 		this.fuel--;
//     },
// 	refuel: () => {
// 		this.fuel = 100;
//     }
// };
// let makeCar = (model, color) => {
//     return {
//       model,
//       color
//     }
// };
// class Car {
//     constructor(model, color) {
//         this.model = model;
//         this.color = color;
//         this.fuel = 100;
//         console.log('Car constructor', this.model + ' ' + this.color);
//     };
//     drive() {
//         this.fuel--;
//         return 'Vroom!';
//     };
//     refuel() {
//         this.fuel = 100;
//     }
// }
// const celica = new Car('BMW', 'Hotpink');
// console.log(celica.drive());

// class Person {
//     constructor(name){
//         this.name = name;
//         this.species = 'Homo Sapiens';
//     };
//     speak(){
//         return `Hello! I am ${this.name}.`;
//     }
// }

// const muhannad = new Person("Muhannad");
// console.log(muhannad.speak());

// const abdulrahman = new Person("abdulrahman");
// console.log(abdulrahman.speak());

// const people = [muhannad, abdulrahman];

const MyCat = new Animal('Joe', 'cat', 2, 'mooo');
const MyDog = new Animal('Chan', 'dog', 7, 'barrrk');

console.log(MyCat.makeSound());
MyCat.getOlder();
console.log(MyDog.makeSound());
MyDog.getOlder();

class Bird extends Animal {
    constructor(name, age, canFly = true){
        super(name, 'bird', age, 'Barks')
        this.canFly = canFly;
        console.log('does it have passport ? ' + this.canFly);
    };
    makeSound(){
        console.log(`${this.name} barks`);
    }
};

const bear = new Bird('Bear', 5);
console.log(bear.makeSound());
bear.getOlder();
console.log(bear.makeSound());