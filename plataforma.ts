//Clase Plataforma

export class Plataforma{
    nombre: String;
    logotipo: String;
    descripcion: String;
    sponsor: String;
    canal: String;

    constructor(nombre: String, logotipo: String, descipcion: String, sponsor: String, canal: String){
    this.nombre = nombre;
    this.logotipo = logotipo;
    this.descripcion = descipcion;
    this.sponsor = sponsor;
    this.canal = canal;
    }
}

//const {plataforma1} = new Plataforma("nombre de la plataforma", "logotipo", "decripcion", "sponsor", "canal");
//console.info(plataforma1);