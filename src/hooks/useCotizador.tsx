//Hooks
import { useContext } from 'react'

//Context
import { AppContext } from '../context/AppContext';

//Interfaces
import { IAppContext } from './../interfaces/AppContext.interface';

const useCotizador = () => {
  return useContext(AppContext) as IAppContext;
}

export { useCotizador };