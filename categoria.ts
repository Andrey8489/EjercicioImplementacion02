//Clase Categoria

export class Categoria{
    genero: String;
    descripcion: String;

    constructor(genero: String, descripcion: String, imagen: String){
        this.genero = genero
        this.descripcion = descripcion
    }
}
//const {categoria1} = new Categoria("genero", "descripcion");
//console.info(categoria1);