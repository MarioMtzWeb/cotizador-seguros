//Hooks
import { ChangeEvent, createContext, useState } from "react";

//Context
const AppContext = createContext({});

//Helpers
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from '../context/helpers';

//Types
type HandleChange =  ChangeEvent<HTMLInputElement | HTMLSelectElement >

//Interfaces
interface Props {
    children: JSX.Element;
}

const AppContextProvider = ( { children }:Props) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: '',
    });

    const [resultado, setResultado] = useState('');
    const [cargando, setCargando] = useState(false);

    const handleChangeData = ({ target: { name, value } }: HandleChange) => {
        setData({
            ...data,
            [name]: value,
        });
    };

    const cotizarSeguro = () => {
        //Una base
        let resultadoValue = 2000;

        //Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(Number(data.year));
        
        //Hay que restar el 3% por cada año
        resultadoValue -= ((diferencia * 3) * resultadoValue) / 100;

        //Americano 15%
        //Europeo 30%
        //Asiatico 5%
        resultadoValue *= calcularMarca(data.marca);

        //Básico 20%
        //Completo 50%
        resultadoValue *= calcularPlan(data.plan);

        setCargando(true);
        setTimeout(() => {
            setResultado(formatearDinero(resultadoValue));
            setCargando(false);
        }, 3000)

    }

    const state = {
        data,
        resultado,
        cargando,
    }

    const stateUpdaters = {
        handleChangeData,
        cotizarSeguro,
    }


    return (
        <AppContext.Provider value={{
            state,
            stateUpdaters,
        }}>
            { children }
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext };