// Representation for some of real world objects
// This is a simple example of how to represent a person and their address in TypeScript using interfaces.
// This code defines a `Person` interface with properties for the person's first name, last name

// with F2 rename the object 
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

// This is a literal object that implements the `Person` interface.
// It represents a person named Tony Stark, who is 45 years old and lives in New
const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC-123',
    city: 'New York',
  },
};

// We dont re use the same object because is a constant
// const spiderman: Person = structuredClone(ironman); // This is a deep copy
// ironman = {
//   firstName
// : 'Iron', 

//   lastName: 'Man'
// }

// this is a deep clone of the `ironman` object.
// This creates a new object with the same properties and values as `ironman`.
// It is useful when you want to create a copy of an object without modifying the original one
const copyIronman: Person = structuredClone(ironman);

//
const anothecopyIronman = {...ironman}


console.log(ironman);

// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'San José';

// console.log(ironman, spiderman);
