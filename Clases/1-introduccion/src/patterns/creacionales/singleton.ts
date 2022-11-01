class Singleton {
  private static instance: Singleton;
  private constructor() {}
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(); // Se crea la unica instancia compartida a nivel de aplicacion
    }

    return Singleton.instance;
  }

  public mostrarPorConsola() {
    console.log("Metodo del Singleton");
  }
}
