/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// Build an array with 8 items
let wardrobe = [
  "sweater",
  "socks",
  "shirt",
  "scarf",
  "pants",
  "jacket",
  "towels",
  "coat",
];

console.log(wardrobe);

// Remove the last item
// wardrobe.pop();

// console.log(wardrobe);

// Add the last item as the first item on the array
wardrobe.unshift(wardrobe.pop());

console.log(wardrobe);

// Sort the items by alphabetical order
wardrobe.sort();

console.log(wardrobe);

let outerwear = wardrobe.find((element) => element === "coat");
console.log(outerwear);

wardrobe.splice(wardrobe.indexOf(outerwear), 1);
console.log(wardrobe);
