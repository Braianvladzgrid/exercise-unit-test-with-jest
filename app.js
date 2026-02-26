// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

const fromDollarToYen = function(valueInDollar) {
    return (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
}

const fromYenToPound = function(valueInYen) {
    return (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound };