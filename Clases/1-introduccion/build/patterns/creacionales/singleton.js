"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // Se crea la unica instancia compartida a nivel de aplicacion
        }
        return Singleton.instance;
    }
    mostrarPorConsola() {
        console.log("Metodo del Singleton");
    }
}
//# sourceMappingURL=singleton.js.map