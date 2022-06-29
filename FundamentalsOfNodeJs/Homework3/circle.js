function circleArea(radius){
    return Math.PI * Math.pow(radius,2)
}

function circleCircumference(radius){
    return Math.PI * 2 * radius
}

module.exports = {
    circleArea,circleCircumference
}