export interface Producto {
    id?: string;
    nombre:string;
    precio:string;
    horas:string;
    descripcion:string;
    idVendedor?:string | null;
}
