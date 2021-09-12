// explicit types

let myName4: string;
let age4: number;
let isAuthenticated: boolean;

// myName = 2;
myName = 'a';

// age4 = 'b';
age4 = 1;

// isAuthenticated = 3;
isAuthenticated = false;

// let students4: string[] = ['a', 3];
let students4: string[] = ['a', 'b'];

// students4.push(5);
students4.push('b');

let mixed4: (string | number | boolean)[];

mixed4 = ['a', 1, false];
mixed4.push(2);
mixed4.push('b');
mixed4.push(true);

let id: string | number;
id = '1';
id = 2;

let hobby4: 'book' | 'music'
// hobby4 = 'a';
hobby4 = 'book';

let person4: object
person4 = {name: 'a', age: 1};
person4 = [];

let student4: {
    name: string,
    age: number,
    isGood: boolean
}

student4 = {
    name: 'a',
    age: 1,
    isGood: true
}
