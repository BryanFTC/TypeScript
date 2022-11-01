import { cursorTo } from "readline";
import { Curso } from "./curso";

export class Estudiante {
  // Propiedades de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];
  private ID: string = '123456'
  // Constructor
  constructor(nombre: string, cursos: Curso[], apellidos?: string) {
    //Opcionales(?) siempre van al final
    // INicializamos las propiedades
    this.nombre = nombre;

    if (apellidos) {
      this.apellidos = apellidos;
    }
    this.cursos = cursos;
  }

  get horasEstudiadas(): number {
    let horasEstudiadas = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    });

    return horasEstudiadas;
  }

  set ID_Estudiante (id: string) {
    this.ID = id
  }
}
