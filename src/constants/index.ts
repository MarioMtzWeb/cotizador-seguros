import { IMarcasAutos } from "../interfaces/MarcasAutos.interface";

export const MARCAS: IMarcasAutos[] = [
    {
        id: "1", nombre: "Europeo",
    },
    {
        id: "2", nombre: "Americano",
    },
    {
        id: "3", nombre: "Asiatico",
    },
];

export const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(Array(20), (value, index ) => YEARMAX - index);

export const PLANES = [
    { id: "1", nombre: "Básico"},
    { id: "2", nombre: "Completo"},
];
