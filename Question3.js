//write a"Person" class to hold all the details

class Person {
  constructor(firstName, lastName, age, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getAge() {
    return this.age;
  }
  getId() {
    return this.id;
  }
}

const person1 = new Person("Raja", "Ram", 21, 123);
console.log(person1); //Person { firstName: 'Raja', lastName: 'Ram', age: 21, id: 123 }
console.log(person1.getFullName()); //Raja Ram
console.log(person1.getAge()); //21
console.log(person1.getId()); //123
