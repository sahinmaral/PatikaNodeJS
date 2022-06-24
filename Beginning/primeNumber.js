
function isItPrime(number){
    if(number == 2)
        return true;

    for (let i = 2; i < number; i++) {
        if(number % i == 0)
            return false;
    }
    return true;
}

function findPrimeNumbersBetweenNumbers(first,second){
    let arr = []
    
    for (let number = first; number < second; number++) {
        if(isItPrime(number)) arr.push(number)
    }

    return arr
}

let firstNumber = process.argv[2]*1
let secondNumber = process.argv[3]*1

console.log(findPrimeNumbersBetweenNumbers(firstNumber,secondNumber))



