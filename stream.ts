//Clase Stream
import { Streamer } from "./streamer.js";
import { Plataforma } from "./plataforma.js";
import { Canal } from "./canal.js"; 
import { Categoria } from "./categoria.js";

export class Stream {
    nombreDelStream : String;
    streamer : Streamer;
    canal : Canal[];
    descripciondelStream : String;
    plataforma : Plataforma;
    categoria : Categoria;
 
    constructor(nombreDelStream : String, streamer : Streamer ,descripciondelStream : String, plataforma: Plataforma, categoria: Categoria) {
        this.nombreDelStream = nombreDelStream;
        this.streamer = streamer;
        this.descripciondelStream = descripciondelStream;
        this.plataforma = plataforma;
        this.categoria
    }
}
//cambiar la palabra nuevo canal (por el nombre del canal y sucesivamente con nuevos canales)
function listaCanles(nuevoCanal:String): void{
    console.log(nuevoCanal);
   }


//const streamer1 = new Streamer("nombre", "descipcion", ["redes sociales"]);
//const plataforma1= new Plataforma("nombre","logotipo","descripcion","sponsor", "canal");
//const categoria1= new Categoria("nombre", "descripcion", "imagen")
//const straem1 = new Stream("nombre del stream", streamer1,"descipcion", plataforma1, categoria1);
//console.log (listaCanles)

//console.info (straem1);