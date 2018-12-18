// We need this: npm install --sav-dev parcel-plugin-typescript parcel-bundler@1.9.4
// Will allow us to use compiler

// Boolean
// const isOpen: boolean = false;

// String
// const Name: string = 'Scott';

// Number
// const myAge: number = 32;

// List
// const list: number[] = [0, 1, 2];

// Tuple
// const me: [string, number] = ["Scott", 32];

// Enum
// enum Job { WebDev, WebDesigner, PM }
// const job: Job = Job.WebDev;

// Any
// const phone: any = "iPhone";

// Never
// const tablet: never = 3;
//

// console.log(isOpen);

// * 5: Functions in Typescript
// ? ------------------------------------------------------

const sayHello = (word: object): string => {
  let converted = JSON.stringify(word);
  return JSON.stringify(converted);
}

sayHello({name: "frank"});


// * 6: Optional, Default & Rest Params
// ? ------------------------------------------------------
// Optionals
// const sayWords = (word?: number): string => {
//   console.log(word || 44);
//   return `${word || 44}`;
// }

// sayWords();

// Default
// const sayWords = (word = 44): string => {
//   console.log(word || 44);
//   return `${word || 44}`;
// }

// sayWords();

// Rest
// const sayNumbers = (num = 44, ...otherStuff: any[]): string => {
//   console.log(num || 44);
//   console.log(otherStuff);
//   return `${num || 44}`;
// }

// sayNumbers(55, 60, 70);


// * 7: Implicit Types
// ? ------------------------------------------------------

// TypeScript implicitly assumes that newName is a sting and follows initially set string
// let newName: string | number | boolean = 'Scott';
// newName = 'Wes';
// // newName = 10;

// let newName2 = newName;
// // newName2 = 10;


// * 8: Union Types
let newName: string | number | boolean = 'Scott';
let newNameTwo = newName;
// newNameTwo = false;

const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
}

makeMargin(10);
makeMargin("10");

// Null Types
let dog: string = "Sammy";
console.log({dog});
dog = null;
dog = "Lucie";
dog = undefined;
dog = null;
