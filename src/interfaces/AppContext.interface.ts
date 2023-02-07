import { IData } from './data.interface';

interface IAppContext {
    state: {
        data: IData,
        resultado: string;
        cargando: boolean;
    },
    stateUpdaters: {
        handleChangeData: () => void;
        cotizarSeguro: () => string;
    },
}

export type { IAppContext };