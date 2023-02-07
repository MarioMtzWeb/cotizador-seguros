import { YEARMAX } from '../../constants/index';

export const obtenerDiferenciaYear = (year: number) => {
    return YEARMAX - year;
}

export const calcularMarca = (marca: string) => {

    let incremento = 0;

    switch(marca){
        case "1": 
            incremento = 1.3;
            break;
        case "2":
            incremento = 1.15;
            break;
        case "3": 
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
};

export const calcularPlan = (plan: string) => {
    return plan === "1" ? 1.2 : 1.5;
}

export const formatearDinero = (cantidad: number) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}