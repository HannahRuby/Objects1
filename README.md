🧩 JS: Objects

🧩 JS: Objects
Completion requirements

Objects
Overview
Objects are a way to group information about a thing together. They're a way to represent a particular thing, like a blog post, or a spaceship, or a person, and all of the properties you might want to record related to it.

For example, a person object might have a name, age, and favourite colour. A car object might have a make, model, and colour. A blog post might have a title, an author, and post content.

Class Plan
Demo: Demonstration of objects and how they work
Workshop: Write some objects to the console
Topics
What is an object?
How to create an object
How to access properties on an object
How to add properties to an object
Resources
MDN: Objects
MDN: Object basics
Workshop
Creating objects
⛳️ In a new index.html file, add a script tag containing a console.log. Open the file in your browser and check the console to see the output.

console.log("Hello world!");
 
⛳️ Create an object called person with a name, age, and favourite colour. Log the object to the console.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);
 
You can also log objects using the console.table method, which will display the object in a table format.

console.table(person);
 
Accessing properties
You can access properties on an object using the dot notation. The dot notation is how you access specific properties of an object.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person.name); // Output: Bob

console.log(person.age); // Output: 30

console.log(person.favouriteColour); // Output: red
 
Adding properties
You can add properties to an object by assigning a value to a new property.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

person.favouriteFood = "pizza";

console.log(person.favouriteFood); // Output: pizza
 
🎯 Create an object called car with a make, model, and colour. Create a string detailing the car's make, model, and colour for a website advert and log it to the console.

🎯 Create an object called book with a title, author, and number of pages. Create a string explaining the book's details for a website advert and log it to the console.

Your answer
