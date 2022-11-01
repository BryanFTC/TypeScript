"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookies_utils_1 = require("cookies-utils");
const cursos_mock_1 = require("./mock/cursos.mock");
const curso_1 = require("./models/curso");
const estudiante_1 = require("./models/estudiante");
const ITarea_1 = require("./models/interfaces/ITarea");
const persona_1 = require("./models/persona");
const programar_1 = require("./models/programar");
console.log("Hola Bryan");
console.log("Adios");
// Declaracion de variables (var let y const)
var nombre = "Maria";
let email = "mariac@imaginagroup.com";
console.log("Hola, " + nombre);
console.log(`Como han ido las vacaciones, ${nombre} ?`);
console.log(`El email de ${nombre} es ${email}`);
const PI = 3.1416;
// TS tiene tipado fuerte
var error;
error = false;
//
console.log(`Hay error?: ${error}`);
// Instanciacion multiple de variables
let a, b, c; //instacia 3 variables sin valor inicial
a = "TypeScript";
b = true;
c = 8.9;
// BuiltIn Types: number, string, boolean, void, null y undefined
// Tipos mas complejos
// Lista de cadena de texto
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinacion de tipos en listas
let valores = [false, "Hola", true, 56];
//Enumerados
var Estados;
(function (Estados) {
    Estados["Completo"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 0] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 1] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 2] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completo;
let PuestoMaraton = PuestoCarrera.Segundo;
// Podemos crear variables que sigan la interface Tarea
let tarea1 = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10,
};
console.log(`Tarea: ${tarea1.nombre}`);
// Asignacion multiple de variables
let miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completo,
    urgencia: 1,
};
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
// Declaracion con factor de propagacion
let { titulo, estado, urgencia } = miTarea;
// En listas
let listaComprasLunes = ["leche", "papas"];
let listaComprasMartes = [...listaComprasLunes, "pan", "huevos"];
let listaComprasMiercoles = ["carne", "pescado"];
let listaComprasSemana = [...listaComprasLunes, listaComprasMiercoles];
// En Objetos
let estadoApp = {
    usuario: "amdin",
    session: 3,
    jwt: "Beaber12354235421",
};
// Cambiar un valor por propagacion
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let coche = {
    nombre: "BMW",
    precio: 90000,
    anio: 2015,
};
// Operadores ternarios
console.log(coche.anio < 2010
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`);
// Condicionales if-else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay error");
}
// Condicionales if- else if - else
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
}
else {
    console.log(`Coche: ${coche.nombre} es nuevo`);
}
// Switch
switch (tarea1.estado) {
    case Estados.Completo:
        console.log("la tarea esta completada");
        break;
    case Estados.Incompleto:
        console.log("la tarea no esta completada");
        break;
    case Estados.Pendiente:
        console.log("la tarea esta pendiente de comprobarse");
        break;
    default:
        break;
}
// Bucles
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completo,
        urgencia: 2,
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0,
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completo,
        urgencia: 15,
    },
];
// Foreach es una funcion de callback, se usa mas para listas
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
// For clasico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}
// for in para objetos y cadenas de texto
// for (const key in tarea1) {
//     if (Object.prototype.hasOwnProperty.call(tarea1, key)) {
//         const element = tarea1[key];
//     }
// }
// Bucles while
while (tarea1.estado !== Estados.Completo) {
    tarea1.urgencia++;
    if (tarea1.urgencia == 5) {
        tarea1.estado = Estados.Completo;
    }
    else {
        tarea1.urgencia++;
    }
}
// Do while (se ejecuta al menos una vez)
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completo;
} while (tarea1.estado !== Estados.Completo);
// Funciones
/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Martin";
    console.log(`Hola, ${nombre}`);
}
// Invocacion de la funcion
saludar();
/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre) {
    console.log(`Hola, ${nombre}`);
}
saludarPersona("Mario");
/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre Nombre de la persona a despedir, por defecto sera "Pepe"
 */
function despedirPersona(nombre = "Pepe") {
    console.log(`Adios, ${nombre}!`);
}
despedirPersona(); //Adios, Pepe
despedirPersona("Alba"); //Aios, Alba
/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adios, ${nombre}!`);
    }
    else {
        console.log(`Adios!`);
    }
}
despedidaOpcional(); // Adios!
despedidaOpcional("Juan"); // Adios Juanjo!
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} anios`);
    }
    else {
        console.log(`${nombre} tiene ${edad} anios`);
    }
}
variosParams("Martin"); //Martin tiene 18 anios
variosParams("Martin", "San Jose"); //Martin San Jose tiene 18 anios
variosParams("Martin", undefined, 30); //Martin tiene 30 anios
variosParams("Martin", "San Jose", 30); //Martin San Jose tiene 30 anios
function ejempliVariosTipos(a) {
    if (typeof a === "string") {
        console.log("A es un string");
    }
    else if (typeof a === "number") {
        console.log("A es un number");
    }
    else {
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es un string ni un number");
    }
}
ejempliVariosTipos("Hola");
ejempliVariosTipos(3);
// ejempliVariosTipos(true)// Error
/**
 *
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Martin", "San Jose");
console.log(nombreCompleto); //Martin San Jose
console.log(ejemploReturn("Martin", "San Jose")); //Martin San Jose
/**
 *
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams("Martin");
ejemploMultipleParams("Martin", "Pepe", "Juan", "Alba");
const lista = ["Alberto", "Sandra"];
ejemploMultipleParams(...lista);
function ejemploParamsLista(nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploParamsLista(lista);
let empleadoMartin = {
    nombre: "Martin",
    apellidos: "San Jose",
    edad: 30,
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} anios`;
// LLamamos a la funcion
mostrarEmpleado(empleadoMartin);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
};
datosEmpleado(empleadoMartin); //Empleado Martin esta en edad laboral
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); //callback a ejecutar
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtenerSalario(empleadoMartin, () => "Cobrar Martin");
// Async Functions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de instruciones");
        console.log("Tarea completada");
        return "Completado";
    });
}
ejemploAsync()
    .then((respuesta) => {
    console.log("Respuesta", respuesta);
})
    .catch((error) => {
    console.log("Ha habido un error", error);
})
    .finally(() => "Todo ha terminado");
