//Basic Types
let developerName: string = 'Mustaf';
let age: number = 25;
let active: boolean = true;
let x: any = 'Hello';

//Array 
let workWeek: number[] = [8, 7, 8, 6, 7];

//Tuple 
let person: [string, number, boolean] = ['Mr. x', 34, true];

//Tuple array 
let student: [string, string, number][] = [['Mustaf', 'B.Tech', 32], ['Rahul', 'BCA', 74]];

//Unions
let id: string | number;
id = '21';
id = 21;
//id = true (can't store other then string | number)

//Enum 
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}


//Objects 
const user: {
  id: number,
  userName: string,
} = {
  id: 1,
  userName: 'Musu',
}

type User = {
  id: number
  userName: string
}

const user2: User = {
  id: 2,
  userName: 'Dummy',
}


//Type Assertion
let cid: any = 1
let customerId: number = <number>cid;
customerId = cid as number;

//Function
function addition(num1: number, num2: number): number {
  return num1 + num2;
};

//Interfaces
interface UserInterface {
  id: number,
  name: string,
}

const user1: UserInterface = {
  id: 1,
  name: 'Mustaf',
}

//Classes 

interface PersonInterface {
  id: number,
  name: string,
  register(): string,
}

class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered;`;
  }
}
const musu = new Person(1, "Mustaf");


class Employee extends Person {
  position: string
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const employee = new Employee(3, 'Mustaf', 'Senior software developer');

// Generics 
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(['mustaf', 'rahul', 'rabi', 'suraj']);

numArray.push(1);
strArray.push('str');
 
console.log(employee);
