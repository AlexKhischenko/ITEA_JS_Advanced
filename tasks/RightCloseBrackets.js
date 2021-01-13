/*
Task
Intermediate Algorithm Scripting: Right Close Brackets
*/

/* ---------- Imperative method ---------- */

function validParens(s) {
    var symbols = '()[]{}',
        size = s.length,
        i,
        position,
        arr = [];
    
    for(i = 0; i < size; i += 1) {
        position = symbols.indexOf(s[i]);
        
        if(position === -1) continue;
        
        // ... 
    }
}

console.log(validParens('()[]{}')); /* should return true */
console.log(validParens('(]')); /* should return false */
console.log(validParens('([)]')); /* should return false */
console.log(validParens('{[]}')); /* should return true */