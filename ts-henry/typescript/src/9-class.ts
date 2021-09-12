// class

export class Employee9 {
    public name: string
    private age: number
    readonly male: boolean

    constructor(n: string, a: number, m: boolean) {
        this.name = n
        this.age = a
        this.male = m
    }

    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }
}

const employee9 = new Employee9('a', 1, false);
console.log(employee9.name);
// console.log(employee9.age);
console.log(employee9.male);

employee9.name = 'b';
// employee9.male = true;
console.log(employee9);

console.log(employee9.print());

class Employee9a {
  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}

  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`;
  }
}

const employee9a = new Employee9a('a', 1, false);
console.log(employee9a.name);
// console.log(employee9a.age);
console.log(employee9a.male);

employee9a.name = 'b';
// employee9a.male = true;
console.log(employee9a);

console.log(employee9a.print());

const employee9b = new Employee9a('b', 2, true);

const employee9s: Employee9a[] = [];
employee9s.push(employee9a);
employee9s.push(employee9b);
employee9s.forEach((employee => {
  console.log(employee.name, employee.male, employee.print());
}));
