import { Opcion } from "./Opcion";

export enum TipoDePregunta {
    VOTACION = "VOTACION",
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    SINGLE_CHOICE = "SINGLE_CHOICE",
}

export class Pregunta {
    private leyenda!: string;
    private opciones: Opcion[]
    private tipo!: TipoDePregunta;
    
    constructor(){
        this.leyenda = "";
        this.opciones = [];
    }

    public setLeyenda(leyenda: string): void{
        this.leyenda = leyenda;
    }

    public setTipo(tipo: TipoDePregunta): void{
        this.tipo = tipo;
    }

    public agregarOpcion(opcion: Opcion): void{
        this.opciones.push(opcion);
    }

    public opcionesCorrectas(): Opcion[]{
        return this.opciones.filter(opcion => opcion.getEsCorrecta());
    }
}