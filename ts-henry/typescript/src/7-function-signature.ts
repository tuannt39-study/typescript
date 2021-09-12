// function signature

let greet7: Function
greet7 = () => console.log('a');

let greet7a: (a: string, b: string) => void
greet7a = (name: string, greeting: string) => console.log(`${name} says ${greeting}`);
greet7a('a', 'hi');

let calculate: (a: number, b: number, c: string) => number;
calculate = (num1: number, num2: number, action: string) => {
    return action === 'add' ? num1 + num2 : num1 - num2
}
console.log(calculate(4, 2, 'minus'));

type Student7 = {name: string, age: number};
let printStudent: (student: Student7) => void
printStudent = (myStudent: Student7) => {
    console.log(`${myStudent.name} is ${myStudent.age} years old`);
}
printStudent({name: 'a', age: 1});

const nam = {
    name: 'b',
    age: 2
}
printStudent(nam);
