// interface

interface Person {
    name: string
    age: number
    speak(lang: string): void
    spend(amount: number): number
}

const name11: Person = {
    name: 'a',
    age: 1,
    speak(text: string): void {
        console.log(text);
        // return text;
    },
    spend(amt: number): number {
        return amt
    }
}

console.log(name11);

const hello11 = (onePerson11: Person) => console.log(`hello ${onePerson11.name}`);

hello11(name11);
