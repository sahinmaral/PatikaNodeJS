function calculateArea(radius){
    return Math.PI * Math.pow(radius,2)
}

function calculatePerpendicular(radius){
    return 2 * Math.PI * radius
}

let radius = process.argv[2]*1

console.log(`Area of ${radius} meter circle is ${calculateArea(radius)}`)
console.log(`Perpendicular of ${radius} meter circle is ${calculatePerpendicular(radius)}`)