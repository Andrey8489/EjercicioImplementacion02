//Clase flujo   
import { Canal } from "./canal.js";

export class Flujo {
    actividad: String;
    ubicacion: String;
    tema: String;
    canal: Canal;

    constructor(actividad: String, ubicacion: String, tema: String, canal: Canal) {
        this.actividad = actividad;
        this.ubicacion = ubicacion;
        this.tema = tema;
        this.canal = canal;
    }
}

//const {flujo1} = new Flujo("actividad", "ubicacion", "tema", "canal");
//console.info(flujo1);

//activida del canal