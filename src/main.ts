//tarea 2: crar una clase padre transporte y tres subclases "aereo", "maritimo", "terrestre"

document.write("clases y herencias con typescript, Accesos");
class Transporte {
    protected marcas:string;
    protected serie: number;
    protected compania: string;
    constructor(marcas:string, serie: number, compania: string){
        this.marcas=marcas;
        this.serie=serie;
        this.compania=compania;
    }
    imprimir(){
        console.log("La marca es:" + this.marcas);
        console.log("Serie:" + this.serie);
        console.log("Compania:" + this.compania);
    }
}

class Aereo extends Transporte{
    private turvinas: number;
    private marca: string;
    constructor(marcas:string, serie: number, compania: string, turvinas:number, marca:string){
        super(marcas, serie,compania);
        this.turvinas=turvinas;
        this.marca=marca;
    }
    imprimir() {
        super.imprimir();
        console.log('Turvinas:' + this.turvinas);
        console.log('marca:' + this.marca);
    }
}


class Maritimo extends Transporte{
    capacidad: number;
    color:string;
    tamano: string
    constructor(marcas:string, serie: number, compania: string, capacidad: number, color: string, tamano: string){
        super(marcas, serie,compania);
        this.capacidad = capacidad;
        this.color=color;
        this.tamano=tamano;
    }
}

class Terrestre extends Transporte{
    propietario: string;
    chasis: number;
    llantas:number;
    constructor(marcas:string, serie: number, compania: string, propietario:string, chasis: number, llantas: number){
        super(marcas, serie,compania);
        this.propietario= propietario
        this.chasis = chasis;
        this.llantas= llantas;

    }
}

let transporte = new Transporte("Mercedes benz", 1234, "Casabaca");
let aereo = new Aereo("Tame", 1234, "Casabaca", 34 ,  "Airbus");
let maritimo = new Maritimo("Titanic", 1234, "Casabaca",80, "blanco", "mediano");
let terrestre = new Terrestre("Transplaneta", 1234, "Casabaca", "Alex", 24 ,6);
transporte.imprimir();
aereo.imprimir();
maritimo.imprimir();
terrestre.imprimir();

