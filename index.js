/*Recordar control shift L*/
/*Pair Progaming*/
/*1*/
let arrayVacio = []
/*2*/
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
/*3*/
let arrayNumerosPares = [0, 2, 4, 6, 8]
/*4*/
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]
/*5*/
const suma = function suma(x, y) {
    return x + y
}
/*6*/
function potenciacion(x, y) {
    return x ** y
}
/*7*/
function separarPalabras(str) {
    return str.split(' ')
}
/*8*/
function repetirString(str, x) {

    return str.repeat(x)
}
/*9*/
/*le falta algo, o le sobra */
function esPrimo(x) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false
        }
    }
    return true;

}
/*10*/
function ordenarArray(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    return arr
        /*Ordenamiento con burbuja*/
}
/*11*/
let arrResult = []
function obtenerPares(arrPar) {
    arrResult = arrPar.filter(arrPar => arrPar % 2 === 0)
    return arrResult


}
/*12*/
 function pintarArray(arr) {
   let resultado = '['
   for(let i= 0; i<arr.length-1;i++) {
    resultado += arr[i] + ', '
   }

   resultado += arr[arr.length -1] + ']'
   return resultado

}
/*13*/
function arrayMapi(arr, f) {
    let resultado = []
    for(let i=0; i< arr.length; i++){
        resultado[i] = f(arr[i])
    }
    return resultado
}
/*14*/
function eliminarDuplicados(arr) {
    let arrNuevo = new Set(arr)
    let result = [...arrNuevo]
    return result
}

/*Ejercicios Individuales*/

/*15*/
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
/*16*/
let holaMundo = ['Hola', 'Mundo']
/*17*/
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
/*16*/
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']
/*19*/
const multiplicacion = function multiplicacion(x, y) {
    return x * y
}
/*20*/
function division(x, y) {
    return x / y
}
/*21*/
function esPar(x) {
    if (x % 2 == 0) {
        return true
    } else { return false }
}
/*22*/
const resta = function resta(x, y) {
    return x - y
}
const arrayFunciones = [suma, resta, multiplicacion]


/*23*/
function ordenarArray2(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    let ordenarArray2 = arr.reverse()
    return arr
}
/*24*/
let arrResult2 = []

function obtenerImpares(arrImpar) {
    arrResult2 = arrImpar.filter(arrImpar => arrImpar % 2 !== 0)
    return arrResult2
}
/*25*/
function sumarArray(arr) {
    let sumar = 0
    for (let i = 0; i < arr.length; i++) {
        sumar += arr[i];
    } return sumar
}

/*26*/

function multiplicarArray (arr) {
    let sumaBidemensional = 1
    for (let i = 0; i < arr.length; i++) {
        sumaBidemensional *= arr[i];
    } return sumaBidemensional
}












