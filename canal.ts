//Clase Canal
import { Plataforma } from "./plataforma.js";
import { Streamer } from "./streamer.js";

export class Canal{
    nombre: string;
    streamer: Streamer[];
    banner: String;
    nombreTrasmisor: String;
    descripcion: String;
    plataforma: Plataforma;

    constructor(nombre: string, streamer: Streamer[], banner: string, nombreTrasmisor: String, descripcion: string, plataforma: Plataforma){
        this.nombre = nombre;
        this.streamer = streamer;
        this.banner = banner;
        this.nombreTrasmisor = nombreTrasmisor;
        this.descripcion = descripcion;
        this.plataforma = plataforma;
        }
}

//const plataforma1= new Plataforma("nombre","logotipo","descripcion","sponsor");
//const streamer1 = new Streamer("apodo","descipcion",["redes sociales"])
//const canal1 = new Canal ("nombre del canal", [streamer1], "banner", "trasmisor", "descripcion", plataforma1);

//console.info(canal1);