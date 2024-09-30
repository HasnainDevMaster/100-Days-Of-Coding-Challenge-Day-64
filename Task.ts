// 100 Days Of Coding Challenge!

/* Day-64 Task:
Learn about TypeScript objects by using the following guide and coding along with the examples provided in it:

Type Annotations with Objects in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-64/TS-Object/README.md */

//---------------------------------------------------------------------------------------------------------------------------------

/*

Type Annotations with Objects:
TypeScript allows you to define the structure of an object using type annotations.
This ensures that objects have the expected properties and types. */

//1. Type Annotations with Objects

// Example:

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
};

// In this example, the Person interface specifies that a Person object must have a name property of type string and an age property of type number.

// 2. Optional Properties
// You can define optional properties in an object type by using the ? symbol.

// Example:

interface Car {
  make: string;
  model: string;
  year?: number;
}

const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
};

// Here, the year property is optional, so myCar is valid even without it.

// 3. Read-Only Properties
// To make a property read-only, use the readonly modifier. This ensures that the property cannot be changed after the object is created.

// Example:

interface Book {
  readonly title: string;
  author: string;
}

const myBook: Book = {
  title: "TypeScript Basics",
  author: "Jane Doe",
};

// myBook.title = "Advanced TypeScript"; // Error: Cannot assign to 'title' because it is a read-only property.

// In this example, title is a read-only property, so any attempt to change it will result in an error.

// 4. Index Signatures
// Index signatures allow you to define the types of properties that are not known in advance.

// Example:

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Hello", "World"];

// Here, StringArray is an interface that describes an array of strings.

// 5. Function Types
// You can define the types of functions within an object.

// Example:

interface MathOperations {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const operations: MathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

// In this example, MathOperations defines two functions, add and subtract, each taking two numbers and returning a number.

// 6. Nested Objects
// Objects can contain other objects, and you can define their types accordingly.

// Example:

interface Address {
  street: string;
  city: string;
}

interface User {
  name: string;
  address: Address;
}

const user: User = {
  name: "Mark",
  address: {
    street: "30 St. John's Road",
    city: "London",
  },
};

// Example defined from the Link:

// Example 1: Using Type Annotations with Object Assignment

// Define an object type with type annotations
let personExOne: {
  name: string; // The name property must be a string
  age: number; // The age property must be a number
  jobTitle?: string; // The jobTitle property is optional and must be a string if provided
  address: {
    street: string; // The street property must be a string
    city: string; // The city property must be a string
  };
};

// Assigning values to the object
personExOne = {
  name: "Robert", // Assigning a string to the name property
  age: 30, // Assigning a number to the age property
  jobTitle: "Engineer", // Assigning a string to the optional jobTitle property
  address: {
    street: "190 Boulevard St", // Assigning a string to the street property
    city: "Manchester", // Assigning a string to the city property
  },
};

// Example 2: Defining and Initializing an Object with Type Annotations

// Define and initialize an object with type annotations
let personExTwo: {
  name: string; // The name property must be a string
  age: number; // The age property must be a number
  jobTitle?: string; // The jobTitle property is optional and must be a string if provided
  address: {
    street: string; // The street property must be a string
    city: string; // The city property must be a string
  };
} = {
  name: "Robert", // Assigning a string to the name property
  age: 30, // Assigning a number to the age property
  jobTitle: "Engineer", // Assigning a string to the optional jobTitle property
  address: {
    street: "190 Boulevard St", // Assigning a string to the street property
    city: "Manchester", // Assigning a string to the city property
  },
};
