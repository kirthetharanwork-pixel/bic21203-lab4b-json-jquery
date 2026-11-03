// Q1 helper: confirms books.json parses and every field has the required type.
// Run with:  node validate.js
const fs = require("fs");

const d = JSON.parse(fs.readFileSync("books.json", "utf8"));
console.log("JSON.parse(books.json) -> OK");
console.log("books is array:", Array.isArray(d.books), "| count:", d.books.length);
for (const b of d.books) {
  console.log(`- ${b.title}: title=${typeof b.title}, author=${typeof b.author}, publicationYear=${typeof b.publicationYear}, genres=${Array.isArray(b.genres) ? "array<string>" : "?"}`);
}
