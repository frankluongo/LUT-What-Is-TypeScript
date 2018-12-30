// * Notes
// ? ------------------------------------------------------
/*
We need this: npm install --sav-dev parcel-plugin-typescript parcel-bundler@1.9.4
Will allow us to use compiler
*/


// * 1-4: Getting Started
// ? ------------------------------------------------------

// Boolean
const isOpen: boolean = false;

// String
const Name: string = 'Scott';

// Number
const myAge: number = 32;

// List
const list: number[] = [0, 1, 2];

// Tuple
const me: [string, number] = ["Scott", 32];

// Enum
enum Job { WebDev, WebDesigner, PM }
const job: Job = Job.WebDev;

// Any
const phone: any = "iPhone";

// Never
// const tablet: never = 3;


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
// ? ------------------------------------------------------
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




// * 9: Interfaces
// ? ------------------------------------------------------

import { Person } from './src/Interfaces';

const sayName = ({ name, age }: Person): Person => {
  console.log(name);
  age ? console.log(age) : console.log('no age given') ;
  return {name, age};
}

sayName({age: 32, name: 'Scott'});


// * 10: Enums
// ? ------------------------------------------------------

import { Type } from './src/Enums';

const createContent = (contentType: Type) => {
  console.log(contentType);
}
createContent(Type.Quiz);

enum Type2 {
  Video = "VIDEO",
  BlogPost = "BLOG_POST",
  Quiz = "QUIZ"
}


const createContent2 = (contentType: Type2) => {
  console.log(contentType);
}

createContent2(Type2.Quiz);

// * 11: Classes in TypeScript
// ? ------------------------------------------------------

class Team {
  // Private Method or Variable
  private teamName: string;

  // Prevents changes outside of the constructor or at definition time
  readonly teamType: string;

  teamRecord: string;

  constructor (teamName: string) {
    this.teamName = teamName;
    this.teamType = "Hockey";
  }

  // Defaults to Public Method
  score (): string {
    console.log(`${this.teamName}: GOOOOOOAAALLL!`);
    return "YOYOOYOYOYOY!";
  }
}

const RedWings = new Team('Red Wings');
RedWings.score();

// * 12: Modules
// ? ------------------------------------------------------

/*

Default Exports for enums will need to be defined, THEN imported
enum Name ...

export default Name

*/
