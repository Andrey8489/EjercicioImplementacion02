// Clase Streamer

export class Streamer{
    apodo: String;
    descripcion: String;
    redesSociales: String[];

    constructor(apodo: String, descripcion: String, redesSociales: String[]){
        this.apodo = apodo;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
    }
}
//const {streamer1} = new Streamer("apodo", "descipcion", ["redes sociales"]);
//console.info(streamer1);