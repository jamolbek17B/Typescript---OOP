// class Person {
//   firstname:string;
//   age:number;

//   constructor(firstname:string,age:number) {
// this.firstname=firstname;
// this.age=age;
//   }

//   greet() {
// return`Hello,${this.firstname}! You are ${this.age} years old.`;
//   }
// }

// const person=new Person('Jamolbek',17);

// console.log(person.greet());


// class Person {
// public firstname:string;  // public - bu classning tashqarisidan ham kirish mumkinligini bildiradi
// protected nationality:string; // protected - bu classning ichidan va undan meros olgan classlardan kirish mumkinligini bildiradi
// private age:number; // private - bu classning ichidan kirish mumkinligini bildiradi, tashqarisidan kirish mumkin emas

//   constructor(firstname:string,age:number,nationality:string) {
// this.firstname=firstname;
// this.age=age;
// this.nationality=nationality;
//   }

// public getAge():number {
// return this.age;
//   }

// public setAge(age:number):void {
// if (age<0) {
// this.age=0;
//     }else {
// this.age=age;
//     }
//   }
// public Info():void {
//     console.log(`About me: I am ${this.firstname}, ${this.age} years old and I am from ${this.nationality}.`);
// }
// }

// const person=new Person('Jamolbek',17,'Uzbekistan');

// console.log(person.Info()); // Jamolbek
// // console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'.
// // console.log(person.nationality); // Error: Property 'nationality' is protected and only accessible within class 'Person' and its subclasses.
// person.setAge(10);

// // console.log(person.age); // ❌ Runtime error
// console.log(person.getAge()); // ✅ 10

// person.setAge(-10);
// console.log(person.getAge()); // ✅ 0

// class Person {
// public firstname:string;  
// protected nationality:string; 
// private age:number; 

//   constructor(firstname:string,age:number,nationality:string) {
// this.firstname=firstname;
// this.age=age;
// this.nationality=nationality;
//   }
  
// }
// class Engineer extends Person {
// public technologies:string[] = [];

//   constructor(firstname:string,age:number,nationality:string) {
// super(firstname,age,nationality);
//   }
// }

// const engineer=new Engineer('Jamolbek',17,'Uzbekistan');

// engineer.technologies= ['Javascript','Typescript'];

class Person {
public firstname:string;
public age:number;

constructor(firstname:string, age:number) {
this.firstname=firstname;
this.age=age;
  }

  getName() {
return`Hello! I am a person and my name is ${this.firstname}. I am ${this.age} years old.`;
  }
}

class Engineer extends Person {
public technologies:string[];

  constructor(firstname:string,age:number,technologies:string[]) {
super(firstname,age);
this.technologies=technologies;
  }

  getName() {
return`Hello! I am an engineer and my name is ${this.firstname}. I am ${this.age} years old and I know ${this.technologies.join(', ')}.`;
  }
}

class Scientist extends Person {
public researches:string[];

  constructor(firstname:string,age:number,researches:string[]) {
super(firstname,age);
this.researches=researches;
  }

  getName() {
return`Hello! I am a scientist and my name is ${this.firstname}. I am ${this.age} years old and I have researched ${this.researches.join(', ')}.`;
  }
}

const person=new Person('John',30);
const engineer=new Engineer('Muhammad',26, ['JS','Python']);
const scientist=new Scientist('Alex',45, ['NLP']);

const people= [person,engineer,scientist];
for (const p of people) {
console.log(p.getName());
}
