import { AsyncLocalStorage } from "async_hooks";
import { Worker } from "cluster";

import {
  deleteAllCookies,
  deleteCookie,
  getCookieValue,
  setCookie,
} from "cookies-utils";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Curso } from "./models/curso";
import { Estudiante } from "./models/estudiante";
import { ITarea, Nivel } from "./models/interfaces/ITarea";
import { Trabajador, Jefe } from "./models/persona";
import { Programar } from "./models/programar";

console.log("Hola Bryan");
console.log("Adios");

// Declaracion de variables (var let y const)

var nombre: string = "Maria";
let email = "mariac@imaginagroup.com";
console.log("Hola, " + nombre);
console.log(`Como han ido las vacaciones, ${nombre} ?`);

console.log(`El email de ${nombre} es ${email}`);

const PI: number = 3.1416;
// TS tiene tipado fuerte

var error: boolean;
error = false;
//

console.log(`Hay error?: ${error}`);

// Instanciacion multiple de variables

let a: String, b: boolean, c: number; //instacia 3 variables sin valor inicial

a = "TypeScript";
b = true;
c = 8.9;
// BuiltIn Types: number, string, boolean, void, null y undefined
// Tipos mas complejos

// Lista de cadena de texto
let listaTareas = ["Tarea 1", "Tarea 2"];

// Combinacion de tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

//Enumerados

