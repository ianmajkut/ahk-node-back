export class Opcion {
    private descripcion!: string;
    private esCorrecta!: boolean;

    constructor(){
        this.descripcion = "";
        this.esCorrecta = false;
    }

    public setDescripcion(descripcion: string): void{
        this.descripcion = descripcion;
    }

    public getDescripcion(): string{
        return this.descripcion;
    }

    public setEsCorrecta(esCorrecta: boolean): void{
        this.esCorrecta = esCorrecta;
    }

    public getEsCorrecta(): boolean{
        return this.esCorrecta;
    }
}