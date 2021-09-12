// type alias

type StringOrNumber = string | number;
type Student = {name: string; id: StringOrNumber};

const studentDetails = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student ${studentName} has id: ${id}`);
};

studentDetails(1, 'a');
studentDetails('2', 'b');

const greet6 = (user: Student) => {
    console.log(`${user.name} with id ${user.id} says hello`);
}

greet6({name: 'a', id: '1'});
greet6({ name: 'b', id: 1});

