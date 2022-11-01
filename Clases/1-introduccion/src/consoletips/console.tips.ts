// Console Log

console.log("Hola");

let lista = ["Uno", "Dos", "Tres"]

lista.forEach(() => console.log)

// Console Clear

console.clear()

// Console Assert

var a = 100

console.assert(a===100, "Mensaje", `Otro mensaje: ${a}`)

// Console Count

function contador(texto: string){
    console.count(texto);
}

contador("Hola") //1
contador("Hola") //2

// Console Info, Warn o Error

console.info("Texto informativo")
console.warn("Texto de aviso")
console.error("Texto de error")

// Console Trace

function uno(){
    dos()
}

function dos(){
    tres()
}

function tres(){
    console.trace(); //Trazar por donde se ha ido ejecutando para llegar a este punto
}

uno(); // inicia el trace por consola

// Console DIR  --> Mostrar valores de objetos de manera bonita

let coche = {
    nombre: "Audi",
    matricula: "454676"
}

console.dir(coche);

// Console Table --> Mostrar objetos o listas en tablas

console.table(coche)

// Console.time --> Contabilizar el tiempo de ejecucion

// function espera(){
//     for (let index = 0; index < 1000; index++) {
               
//     }
// }

console.time("Prueba"); //Inicia el cronometro
// espera();
console.timeEnd("Prueba"); //terminar y contabilizar el tiempo que ha pasado

// Console.group --> Agrupaciones de console

console.group()
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd()