/*
Task
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote) and ' (apostrophe), in a string to their corresponding HTML entities.
*/

/* ---------- Imperative method ---------- */

function convertHTML(str) {
  const strLength = str.length;
  let newStr = '';
  let i;

  for (i = 0; i < strLength; i += 1) {
    switch(str[i]) {
      case '<':
        newStr += '&lt;';
        break;
      case '>':
        newStr += '&gt;';
        break;
      case '&':
        newStr += '&amp;';
        break;
      case '"':
        newStr += '&quot;';
        break;
      case "'":
        newStr += '&apos;';
        break;
      default:
        newStr += str[i];
        break;
    }
  }

  return newStr;
}

console.log(convertHTML("Dolce & Gabbana")); /* should return "Dolce &amp; Gabbana" */
console.log(convertHTML("Hamburgers < Pizza < Tacos")); /* should return "Hamburgers &lt; Pizza &lt; Tacos" */
console.log(convertHTML("Sixty > twelve")); /* should return "Sixty &gt; twelve" */
console.log(convertHTML('Stuff in "quotation marks"')); /* should return "Stuff in &quot;quotation marks&quot;" */
console.log(convertHTML("Schindler's List")); /* should return "Schindler&apos;s List" */
console.log(convertHTML("<>")); /* should return "&lt;&gt;" */
console.log(convertHTML("abc")); /* should return "abc" */


/* ---------- Declarative method ---------- */

// function convertHTML(str) {
//   const entities = new Map()
//   .set('<', '&lt;')
//   .set('>', '&gt;')
//   .set('&', '&amp;')
//   .set('"', '&quot;')
//   .set("'", '&apos;');

//   return str.split("").map(symb => {
//     return (entities.has(symb)) ? entities.get(symb) : symb;
//   }).join("");
// }