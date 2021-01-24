/*
Task
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

function steamrollArray(arr) {
    const newArr = [];

    function lookingForElement(element) {
        if (!Array.isArray(element)) {
            newArr.push(element);
        } else {
            for (let el in element)  {
                lookingForElement(element[el]);
            }
        }
    }

    arr.forEach(lookingForElement);
    return newArr;
}

console.log(steamrollArray([[["a"]], [["b"]]])); /* should return ["a", "b"] */
console.log(steamrollArray([1, [2], [3, [[4]]]])); /* should return [1, 2, 3, 4] */
console.log(steamrollArray([1, [], [3, [[4]]]])); /* should return [1, 3, 4] */
console.log(steamrollArray([1, {}, [3, [[4]]]])); /* should return [1, {}, 3, 4] */


/* ---------- Imperative method ---------- */