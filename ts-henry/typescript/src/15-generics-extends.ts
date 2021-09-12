// generics extends

// const makeFullName = obj => ({
//     ...obj,
//     fullName: `${obj.firstName} ${obj.lastName}`
// })

const makeFullNameConstraint = (obj: {
    firstName: string; lastName: string
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const mf15 = makeFullNameConstraint({firstName: 'a', lastName: 'b'})
// const mf15a = makeFullNameConstraint({firstName: 'a', lastName: 'b', age: 1})
console.log(mf15);

const makeFullNameConstraintWithGenerics = <T extends {firstName: string; lastName: string}>(obj: T) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const mfg15 = makeFullNameConstraintWithGenerics({firstName: 'a', lastName: 'b', age: 1})
const mfg15a = makeFullNameConstraintWithGenerics({firstName: 'a', lastName: 'b', age: 1, gender: 'c'})
console.log(mfg15);
console.log(mfg15a);

const addEmployee = (employee: object) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}

const employee15 = addEmployee({name: 'a', age: 1})
// console.log(employee15.name);
console.log(employee15);

const addEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}

const employeeT15 = addEmployeeT({name: 'b', age: 2, male: true})
console.log(employeeT15.name);
console.log(employeeT15.male);
console.log(employeeT15);


const addEmployeeTWithConstaint = <T extends {name: string}>(employee: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}

const employeeTC15 = addEmployeeTWithConstaint({name: 'c', age: 3, male: false})
// const employeeTC15a = addEmployeeTWithConstaint({age: 3, male: false})
console.log(employeeTC15.name);
console.log(employeeTC15.male);
console.log(employeeTC15);
