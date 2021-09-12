// optional and non null

const add8 = (a: number, b?: number) => b ? a + b : a
console.log(add8(1, 2));
console.log(add8(1));


const addNonNull8 = (a: number, b?: number) => a + b!
console.log(addNonNull8(1, 2));
console.log(addNonNull8(1));