enum Estados {
  "Completo" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

enum PuestoCarrera {
  "Primero",
  "Segundo",
  "Tercero",
}

let estadoTarea: Estados = Estados.Completo;
let PuestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

// Interfaces

interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

// Podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
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
let listaComprasLunes: string[] = ["leche", "papas"];
let listaComprasMartes: string[] = [...listaComprasLunes, "pan", "huevos"];
let listaComprasMiercoles: string[] = ["carne", "pescado"];
let listaComprasSemana = [...listaComprasLunes, listaComprasMiercoles];

// En Objetos

let estadoApp = {
  usuario: "amdin",
  session: 3,
  jwt: "Beaber12354235421",
};
// Cambiar un valor por propagacion
let nuevoEstado = {
  ...estadoApp,
  session: 4,
};

// Types de TS

type Producto = {
  precio: number;
  nombre: string;
  anio: number;
};

let coche: Producto = {
  nombre: "BMW",
  precio: 90000,
  anio: 2015,
};

// Operadores ternarios
console.log(
  coche.anio < 2010
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`
);

// Condicionales if-else

if (error) {
  console.log("Hay un error");
} else {
  console.log("No hay error");
}

// Condicionales if- else if - else

if (coche.anio < 2010) {
  console.log(`Coche: ${coche.nombre} es viejo`);
} else if (coche.anio === 2010) {
  console.log(`Coche: ${coche.nombre} es del 2010`);
} else {
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

let listaTareasNueva: Tarea[] = [
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

listaTareasNueva.forEach((tarea: Tarea, index: number) => {
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
  } else {
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
function saludarPersona(nombre: string) {
  console.log(`Hola, ${nombre}`);
}

saludarPersona("Mario");

/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre Nombre de la persona a despedir, por defecto sera "Pepe"
 */
function despedirPersona(nombre: string = "Pepe") {
  console.log(`Adios, ${nombre}!`);
}
despedirPersona(); //Adios, Pepe
despedirPersona("Alba"); //Aios, Alba

/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre?: string) {
  if (nombre) {
    console.log(`Adios, ${nombre}!`);
  } else {
    console.log(`Adios!`);
  }
}

despedidaOpcional(); // Adios!
despedidaOpcional("Juan"); // Adios Juanjo!

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
  if (apellidos) {
    console.log(`${nombre} ${apellidos} tiene ${edad} anios`);
  } else {
    console.log(`${nombre} tiene ${edad} anios`);
  }
}

variosParams("Martin"); //Martin tiene 18 anios
variosParams("Martin", "San Jose"); //Martin San Jose tiene 18 anios
variosParams("Martin", undefined, 30); //Martin tiene 30 anios
variosParams("Martin", "San Jose", 30); //Martin San Jose tiene 30 anios

function ejempliVariosTipos(a: string | number) {
  if (typeof a === "string") {
    console.log("A es un string");
  } else if (typeof a === "number") {
    console.log("A es un number");
  } else {
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
function ejemploReturn(nombre: string, apellidos: string): string {
  return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Martin", "San Jose");
console.log(nombreCompleto); //Martin San Jose
console.log(ejemploReturn("Martin", "San Jose")); //Martin San Jose

/**
 *
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploMultipleParams("Martin");
ejemploMultipleParams("Martin", "Pepe", "Juan", "Alba");

const lista = ["Alberto", "Sandra"];
ejemploMultipleParams(...lista);

function ejemploParamsLista(nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploParamsLista(lista);

// Arrow function

type Empleado = {
  nombre: string;
  apellidos: string;
  edad: number;
};

let empleadoMartin = {
  nombre: "Martin",
  apellidos: "San Jose",
  edad: 30,
};

const mostrarEmpleado = (empleado: Empleado) =>
  `${empleado.nombre} tiene ${empleado.edad} anios`;

// LLamamos a la funcion
mostrarEmpleado(empleadoMartin);

const datosEmpleado = (empleado: Empleado): string => {
  if (empleado.edad > 70) {
    return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
  } else {
    return `Empleado ${empleado.nombre} esta en edad laboral`;
  }
};

datosEmpleado(empleadoMartin); //Empleado Martin esta en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
  if (empleado.edad > 70) {
    return;
  } else {
    cobrar(); //callback a ejecutar
  }
};

const cobrarEmpleado = (empleado: Empleado) => {
  console.log(`${empleado.nombre} cobra su salario`);
};

obtenerSalario(empleadoMartin, () => "Cobrar Martin");

// Async Functions

async function ejemploAsync(): Promise<string> {
  await console.log(
    "Tarea a completar antes de seguir con la secuencia de instruciones"
  );
  console.log("Tarea completada");
  return "Completado";
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

function* watcher(valor: number) {
  yield valor; // emitimos el valor inicial
  yield* worker(valor); // LLamamos a las emisiones del worker para que emita otros valores
  yield valor + 4; // emitimos el valor final +4
}

function* worker(valor: number) {
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

function mostrarError(error: string | number): void {
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
  name: "usuario", // string,
  value: "Martin", // string,
  maxAge: 10 * 60, // optional number (value in seconds),
  expires: new Date(2099, 10, 1), // optional Date,
  path: "/", // optional string,
};

// Seteamos la Cookie
setCookie(cookieOptions);

// leer Cookie
let cookieLeida = getCookieValue("usuario");

// Eliminar
deleteCookie("usuario");

// Eliminar todas las Cookies
deleteAllCookies();

// Clase Temporizador

class Temporizador {
  public terminar?: (tiempo: number) => void;

  public empezar(): void {
    setTimeout(() => {
      // Comprobamos que exista la funcion terminar como callback
      if (!this.terminar) return;
      // Cuando haya pasado el tiempo, se ejecutara la funcion teminar
      this.terminar(Date.now());
    }, 10000);
  }
}

const miTemporizador: Temporizador = new Temporizador();

// Definimos la funcion del callback a ejecutar cuando termine el tiempo

miTemporizador.terminar = (tiempo: number) => {
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
const listaCursos: Curso[] = LISTA_CURSOS;
// Creamos un estudiante

const martin: Estudiante = new Estudiante("Martin", listaCursos, "San Jose");

console.log(`${martin.nombre} estudia:`);
// Iteramos por cada uno de ellos:

martin.cursos.forEach((curso) => {
  console.log(`- ${curso.nombre} (${curso.horas} horas)`); // - Typescript (15 horas)
});

const cursoAngular: Curso = new Curso("Angular", 40);

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

if (martin instanceof Estudiante) {
  console.log("Martin es un Estudiante");
}

// Herencia y polimorfismo

let trabajador1 = new Trabajador("Martin", "San Jose", 30, 2000);
let trabajador2 = new Trabajador("Pepe", "Garcia", 21, 1000);
let trabajador3 = new Trabajador("Juan", "Gonzales", 34, 3000);

trabajador1.saludar(); // Herencia de Persona

let jefe = new Jefe("Pablo", "Garcia", 50);

jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);

trabajador1.saludar(); //especificado en Empleado
jefe.saludar(); // Herencia de Persona

jefe.trabajadores.forEach((trabajador: Trabajador) => {
  trabajador.saludar(); // especificado en Trabajador
});

// Uso de interfaces

let programar: ITarea = {
  titulo: "Programar en TypeScript",
  descripcion: "Practicar con Katas para aprender a desarrollar con TS",
  completada: false,
  urgencia: Nivel.Urgente,
  resumen: function (): string {
    return `${this.titulo} - ${this.completada} - ${this.urgencia}`;
  },
};

console.log(programar.resumen());

// Tarea de programacion

let programarTS = new Programar(
  "TypeScript",
  "Tarea de programacion en TS",
  false,
  Nivel.Bloqueante
);

console.log(programarTS.resumen());

// Decoradores experimentales ---> @
// -Clases
// -Parametros
// -Metodos
// -Propiedades

function Override(label: string) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => label,
    });
  };
}

class PruebaDecorador {
  @Override("Prueba") //LLamar a la funcion Overrride
  nombre: string = "Martin";
}

let prueba = new PruebaDecorador();

console.log(prueba.nombre); //"Prueba" siempre va a ser devuelto a traves del get()

// Otra funcion para usarla como decorador

function SoloLectura(target: any, key: string) {
  Object.defineProperty(target, key, {
    writable: false,
  });
}

class PruebaSoloLectura {
  @SoloLectura
  nombre: string = "";
}

let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Martin";

console.log(pruebaLectura.nombre); // ==> Undifined, ya que no se le puede dar valor (es solo de lectura)

// Decorador para parametros de un metodo

function mostrarPosicion(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("Posicion", parameterIndex);
}

class PruebaMetodoDecorador {
  prueba(a: string, @mostrarPosicion b: boolean) {
    console.log(b);
  }
}

// Usamos el metodo con el parametro y su decorador
let pruebaDecoradorParametro = new PruebaMetodoDecorador().prueba(
  "Hola",
  false
);

// Patrones
// 1.Patrones Creacionales
// --Mecanismos de creacion de objetos
// --Reutilizacion del codigo
// --Ofrecer flexibilidad del codigo
// 2.Patrones Estructurales
// --Eficiencia y flexibilidad de la estructura a la hora de definir clases y objetos
// 3.Patrones de Comportamiento
// --Centrados en la signacion efectiva de responsabilidad entre objetos
// --Comunicacion efectiva entre objetos

//* PATRONES CREACIONALES

const miPrimerSingleton = Singleton.getInstance();
const miSegundoSingleton = Singleton.getInstance();

// Comprueba si ambos son iguales

if (miPrimerSingleton === miSegundoSingleton) {
      console.log('Singleton works, both variables contain the same instance.');
      miPrimerSingleton.mostrarPorConsola()
      miSegundoSingleton.mostrarPorConsola()
    } else {
      console.log('Singleton failed, variables contain different instances.');
}


