const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dolar){
    const tasaDeConversion = 156.5
    let yenes = dolar*tasaDeConversion;
    return yenes;
}
function fromEuroToDollar(euro){
    const tasaDeConversion = 1.07
    let dolares = euro*tasaDeConversion;
    return dolares;
}
function fromEuroToPound(pound){
    const tasaDeConversion = 0.87
    let libras = pound*tasaDeConversion;
    return libras;
}


let resultadoYen = fromDollarToYen(10)
console.log(resultadoYen);

let resultadoDolar = fromEuroToDollar(10)
console.log(resultadoDolar); 

let resultadoLibra = fromEuroToPound(10)
console.log(resultadoLibra); 

test.js