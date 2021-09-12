// generics in interface

interface Resource<T> {
    uid: number,
    name: string,
    data: T
}

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'a',
    data: 'b'
}

const resourceTwo: Resource<object> = {
    uid: 1,
    name: 'a',
    data: { name: 'a'}
}

const resourceThree: Resource<string[]> = {
    uid: 1,
    name: 'a',
    data: ['a', 'b']
}

type numberResource = Resource<number[]>
const numbers16: numberResource = {
    uid: 1,
    name: 'a',
    data: [1, 2]
}