// Generators (usa * ej --- function*)
function* ejemploGenerators() {
    // yield --> para emitir valores
    let index = 0;
    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }
}
// Guardamos la funcion generadora en una variable
let generadora = ejemploGenerators();
// Accedemos a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3
console.log(generadora.next().value); //4
// Worker
function* watcher(valor) {
    yield valor; // emitimos el valor inicial
    yield* worker(valor); // LLamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; // emitimos el valor final +4
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)
// Sobrecarga de funciones
function mostrarError(error) {
    console.log("Ha habido un error:", error);
}
//  Persistencia de datos
// 1. LocalStorage --> Almacena los datos en el navegador (no se eliminan automaticamente)
// 2. SessionStorage --> La diferencia radica en la sesion de navegador. Es decir, los datos persisten en la sesion  de navegador
// 3. Cookies --> Tienen una fecha de caducidad y tambien tienen un ambito de URL
// LocalStorage y SesionStorage
// function guardarEnLocalStorage():void{
//   localStorage.set("nombre", "Martin")
// }
// function leer(): void{
//   let nombre = localStorage.get("nombre")
// }
// Cookies
const cookieOptions = {
    name: "usuario",
    value: "Martin",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/", // optional string,
};
// Seteamos la Cookie
(0, cookies_utils_1.setCookie)(cookieOptions);
// leer Cookie
let cookieLeida = (0, cookies_utils_1.getCookieValue)("usuario");
// Eliminar
(0, cookies_utils_1.deleteCookie)("usuario");
// Eliminar todas las Cookies
(0, cookies_utils_1.deleteAllCookies)();
// Clase Temporizador
class Temporizador {
    empezar() {
        setTimeout(() => {
            // Comprobamos que exista la funcion terminar como callback
            if (!this.terminar)
                return;
            // Cuando haya pasado el tiempo, se ejecutara la funcion teminar
            this.terminar(Date.now());
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
// Definimos la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log("Evento terminado en:", tiempo);
};
// Lanzamos el temporizador
miTemporizador.empezar(); // se inicia el timeout y cuando termine, se ejecuta la funcion terminar()
// setInterval(() => console.log("Tic"), 10000) //Imprimir "tic" cada segundo por consola
// Eliminar la ejecucion de la funcion
delete miTemporizador.terminar;
//
//
// class Curso {
//   nombre: string;
//   horas: number;
//   constructor(nombre: string, horas: number){
//     this.nombre = nombre;
//     this.horas = horas;
//   }
// }
// class Estudiante {
//   // Propiedades de clase
//   nombre: string;
//   apellidos?: string;
//   cursos: Curso[];
//   // Constructor
//   constructor (nombre: string, cursos: Curso[], apellidos?:string ){//Opcionales(?) siempre van al final
//     // INicializamos las propiedades
//     this.nombre = nombre;
//     if(apellidos){
//       this.apellidos = apellidos
//     }
//     this.cursos = cursos
//   }
// }
// **CLASES
// Creamos un curso
// const cursoTS: Curso = new Curso("Typescript", 15)
// const cursoJS: Curso = new Curso("Javascript", 20)
// listaCursos.push(cursoTS, cursoJS); //[Lista de cursos]
// Usamos el MOCk
const listaCursos = cursos_mock_1.LISTA_CURSOS;
// Creamos un estudiante
const martin = new estudiante_1.Estudiante("Martin", listaCursos, "San Jose");
console.log(`${martin.nombre} estudia:`);
// Iteramos por cada uno de ellos:
martin.cursos.forEach((curso) => {
    console.log(`- ${curso.nombre} (${curso.horas} horas)`); // - Typescript (15 horas)
});
const cursoAngular = new curso_1.Curso("Angular", 40);
martin.cursos.push(cursoAngular);
// Conocer las horas Estudiadas
martin.horasEstudiadas; //number
// Saber la instancia de un objeto/variable
// -typeOf
// -instanceOf
let fechaNacimiento = new Date(1991, 10, 10);
if (fechaNacimiento instanceof Date) {
    console.log("Es una instancia de Date");
}
if (martin instanceof estudiante_1.Estudiante) {
    console.log("Martin es un Estudiante");
}
// Herencia y polimorfismo
let trabajador1 = new persona_1.Trabajador("Martin", "San Jose", 30, 2000);
let trabajador2 = new persona_1.Trabajador("Pepe", "Garcia", 21, 1000);
let trabajador3 = new persona_1.Trabajador("Juan", "Gonzales", 34, 3000);
trabajador1.saludar(); // Herencia de Persona
let jefe = new persona_1.Jefe("Pablo", "Garcia", 50);
jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);
trabajador1.saludar(); //especificado en Empleado
jefe.saludar(); // Herencia de Persona
jefe.trabajadores.forEach((trabajador) => {
    trabajador.saludar(); // especificado en Trabajador
});
// Uso de interfaces
let programar = {
    titulo: "Programar en TypeScript",
    descripcion: "Practicar con Katas para aprender a desarrollar con TS",
    completada: false,
    urgencia: ITarea_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.completada} - ${this.urgencia}`;
    },
};
console.log(programar.resumen());
// Tarea de programacion
let programarTS = new programar_1.Programar("TypeScript", "Tarea de programacion en TS", false, ITarea_1.Nivel.Bloqueante);
console.log(programarTS.resumen());
// Decoradores experimentales ---> @
// -Clases
// -Parametros
// -Metodos
// -Propiedades
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label,
        });
    };
}
class PruebaDecorador {
    constructor() {
        this.nombre = "Martin";
    }
}
__decorate([
    Override("Prueba") //LLamar a la funcion Overrride
    ,
    __metadata("design:type", String)
], PruebaDecorador.prototype, "nombre", void 0);
let prueba = new PruebaDecorador();
console.log(prueba.nombre); //"Prueba" siempre va a ser devuelto a traves del get()
// Otra funcion para usarla como decorador
function SoloLectura(target, key) {
    Object.defineProperty(target, key, {
        writable: false,
    });
}
class PruebaSoloLectura {
    constructor() {
        this.nombre = "";
    }
}
__decorate([
    SoloLectura,
    __metadata("design:type", String)
], PruebaSoloLectura.prototype, "nombre", void 0);
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Martin";
console.log(pruebaLectura.nombre); // ==> Undifined, ya que no se le puede dar valor (es solo de lectura)
// Decorador para parametros de un metodo
function mostrarPosicion(target, propertyKey, parameterIndex) {
    console.log("Posicion", parameterIndex);
}
class PruebaMetodoDecorador {
    prueba(a, b) {
        console.log(b);
    }
}
__decorate([
    __param(1, mostrarPosicion),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], PruebaMetodoDecorador.prototype, "prueba", null);
// Usamos el metodo con el parametro y su decorador
let pruebaDecoradorParametro = new PruebaMetodoDecorador().prueba("Hola", false);
//# sourceMappingURL=index.js.map