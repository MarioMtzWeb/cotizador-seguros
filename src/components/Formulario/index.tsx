import { FormEvent, Fragment, useState } from 'react';
import { useCotizador } from '../../hooks/useCotizador';
import { ErrorMessage } from '../ErrorMessage';
import { MARCAS, YEARS, PLANES } from './../../constants';

const Formulario = () => {

    const {
        state: {
            data,
        }, 
        stateUpdaters: {
            handleChangeData,
            cotizarSeguro,
        }
     } = useCotizador();

     const [error, setError] = useState(false);

     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if(Object.values(data).includes('')){
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }
        
        cotizarSeguro();
     }

    return (
        <>
            { error && <ErrorMessage message="Todos los campos son obligatorios" /> }
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select 
                    name="marca"
                    className="text-center w-full p-3 bg-white border border-gray-200"
                    value={data.marca}
                    onChange={handleChangeData}
                    >
                        <option value="">-- Seleccionar Marca --</option>
                        {MARCAS.map((marca, index) => (
                            <option key={`${index}-${marca.nombre}`} value={marca.id} > { marca.nombre } </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select 
                    name="year"
                    className="text-center w-full p-3 bg-white border border-gray-200"
                    value={data.year}
                    onChange={handleChangeData}
                    >
                        <option value="">-- Seleccionar Año --</option>
                        {YEARS.map((year, index) => (
                            <option key={`${index}-${year}`} value={year} > { year } </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un Plan
                    </label>
                    <div
                    className="flex gap-3 items-center"
                    >
                        {PLANES.map((plan, index) => (
                            <Fragment
                            key={index}
                            >
                                <label htmlFor={plan.nombre}>
                                     { plan.nombre } 
                                </label>
                                <input 
                                type="radio" 
                                name="plan"
                                value={plan.id}
                                id={plan.nombre}
                                onChange={handleChangeData}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input 
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                value="Cotizar"
                />
            </form>
        </>
    );
}

export { Formulario };