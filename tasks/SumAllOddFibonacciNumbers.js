/*
Task
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
*/

/* ---------- Imperative method ---------- */

function sumFibs(num) {
    let prev = 1,
        current = 1,
        next,
        sum;

    if (num <= 0) {
        console.log(('ERROR!'));
    } 
    if (num === 1 || num === 2) {
        return num;
    }
    sum = next = prev + current;

    while (next <= num) {
        if (next % 2 !== 0) {
            sum += next;
        }
        prev = current;
        current = next;
        next = prev + current;
    }
    return sum;
}


console.log(sumFibs(1000)); /* should return 1785 */
console.log(sumFibs(4000000)); /* should return 4613732 */
console.log(sumFibs(4)); /* should return 5 */
console.log(sumFibs(75024)); /* should return 60696 */
console.log(sumFibs(75025)); /* should return 135721 */