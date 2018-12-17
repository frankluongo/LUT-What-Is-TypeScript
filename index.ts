// We need this: npm install --sav-dev parcel-plugin-typescript parcel-bundler@1.9.4
// Will allow us to use compiler

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
//

console.log(isOpen);
