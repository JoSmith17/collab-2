var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function evens (nums) {
    evenNums = []
    numbers.forEach(num => num%2===0 ? evenNums.push(num) : console.log('nope'))
    return evenNums
}

console.log(evens(numbers));
