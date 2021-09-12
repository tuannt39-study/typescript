// function

const square = (side: number) => side * side;
console.log(square(3));

let greet: Function
// greet = false;
greet = () => console.log('hello');

const add = (a: number, b: number, c: number) => a + b + c;
// console.log(add(5, 6, 'a'));
console.log(add(5, 6, 7));

const add2 = (a: number, b: number, c: number | string) => {
    console.log(a + b);
    console.log(c);
};
add2(1, 2, 3);
add2(1, 2, 'a');

const add3 = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
add3(1, 2, 3);
add3(1, 2, 'a');
add3(4, 5);

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log('sum', a + b);
    console.log(c);
}
addDefault(1,4);

const minus = (a: number, b: number): number => a - b;
console.log(minus(5, 4));

