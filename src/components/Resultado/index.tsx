//Custom Hooks
import { useCotizador } from "../../hooks/useCotizador";

//Constants
import { MARCAS, YEARS, PLANES  } from '../../constants';
import { useCallback, useMemo, useRef } from "react";

const Resultado = () => {

    const { state: { resultado, data } } = useCotizador();

    const [nombreMarca] = useMemo(() => MARCAS.filter(marca => marca.id === data.marca), [resultado]);
    const [nombrePlan] = useMemo(() => PLANES.filter(marca => marca.id === data.plan), [resultado]);
    const yearRef = useRef(data.year);
  
    if(resultado === '') return null;

    return (
    <div className="py-2 bg-gray-100 text-center mt-5 shadow">
      <h2 className="text-gray-500 font-black text-3xl">
         Resumen 
      </h2>
      <p className="py-2">
        <span className="font-bold">
          Marca:
        </span> { " " }
        { nombreMarca?.nombre }
      </p>
      <p className="py-2">
        <span className="font-bold">
          Plan:
        </span> { " " }
        { nombrePlan?.nombre }
      </p>
      <p className="py-2">
        <span className="font-bold">
          Año del Auto:
        </span> { " " }
        { yearRef.current }
      </p>
      <p className="py-2">
        <span className="font-bold">
          Costo:
        </span> { " " }
        { resultado }
      </p>
    </div>
  )
}

export { Resultado };