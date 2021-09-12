// generics

type strArr = Array<string>;
type numArr = Array<number>;

const last14 = (arr: Array<number>) => arr[arr.length - 1]

const l14 = last14([1, 2, 3])
console.log(l14);
// const l14a = last14(['a', 'b']);

const lastT14 = <T>(arr: Array<T>) => arr[arr.length - 1]
const l14b = lastT14([1, 2, 3, 4]);
const l14c = lastT14(['a', 'b', 'c']);
const l14d = lastT14<string>(['d', 'e']);
console.log(l14b);
console.log(l14c);
console.log(l14d);

const makeArr14 = (x: number) => [x]
const m14 = makeArr14(5);
console.log(m14);
// const m14a = makeArr14('a');

const makeArr14T = <T>(x: T) => [x]
const m14T = makeArr14T(5);
const m14Ta = makeArr14T('a');
console.log(m14T);
console.log(m14Ta);

const makeArrXY14 = <X, Y>(x: X, y: Y) => [x, y];
const m14c = makeArrXY14(5, 6);
const m14d = makeArrXY14('a', 'b');
const m14e = makeArrXY14(1, 'a');
console.log(m14c);
console.log(m14d);
console.log(m14e);

const makeTuple14 = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const mTa = makeArrXY14(2, 6);
const mTb = makeArrXY14('c', 'b');
const mTc = makeArrXY14<number, string>(2, 'a');
const mTd = makeArrXY14<string | null, number>('a', 1);
const mTe = makeArrXY14<string | null, number>(null, 1);
console.log(mTa);
console.log(mTb);
console.log(mTc);
console.log(mTd);
console.log(mTe);

const makeTupleWithDefault14 = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const mtwd1 = makeTupleWithDefault14<string | null>('a', 3);
console.log(mtwd1);

