// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use for loop.

function findFactorialRecursive(number) {
    if ( number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number) {
    let answer=1;
    if (number === 2) {
        answer = 2
    }
    for(let i = 2;i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}

console.log(findFactorialRecursive(5));     // O(n)
console.log(findFactorialIterative(6));     // O(n)