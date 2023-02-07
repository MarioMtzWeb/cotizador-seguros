
//Context
import { AppContext, AppContextProvider } from './../context/AppContext';

//Components
import { AppSeguro } from "../components/AppSeguro"

function App() {

  return (
    <AppContextProvider>
      <AppSeguro/>
    </AppContextProvider>
  )
}

export default App
