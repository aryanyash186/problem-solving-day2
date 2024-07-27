//problem 1
// let person = {
//     name : `aryan yash`,
//     age : 21
// }
// let {name, age} = person;
// console.log(name,age);

//problem 2
// import { calculate } from "./module.js";
// let piArea = new calculate(10);
// console.log(piArea.area());

//problem 3
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   rectangleArea() {
//     return this.height * this.width;
//   }
// }
// let totalArea = new Rectangle(10, 20);
// console.log(totalArea.rectangleArea());

//problem 4
// class Person {
//   constructor(name) {
//     this.fullName = name;
//   }
//   get getName() {
//     return this.fullName;
//   }
//   set setName(newName) {
//     this.fullName = newName;
//   }
// }
// let personName = new Person(`aryan yash`);
// Person.setName = `dipok`;
// console.log(personName.getName, Person.setName);

//problem 5
// let Circle = class {
//   constructor(r) {
//     this.radius = r;
//   }
//   calculate() {
//     return 2 * this.radius * Math.PI;
//   }
// };
// let circumference = new Circle(10);
// console.log(circumference.calculate());

//problem 6
// let propName = `name`;
// let personalInfo = {
//   [propName]: `aryan yash`,
//   age: 21,
//   profession: `student of hablu-programmer`,
// };
// console.log(personalInfo, personalInfo.name);

//problem 7
// class Animal {
//   constructor(pet) {
//     this.petType = pet;
//   }
//   base() {
//     return `i have a ` + this.petType;
//   }
// }
// class Dog extends Animal {
//   constructor(pet, petNam) {
//     super(pet);
//     this.petName = petNam;
//   }
//   derived() {
//     return this.base() + `, his name is ` + this.petName;
//   }
// }
// let myPet = new Dog (`dog`, `pluto`);
// console.log(myPet,myPet.petType,myPet.petName,myPet.base(),myPet.derived());

//problem 8
// class Shape {
//   constructor(box) {
//     this.box = box;
//     console.log(new.target.box);
//   }
// }
// class metal extends Shape {
//   constructor(box, type) {
//     super(box);
//     this.type = type;
//   }
// }
// let boxShape = new Shape(`square`);
// console.log(boxShape);
// let boxMetal = new metal(`square`, `gold`);
// console.log(boxMetal);

//problem 9
// class MathUtil {
//   constructor(value) {
//     this.value = value;
//   }
//   static square(input) {
//     return this.value * input.value;
//   }
// }

// let aryan = new MathUtil(5);
// console.log(MathUtil.square(aryan));

//problem 10
// let objSymbol = {
//   name: Symbol(`aryan yash`),
//   age: Symbol(21),
// };
// console.log(objSymbol.name,objSymbol.age);