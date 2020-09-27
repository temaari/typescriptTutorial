import {Person} from './firstClass';

class Student extends Person {
	constructor(firstName: string, lastName: string, age: number) {
		super(firstName, lastName, age);
	}
}

class Teacher extends Person {
	constructor(lastName: string, firstName : string = "Mr", age: number = 0) {
		super(firstName, lastName, age);
		console.log(`${firstName} ${lastName} is your teacher`)
	}
}

let student = new Student("John", "Downs", 42);
console.log(student.getPerson());

let teacher =  new Teacher('Smith');

