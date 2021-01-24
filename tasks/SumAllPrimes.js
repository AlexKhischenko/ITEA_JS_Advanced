/*
Task
Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

/* ---------- Imperative method ---------- */

function sumPrimes(num) {
    let counter,
    i,
    j,
    sum = 0;

    for (i = 2; i <= num; i += 1) {
        counter = true;
        for (j = 2; j < i; j += 1) {
            if (i % j === 0) {
                counter = false;
                continue;
            }
        }
        if (counter) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(10)); /* should return 17 */
console.log(sumPrimes(977)); /* should return 73156 */