console.log("Hello me");

const person = {
  name: "Naa",
  age: 14,
  favouriteColour: "blue",
  school: "Minster",
};
console.log(person.name);
console.log(person.school);
//adding properties

person.favouriteFood = "pizza"
console.log(person.favouriteFood)

const Car = {
    make: "Vauxhall",
    model: "Zafira",
    colour: "blue",
};

console.log("Grand autos wants to introduce the amazing " + Car.make, Car.model, Car.colour, "2024 version");

console.log("Have you seen this new car" [2]);

const book = {
    title: "Beautiful Life",
    author: "Esther Smith",
    pages: "250 pages",
};

console.log("Join us at the Albert Hall for our book launch this saturday by " + book.author, book.title, book.pages,);

console.log("Have you seen our new book" + book[2]);

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost.author.name);
console.log(blogPost.tags[0]);
console.log(blogPost.tags.length);

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
);

for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]); 
}