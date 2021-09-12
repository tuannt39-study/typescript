// any types

let age5: any = 1;
age5 = 'a';
age5 = true;
age5 = {a: 1};
age5 = [1, 2];

let mixed5: any[] = [];
mixed5.push(1);
mixed5.push('a');
mixed5.push(false);

let person5: {name: any, age: any};
person5 = {name: 2, age: false};
