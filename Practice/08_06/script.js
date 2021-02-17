/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const unorderedList = `
    <li>fire</li>
    <li>earth</li>
    <li>water</li>
    <li>air</li>
`;

console.log(unorderedList);

const createList = function (unorderedList) {
  let main = document.querySelector("main");
  main.innerHTML = unorderedList;
};

createList(unorderedList);
