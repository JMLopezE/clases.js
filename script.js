class  Libro {
    // Constructor

    constructor(TituloL, autorL, generoL ) {
        this.nombre = TituloL;
        this.autor = autorL;
        this.genero = generoL;
        this.leido = false;
    }

    Leido() {
        this.leido = true;
    }

    NoLeido() {
        this.leido = false;
    }

    informacion() {
        const estadoLeido = this.leido ? "Sí" : "No";
        console.log(`Titulo: ${this.nombre}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${estadoLeido}`);
    }
}

// Instancias
const libro1 = new Libro("Historia social Colombiana", "Jaime Jaramillo Uribe", "Ensayo");
const libro2 = new Libro("¡Vuelvan Caras, Carajo!", "Rafael Baena", "Novela ");

// Marcar uno de los libros como leído
libro2.Leido();

// Mostrar la información de ambos libros
libro1.informacion();
libro2.informacion();

