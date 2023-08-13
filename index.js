/* 
1) javascript For in loop
 Write a JavaScript function named printObjectProperties that takes an object as an argument and uses the for...in loop to print all the properties and their values in the following format: "property: value". If the object is empty, print "Object is empty".
*/

function printObjectProperties(obj) {
  if (Object.keys(obj).length !== 0) {
    for (const propertie in obj) {
      console.log(`${propertie} : ${obj[propertie]}`);
    }
  } else {
    console.log("Object is empty");
  }
}
// case-1
printObjectProperties({});

// case-2
printObjectProperties({
  name: "ahosan",
  skill: "React js",
  age: 10,
});

/*
  2) javascript function returns
   Write a JavaScript function named findMaxNumber that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.
  */

function findMaxNumber(nums) {
  if (nums.length !== 0) {
    maxNum = Math.max(...nums);

    console.log(maxNum);
  } else {
    console.log("null");
  }
}
// case-1
let nums = [10, 20, 5, 30, 25];

// case-2

let num = [];

findMaxNumber(nums);
findMaxNumber(num);

/*
  3) javascript Spread Operator
  
   Write a JavaScript function named mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays using the spread operator.
  */

function mergeArrays(arg1, arg2) {
  const newArray = [...arg1, ...arg2];
  console.log(newArray);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

mergeArrays(array1, array2);

/*4) javascript arrow function
  
  
  Write a JavaScript arrow function named calculateSquare that takes a number as an argument and returns the square of that number.
  */

const calculateSquare = (num) => console.log(Math.pow(num, 2));
calculateSquare(5);

/*
  5) javascript es6 map
  
  Write a JavaScript function named doubleNumbers that takes an array of numbers as an argument and uses the ES6 map method to return a new array where each number is doubled.
  */

function doubleNumbers(numbers) {
  const value = numbers.map((number) => number * 2);
  console.log(value);
}

const numbers = [1, 2, 3, 4, 5];

doubleNumbers(numbers);

/*
6) javascript es6 static keyword

Create a JavaScript class named MathUtility with an ES6 static method called multiply. The multiply method should take two parameters and return their product.
*/

class MathUtility {
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtility.multiply(5, 3));

/*
  7) javascript es6 class inheritance
  
  Create a JavaScript class named Animal with a constructor that takes two parameters: name and sound. The class should have a method named makeSound that logs the sound of the animal.
  
  
  Next, create a subclass of Animal named Dog. The Dog class should have an additional method named fetch that logs "Fetching the ball!".
   */

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  fetch() {
    console.log("Fetching the ball!");
  }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound();

const dog = new Dog("Buddy", "Woof");
dog.makeSound();
dog.fetch();

/*
  8) javascript es6 super keyword
  
  Create a JavaScript class named Person with a constructor that takes two parameters: name and age. The class should have a method named introduce that logs a greeting message including the person's name and age.
  
  Next, create a subclass of Person named Student. The Student class should have an additional property named major and an overridden introduce method. The overridden introduce method should log a message that includes the person's name, age, and major.
  */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`
    );
  }
}

const person1 = new Person("John", 30);
person1.introduce();

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce();
