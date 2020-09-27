export abstract class Person {
	private firstName : string;
	private lastName : string;
	private age : number;

	constructor(firstName : string, lastName : string, age : number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	getPerson() : {} {
		return ({ 
			"firstName": this.firstName,
			"lastName": this.lastName,
			"age": this.age
		});
	}
}

